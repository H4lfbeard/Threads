import { MongoClient } from "mongodb";
import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [
    Credentials(
      {
        name: "Credentials",
        credentials: {},

        async authorize(credentials) {
          const { email, password } = credentials;

          try {
            // Connect to the MongoDB cluster
            const client = await MongoClient.connect(process.env.MONGODB_CLIENT);

            // Connect to the MONGODB database
            const db = client.db(process.env.MONGODB_DATABASE);

            //FIRST : Get the user linked to the email
            // SELECT the "users" collection
            let user = await db.collection("users").find({email}).limit(1).toArray();

            // If the email isnt used
            if (user.length === 0) {
              await client.close();

              throw new Error("Cet utilisateur n'existe pas");
            }

            // SECOND : verify the password
            const isPasswordValid = await bcrypt.compare(password, user[0].password);

            // If the password isnt valid
            if (!isPasswordValid) {
              await client.close();

              throw new Error("Le mot de passe est incorrect");
            }

            // THIRD : Our user is authenticated
            // Format user  DONT ADD SENSITIVE DATA LIKE PASSWORD 
            user = user.map(user => ({
              _id: user._id.toString(),
              username: user.username,
              pseudo: user.pseudo,
              email: user.email,
              profile: user.profile
            }))[0];

            await client.close();

            return user;
          }
          catch(e) {
            throw new Error(e.message);
            
          }

        }
      }
    )
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login/signin",
  },
  callbacks: {
    async jwt({token, user}) {
      user && (token.user = user);
      return token;
    },
    async session({session, user, token}) {
      session.user = token.user;
      return session;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};