import { getAuthors } from "@/actions";
import { AuthorItem } from "@/components/AuthorItem";


export default async function BlogDetail() {

    const data = await getAuthors();

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Authors</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((eachAuthor) => (
                        <AuthorItem key={eachAuthor.id} author={eachAuthor} />
                    ))
                }
            </div>
        </div>
    )
}