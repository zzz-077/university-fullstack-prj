import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="bg-white w-full h-full flex items-center dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-[url('/images/offline.png')] bg-no-repeat bg-center bg-contain opacity-[0.07]"></div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#3b82f6] drop-shadow-[#ffffff]">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-400">
            Sorry, we can't find that page. You'll find lots to
            explore on the home page.{" "}
          </p>
          <Link
            to="/"
            class="inline-flex text-white bg-[#2563eb] hover:bg-[#1e40af] focus:ring-2 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#1e3a8a] my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
