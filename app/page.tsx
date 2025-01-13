import Hero from "@/sections/Hero";
import { Theme } from "@/sections/Theme";
import { ReactLenis } from "lenis/react"
export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Theme />
      </ReactLenis>
    </>
  );
}
