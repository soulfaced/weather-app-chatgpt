import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import InformationPannel from '@/components/InformationPannel';
import StatCard from '@/components/StatCard';
import TempChart from '@/components/TempChart';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';
import cleanData from '@/lib/cleanData';
import getBasePath from '@/lib/getBasePath';
import React from 'react';

export const revalidate =60;

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
    const dataToSend = cleanData(results,city);

    const res = await fetch(`${(getBasePath())}/api/getWeatherSummary`,{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            weatherData:dataToSend
        })
    })

    const GPTdata = await res.json();
    const {content} = GPTdata;
    // console.log(results);
  return (
  <div className='flex flex-col min-h-screen md:flex-row'>
    <InformationPannel
    city={city}
    lat={lat}
    long={long}
    />
    <div>
        <div className='flex-1 lg:p-18'>
            <div className='pb-5'>
                <h2 className='text-xl font-bold'>Todays Overview</h2>
                <p className='text-sm text-gray-400'>
                    Last Updated at :{" "}
                    {new Date(results.daily.time[0]).toLocaleString()}({results.timezone})

                </p>
            </div>
            <div className='m-2 bm-10'>
                <CalloutCard 
                message={content}
                />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2 mb-5'>
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
        <TempChart results={results} />
    </div>
    </div>
  )
}

export default WeatherPage