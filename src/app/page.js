import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section id="hero" className=" h-screen">
        <Background />

        <div className="w-full h-full flex flex-col gap-4 justify-center items-center px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold ">Showcase Your Art, Seamlessly</h1>
          <p className="md:text-xl">
            Build your own stunning portfolio at <span className="font-semibold">helart.art/yourname</span> &ndash; fast, simple, and fully yours.
          </p>
        </div>
      </section>
    </main>
  );
}
