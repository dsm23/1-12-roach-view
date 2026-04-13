import type { FunctionComponent } from "react";
import { buttonVariants } from "~/components/ui/button";

const Home: FunctionComponent = () => (
  <>
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Vite Enterprise Boilerplate
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Jumpstart your enterprise project with our feature-packed,
            high-performance Vite boilerplate! Experience rapid UI development,
            AI-powered code reviews, and an extensive suite of tools for a
            smooth and enjoyable development process.
          </p>

          <a
            href="https://github.com/dsm23/1-12-roach-view"
            className={buttonVariants({ size: "lg", className: "mr-3" })}
          >
            Get started
          </a>
          <a
            href="https://vercel.com/new/git/external?repository-url=https://github.com/dsm23/1-12-roach-view/"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Deploy Now
          </a>
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
        <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          Placeholder
        </div>
      </div>
    </section>
  </>
);

export default Home;
