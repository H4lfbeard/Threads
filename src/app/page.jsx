import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";

export default function Index() {
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

  return (
    <ConnectedLayout>
      <section className="w-[70%] mx-auto mt-10">
        {/* New post */}

        {/* Posts */}
        {posts.map((post) => (
          <article key={post._id}>
            <Post post={post} />
          </article>
        ))}
      </section>
    </ConnectedLayout>
  );
}
