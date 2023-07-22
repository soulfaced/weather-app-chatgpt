import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import StatCard from '@/components/StatCard';
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
            <div className='m-2 bm-10'>
                <CalloutCard 
                message="this is where GPT summary will go"
                />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
                <StatCard 
                title='max temperture'
                color='yellow'
                metric={`${results.hourly.apparent_temperature[0].toFixed(1)}`}
                />
                <StatCard 
                title='min temperture'
                color='green'
                metric={`${results.hourly.apparent_temperature[0].toFixed(1)}`}
                />

                <div>
                <StatCard 
                title='UV index'
                color='rose'
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                />
                {Number(results.daily.uv_index_max[0].toFixed(1))>5 &&(
                    <CalloutCard
                    message='The UV is high today, wear SPF'
                    warning />
                )}
                </div>
                <div className='flex space-x-3'>
                <StatCard 
                title='wind speed'
                color='indigo'
                metric='14.5m/s'
                />
                <StatCard 
                title='wind direction'
                color='teal'
                metric='305'
                />
                </div>
            </div>
        </div>
        <hr className='"mb-5' />
    </div>
  )
}

export default WeatherPage