import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 right-0 bottom-0 aspect-[1785/510] z-0">
          <Image
            src="/welcome.webp"
            alt="welcome"
            fill
            className="object-containt"
          />
        </div>
        <section className="flex-1 z-2 pt-[19vw]">{children}</section>
        <Footer />
      </main>
    </>
  );
}
