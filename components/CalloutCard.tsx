'use client'

import React from 'react'
import { Callout } from '@tremor/react'

type Props={
    message: string,
    warning?:boolean
}

function CalloutCard({message,warning}:Props) {
  return (
    <Callout
    className='mt-4'
    title={message} 
    color={warning ? 'rose' : 'teal'}
    />
  )
}

export default CalloutCard