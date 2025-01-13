'use client'

import dynamic from "next/dynamic";
import { Theme } from "@/sections/Theme";
import { ReactLenis } from "lenis/react";
import LoadingScreen from "@/components/LoadingScreen"; 

const DynamicHero = dynamic(() => import("@/sections/Hero"), {
  loading: () => <LoadingScreen />, 
  ssr: false, 
});

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <DynamicHero /> 
        <Theme />
      </ReactLenis>
    </>
  );
}
