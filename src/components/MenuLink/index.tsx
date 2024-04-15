import Link from "next/link"
import { FC } from "react";

type Props = {
    active: boolean;
    href: string;
    title:string;
}

export const MenuLink: FC<Props> = ({ active,title, href }) => {
    return (
        <Link href={href} className={`${active ? 'text-yellow-500' : 'text-white'} hover:bg-gray-100 hover:text-primary font-medium px-3 py-2 rounded-md`}>{title}</Link>
    )
}