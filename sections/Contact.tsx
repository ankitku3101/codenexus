import React, { useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Footer from '@/components/Footer';

function Contact() {
  return (
    <div id='contact' className="h-full relative bg-[#010002] bg-grid-small-white/[0.3] pt-4 px-4">
      <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#010002] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="flex flex-col items-center justify-center md:gap-10 sm:-mt-8 md:-mt-0">
          <h1 className="text-5xl md:text-8xl font-bold text-center text-green-400">
            CONTACT US
          </h1>
          <p className="container font-normal text-base md:text-lg text-center text-white mt-2 -mb-20 md:mb-0">
            Reach out anytime<br />
            whether it’s about participation, the schedule, or the venue!
          </p>
        </div>
        <div className="p-8 md:p-20 md:mb-0 sm:mb-12">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
            <div
              id="map-container"
              className="w-full h-full rounded-lg overflow-hidden"
            >
              <Map
                style={{ width: '100%', height: '100%' }}
                defaultCenter={{ lat: 20.222635, lng: 85.674413 }}
                defaultZoom={12}
                scrollwheel={true} 
              >
                <Marker
                  position={{ lat: 20.222635, lng: 85.674413 }}
                  title="GIFT Autonomous College, Bhubaneswar"
                  icon={{
                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  }}
                />
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
      <Footer />  
    </div>
  );
}

export default Contact;
