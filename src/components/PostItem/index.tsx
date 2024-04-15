'use client';

import { Post } from "@/types";
import { FC } from "react";
import dayjs from 'dayjs';
import Link from "next/link";

type Props = {
    post: Post;
}

export const PostItem: FC<Props> = ({ post }) => {

    const { id, title, shortContent, category, user, publishedAt } = post;

    return (
        <Link href={`/post/${id}`}><div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="text-gray-600 line-clamp-3">{shortContent}</p>
                <div className="flex items-center mt-2">
                    <span className="text-gray-500 text-sm font-medium">Category: {category.name}</span>
                </div>
            </div>
            <div className="flex items-end justify-between px-4 pb-2 border-t border-gray-200">
                <span className="text-gray-500 text-sm font-medium">By {user.name}</span>
                <span className="text-gray-500 text-sm font-medium">{dayjs(publishedAt.toString()).format("DD/MM/YYYY")}</span>
            </div>
        </div></Link>
    )
}