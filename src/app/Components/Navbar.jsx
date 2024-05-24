"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  AlignJustify,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" md:absolute md:inset-5 top-0  md:px-20 px-4">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/logo.png"
            className="top-32"
            width={114}
            height={64}
            alt="Logo"
          />
        </div>
        <div>
          <ul className="md:flex hidden items-center gap-12 font-[500] text-[#000000] text-[18px]">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden items-center gap-5 text-white">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-5">
          {isOpen ? (
            <X onClick={toggleMenu} />
          ) : (
            <AlignJustify onClick={toggleMenu} />
          )}
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-slate-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-start p-4">
          <X onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col items-center gap-4 font-[500] text-[#000000] text-[18px]">
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={toggleMenu}>
              Menu
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5 mt-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
