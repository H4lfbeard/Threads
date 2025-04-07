// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


const { PHRASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (env) => {
  if (env === PHRASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_CLIENT: "mongodb+srv://tomtomhumbert:RrImOHyVVdmeCDjx@threadsdb.tbsprxo.mongodb.net/?retryWrites=true&w=majority&appName=threadsDB",
        MONGODB_DATABASE: "threads",
        NEXTAUTH_SECRET: "azerty",
        NEXTAUTH_URL: "http://localhost:3000"
      },
    };
  }

else {
  return {
    env: {
      MONGODB_CLIENT: "mongodb+srv://tomtomhumbert:RrImOHyVVdmeCDjx@threadsdb.tbsprxo.mongodb.net/?retryWrites=true&w=majority&appName=threadsDB",
      MONGODB_DATABASE: "threads",
      NEXTAUTH_SECRET: "azerty",
      NEXTAUTH_URL: "http://localhost:3000"
    },
  };
}
}