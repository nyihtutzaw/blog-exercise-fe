
import { BlogItem } from "@/components"
import { Metadata } from "next"
import Link from "next/link"



export async function generateMetadata(

): Promise<Metadata> {


    return {
        title: "Title",
        description: "description"
    }
}

export default function AuthorDetail() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">Mg Mg</h1>
                <div className="flex items-center mb-4 text-gray-600">
                    <span className="mr-2 font-bold">mgmg@gmail.com</span>
                </div>
            </div>
            <h3 className="py-4">Blog List</h3>
            <div className="grid gap-4 grid-cols-1  md:grid-cols-2">
                  <Link href="/blog/1"> <BlogItem /></Link>
                  <Link href="/blog/1"> <BlogItem /></Link>
                  <Link href="/blog/1"> <BlogItem /></Link>
                  <Link href="/blog/1"> <BlogItem /></Link>

            </div>

        </div>
    )
}