import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const Navbar = () => {
  return (
    // Navbar component
    <div className="navbar z-[100] fixed backdrop-filter backdrop-blur-xl bg-opacity-70 bg-[#1c1d21] top-10 left-0 right-0 w-[380px] md:w-[600px] lg:w-[800px] h-7 mx-auto rounded-full">
      <div className="navbar-start">
        <Link href="/#home">
        <Image
            className="ml-1 hover:animate-spin duration-500"
            src="/images/nav.png"
            alt="UC Cryptocurrency Club"
            width={40}
            height={40}
        
        />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-full lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transform scale-x-[-1] text-[#FF204E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow backdrop-filter backdrop-blur-xl bg-opacity-40 bg-[#1c1d21] rounded-box w-52">
          <li className="uppercase text-[#6e7273] hover:text-[#FF204E] transition-colors"><a className="rounded-full">Featured</a></li>
            <li>
              <a href="/#research" className="uppercase text-[#6e7273] hover:text-[#FF204E] transition-colors">Research</a>
              <ul className="p-2">
                <li><a>Lab Research</a></li>
                <li><a>Club Research</a></li>
              </ul>
            </li>
            <li className="uppercase text-[#6e7273] hover:text-[#FF204E] transition-colors"><a>About us</a></li>
            <div className="mt-4 items-center text-center">
          <button className="contact text-md uppercase hover:text-[#FF204E] transition-colors duration-500">Contact</button>
          <button className="donate text-md uppercase mt-2"><div className="donate-content"><a>Donate</a></div></button>
          </div>
          </ul>
        </div>
      </div>
      {/* Navbar center for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
        <li className="uppercase text-[#6e7273] hover:text-[#FF204E] transition-colors"><a className="rounded-full">Featured</a></li>
          <li>
            <details>
              <summary className="uppercase rounded-full text-[#6e7273] hover:text-[#FF204E] transition-colors">Research</summary>
              <ul className="p-2 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#1c1d21]">
                <li><a href="/#research" className="rounded-full">Lab Research</a></li>
                <li><a className="rounded-full">Club Research</a></li>
              </ul>
            </details>
          </li>
          <li className="uppercase text-[#6e7273] hover:text-[#FF204E] transition-colors"><a className="rounded-full">About us</a></li>
          <div className="ml-4">
          <button className="contact text-md uppercase hover:text-[#FF204E] transition-colors duration-500">Contact</button>
          <button className="donate text-md uppercase ml-2"><div className="donate-content"><a>Donate</a></div></button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;