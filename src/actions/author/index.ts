

import { apiClient } from "@/lib/apiClient";
import { User } from "@/types";

export async function getAuthors(): Promise<User[]> {

    const res = await apiClient(`users`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}

export async function getAuthor(id: number): Promise<User> {
    const res = await apiClient(`users/find/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    const responseJson = await res.json();
    return responseJson.data;
}