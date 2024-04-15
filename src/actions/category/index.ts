import { Category } from "@/types";

export async function getCategories(): Promise<Category[]> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}categories`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}