import Background from "@/components/Background";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section id="hero" className="h-screen flex flex-col justify-center gap-8">
        <Background />

        <div className="w-full flex flex-col gap-4 justify-center items-center px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold ">Showcase Your Art, Seamlessly</h1>
          <p className="md:text-xl">
            Build your own stunning portfolio at <span className="font-semibold">helart.art/yourname</span> &ndash; fast, simple, and fully yours.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 rounded-md">
          <Button 
            child={'Get Started'}
            className={'border-transparent bg-foreground text-background hover:bg-dark-foreground '}
          />
        </div>
      </section>
    </main>
  );
}
