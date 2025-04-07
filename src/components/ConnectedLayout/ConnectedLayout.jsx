"use client";

import Link from "next/link";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "../Button/Button";
import { useSession } from "next-auth/react";

export default function ConnectedLayout({ children }) {
  // Variable
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(session);

  return (
    <section className="flex flex-col min-h-screen px-5">
      {/* HEADER */}
      <header className="flex items-center justify-between gap-5 py-4">
        {/* NAVIGATION */}
        <nav className="absolute left-0 top-0 right-0 py-7 flex justify-center z-0">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-10 h-10 hover:bg-threads-gray-dark duration-200 p-1 rounded-xl ${
                pathname === "/" ? "text-white" : "text-threads-gray-light"
              }`}
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M224 120v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v52a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a16 16 0 0 1 4.69-11.31l80-80a16 16 0 0 1 22.62 0l80 80A16 16 0 0 1 224 120"
              ></path>
            </svg>
          </Link>
          <Link href="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-10 h-10  hover:bg-threads-gray-dark duration-200 p-1 rounded-xl ${
                pathname === "/search"
                  ? "text-white"
                  : "text-threads-gray-light"
              }`}
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
              ></path>
            </svg>
          </Link>
        </nav>
        {/* LOGO */}
        <Image src="/logo.png" alt="Threads" width={40} height={40} />
        {/* BOUTON */}

        {session?.user?.email ? (
          <Link href="/login" className="z-3">
            <Button
              withoutMarginTop
              className="hover:cursor-pointer"
              alertOnClick={() => signOut()}
            >
              Se déconnecter
            </Button>
          </Link>
        ) : (
          <Link href="/login" className="z-3">
            <Button withoutMarginTop className="hover:cursor-pointer">
              Se connecter
            </Button>
          </Link>
        )}
      </header>
      {/* CONTENT */}
      <div className="flex-1">{children}</div>

      {/* FOOTER */}
      <Footer />
    </section>
  );
}
