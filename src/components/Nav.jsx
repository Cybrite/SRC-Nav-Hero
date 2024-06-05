
import { useState } from "react";
import { navContent } from "../content/navContent";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-[135px] w-100% ">
      <nav>
        <div className="flex items-center justify-between ">
       
          <div className="h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] ml-5 mt-2">
            <img src="src/assets/Mask group.png" alt="logo" className="object-contain w-full h-full" />
          </div>

          <div className="items-center hidden md:flex">
            <div className="text-brown-2 font-Poppins flex justify-between gap-[50px] px-2 items-center mt-1">
              {navContent.map((item) => (
                <div
                  key={item}
                  className="transition ease-in hover:text-orange-1 100ms"
                >
                  <a href="#">
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={handleToggle}
              className="overflow-hidden focus:outline-none"
            >
              {isOpen ? (
                <div className="mr-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FFEEDA"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="mr-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FFEEDA"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="z-10 mr-5 md:hidden">
            <ul className="flex flex-col items-end justify-end bg-white ">
              {navContent.map((item) => (
                <li
                  key={item}
                  className="my-2"
                >
                  <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="transition ease-in text-brown-2 hover:text-orange-1 100ms"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
