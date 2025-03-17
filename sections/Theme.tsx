"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
import Link from "next/link";

export function Theme() {
  return (
    <div id="ps" className="min-h-full py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-[#010002]">
            PROBLEM STATEMENT
        </h1>
        <p className="container mt-4 font-normal text-base md:text-lg mx-auto text-center">
          Check out the problem statement for CodeNexus-Hackathon organized under Festronix 2025
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link href={'https://docs.google.com/document/d/1C2ic9UM1mflsYV8qWc7EtzrAO8YFcDhT/edit?usp=sharing&ouid=111044100660170070734&rtpof=true&sd=true'}>
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-2 mt-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              Guidelines
            </button>
          </Link>
          <Link href={'https://drive.google.com/file/d/1zrBh2KE0ok1CmbkZmhIOwM9RsYrIG4uL/view?usp=sharing'}>
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-2 mt-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              Problem Statement
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border shadow-2xl bg-[#fff9c8]/40 bg-dot-black/[0.2] border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-xs w-full mx-auto p-4 relative h-[25rem]"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#fff9c8]/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const TempIcon = () => {
  return (
    <Image src={'/gift_logo_bk.png'} alt="logo" width={65} height={65} />
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
