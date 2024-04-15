
import { getPosts } from "@/actions";
import { BlogContent } from "@/app/blogContent";


type Prop = {
    params: { id: string }
    searchParams: { [key: string]: number | undefined },
}


export default async function CategoryDetail({ params,searchParams }: Prop) {
    const { page = 1 } = searchParams;
    const { id } = params;

    const data = await getPosts({ categoryId: parseInt(id) });

    return (
        <BlogContent data={data} currentPage={page}/>

    );
}
