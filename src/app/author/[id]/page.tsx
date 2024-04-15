
import { getAuthor } from "@/actions"
import { PostItem } from "@/components"
import { Metadata } from "next"
import { redirect } from "next/navigation"



type Prop = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Prop,
): Promise<Metadata> {

    const { id } = params;

    const author = await getAuthor(parseInt(id as string));

    return {
        title: author.name,
    }
}


export default async function AuthorDetail({ params }: Prop) {

    const { id } = params;

    const author = await getAuthor(parseInt(id as string));

    if (!author) redirect("/404");

    const { name, email, posts } = author;


    return (
        <div className="container mx-auto px-4 py-8">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
                <div className="flex items-center mb-4 text-gray-600">
                    <span className="mr-2 font-bold">{email}</span>
                </div>
            </div>
            <h3 className="py-4">Blog List</h3>
            <div className="grid gap-4 grid-cols-1  md:grid-cols-2">
                {
                    posts.map((post) => (
                        <PostItem post={post} key={post.id} />
                    ))
                }
            </div>

        </div>
    )
}