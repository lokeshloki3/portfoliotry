import React from "react";
import { FaEnvelope, FaSuitcase } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 border-0 border-solid border-gray-200 text-dark m-6">
        <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-dark dark:shadow-dark">
          <a className="inline-flex items-center gap-3 text-2xl font-semibold text-dark dark:text-white">
            <img
              className="w-[150px]"
              alt="CreativeHand Logo"
              src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand_text_logo.png"
            />
          </a>

          <nav>
            <ul className="hidden gap-6 flex-1 flex-wrap items-center justify-center lg:flex">
              {["Home", "About", "Projects", "Works", "Contact"].map(
                (text, index) => {
                  const icons = [
                    <BiHomeSmile className="h-5 w-5 text-[#8991A7]" />,
                    <IoIosContact className="h-5 w-5 text-[#8991A7]" />,
                    <BsPersonWorkspace className="h-5 w-5 text-[#8991A7]" />,
                    <FaSuitcase className="h-5 w-5 text-[#8991A7]" />,
                    <FaEnvelope className="h-5 w-5 text-[#8991A7]" />,
                  ];

                  return (
                    <li
                      key={index}
                      className="group/menu-item border-0 border-solid border-gray-200"
                    >
                      <div className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-2 dark:hover:text-white">
                        {icons[index]}
                        <span>
                          <Link
                            href={`/${text.toLowerCase()}`}
                            className="text-inherit no-underline text-xl text-gray-700"
                          >
                            {text}
                          </Link>
                        </span>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>

          <div className="flex justify-center items-center gap-6 mr-4">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-4 text-center text-base font-semibold leading-tight text-white transition duration-150 ease-out hover:bg-primary dark:bg-gray-800 dark:text-white dark:hover:bg-primary dark:hover:text-white cursor-pointer"
            href="https://lokeshloki3.github.io/resume/Lokesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <IoMdMenu
            className="text-3xl text-gray-700 cursor-pointer lg:hidden block"
            aria-label="Toggle Navigation"
          />
          </div>
        </div>
      </header>
    </>
  );
}
