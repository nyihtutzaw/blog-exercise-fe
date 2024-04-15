'use client';
import { BlogItem, Pagination } from "@/components"
import Link from "next/link";


export default function Home() {

    return (
        <div className="pb-4">
            <div className="grid gap-4 grid-cols-1  md:grid-cols-2">
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
               <Link href="/blog/1"> <BlogItem /></Link>
            </div>
            <div className="mt-4">
                <Pagination  totalPages={4} currentPage={1} onPageChange={()=>{}} />
            </div>
        </div>

    );
}
