import React from 'react';
type Props={
    params:{
        city:string;
        long:string;
        lat:string;
    }
}

function WeatherPage({params:{city,lat,long}}) {
  return (
    <div>welcome to the weather page :{city} {lat} {long}</div>
  )
}

export default WeatherPage