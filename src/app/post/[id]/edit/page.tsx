import { getCategories, getPost } from "@/actions";
import { ProtectedPage } from "@/layouts/ProtectedPage";
import { PostInputForm } from "@/components/PostInputForm";


type Prop = {
    params: { id: string }
}



export default async function EditPost({ params }: Prop) {


    const { id } = params;

    const post = await getPost(parseInt(id as string));
    const categories = await getCategories();

    return (
        <ProtectedPage>
            <div className="min-h-screen flex items-start justify-center">
                <PostInputForm categories={categories} editPost={post} />
            </div>
        </ProtectedPage>
    );
}