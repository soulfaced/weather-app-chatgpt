"use client"
import { Card,AreaChart,Title } from '@tremor/react';

import React from 'react';

type Props={
    results:Root;
};

function TempChart({results}:Props) {
    const hourly = results.hourly.time.map(time => new Date(time).toLocaleString("en-Us",{
        hour:"numeric",
        hour12:false,
    })
    ).slice(1,25)

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "apparent_temperature": results.hourly.apparent_temperature[i], // Use results at index i
        "precipitation_probability": results.hourly.precipitation_probability[i], // Use results at index i
      }));
      
  return <Card>
    <Title>Temperture & UV index</Title>
    <AreaChart
    className='mt-6'
    data={data}
    showLegend
    index='time'
    categories={["apparent_temperature","precipitation_probability"]}
    colors={["yellow","green"]}
    minValue={0}
    // valueFormatter-{dataFormatter}
    yAxisWidth={40}
    />
  </Card>
}

export default TempChart