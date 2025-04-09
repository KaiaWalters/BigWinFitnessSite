import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-400 fixed top-0 left-0 w-full z-50 p-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="px-3 py-2 text-md font-medium text-white" aria-current="page">Home</Link>
                <Link to="/registration" className="px-3 py-2 text-md font-medium text-white hover:text-white">Registration</Link>
                <Link to="/profile" className="px-3 py-2 text-md font-medium text-white hover:text-white">Profile</Link>
                <Link to="/events" className="px-3 py-2 text-md font-medium text-white hover:text-white">Events</Link>
              </div>
            </div>
          </div>
          <Notifications />
        </div>
      </div>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </nav>
  );
};

const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none"
      aria-controls="mobile-menu"
      aria-expanded={menuOpen}
    >
    {!menuOpen ? (
        <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      ) : (
        <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )}
    </button>
  );
};

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`
      sm:hidden fixed top-16 left-0 w-full bg-amber-400 z-40
      transition-all duration-300 ease-in-out
      transform ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}
      py-8 mt-3
    `}
    id="mobile-menu"
    >
      <div className="space-y-1 px-2 pt-2 pb-3">
        <Link to="/" onClick={()=>{setMenuOpen(!menuOpen)}} className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
        <Link to="/events" onClick={()=>{setMenuOpen(!menuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Events</Link>
        <Link to="/registration" onClick={()=>{setMenuOpen(!menuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Registration</Link>
        <Link to="/profile" onClick={()=>{setMenuOpen(!menuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Profile</Link>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button className="px-4 py-2 border-2 rounded-2xl">Login</button>
      {/* <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden">
        <span className="sr-only">View notifications</span>
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button> */}
    </div>
  );
};

export default Navbar;
