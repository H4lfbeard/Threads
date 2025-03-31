"use client";

import { createUser } from "@/actions/create-user";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Signup() {
  //Function
  const prepareCreateUser = async (FormData) => {
    const username = FormData.get("username");
    const pseudo = FormData.get("pseudo");
    const email = FormData.get("email");
    const password = FormData.get("password");

    console.log(username, pseudo, email, password);

    await createUser(username, pseudo, email, password);
  };

  return (
    <section className="w-[80%] md:w-[40%] mx-auto">
      <h1 className="title items-center gap-2">
        <Link href={"/login"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"
            ></path>
          </svg>
        </Link>
        Inscrivez-vous
      </h1>
      <article className="w-full mx-auto">
        <form action={prepareCreateUser}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            className="input"
            required
          />
          <input
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            className="input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="input"
            required
          />
          <Button>S'inscrire</Button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <div className="border-t border-threads-gray-light w-1/4"></div>
          <p className="text-white mx-4">ou</p>
          <div className="border-t border-threads-gray-light w-1/4"></div>
        </div>
        <Link href="/login/signin">
          <Button>Se connecter</Button>
        </Link>
      </article>
    </section>
  );
}
