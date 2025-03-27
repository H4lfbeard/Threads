import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className="text-center font-bold text-white text-xl">
        Comment souhaitez-vous utiliser Threads ?
      </h1>
      <article className="mt-5 w-[50%] mx-auto">
        {/* Signup @ Signin */}
        <Link href="/login/signup">
          <section className="auth-method">
            <h2 className="font-bold text-white">
              S'inscrire ou se connecter avec une adresse email
            </h2>
            <p className="text-threads-gray-light mt-4">
              Connectez-vous ou créez un profil Threads avec une adresse email.
              Cela vous permettra de publier du contenu et d'intéragir sur
              Threads
            </p>
          </section>
        </Link>

        <Link href="/login/pass">
          <section className="auth-method mt-5">
            <h2 className="font-bold text-white">Utiliser sans profil</h2>
            <p className="text-threads-gray-light mt-4">
              Vous pouvez naviguez dans Threads sans profil, mais vous ne
              pourrez pas intéragir avec du contenu ni en publier.
            </p>
          </section>
        </Link>
      </article>
    </>
  );
}
