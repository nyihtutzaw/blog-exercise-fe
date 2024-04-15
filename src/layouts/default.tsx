'use client';

import { Navbar, Sidebar } from "@/components"
import { Category } from "@/types";
import { FC, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
    categories:Category[];
}

export const DefaultLayout: FC<Props> = ({ children,categories }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} isSideBarOpen={isOpen} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} categories={categories} />
            <div className={`${isOpen?'lg:ml-80 mr-8':'mx-8'} mt-8`}>
                {children}
            </div>

        </>
    )
}