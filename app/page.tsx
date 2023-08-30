import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-300 w-screen h-screen overflow-y-auto">
      <div className="flex flex-row w-3/4 mx-auto h-auto ">
        <div className="w-1/6 flex flex-col">
          <Image
            className="mx-auto"
            src="/images/LogoV5.svg"
            alt="Logo"
            width="100"
            height="100"
          />
          <a
            data-tip="Visit Github Page"
            className="tooltip tooltip-right mx-auto px-6 py-2"
            href="https://github.com/Ejayz"
            target="_blank"
          >
            <Image
              alt="github"
              src="/images/github.png"
              width={40}
              height={40}
            ></Image>
          </a>

          <a
            data-tip="Email Me"
            className="tooltip tooltip-right mx-auto px-6 py-2"
            href="mailto: social.ejayztv@gmail.com"
          >
            <Image
              alt="github"
              src="/images/mail.png"
              width={40}
              height={40}
            ></Image>
          </a>
        </div>
        <div className="w-full  ">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl font-bold font-mono text-primary">Ejayz</h1>
            <h2 className="mt-2 text-2xl font-sans">@Ejayz</h2>
            <p className="mt-4 text-xl font-mono">
              {">> Software Developer <<"}
            </p>
          </div>
          <hr />
          <div className="flex flex-col w-full">
            <p className="mt-2 text-lg font-mono">
              Hi i am Ejayz . I am a software developer and a streamer. I
              resides on the Philippines. I am a full stack developer mostlty
              using NextJs to create a front end web software. I also uses
              Prisma and have basic knowledge of SupaBase. My hobby consist of
              coding and computer gaming.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-3/4 mx-auto mt-20 align-middle h-auto ">
        <div className="w-1/6 flex flex-col">
          <a
            data-tip="Click to go to github repository list."
            className="tooltip tooltip-right mx-auto px-4 py-2"
            href=""
          >
            <Image
              alt="Projects"
              src="/images/project.png"
              width={40}
              height={40}
            ></Image>
          </a>
          <h1 className="text-4xl w-10 mx-auto rotate-90 py-10 font-bold font-mono text-[#216778]">
            Projects
          </h1>
        </div>
        <div className="w-full  ">
          <div className="flex flex-col w-full">
            <p className="mt-4 text-xl font-mono mb-4">
              Bellow are some of my projects that i have done.
            </p>
          </div>

          <div className="w-full flex flex-col  px-10 py-8 mx-auto h-auto bg-neutral rounded-lg shadow-xl">
            <div id="Project Title" className="flex flex-row">
              <a
                href="https://github.com/Ejayz/webbased-piggery-management"
                target="_blank"
              >
                <h1 className="text-xl hover:underline  font-mono">
                  webbased-piggery-management
                </h1>
              </a>

              <div className="px-4  my-auto">
                <span className="indicator-item badge  h-6  text-base badge-primary">
                  Feautured
                </span>
              </div>
            </div>
            <div className="w-full text-left">
              <span className="font-mono font-base text-neutral-content font-bold">
                A school thesis project aim to help piggery owners to manage
                their piggery business. This Web-Based System is a full stack
                application that uses NextJs and Mysql as Database. It also
                paired with a mobile-based QR Code Scanner that uses Android
                Java to scan and display record of the pig.
              </span>
            </div>
          </div>
          <div className="w-full grid mt-4 gap-4 grid-cols-2">
            <div className="w-full flex flex-col  px-10 py-8 mx-auto h-auto bg-neutral rounded-lg shadow-xl">
              <div id="Project Title" className="flex flex-row">
                <a
                  href="https://github.com/Ejayz/westnile-faucetpay-paymentmanager"
                  target="_blank"
                >
                  <h1 className="text-xl hover:underline font-mono">
                    westnile-faucetpay-paymentmanager
                  </h1>
                </a>
              </div>
              <div className="w-full text-left">
                <span className="font-mono font-base text-neutral-content font-bold">
                  A web-based payment manager that uses faucetpay api to send
                  crypto currency to users.It tracks and displays the
                  transaction history of the user.It shows transperancy record
                  of the transaction.
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col  px-10 py-8 mx-auto h-auto bg-neutral rounded-lg shadow-xl">
              <div id="Project Title" className="flex flex-row">
                <a
                  href="https://github.com/Ejayz/hasura-docker-open-port"
                  target="_blank"
                >
                  <h1 className="text-xl hover:underline font-mono">
                    hasura-docker-open-port
                  </h1>
                </a>
              </div>
              <div className="w-full text-left">
                <span className="font-mono font-base text-neutral-content font-bold">
                  Hasura config file with postgres 15 and open 5432 port docker
                  file. This configuration helps to deploy hasura on a local
                  machine. It also reference the links on how to install
                  required software.
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col  px-10 py-8 mx-auto h-auto bg-neutral rounded-lg shadow-xl">
              <div id="Project Title" className="flex flex-row">
                <a
                  href="https://github.com/Ejayz/hasura-docker-open-port"
                  target="_blank"
                >
                  <h1 className="text-xl hover:underline font-mono">
                    mintme-rpc-web3js
                  </h1>
                </a>
              </div>
              <div className="w-full text-left">
                <span className="font-mono font-base text-neutral-content font-bold">
                  Mintme RPC using web3js. This is a simple web3js script that
                  uses mintme rpc to get the balance of the wallet address and
                  other processes like sending mintme token to another wallet
                  address.
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col  px-10 py-8 mx-auto h-auto bg-neutral rounded-lg shadow-xl">
              <div id="Project Title" className="flex flex-row">
                <a
                  href=" https://github.com/Ejayz/Class-Scheduling-System"
                  target="_blank"
                >
                  <h1 className="text-xl hover:underline font-mono">
                    Class-Scheduling-System
                  </h1>
                </a>
              </div>
              <div className="w-full text-left">
                <span className="font-mono font-base text-neutral-content font-bold">
                  A junior year project that aims to help the school to manage
                  their class schedule. This is a full stack application that
                  uses Java and Mysql to create a desktop application.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="flex flex-col w-3/4 mx-auto h-auto ">
        <hr className="w-full" />
        <div className="w-full h-12 my-4 flex flex-row">
          {" "}
          <div className="w-1/2 flex flex-row h-auto">
            <div className="px-4">
              <Image
                src={"/images/location-pin.png"}
                alt={"Location"}
                width={20}
                height={20}
              ></Image>
            </div>
            <span>Philippines</span>
          </div>
          <div className="w-1/2 flex flex-row h-auto">
            <div className="flex flex-row ml-auto mr-0 h-auto">
              <span className="">31/08/2023</span>
              <div className="px-4">
                <Image
                  src={"/images/time.png"}
                  alt={"Location"}
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
