import { getClient } from '@/apollo-client';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';
import React from 'react';
type Props={
    params:{
        city:string;
        long:string;
        lat:string;
        
    }
}

async function WeatherPage({params:{city,lat,long}}:Props) {
    const client = getClient();

    const {data}= await client.query({
        query:fetchWeatherQuery,
        variables:{
            longitude:long,
            latitude:lat,
            timezone:'Europe/Berlin',
            // daily:"temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation",
            // hourly:"temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation"
        }
    })

    const results :Root = data.myQuery;
    console.log(results);
  return (
    <div>welcome to the weather page :{city} {lat} {long}</div>
  )
}

export default WeatherPage