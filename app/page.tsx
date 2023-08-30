import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-300 w-screen h-screen overflow-y-auto">
      <div className="flex flex-col w-3/4 h-full mx-auto bg-base-300">
        <div className="flex flex-row w-full h-auto ">
          <div className="w-1/6 flex flex-col">
            <Image
              className="mx-auto"
              src="/images/LogoV5.svg"
              alt="Logo"
              width="100"
              height="100"
            />
            <a href="https://github.com/Ejayz" target="_blank">
              <Image
                className="mx-auto p-6"
                alt="github"
                src="/images/github.png"
                width={100}
                height={100}
              ></Image>
            </a>
            <a href="mailto: social.ejayztv@gmail.com">
              <Image
                className="mx-auto p-6"
                alt="github"
                src="/images/mail.png"
                width={100}
                height={100}
              ></Image>
            </a>
          </div>
          <div className="w-full  ">
            <div className="flex flex-col w-full">
              <h1 className="text-5xl font-bold font-mono text-primary">
                Ejayz
              </h1>
              <h2 className="mt-2 text-2xl font-sans">@Ejayz</h2>
              <p className="mt-4 text-xl font-mono">
                {">> Software Developer <<"}
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
}
