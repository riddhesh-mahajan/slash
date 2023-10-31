import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-12">
      <div className="flex items-center flex-1">
        <div className="flex flex-col pb-24 justify-items-center align-items-center max-h-min">
          <h1 className="font-bold leading-tight text-center text-8xl">
            <span className="text-blue-600">/</span>Slash Admin{" "}
            {process.env.NODE_ENV}
          </h1>

          <p>{JSON.stringify(process.env)}</p>

          <p className="mt-4 text-xl text-center text-gray-500">
            Admin dashboard for Slash. <br />
            Login to manage your site.
          </p>

          <div className="flex justify-center">
            <Link href="/login">
              <button className="px-8 py-3 mt-6 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
