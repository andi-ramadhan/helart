import Link from "next/link";

export default function Button({ child, to = '#', className, optIcon, iconDiv }) {

  return(
    <Link href={to} className={`z-1 border-2 text-lg min-w-38 min-h-12 px-5 py-2 flex items-center justify-center gap-3 rounded-xl cursor-pointer transition-all duration-150 ${className}`}>
        {child}
        <div className={iconDiv}>{optIcon}</div>
    </Link>
  );
}