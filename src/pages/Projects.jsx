import React from "react";
import Sidecard from "../components/Sidecard";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col lg:flex-row m-6 gap-6">
        <Sidecard />
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark lg:col-span-2 lg:p-10">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-dark dark:text-light lg:text-[24px] lg:leading-tight">
              Check Out My Latest
              <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-4 text-lg text-muted dark:text-light/70">
              I'm here to help if you're searching for a product designer to
              bring your idea to life or a design partner to help take your
              business to the next level.
            </p>
          </div>
          <div className="mt-10 lg:mt-14">
            <div className="mt-6 space-y-6">
              <div>
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 dark:bg-dark-2 md:p-6 xl:p-10">
                  <div className="relative aspect-5/4 overflow-hidden rounded">
                    <img
                      className="w-full rounded object-cover object-top transition"
                      alt="image"
                      src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png"
                      title="image"
                    />
                    <a
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                      href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                      <a
                        className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                        href="https://indistays.com/home"
                        target="_blank"
                      >
                        Indistays
                      </a>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                      SaaS App | UI UX Design
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:text-primary"
                    href="https://indistays.com/home"
                    target="_blank"
                  >
                    <span>Visit Site</span>
                    <svg
                      className="h-4 w-4 shrink-0"
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
              <div className="mt-[calc(1.5rem*calc(1-0))] mb-[calc(1.5rem*0)]">
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 dark:bg-dark-2 md:p-6 xl:p-10">
                  <div className="relative aspect-5/4 overflow-hidden rounded">
                    <img
                      className="w-full rounded object-cover object-top transition"
                      alt="image"
                      src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png"
                      title="image"
                    />
                    <a
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                      href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                      <a
                        className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                        href="https://www.e8matrix.com/staging"
                        target="_blank"
                      >
                        Elev8 Matrix - US
                      </a>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                      Marketing Agency | Full Stack Development
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:text-primary"
                    href="https://www.e8matrix.com/staging"
                    target="_blank"
                  >
                    <span>Visit Site</span>
                    <svg
                      className="h-4 w-4 shrink-0"
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

              <div className="mt-[calc(1.5rem*calc(1-0))] mb-[calc(1.5rem*0)]">
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 dark:bg-dark-2 md:p-6 xl:p-10">
                  <div className="relative aspect-5/4 overflow-hidden rounded">
                    <img
                      className="w-full rounded object-cover object-top transition"
                      alt="image"
                      src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png"
                      title="image"
                    />
                    <a
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                      href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                      <a
                        className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                        href="https://www.e8matrix.com/staging"
                        target="_blank"
                      >
                        Elev8 Matrix - US
                      </a>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                      Marketing Agency | Full Stack Development
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:text-primary"
                    href="https://www.e8matrix.com/staging"
                    target="_blank"
                  >
                    <span>Visit Site</span>
                    <svg
                      className="h-4 w-4 shrink-0"
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
            <div className="pagination-tab flex justify-center m-6">
              <pagination-controls className="my-custom-pagination mt-12">
                <pagination-template>
                  <nav aria-label="Pagination" role="navigation">
                    <ul className="ngx-pagination flex gap-2 list-none m-0 p-0 ml-0 mb-4">
                      <li className="pagination-previous disabled inline-block py-2 px-3 text-gray-400 cursor-default rounded-md">
                        <span aria-disabled="true">Previous</span>
                      </li>
                      <li className="small-screen hidden border border-[#877EFF] rounded-md px-3 py-2">
                        1 / 6
                      </li>
                      <li className="current inline-block py-2 px-3 text-white cursor-default rounded-md border border-[#877EFF] bg-[#877EFF]">
                        <span aria-live="polite">
                          <span className="show-for-sr">You're on page </span>
                          <span>1</span>
                        </span>
                      </li>
                      <li className="inline-block border border-[#877EFF] rounded-md px-3 py-2 cursor-pointer">
                        <a tabIndex="0">
                          <span className="show-for-sr">page </span>
                          <span>2</span>
                        </a>
                      </li>
                      <li className="inline-block border border-[#877EFF] rounded-md px-3 py-2 cursor-pointer">
                        <a tabIndex="0">
                          <span className="show-for-sr">page </span>
                          <span>3</span>
                        </a>
                      </li>
                      <li className="inline-block border border-[#877EFF] rounded-md px-3 py-2 cursor-pointer">
                        <a tabIndex="0">
                          <span className="show-for-sr">page </span>
                          <span>4</span>
                        </a>
                      </li>
                      <li className="inline-block border border-[#877EFF] rounded-md px-3 py-2 cursor-pointer">
                        <a tabIndex="0">
                          <span className="show-for-sr">page </span>
                          <span>5</span>
                        </a>
                      </li>
                      <li className="inline-block border border-[#877EFF] rounded-md px-3 py-2 cursor-pointer">
                        <a tabIndex="0">
                          <span className="show-for-sr">page </span>
                          <span>6</span>
                        </a>
                      </li>
                      <li className="pagination-next inline-block py-2 px-3 cursor-pointer rounded-md">
                        <a tabIndex="0">Next</a>
                      </li>
                    </ul>
                  </nav>
                </pagination-template>
              </pagination-controls>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
