

import { User } from "@/types";

export async function getAuthors(): Promise<User[]> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}users`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}

export async function getAuthor(id: number): Promise<User> {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}users/${id}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}