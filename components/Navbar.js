import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="body-font">
      <div className="container mx-auto flex justify-between p-5 items-center">
        <a className="flex title-font font-medium items-center text-primary items-center">
          <span className="ml-3 text-xl">EduMatch</span>
        </a>
        <div className="flex items-center md:hidden">
          <button
            className="text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-4 hidden md:flex">
          <button
            type="button"
            className="inline-flex items-center rounded border border-primary bg-white px-2.5 py-1.5 text-xs font-medium text-primary shadow-sm"
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
          >
            <Link href="/register">
              <a>Sign Up</a>
            </Link>
          </button>
        </div>
      </div>

      <Transition
        show={showMenu}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`flex flex-col gap-4 md:flex p-4 bg-gray-200`}>
          <button
            type="button"
            className=" inline-flex items-center rounded bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
          >
            <Link href="/register">
              <a>Sign Up</a>
            </Link>
          </button>
        </div>
      </Transition>
    </header>
  );
};

export default Navbar;
