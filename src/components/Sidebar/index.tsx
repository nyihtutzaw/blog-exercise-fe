import React from 'react';
// Assuming you're using Lucide icons (optional)
import Image from 'next/image';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
                    <li className="px-4 text-black hover:bg-primary hover:text-white font-medium text-lg flex items-center py-2 justify-between cursor-pointer">
                        Hi Hi
                        <span className="inline-flex items-center px-2 py-1 bg-primary hover:bg-white text-white rounded-full text-xs font-bold">
                            1
                        </span>
                    </li>
                    <li className="px-4 text-black hover:bg-primary hover:text-white font-medium text-lg flex items-center py-2 justify-between cursor-pointer">
                        Hi Hi
                        <span className="inline-flex items-center px-2 py-1 bg-primary hover:bg-white text-white rounded-full text-xs font-bold">
                            2
                        </span>
                    </li>
                </ul>
            </div>
            <div className='py-4 px-2'>
                <div className='border-b border-black-100 pb-2'>
                    <h3>Account</h3>
                </div>
                <ul className="bg-white  overflow-y-auto py-2">
                    <li className="px-4 text-black hover:bg-primary hover:text-white font-medium text-lg flex items-center py-2 justify-between cursor-pointer">
                        Register / Login
                    </li>
                    <li className="px-4 text-black hover:bg-primary hover:text-white font-medium text-lg flex items-center py-2 justify-between cursor-pointer">
                        Create Post
                    </li>
                </ul>
            </div>

        </div>
    );
};
