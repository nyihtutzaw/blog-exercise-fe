export const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': '',
}

export const apiClient = async (url: string, options: RequestInit) => {

    const endPoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`;

    return await fetch(endPoint, options);
}