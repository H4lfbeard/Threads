import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";

export default function Search() {
  return (
    <ConnectedLayout>
      <section className="mt-10 w-[70%] mx-auto">
        <form>
          <input type="search" placeholder="rechercher" className="input" />
          {/* RESULTS */}
          <p className="text-center text-threads-gray-light mt-32">
            Recherchez des profils à découvrir
          </p>
        </form>
      </section>
    </ConnectedLayout>
  );
}
