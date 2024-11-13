'use client'
import React from 'react'
    import {inter} from "@/app/ui/fonts";
import { useRouter } from 'next/navigation';
    const Navbar = () => {
        const route = useRouter()
    return (
        <div className='max-w-7xl flex mx-auto p-3'>
            <div className='flex md:flex-row flex-col justify-between w-full'>
                <div className="logo text-xl font-bold cursor-pointer text-center">HassanRJ</div>
                <ul className={ `${inter.className} list-none flex gap-5 justify-center`}>
                    <li onClick={()=> route.push('/')} className=' cursor-pointer'>Home</li>
                    <li onClick={()=> route.push('/#books')} className=' cursor-pointer'>Books</li>
                    <li className=' cursor-pointer'>About</li>
                </ul>
            </div>
        </div>
    )
    }

    export default Navbar