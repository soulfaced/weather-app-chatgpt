import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
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
    // console.log(results);
  return (
    // Information pannel 
    <div>
        <div className='p-s'>
            <div className='pb-5'>
                <h2 className='text-xl font-bold'>Todays Overview</h2>
                <p className='text-sm text-gray-400'>
                    Last Updated at :{" "}
                    {new Date(results.daily.time[0]).toLocaleString()}({results.timezone})

                </p>
            </div>
            <div>
                <CalloutCard 
                message="this is where GPT summary will go"
                />
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default WeatherPage