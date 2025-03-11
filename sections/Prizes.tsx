import FAQSection from '@/components/FAQSection'
import Trophy from '@/components/Trophy'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import Image from 'next/image'
import React from 'react'

function Prizes() {
  return (
    <div id='prizes' className='min-h-screen py-20'>
        <div className='flex flex-col items-center container justify-center w-full mx-auto px-16'>
            <h1 className='text-5xl md:text-8xl font-bold text-center text-[#010002]'>
                PRIZES
            </h1>
            <p className="container font-normal my-4 text-base md:text-lg mx-auto text-center">
              Every achievement deserves its silent reward—prizes that say more than words.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36 py-10'>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#010002]">
                <Image
                  src={`/winner.png`}
                  alt="1st Prize"
                  height="500"
                  width="500"
                  className="object-contain"
                />
                <p className="text-sm md:text-base mt-4 mb-2 text-white text-center ">
                  Prizepool of
                </p>
                <h2 className="text-2xl md:text-5xl mb-2 text-green-300 text-center font-semibold">
                  ₹ 25,000
                </h2>
                <p className="text-sm md:text-base text-white text-center ">
                  along with internship oppurtunities
                </p>
              </BackgroundGradient>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#010002]">
                <Image
                  src={`/goodies.png`}
                  alt="Goodies"
                  height="500"
                  width="500"
                  className="object-contain"
                />
                <p className="text-sm md:text-base mt-4 mb-2 text-white text-center ">
                  Participants recieve
                </p>
                <h2 className="text-2xl md:text-5xl mb-2 text-yellow-400 text-center font-semibold">
                  GOODIES
                </h2>
                <p className="text-sm md:text-base text-white text-center ">
                  swags and certificates
                </p>
              </BackgroundGradient>
            </div>
        </div>
        {/* <FAQSection /> */}
    </div>
  )
}

export default Prizes