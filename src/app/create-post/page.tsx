
import React from 'react';
import { PostInputForm } from '@/components/PostInputForm';
import { getCategories } from '@/actions';
import { ProtectedPage } from '@/layouts/ProtectedPage';


export default async function CreatePostPage() {

    const categories = await getCategories();

    return (
        <ProtectedPage>
            <div className="flex items-start justify-center">
                <PostInputForm categories={categories} />
            </div>
        </ProtectedPage>
    );
};