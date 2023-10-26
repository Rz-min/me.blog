//
import siteMetadata from "@/data/siteMetadata";
import About from "./about/page";

function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="font-extrabold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-8xl md:leading-14">
            Hi,👋 I'm {siteMetadata.author}
          </h1>
        </div>
      </div>
      <About />
    </>
  );
}

export default async function Page() {
  return <Home />;
}
