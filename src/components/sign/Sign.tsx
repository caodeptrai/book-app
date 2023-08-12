'use client'
import React from 'react'
import { Badge } from 'antd'

const Sign = (prop: { count: number,className:string }) => {
  return (
    <Badge count={prop.count} size='small'>
      <span className='text-lg text-gray-500'><i className={prop.className}></i></span>
      
    </Badge>
  )
}

export default Sign