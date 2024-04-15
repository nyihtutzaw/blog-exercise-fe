import { apiClient, headers } from "@/lib/apiClient";
import { RegisterFormData, User } from "@/types";
import { getSession } from 'next-auth/react';

export async function createUser(data: RegisterFormData): Promise<Response> {
    const url = `users/register`;
    const res = await apiClient(url, {
        method: "POST", body: JSON.stringify(data), headers: headers
    });
    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }
    return res;
}


export async function login(email: string, password: string): Promise<Response> {
    const url = `users/login`;
    const res = await apiClient(url, {
        method: "POST", body: JSON.stringify({
            email: email,
            password: password
        }), headers
    });
    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }
    return res;
}

export async function profile(): Promise<User> {

    const url = `users/profile`;

    const session = await getSession();

    if (session?.user) {
        headers.Authorization = `Bearer ${session?.user?.token}`;
    }

    const res = await apiClient(url, { cache: 'no-store', headers });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }

    const responseJson = await res.json();
    return responseJson.data;
}