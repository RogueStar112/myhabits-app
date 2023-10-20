import Image from "next/image";
import Link from "next/link";

import Header from "./header";

export default function Page() {
  return (
    <section className="font-montserrat max-w-5xl mx-auto bg-[#333333] text-white">
      <Header />

      <main>
        <section className="hero flex /h-[48rem] md:h-[880px] justify-center">
          <div className="hero-text-container max-w-xl flex flex-col">
            <section className="my-auto">
              <h2 className="text-2xl place-self-center">
                Develop <span className="text-yellow-400">productive</span>{" "}
                habits that lead to{" "}
                <span className="text-yellow-400">success.</span>
              </h2>
              <p className="text-center text-lg place-self-center">
                MyHabits is an app dedicated towards productivity.
                <br />
                Increase or reduce habits that are important to you.
              </p>
            </section>
          </div>
        </section>

        <section id="offer" className="mt-6 text-center">
          <h2 className="mx-auto font-extrabold text-xl">WHAT WE OFFER</h2>

          <section
            id="offer-features"
            className="flex flex-col /[&>*]:mx-auto [&>*]:my-6 /max-w-xl mx-auto"
            alt-className="flex flex-col"
          >
            <section className="flex">
              <Image
                src="/images/clipboard.png"
                className="filter-icon"
                width={128}
                height={128}
                alt="clipboard"
              />
              <p className="grow text-center my-auto bg-gradient-to-r from-transparent via-green-700 to-transparent mx-4">
                <span className="text-2xl italic font-extrabold w-full">
                  Checklist Logging
                </span>
                <br />
                Get tasks done with your own personalized checklists.
              </p>
            </section>

            <section className="flex /[&>h3]:hover:flex duration-300">
              <Image
                src="/images/folder-management.png"
                className="filter-icon"
                width={128}
                height={128}
                alt="file management"
              />
              <p className="grow text-center my-auto place-content-center align-items-center bg-gradient-to-r from-transparent via-orange-700 to-transparent mx-4">
                <span className="text-2xl italic font-extrabold">
                  Task Categorization
                </span>
                <br />
                Categorize your tasks, creating Link neater way of managing
                them.
              </p>
            </section>

            <section className="flex">
              <Image
                src="/images/bar-chart.png"
                className="filter-icon"
                width={128}
                height={128}
                alt="bar chart"
              />

              <p className="grow text-center my-auto bg-gradient-to-r /h-20 from-transparent via-red-700 to-transparent mx-4">
                <span className="text-2xl italic font-extrabold">
                  Fine-Tuned Analysis
                </span>
                <br />
                With enough data, the app will gather trends.
              </p>
            </section>

            <section className="flex col-span-3">
              <Image
                src="/images/encryption.png"
                className="filter-icon"
                width={128}
                height={128}
                alt="bar chart"
              />

              <p className="grow text-center my-auto bg-gradient-to-r from-transparent via-blue-700 to-transparent mx-4">
                <span className="text-2xl italic font-extrabold">
                  Import & Export Data
                </span>
                <br />
                With a JSON system, you can upload your very own tasks, or use
                somebody else's setup!
              </p>
            </section>

            <section className="flex col-span-3">
              <Image
                src="/images/accessibility.png"
                className="filter-icon"
                width={128}
                height={128}
                alt="bar chart"
              />

              <p className="grow text-center my-auto bg-gradient-to-r from-transparent via-yellow-800 to-transparent mx-4">
                <span className="text-2xl italic font-extrabold">
                  Accessibility Features
                </span>
                <br />
                Want custom themes? We got them. Preset tasks? Absolutely.
                Different font family names? Yes.
              </p>
            </section>
          </section>
        </section>
      </main>

      <footer></footer>
    </section>
  );
}

// export default function Home() {
//   return (
//     <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
//       <div classNameName="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code classNameName="font-mono font-bold">src/app/page.js</code>
//         </p>
//         <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <Link
//             classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               classNameName="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </Link>
//         </div>
//       </div>

//       <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div classNameName="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <Link
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </Link>

//         <Link
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </Link>

//         <Link
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </Link>

//         <Link
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to Link shareable URL with Vercel.
//           </p>
//         </Link>
//       </div>
//     </main>
//   )
// }
