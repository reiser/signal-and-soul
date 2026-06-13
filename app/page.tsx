import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen w-full items-center justify-center bg-indigo-700 px-6 py-20 font-sans">
      <Image
        className="invert"
        src="/next.svg"
        alt="Next.js logo"
        width={120}
        height={24}
        priority
      />
      <div className="mt-12 flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Signal &amp; Soul
        </h1>
        <p className="max-w-md text-lg leading-8 text-sky-50">
          Looking for a starting
          point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-semibold text-white underline underline-offset-4"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-semibold text-white underline underline-offset-4"
          >
            Learning
          </a>{" "}
          center.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 text-white transition-colors hover:bg-zinc-800 md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-white/40 px-5 text-white transition-colors hover:bg-white/10 md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </div>
  );
}
