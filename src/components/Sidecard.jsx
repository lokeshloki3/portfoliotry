import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Sidecard = () => {
  return (
    <div>
      <div className="right-0 top-[100px] lg:sticky rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark">
        <div className="aspect-6/4 overflow-hidden rounded-lg bg-light text-center dark:bg-dark-2">
          <img
            className="dark:hidden inline-block h-full w-full scale-110 object-contain object-bottom"
            alt="profile_image"
            src="https://aashish-bhagwat.creativehand.co.in/assets/profile_landscape_ch.png"
            title="image"
          />
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold dark:text-light">
            Lokesh Walia 👋
          </h1>
          <p className="mt-2 text-gray-500 dark:text-light/70">
            A Passionate{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Frontend Developer
            </span>{" "}
            🖥️ &{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Product Designer
            </span>{" "}
            having{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              2 years
            </span>{" "}
            of Experiences in 20+ Technologies so far.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              id="call-btn"
              className="shadow cursor-pointer inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white bg-[#9D95FF] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
            >
              <IoIosCall className="text-lg" />
              <span className="border-0 border-solid border-gray-200 box-border text-lg">
                Call
              </span>
            </a>
            <a
              id="wa-btn"
              className="shadow cursor-pointer hover:bg-light inline-flex items-center gap-x-2 rounded-lg border border-light px-6 py-4 font-medium transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-1 dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
              href="https://api.whatsapp.com/send?phone=+919403733265&text=Hello,%20I%20want%20to%20send%20you%20a%20message."
              target="_blank"
            >
              <FaWhatsapp className="text-lg" />
            </a>

            <button
              className="shadow js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-1 dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
              type="button"
            >
              <MdOutlineEmail />
              <span>Email</span>
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a
              className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
              href="https://github.com/lokeshloki3"
              target="_blank"
              title="github"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
              href="https://www.linkedin.com/in/lokesh021loki/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
              href="https://leetcode.com/u/lokesh11/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <SiLeetcode className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecard;
