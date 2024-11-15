'use client'
import React from 'react'
import NotFounComponent from '@/components/NotFoundComponent'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
const NorFound = () => {
    const route = useRouter()
  return (
    <div className='max-w-7xl flex mx-auto px-4 flex-col md:px-8 h-screen items-center justify-center'>
        <NotFounComponent/>
        <Button onClick={()=> route.push('/')}>{'<'}- Got to Home Page</Button>
    </div>
  )
}

export default NorFound