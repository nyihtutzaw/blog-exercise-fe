'use client';

import { Navbar, Sidebar } from "@/components"
import { FC, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} isSideBarOpen={isOpen} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`${isOpen?'ml-80':'mx-8'} mt-8`}>
                <h1>Hi</h1>
                {children}
            </div>

        </>
    )
}