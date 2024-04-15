
import { getPosts } from "@/actions";
import { BlogContent } from "./blogContent";


type Prop = {
    searchParams: { [key: string]: number | undefined },
}



export default async function Home({ searchParams }: Prop) {
    const { page = 1 } = searchParams;
    const data = await getPosts({ page: page });

    return (
        <BlogContent data={data} currentPage={page} />

    );
}
