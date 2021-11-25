import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { resumes } from "../data";

export default function Resumes() {
  return (
    <section id="resumes">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <div className="flex flex-wrap m-4">
          {resumes.map((resume) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                <a
                href={resume.link}
                className="inline-flex text-white bg-green-500 border-0 py-5 px-10 focus:outline-none hover:bg-green-600 rounded text-lg"> {resume.name}
                  </a>
                  <img
                    alt=""
                    src={resume.link}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}