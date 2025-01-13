import React from "react";
import Sidecard from "../components/Sidecard";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row m-6 gap-6">
      <Sidecard />
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[24px]">
              Hi, This is
              <span className="text-primary">Aashish Bhagwat</span> 👋
            </h2>
            <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-lg">
              A Passionate Full Stack Developer, Social Media Manager 🖥️ &
              Product Designer.
              <span className="font-semibold text-dark dark:text-white">
                co-founder of Creativehand
              </span>
              , with a track record of helping brands establish their online
              presence and handling social media, available for hire.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-14 border-0 border-solid border-gray-200 box-border">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-light lg:text-3xl m-0 leading-9">
            Education History
          </h3>
          <div className="mt-8 space-y-4 border-0 border-solid border-gray-200 box-border">
            <div className="group relative bg-gray-200 grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div>
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    Bachelor of Engineering (Computers)
                  </h5>
                  <p className="text-muted">2011 - 2016</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                  <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                </svg>
                <h5 className="font-medium leading-tight text-dark dark:text-light">
                  5.3
                </h5>
              </div>

              <div className="text-right">
                <a className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                  <span>JSPM College</span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-gray-200 grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div>
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    Bachelor of Engineering (Computers)
                  </h5>
                  <p className="text-muted">2011 - 2016</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                  <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                </svg>
                <h5 className="font-medium leading-tight text-dark dark:text-light">
                  5.3
                </h5>
              </div>

              <div className="text-right">
                <a className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                  <span>JSPM College</span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-gray-200 grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div>
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    Bachelor of Engineering (Computers)
                  </h5>
                  <p className="text-muted">2011 - 2016</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                  <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                </svg>
                <h5 className="font-medium leading-tight text-dark dark:text-light">
                  5.3
                </h5>
              </div>

              <div className="text-right">
                <a className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                  <span>JSPM College</span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
