import React from "react";
import { GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs";
import {ImStackoverflow} from "react-icons/im"

export default function Footer() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/mgmedrano" className="mr-5 hover:text-white">
          < GoMarkGithub />
          </a>

          <a href="https://www.linkedin.com/in/mgmedrano/" className="mr-5 hover:text-white">
            <BsLinkedin />
          </a>
          <a href="https://stackoverflow.com/users/17267871/mike-medrano?tab=profile" className="mr-5 hover:text-white">
            <ImStackoverflow />
          </a>
        </nav>

      </div>
    </header>
  );
}