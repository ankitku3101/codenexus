"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-black/60 backdrop-blur-md border-white/10" : "bg-transparent backdrop-blur-sm"
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ width: "100%" }} 
      >
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-center">
              <nav className="text-sm md:text-base flex gap-6 text-white/75 items-center rounded-full px-6 py-1">
                <Link href="/#home" className="hover:text-white">
                  Home
                </Link>
                <Link href="/#theme" className="hover:text-white">
                  Theme
                </Link>
                <Link href="/#schedule" className="hover:text-white">
                  Schedule
                </Link>
                <Link href="/#prizes" className="hover:text-white">
                  Prizes
                </Link>
                <Link href="/#contact" className="hover:text-white">
                  Contact
                </Link>
              </nav>
              <div className="hidden md:block absolute right-6">
                <Image src={"/gift_logo.png"} alt="logo" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
