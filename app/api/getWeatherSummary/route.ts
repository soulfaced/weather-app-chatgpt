import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST (request:Request){
    const {weatherData} = await request.json();

    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        temperature:0.8,
        n:1,
        stream:false,
        messages:[
            {
            role:'system',
            content:'pretend yourself as a weather presenter from a news channel, your as roleplaying as sanchit. give the summary of temperture from the data give you . you can joke about the weather.'
            },
            {
            role:'user',
            content:`hi there, can i get a summary of toadys weather, use the following information to get the weather data :${JSON.stringify(weatherData)}`,
            }]
        });

const {data} = response;

console.log(`data is ${data}`)
return NextResponse.json(data.choices[0].message)
}