'use client';

import { PostItem, Pagination } from "@/components"
import { GetPostsResponse } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

type Props = {
    data: GetPostsResponse
    currentPage:number;
}

export const PostContent: FC<Props> = ({ data,currentPage }) => {

    const router=useRouter();
    const pathname=usePathname();

   

    return (
        <div className="pb-4">
            <div className="grid gap-4 grid-cols-1  md:grid-cols-2">
                {
                    data.data.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))
                }

            </div>
            <div className="mt-4">
                <Pagination totalPages={data.pages} currentPage={currentPage} onPageChange={(page) => { 
                    router.push(`${pathname}?page=${page}`)
                }} />
            </div>
        </div>
    )
}