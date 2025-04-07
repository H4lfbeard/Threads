"use client";

import Button from "@/components/Button/Button";
import { checkEmail } from "@/utils/check-emailsyntax";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

export default function Signin() {
  // Variable
  const router = useRouter();

  // Function
  const prepareLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    // If a field is empty
    if (!email || !password) {
      return toast.error("veuillez remplir tous les champs");
    }

    // Check if emails is valid
    if (!checkEmail(email)) {
      return toast.error("Veuillez entrer un email valide");
    }

    // Signin the user
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.error) {
        return toast.error(response.error);
      }
    } catch (error) {
      return toast.error(error.message);
    }

    // Success
    toast.success("Vous êtes connecté");

    // Redirect
    router.replace("/");
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
        Connectez-vous
      </h1>
      <article className="w-full mx-auto">
        <form action={prepareLogin}>
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
          <Button formButton>Se connecter</Button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <div className="border-t border-threads-gray-light w-1/4"></div>
          <p className="text-white mx-4">ou</p>
          <div className="border-t border-threads-gray-light w-1/4"></div>
        </div>
        <Link href="/login/signup">
          <Button>S'inscrire</Button>
        </Link>
      </article>
    </section>
  );
}
