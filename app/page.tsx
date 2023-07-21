'use client';

import CityPicker from "@/components/CityPicker";
import {Card,Divider,Subtitle,Text} from "@tremor/react"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#18387E] p-10 flex flex-col justify-center items-center" >
     {/* <h1>Lets build GPT for weather app</h1> */}
     <Card className="max-w-4xl mx-auto">
      <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
      <Subtitle className="text-xl text-center">Weather ai created using chatGPT</Subtitle>
    
     <Divider className="my-10"/>
     <Card className="bg-gradient-to-br from-[#394F68] to-[#183878]">
      <CityPicker />
     </Card>
     </Card>
    </div>
  )
}
