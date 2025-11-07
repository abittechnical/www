import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const styles = ["fixed inset-x-0 top-0 z-10 border-b"];

export const SiteHeader = () => {
  return (
    <header className={cn(styles)}>
      <div className="bg-background">
        <nav className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="/abt-logomark.svg"
              alt=""
              className="h-8 w-auto dark:hidden"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
              className="h-8 w-auto not-dark:hidden"
            />
          </a>
          {/* links */}
          <div className="flex gap-x-12 font-mono">
            <a href="#" className="text-sm/6  text-gray-900 dark:text-white">
              Articles
            </a>
            <a href="#" className="text-sm/6  text-gray-900 dark:text-white">
              TLDR
            </a>
            <a href="#" className="text-sm/6  text-gray-900 dark:text-white">
              Decks
            </a>
            <a href="#" className="text-sm/6  text-gray-900 dark:text-white">
              Open Source
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};
