import React from 'react'
// import weatherCodeToString from "@/lib/WeatherCodeToString";
import Image from "next/image";
import CityPicker from './CityPicker';


type Props={
    city:string;
    
    lat:string;
    long:string;
}
function InformationPannel({city,lat,long}:Props) {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#18387E] text-white max-w-sm p-6'>
    <div className='pb-5'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>long/lat:{long},{lat}</p>
    </div>
    <CityPicker />
    <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
        <div>
            <p className='text-xl'>
                {new Date().toLocaleDateString("en-gb",{
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric",
                })}
            </p>
            <p className='font-extra-light'>
                Timezone:{Intl.DateTimeFormat().resolvedOptions().timeZone}
            </p>
        </div>
        <p className='text-xl font-bold uppercase'>
            {new Date().toLocaleDateString("en-GB",{
                hour:"numeric",
                minute:"numeric",
                hour12:false,
            })}
        </p>
    </div>
    
    </div>
  )
}

export default InformationPannel