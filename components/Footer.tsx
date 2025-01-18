import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gradient-to-t from-green-400/90 to-green-500 p-8 sm:p-12 lg:p-16 mx-4 sm:mx-8 lg:mx-40 rounded-t-[48px] sm:rounded-t-[56px] lg:rounded-t-[72px] relative">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image 
          src="/gift_logo_bk.png" 
          width={120} 
          height={100} 
          alt="logo" 
          className="mb-4 lg:mb-0 md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[180px]" 
        />
        <div className="text-center">
          <p className="text-lg sm:text-lg font-semibold">
            14th-15th February 2025
          </p>
          <h1 className="text-4xl sm:text-4xl lg:text-7xl font-bold">
            CODENEXUS
          </h1>
          <p className="text-lg sm:text-lg font-semibold">
            GIFT Autonomous Bhubaneswar
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mt-4">
            <Link href="https://top-autonomous-college-in-odisha.gift.edu.in/" className="flex items-center gap-2">
              <FaGlobe />
              gift.edu.in
            </Link>
            <Link href="https://www.instagram.com/gift.autonomous.bhubaneswar" className="flex items-center gap-2">
              <FaInstagram />
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/in/gandhi-institute-for-technology-gift-autonomous-70942079" className="flex items-center gap-2">
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
