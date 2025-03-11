"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-black/60 backdrop-blur-md border-white/10" : "bg-transparent backdrop-blur-sm"
      } ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ width: "100%" }}
    >
      <div className="py-5 px-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={'/gift_logo.png'} width={40} height={40} alt="GIFT Autonomous Logo" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-300/90 rounded-lg md:hidden hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto text-sm`} id="navbar-dropdown">
            <nav className="text-sm md:text-base flex flex-col md:flex-row gap-3 md:gap-6 text-white/75 items-center rounded-full md:px-6 py-1">
              <Link href="/#home" className="hover:text-white">Home</Link>
              <Link href="/#ps" className="hover:text-white">Problem Statement</Link>
              <Link href="/#schedule" className="hover:text-white">Schedule</Link>
              <Link href="/#prizes" className="hover:text-white">Prizes</Link>
              <Link href="/#contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
