import React, { useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function Contact() {
  return (
    <div className="h-screen bg-[#010002] grid grid-cols-1 lg:grid-cols-2 p-4">
      <div className="flex flex-col items-center justify-center md:gap-10">
        <h1 className="text-5xl md:text-8xl font-bold text-center text-green-400">
          CONTACT US
        </h1>
        <p className="font-normal text-base md:text-lg mx-auto text-center text-white mt-2">
          Reach out anytime<br />
          whether it’s about participation, the schedule, or the venue!
        </p>
      </div>
      <div className="p-20">
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
  );
}

export default Contact;
