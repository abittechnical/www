import { ContentPlaceholder } from "@/components/layout/content-placeholder";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Your content */}
          <ContentPlaceholder className="h-96" />
        </div>
      </main>
    </div>
  );
}
