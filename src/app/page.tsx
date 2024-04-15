
import { getPosts } from "@/actions";
import { PostContent } from "./postContent";


type Prop = {
    searchParams: { [key: string]: number | undefined },
}



export default async function Home({ searchParams }: Prop) {
    const { page = 1 } = searchParams;
    const data = await getPosts({ page: page });
    

    return (

        <PostContent data={data} currentPage={page} />

    );
}
