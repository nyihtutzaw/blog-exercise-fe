export type LoginFormData = {
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
