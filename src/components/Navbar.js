export default function Navbar() {
  return (
    <section className="absolute w-full h-full ">
      <nav className="flex justify-between items-center gap-4 py-4 md:px-25 font-semibold shadow-sm">
        <span className="font-bold text-lg">Helart Logo</span>
        <div className="flex justify-center gap-20">
          <span>Dashboard</span>
          <span>Support</span>
        </div>
        <span 
          className="px-5 py-2 rounded-md bg-foreground text-background text-lg font-normal
          hover:bg-dark-foreground"
        >
          Login
        </span>
      </nav>
    </section>
  );
}