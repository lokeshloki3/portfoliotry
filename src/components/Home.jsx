import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Sidecard from "./Sidecard";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 m-6 border-0 border-solid border-gray-200 box-border text-gray-900">
        <Sidecard/>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {/* Work Experience Section */}
          <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-dark dark:shadow-dark">
            <h2 className="relative bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-dark dark:text-light">
              Work Experience
            </h2>
            <div className="max-h-[250px] space-y-4 overflow-hidden pb-6 pt-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-slate-500 scrollbar-track-transparent">
              <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                {[
                  {
                    period: "Dec,2024 - Present",
                    companyLogo:
                      "https://www.saralgroups.com/static/assets/company-logo.png",
                    companyName: "Saral Tech",
                    role: "Web Development Intern",
                  },
                  {
                    period: "July,2017 - Sept,2018",
                    companyLogo:
                      "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_3.png?$568_N_PNG$",
                    companyName: "Samsung R and D Institues, Noida",
                    role: "Software Engineer",
                  },
                  {
                    period: "Dec,2016 - June,2017",
                    companyLogo:
                      "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_3.png?$568_N_PNG$",
                    companyName: "Samsung R and D Institues, Noida",
                    role: "Software Engg. Trainee",
                  },
                ].map((experience, index) => (
                  <div key={index} className="flex justify-between gap-4">
                    <p className="flex items-center mt-1 w-1/4 text-sm font-medium text-muted dark:text-light/70">
                      {experience.period}
                    </p>
                    <div className="w-3/4 flex items-center gap-3">
                      <div className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white">
                        <img
                          className="w-10 text-lg mix-blend-multiply rounded object-cover"
                          alt="logo_image"
                          src={experience.companyLogo}
                          title="image"
                        />
                      </div>
                      <div>
                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                          {experience.companyName}
                        </h6>
                        <p className="text-sm text-muted">{experience.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expert Area Section */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark">
            <h2 className="text-2xl font-semibold dark:text-light">
              My Expert Area
            </h2>
            <div className="mt-6 grid grid-cols-4 gap-4 md:grid-cols-3">
              {[
                {
                  name: "Angular",
                  imgSrc: "https://cdn.simpleicons.org/angular/dd1100",
                },
                {
                  name: "React Js",
                  imgSrc: "https://cdn.simpleicons.org/react/61DAFB",
                },
                {
                  name: "Node Js",
                  imgSrc: "https://cdn.simpleicons.org/node.js/5FA04E",
                },
                {
                  name: "Javascript",
                  imgSrc: "https://cdn.simpleicons.org/javascript/FEC119",
                },
                {
                  name: "Laravel",
                  imgSrc: "https://cdn.simpleicons.org/laravel/FF2D20",
                },
                {
                  name: "Ionic",
                  imgSrc: "https://cdn.simpleicons.org/ionic/3880FF",
                },
                {
                  name: "Github",
                  imgSrc: "https://cdn.simpleicons.org/github/000000",
                },
                {
                  name: "HTML",
                  imgSrc: "https://cdn.simpleicons.org/html5/E34F26",
                },
                {
                  name: "CSS",
                  imgSrc: "https://cdn.simpleicons.org/css3/1572B6",
                },
                {
                  name: "JQuery",
                  imgSrc: "https://cdn.simpleicons.org/jquery/0769AD",
                },
                {
                  name: "Mongo DB",
                  imgSrc: "https://cdn.simpleicons.org/mongodb/47A248",
                },
                {
                  name: "NGINX",
                  imgSrc: "https://cdn.simpleicons.org/nginx/009639",
                },
                {
                  name: "PWA",
                  imgSrc: "https://cdn.simpleicons.org/pwa/5A0FC8",
                },
                {
                  name: "Wordpress",
                  imgSrc: "https://cdn.simpleicons.org/wordpress/21759B",
                },
                {
                  name: "Figma",
                  imgSrc: "https://cdn.simpleicons.org/figma/F24E1E",
                },
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                    <img
                      className="h-8 object-cover"
                      alt={tech.name}
                      src={tech.imgSrc}
                      title={tech.name}
                    />
                  </div>
                  <p className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70">
                    {tech.name}
                  </p>
                </div>
              ))}
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
              <IoIosArrowRoundForward />
            </a>
          </div>

          <div className="mt-6 space-y-6">
            {[
              {
                imgSrc:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png",
                projectLink: "https://indistays.com/home",
                title: "Indistays",
                projectUrl:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png",
              },
              {
                imgSrc:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png",
                projectLink: "https://www.e8matrix.com/staging",
                title: "Elev8 Matrix - US",
                projectUrl:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png",
              },
              {
                imgSrc:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/frylow_banner.png",
                projectLink: "https://frylowstore.com/",
                title: "Frylow Web Store",
                projectUrl:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/frylow_banner.png",
              },
              {
                imgSrc:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/infix_banner.png",
                projectLink: "https://infixlogistics.com/",
                title: "Infix Logistics | E-commerce",
                projectUrl:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/infix_banner.png",
              },
              {
                imgSrc:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/auto_commenter_banner.png",
                projectLink:
                  "https://chromewebstore.google.com/detail/linkedin-auto-commenter/pagjldpgebbhhfekjghppoajdmdhbpee",
                title: "LinkedIn Auto Commenter - Bot",
                projectUrl:
                  "https://aashish-bhagwat.creativehand.co.in/assets/new_projects/auto_commenter_banner.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
              >
                <div className="relative aspect-[6/4] overflow-hidden rounded-t-lg">
                  <img
                    className="h-full w-full rounded-t-lg object-cover object-top transition"
                    alt="image"
                    src={project.imgSrc}
                    title="image"
                  />
                  <a
                    className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                    href={project.projectUrl}
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
                      href={project.projectLink}
                      target="_blank"
                    >
                      {project.title}
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
