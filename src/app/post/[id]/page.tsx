import { getPost } from "@/actions";
import { Metadata } from "next"
import { redirect } from "next/navigation"
import dayjs from 'dayjs';
import { HtmlRenderer } from "@/components";
import Link from 'next/link'


type Prop = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Prop,
): Promise<Metadata> {

    const { id } = params;

    const post = await getPost(parseInt(id as string));

    return {
        title: post.title,
        description: post.shortContent
    }
}

export default async function PostDetail({ params }: Prop) {


    const { id } = params;

    const post = await getPost(parseInt(id as string));

    

    if (!post) redirect("/404");

    const { title, content, category, user, publishedAt } = post;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row space-y-4 justify-between items-start">
                <div className="md:w-3/4">
                    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                    <div className="flex items-center mb-4 text-gray-600 my-4">
                        <span className="mr-2 font-bold">Category:</span>
                        <Link href={`/category/${category.id}`}><span className="font-bold font-primary underline cursor-pointer" >{category.name}</span></Link>
                    </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-primary rounded-md text-sm font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">Edit</button>
            </div>

            <div className="flex justify-between flex-col md:flex-row">
                <div className="flex items-center my-4 text-gray-600">
                    <span className="mr-2">By:</span>
                    <Link href={`/author/${user.id}`}> <span className="font-bold font-primary underline cursor-pointer">{user.name}</span></Link>
                </div>
                <div className="text-gray-600 mb-4">Published At: {dayjs(publishedAt).format("DD/MM/YYYY")}</div>
            </div>

            <div className="prose">
                <HtmlRenderer content={content} />
            </div>
        </div>
    )
}