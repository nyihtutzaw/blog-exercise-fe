import Link from "next/link"
import { FC } from "react"

type NavbarProps = {
    toggleSidebar: () => void;
    isSideBarOpen:boolean;
}

export const Navbar: FC<NavbarProps> = ({ toggleSidebar,isSideBarOpen }) => {
    return (
        <nav className="bg-primary border-gray-200">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex space-x-4">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        onClick={toggleSidebar}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <Link href="/"  className={`flex items-center space-x-3 ${isSideBarOpen?'md:pl-40 sm:pl-4':'md:pl-8'}`}>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary">Blogging</span>
                    </Link>
                </div>
                <div className="flex space-x-8">
                    <div className="flex space-x-4">
                        <Link href="/activity" className="text-yellow-500 hover:bg-gray-100 hover:text-primary font-medium px-3 py-2 rounded-md">Activity</Link>
                        <Link href="/author" className="text-secondary hover:bg-gray-100 hover:text-primary font-medium px-3 py-2 rounded-md">Author</Link>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                        Create A Post
                    </button>
                </div>

            </div>
        </nav>
    )
}
