"use client";

import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Profil() {
  //variable
  // Fake Data
  const posts = [
    {
      _id: "1",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Johndoe",
      profile: "/picture.png",
      link: "https://www.threads.net",
    },
    {
      _id: "2",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Johndoe",
      profile: "/picture.png",
      link: "https://www.threads.net",
    },
    {
      _id: "3",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Johndoe",
      profile: "/picture.png",
      link: "https://www.threads.net",
    },
    {
      _id: "4",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Johndoe",
      profile: "/picture.png",
      link: "https://www.threads.net",
    },
    {
      _id: "5",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Johndoe",
      profile: "/picture.png",
      link: "https://www.threads.net",
    },
  ];
  const params = useParams();
  const pseudo = params.pseudo.slice(3);

  return (
    <ConnectedLayout>
      <section className="mt-10 w-[70%] mx-auto text-white">
        {/* INFOS */}
        <article className="flex justify-between gap-4">
          {/* DATA */}
          <div>
            <h1 className="text-3xl font-semibold">{pseudo}</h1>
            <p className="text-threads-gray-light mt-2">@{pseudo}</p>
            <p className="mt-5 whitespace-pre-line">-</p>
            <p className="mt-5 text-blue-500 hover:text-blue-400 duration-200">
              <a href={params.link} target="_blank">
                Mon site
              </a>
            </p>
          </div>
          {/* PHOTO PROFIL */}
          <div>
            <Image
              src="/picture.png"
              alt="user"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
        </article>
        {/* TABS */}
        <article className="flex mt-10">
          {/* THREADS */}
          <div className="flex-1 border-b border-white pb-4 px-4 text-center hover:text-white">
            Threads
          </div>
          {/* RESPONSES */}
          <div className="flex-1 border-b border-threads-gray-light hover:border-white pb-4 px-4 text-center text-threads-gray-light hover:text-white duration-200 cursor-pointer">
            Réponses
          </div>
          {/* REPOSTS */}
          <div className="flex-1 border-b border-threads-gray-light hover:border-white pb-4 px-4 text-center text-threads-gray-light hover:text-white duration-200 cursor-pointer">
            Republications
          </div>
        </article>
        {/* POSTS */}
        <article>
          {posts.map((post) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))}
        </article>
      </section>
    </ConnectedLayout>
  );
}
