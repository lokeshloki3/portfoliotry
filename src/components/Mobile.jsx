import React from "react";
import { FaEnvelope, FaSuitcase } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";

export default function Mobile() {

  const menuItems = [
    { text: "Home", icon: <BiHomeSmile className="h-6 w-6 text-[#8991A7]" />, link: "/home" },
    { text: "About", icon: <IoIosContact className="h-6 w-6 text-[#8991A7]" />, link: "/about" },
    { text: "Services", icon: <BsPersonWorkspace className="h-6 w-6 text-[#8991A7]" />, link: "/services" },
    { text: "Works", icon: <FaSuitcase className="h-6 w-6 text-[#8991A7]" />, link: "/works" },
    { text: "Blog", icon: <FaEnvelope className="h-6 w-6 text-[#8991A7]" />, link: "/blog" },
  ];

  return (
    <div
      id="mobile-menu"
      className="z-50 duration-300 fixed bottom-0 top-0 left-0 z-60 w-64 h-full overflow-y-auto bg-white dark:bg-dark transition-all transform scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100 text-gray-900 dark:text-white border-0 box-border ease-out hs-overlay hs-overlay-open:translate-x-0"
      style={{
        borderColor: "rgb(229, 231, 235)",
      }}
    >
      <div className="flex h-full flex-col justify-between gap-5 p-5 border-0 box-border">
        <div className="border-0 box-border">
          <a
            className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white"
            href="https://aashish-bhagwat.creativehand.co.in/index.html"
          >
            <img
              className="w-[150px] max-w-full h-auto"
              alt="CreativeHand Logo"
              src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand_text_logo.png"
            />
          </a>
        </div>

        <ul className="mt-4 flex flex-1 flex-col gap-2 list-none m-0 p-0">
          {menuItems.map((item, index) => (
            <li key={index} className="group/menu-item active border-0 box-border">
              <a
                className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                href={item.link}
              >
                {item.icon}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>

        <div>
          <a
            className="w-full flex justify-center gap-2 rounded-lg bg-gray-900 px-6 py-4 text-lg font-semibold leading-tight text-white transition duration-150 ease-out hover:bg-primary dark:bg-gray-800 dark:text-white dark:hover:bg-primary dark:hover:text-white cursor-pointer"
            href="https://lokeshloki3.github.io/resume/Lokesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
