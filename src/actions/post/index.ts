import { apiClient, headers } from "@/lib/apiClient";
import { GetPostsResponse, Post, PostFormData, PostQuery } from "@/types";
import { getSession } from 'next-auth/react';



export async function getPosts(data: PostQuery): Promise<GetPostsResponse> {

    let url = `posts`;

    if (data.categoryId) {
        url += `?categoryId=${data.categoryId}`;
    }

    if (data.page) {
        if (!data.categoryId)
            url += `?page=${data.page}`;
        else url += `&page=${data.page}`;
    }

    const res = await apiClient(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();



    return responseJson.data;
}


export async function getPost(id: number): Promise<Post> {
    const res = await apiClient(`posts/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}

export async function createPost(data: PostFormData): Promise<Response> {
    const url = `posts`;

    const session = await getSession();

    if (session?.user) {
        headers.Authorization = `Bearer ${session?.user?.token}`;
    }


    const res = await fetch(url, {
        method: "POST", body: JSON.stringify(data), headers
    });


    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }


    return res;
}


export async function editPost(data: PostFormData, id: number): Promise<Response> {
    const url = `posts/${id}`;

    const session = await getSession();

    if (session?.user) {
        headers.Authorization = `Bearer ${session?.user?.token}`;
    }


    const res = await fetch(url, {
        method: "PUT", body: JSON.stringify(data), headers
    });


    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }

    return res;
}


export async function deletePost(id: number): Promise<Response> {
    const url = `posts/${id}`;

    const session = await getSession();
    if (session?.user) {
        headers.Authorization = `Bearer ${session?.user?.token}`;
    }

    const res = await fetch(url, {
        method: "DELETE", headers
    });

    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }


    return res;
}




