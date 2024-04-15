'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types';
import { useParams, usePathname } from 'next/navigation';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    categories: Category[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, categories, toggleSidebar }) => {
    const pathname=usePathname();
    const { id='0' }=useParams();
    const isActive=useCallback((categoryId:number)=>{
        return pathname.includes("/category") && parseInt(id as string)===categoryId;
    },[id, pathname])

    return (
        <div
            className={`fixed z-50 top-0 left-0 w-64 h-screen bg-white border-r border-gray-200 transition duration-200 ease-in-out ${isOpen ? '' : '-translate-x-full'
                }`}
        >
            <div className="flex items-center justify-between relative">
                <Image src='/blogger.png' alt='Blogger Logo' width={200} height={0} objectPosition='cover' style={{ width: "100%" }} />
                <button type="button" onClick={toggleSidebar} className='absolute top-4 right-4'>
                    <svg
                        className="w-6 h-6 bg-primary text-white rounded-xl p-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='py-4 px-2'>
                <div className='border-b border-black-100 pb-2'>
                    <h3>Category</h3>
                </div>
                <ul className="bg-white  overflow-y-auto py-2">
                    {
                        categories.slice(0, 10).map((category) => (
                            <Link href={`/category/${category.id}`} key={category.id}><li className={`px-4 ${isActive(category.id)?'bg-primary text-white':'bg-white text-black'} hover:bg-primary hover:text-white font-medium text-lg flex items-center py-2 justify-between cursor-pointer`}>
                                {category.name}
                                <span className="inline-flex items-center px-2 py-1 bg-primary hover:bg-white text-white rounded-full text-xs font-bold">
                                    {category._count?.posts}
                                </span>
                            </li></Link>
                        ))
                    }

                </ul>
            </div>
            <div className='py-4 px-2'>
                <div className='border-b border-black-100 pb-2'>
                    <h3>Account</h3>
                </div>
                <ul className="bg-white  overflow-y-auto py-2">
                    <Link href='/register'><li className="px-4 text-black hover:bg-primary hover:text-white font-medium text-lg flex items-center py-2 justify-between cursor-pointer">
                        Register / Login
                    </li></Link>
                </ul>
            </div>

        </div>
    );
};
