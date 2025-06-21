import Link from "next/link";

export default function Navbar() {
  return (
    <section className="absolute w-full h-full ">
      <nav className={`flex justify-between items-center gap-4 py-4 md:px-25 font-semibold shadow-sm shadow-foreground/20`}>
        <span className="font-bold text-lg">Helart Logo</span>
        <div className="flex justify-center gap-10">
          <Link 
            href={'#'}
            className="hover:ring-foreground hover:ring-2 transition-all duration-150 px-5 py-2 rounded-md"
          >
            Dashboard
          </Link>
          <Link 
            href={'#'}
            className="hover:ring-foreground hover:ring-2 transition-all duration-150 px-5 py-2 rounded-md"
          >
            Support
          </Link>
        </div>
        <Link
          href={'#'}
          className="px-5 py-2 rounded-xl bg-foreground text-background text-lg font-normal
          hover:bg-dark-foreground"
        >
          Login
        </Link>
      </nav>
    </section>
  );
}