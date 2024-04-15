'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FC } from "react"
import { MenuLink } from "../MenuLink";

type NavbarProps = {
    toggleSidebar: () => void;
    isSideBarOpen: boolean;
}

export const Navbar: FC<NavbarProps> = ({ toggleSidebar, isSideBarOpen }) => {

    const pathname = usePathname();

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
                            <path  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <Link href="/" className={`flex items-center space-x-3 ${isSideBarOpen ? 'md:pl-40 sm:pl-4' : 'md:pl-8'}`}>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary">Blogger</span>
                    </Link>
                </div>
                <div className="flex space-x-8">
                    <div className="flex space-x-4">
                        <MenuLink  href="/" active={pathname === "/" } title="Activity" />
                        <MenuLink  href="/author" active={pathname === "/author" } title="Author" />
                    </div>
                    <Link href='/create-post'><button
                        type="button"
                        className="inline-flex items-center px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                        Create A Post
                    </button></Link>
                </div>

            </div>
        </nav>
    )
}

