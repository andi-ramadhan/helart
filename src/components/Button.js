import Link from "next/link";

export default function Button({ child, to = '#', className }) {

  return(
    <Link href={to} className={`z-1 border-2 text-lg min-w-38 min-h-12 px-3 py-2 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-150 ${className}`}>
        {child}
    </Link>
  );
}