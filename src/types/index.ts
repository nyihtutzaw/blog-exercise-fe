export type LoginFormData = {
    email: string;
    password: string;
};

export type Category = {
    id: number;
    name: string;
    _count?: { posts: number };
};