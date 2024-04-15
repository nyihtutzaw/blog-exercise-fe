
import { getPosts } from "@/actions";
import { PostContent } from "@/app/postContent";


type Prop = {
    params: { id: string }
    searchParams: { [key: string]: number | undefined },
}


export default async function CategoryDetail({ params,searchParams }: Prop) {
    const { page = 1 } = searchParams;
    const { id } = params;

    const data = await getPosts({ categoryId: parseInt(id),page:page });

    return (
        <PostContent data={data} currentPage={page}/>

    );
}
