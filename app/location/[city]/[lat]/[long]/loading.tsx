import React from 'react'

function loading() {
  return (
    <div className='bg-gradient-to-br from-[#394f68] to=[#18387e] min-h-screen flex flex-col items-center justify-center text-black-400'>
        <h1 className='text-6xl font-bold text-center mb-10 animate-pulse'>
            loading city weather information
        </h1>
        <h2 className='text-6xl font-bold text-center mb-10 animate-pulse'>
            hold on, we are counting some numbers and generating ai response.
        </h2>
    </div>
  )
}

export default loading