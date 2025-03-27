"use client";

import Button from "@/components/Button/Button";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Pass() {
  // Variable
  const router = useRouter();

  // Function
  const onContinue = () => {
    // Generate a new cookie
    setCookie("guest", "true");
    // Redirect
    router.push("/");
  };
  return (
    <section className="w-[40%] mx-auto">
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
        Continuer en tant qu'invité
      </h1>
      <p className="text-threads-gray-light justify-center mt-4">
        Vous pourrez naviguer dans Threads sans profil, mais vous ne pourrez pas
        intéragir avec du contenu ni en publier.
      </p>
      <Button alertOnClick={onContinue}>Continuer</Button>
    </section>
  );
}
