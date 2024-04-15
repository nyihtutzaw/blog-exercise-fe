import { GetPostsResponse, Post, PostQuery } from "@/types";

export async function getPosts(data: PostQuery): Promise<GetPostsResponse> {

    let url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}posts`;

    if (data.categoryId) {
        url += `?categoryId=${data.categoryId}`;
    }

    if (data.page) {
        if (!data.categoryId)
            url += `?page=${data.page}`;
        else url += `&page=${data.page}`;
    }



    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();



    return responseJson.data;
}


export async function getPost(id: number): Promise<Post> {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}posts/${id}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}