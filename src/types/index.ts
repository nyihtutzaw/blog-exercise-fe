export type Option = { value: string; label: string };

export type LoginFormData = {
    email: string;
    password: string;
};

export type RegisterFormData = {
    name:string;
    email: string;
    password: string;
};

export type Category = {
    id: number;
    name: string;
    _count?: { posts: number };
};

export type User={
    id:number;
    name:string;
    email:string;
    _count?: { posts: number };
    posts:Post[]
}

export type Post={
    id:number;
    title:string;
    content:string;
    shortContent:string;
    user:User,
    category:Category;
    publishedAt:Date;
    published:boolean;
}

export type PostFormData={
    title:string;
    content:string;
    shortContent:string;
    categoryId?:number;
    category?:Option;
    published:boolean;
}

export type GetPostsResponse= {
    data:Post[];
    pages:number;
    totalCount:number;
}

export type PostQuery={
    categoryId?:number;
    page?:number;
}
