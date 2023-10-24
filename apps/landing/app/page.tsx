import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/signup">
          <p className="cursor-pointer fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Create New Account
          </p>
        </Link>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Riddhesh Mahajan
          </a>
        </div>
      </div>

      <div className="flex flex-1 items-center">
        <div className="flex flex-col justify-items-center align-items-center max-h-min pb-24">
          <h1 className="text-8xl font-bold leading-tight text-center">
            <span className="text-blue-600">/</span>Slash
          </h1>

          <p className="mt-4 text-xl text-center text-gray-500">
            Level up your skills with Slash, the tool that
            <br /> simplifies DSA problem-solving.
          </p>

          <div className="flex justify-center">
            <Link href="/login">
              <button className="mt-6 bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
