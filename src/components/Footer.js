
import React from "react";

export default function Footer() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="mailto:mgmedrano0203@gmail.com" className="ml-3 text-xl">
            Email Me
          </a>
        </a> */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="" className="mr-5 hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mgmedrano/" className="mr-5 hover:text-white">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/17267871/mike-medrano?tab=profile" className="mr-5 hover:text-white">
            Stack Overflow
          </a>
        </nav>

      </div>
    </header>
  );
}