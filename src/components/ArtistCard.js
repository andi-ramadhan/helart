import Link from "next/link";

export default function ArtistCard({ artist }) {
  return (
    <Link
      href={`/${artist.slug}`}
      className="hover:scale-103 block rounded-2xl overflow-hidden border-3 hover:shadow-lg transition bg-white dark:bg-darkmode-background border-slate-200 dark:border-my-yellow"
    >
      <img
        src={artist.profileImage}
        alt={artist.name}
        className="w-full h-56 object-cover transition duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{artist.name}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {artist.bio}
        </p>
      </div>
    </Link>
  );
}
