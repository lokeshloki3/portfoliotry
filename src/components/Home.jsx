import React from "react";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 m-6 border-0 border-solid border-gray-200 box-border text-gray-900">
        <app-user-card>
          <div className="right-0 top-[100px] lg:sticky rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark">
            <div className="aspect-6/4 overflow-hidden rounded-lg bg-light text-center dark:bg-dark-2">
              <img
                className="dark:hidden inline-block h-full w-full scale-110 object-contain object-bottom"
                alt="profile_image"
                src="https://aashish-bhagwat.creativehand.co.in/assets/profile_landscape_ch.png"
                title="image"
              />
              <img
                className="hidden dark:inline-block h-full w-full scale-110 object-contain object-bottom"
                alt="profile_image"
                src="https://aashish-bhagwat.creativehand.co.in/assets/profile_landscape_ch_blck.png"
                title="image"
              />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-semibold dark:text-light">
                Aashish Bhagwat 👋
              </h1>
              <p className="mt-2 text-gray-500 dark:text-light/70">
                A Passionate{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Full Stack Developer
                </span>{" "}
                🖥️ &{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Product Designer
                </span>{" "}
                having{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  7 years
                </span>{" "}
                of Experiences in 20+ Technologies so far.
              </p>
              <div className="mt-6 flex gap-2">
                <a
                  id="call-btn"
                  className="shadow cursor-pointer inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    className="h-6 w-6 fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                  </svg>
                  <span className="border-0 border-solid border-gray-200 box-border">
                    Call
                  </span>
                </a>
                <a
                  id="wa-btn"
                  className="shadow cursor-pointer hover:bg-light inline-flex items-center gap-x-2 rounded-lg border border-light px-6 py-4 font-medium transition border-[1px] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-1 dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
                  href="https://api.whatsapp.com/send?phone=+919403733265&text=Hello,%20I%20want%20to%20send%20you%20a%20message."
                  target="_blank"
                >
                  <i className="fa fa-whatsapp text-xl"></i>
                </a>

                <button
                  className="shadow js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-1 dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
                  type="button"
                >
                  <svg
                    className="h-6 w-6 fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
                  <span>Email</span>
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://www.facebook.com/aashish.bhagwat.5/"
                  target="_blank"
                  title="facebook"
                >
                  <i className="text-xl fa fa-facebook-square" />
                </a>

                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://www.instagram.com/aashu.bhagwat/"
                  target="_blank"
                  title="instagram"
                >
                  <i className="text-xl fa fa-instagram" />
                </a>

                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://github.com/Aashishb4u"
                  target="_blank"
                  title="github"
                >
                  <i className="text-xl fa fa-github" />
                </a>

                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://www.linkedin.com/in/aashish-bhagwat/"
                  target="_blank"
                  title="linkedIn"
                >
                  <i className="text-xl fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </app-user-card>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-dark dark:shadow-dark">
            <h2 className="relative bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-dark dark:text-light">
              Work Experience
            </h2>
            <div className="max-h-[250px] space-y-4 overflow-hidden pb-6 pt-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-slate-500 scrollbar-track-transparent">
              <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                <div className="flex justify-between gap-4">
                  <p className="flex items-center mt-1 w-1/4 text-sm font-medium text-muted dark:text-light/70">
                    2022 - 2025
                  </p>
                  <div className="w-3/4 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white">
                      <img
                        className="w-10 mix-blend-multiply rounded object-cover"
                        alt="logo_image"
                        src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand-logo.png"
                        title="image"
                      />
                    </div>
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        CreativeHand
                      </h6>
                      <p className="text-sm text-muted">CTO | Co-Founder</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="flex items-center mt-1 w-1/4 text-sm font-medium text-muted dark:text-light/70">
                    2022 - 2023
                  </p>
                  <div className="w-3/4 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white">
                      <img
                        className="w-10 mix-blend-multiply rounded object-cover"
                        alt="logo_image"
                        src="https://www.wipro.com/content/dam/nexus/staticsites/homepage/header/Wipro_Primary%20Logo_Color_RGB.svg"
                        title="image"
                      />
                    </div>
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Wipro
                      </h6>
                      <p className="text-sm text-muted">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="flex items-center w-1/4 mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2017 - 2022
                  </p>
                  <div className="w-3/4 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white">
                      <img
                        className="mix-blend-multiply w-10 rounded object-cover"
                        alt="brand"
                        src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/tudip.png"
                        title="image"
                      />
                    </div>
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Tudip Technologies
                      </h6>
                      <p className="text-sm text-muted">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark">
            <h2 className="text-2xl font-semibold dark:text-light">
              My Expert Area
            </h2>
            <div className="mt-6 grid grid-cols-4 gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Angular"
                    src="https://cdn.simpleicons.org/angular/dd1100"
                    title="Angular"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Angular
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="React Js"
                    src="https://cdn.simpleicons.org/react/61DAFB"
                    title="React Js"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  React Js
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Node Js"
                    src="https://cdn.simpleicons.org/node.js/5FA04E"
                    title="Node Js"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Node Js
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Javascript"
                    src="https://cdn.simpleicons.org/javascript/FEC119"
                    title="Javascript"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Javascript
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Laravel"
                    src="https://cdn.simpleicons.org/laravel/FF2D20"
                    title="Laravel"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Laravel
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Ionic"
                    src="https://cdn.simpleicons.org/ionic/3880FF"
                    title="Ionic"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Ionic
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Github"
                    src="https://cdn.simpleicons.org/github/000000"
                    title="Github"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Github
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="HTML"
                    src="https://cdn.simpleicons.org/html5/E34F26"
                    title="HTML"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  HTML
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="CSS"
                    src="https://cdn.simpleicons.org/css3/1572B6"
                    title="CSS"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  CSS
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="JQuery"
                    src="https://cdn.simpleicons.org/jquery/0769AD"
                    title="JQuery"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  JQuery
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Mongo DB"
                    src="https://cdn.simpleicons.org/mongodb/47A248"
                    title="Mongo DB"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Mongo DB
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="NGINX"
                    src="https://cdn.simpleicons.org/nginx/009639"
                    title="NGINX"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  NGINX
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="PWA"
                    src="https://cdn.simpleicons.org/pwa/5A0FC8"
                    title="PWA"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  PWA
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Wordpress"
                    src="https://cdn.simpleicons.org/wordpress/21759B"
                    title="Wordpress"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Wordpress
                </p>
              </div>

              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img
                    className="h-8 object-cover"
                    alt="Figma"
                    src="https://cdn.simpleicons.org/figma/F24E1E"
                    title="Figma"
                  />
                </div>
                <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                  Figma
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold dark:text-light">
              Recent Projects
            </h2>
            <a
              className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
              href="https://aashish-bhagwat.creativehand.co.in/works"
            >
              <span>All Projects</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
              </svg>
            </a>
          </div>
          <div className="mt-6 space-y-6">
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png"
                  title="image"
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
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
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow-sm">
                  <a
                    className="border-b border-transparent text-primary transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://indistays.com/home"
                    target="_blank"
                  >
                    Indistays
                  </a>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-[6/4] overflow-hidden rounded-t-lg">
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
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
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow-sm">
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://www.e8matrix.com/staging"
                    target="_blank"
                  >
                    Elev8 Matrix - US
                  </a>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-[6/4] overflow-hidden rounded-t-lg">
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/frylow_banner.png"
                  title="image"
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/frylow_banner.png"
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
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://frylowstore.com/"
                    target="_blank"
                  >
                    Frylow Web Store
                  </a>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-[6/4] overflow-hidden rounded-t-lg">
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/infix_banner.png"
                  title="image"
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/infix_banner.png"
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
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://infixlogistics.com/"
                    target="_blank"
                  >
                    Infix Logistics | E-commerce
                  </a>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-[6/4] overflow-hidden rounded-t-lg">
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/auto_commenter_banner.png"
                  title="image"
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/auto_commenter_banner.png"
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
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow-sm">
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://chromewebstore.google.com/detail/linkedin-auto-commenter/pagjldpgebbhhfekjghppoajdmdhbpee"
                    target="_blank"
                  >
                    LinkedIn Auto Commenter - Bot
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
