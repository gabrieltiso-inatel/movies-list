import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-4/5 text-center mt-20">
      <h1 className="text-3xl font-semibold mb-8">Welcome to the Movies List!</h1>
      
      <Link href="/movies" key="movies">
        <p className="text-blue-500 underline text-lg">Check out the movies!</p>
      </Link>
    </div>
  );
}

