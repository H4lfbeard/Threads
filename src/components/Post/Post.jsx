import Image from "next/image";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post">
      <div>
        <Image
          src={post.profile}
          alt="User"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>
      <section className="text-white w-full">
        <div className="flex items-center justify-between">
          <Link href={`/@${post.pseudo}`}>
            <p className="font-bold">{post.pseudo}</p>
          </Link>
          <p className="text-sm text-threads-gray-light">Il y a 1 heure</p>
        </div>
        <p className="mt-3 whitespace-pre-line">{post.content}</p>
      </section>
    </div>
  );
}
