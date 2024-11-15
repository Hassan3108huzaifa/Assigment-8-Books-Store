'use client'
import React, { useState } from 'react'
import { inter } from "@/app/ui/fonts";
import {
    AlertDialog,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
} from './ui/alert-dialog';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const route = useRouter();
    const [showAdminAlert, setShowAdminAlert] = useState<boolean>(false);

    return (
        <div className='max-w-7xl flex mx-auto p-3'>
            <div className='flex md:flex-row flex-col justify-between w-full'>
                <div onClick={() => route.push('/')} className="logo text-xl font-bold cursor-pointer text-center">HassanRJ</div>
                <ul className={`${inter.className} list-none flex gap-5 justify-center mt-2 md:mt-0`}>
                    <li onClick={() => route.push('/')} className='cursor-pointer'>Home</li>
                    <li onClick={() => route.push('/books')} className='cursor-pointer'>Books</li>
                    <li onClick={()=> route.push('/#about')} className='cursor-pointer'>About</li>
                    <li
                        onClick={() => setShowAdminAlert(true)}
                        className='cursor-pointer'
                    >
                        Admin -{'>'}
                    </li>
                </ul>
            </div>

            {/* Alert Dialog */}
            <AlertDialog open={showAdminAlert} onOpenChange={setShowAdminAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            If you become an admin, you can CREATE, READ, UPDATE, and DELETE books.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setShowAdminAlert(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {
                            setShowAdminAlert(false);
                            route.push('/admin');
                        }}>
                            I&apos;m Admin
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default Navbar;
