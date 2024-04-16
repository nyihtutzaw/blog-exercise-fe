'use client';

import React, { FC, useCallback, useMemo } from 'react';
import { Control, Controller, FieldValues, useForm, useWatch } from 'react-hook-form';
import { boolean, number, object, string } from 'yup';

import { Button, TextBox, ErrorContainer, FormItem, SelectBox, RichTextEditor } from '@/components';
import { Category, Post, PostFormData } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { PublishStatusToggle } from '../PublishStatusToggle';
import { useCreatePost } from '@/app/create-post/useCreatePost';
import { useEditPost } from '@/app/post/[id]/edit/useEditPost';
import { useDeletePost } from '@/app/post/[id]/edit/useDeletePost';



const schema = object().shape({
    title: string().required('Title is required'),
    shortContent: string().required('Short Content is required'),
    content: string().required('Content is required'),
    categoryId: number(),
    published: boolean().required(),
});

type Props = {
    categories: Category[]
    editPost?: Post;
}

export const PostInputForm: FC<Props> = ({ categories, editPost }) => {

    const { error: createPostError, createPost, loading: createPostLoading } = useCreatePost();
    const { error: editPostError, editPost: editPostFunc, loading: editPostLoading } = useEditPost();
    const { error: deletePostError, deletePost, loading: deletePostLoading } = useDeletePost();

    const { handleSubmit: handleSubmitHandler, setValue, control, formState: { errors } } = useForm<PostFormData>({
        resolver: yupResolver(schema),
        defaultValues: editPost ? {
            ...editPost,
            category: {
                label: editPost.category.name, value: editPost.category.id.toString()
            },
        } : {
            published: false
        }
    });

    const categoriesOptions = useMemo(() => {
        const options = categories?.map((row: Category) => {
            return {
                value: row?.id.toString(),
                label: row?.name,
            };
        });
        return options;
    }, [categories]);

    const watchPublished = useWatch({ control, name: "published" })

    const commonError = createPostError || editPostError || deletePostError;
    const allLoading = createPostLoading || editPostLoading || deletePostLoading;


    const handleSubmit = useCallback(async (data: PostFormData) => {
        if (editPost) {
            await editPostFunc({ ...data, categoryId: parseInt(data.category?.value || '0') }, editPost.id);
            return;
        }
        await createPost({ ...data, categoryId: parseInt(data.category?.value || '0') });
    }, [createPost, editPost, editPostFunc]);

    return (
        <div className="w-full p-6 mt-4 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-center mb-8">{editPost ? "Edit Post" : "Create Post"}</h4>
            <ErrorContainer error={commonError} />
            <form onSubmit={handleSubmitHandler(handleSubmit)}>
                <FormItem label="Name" className="mb-4">
                    <Controller
                        name="title"
                        control={control}
                        defaultValue={''}
                        render={({ field }) => (
                            <TextBox
                                {...field}

                                placeholder="Enter your title"
                                type="text"
                                error={errors.title}
                                errorMessage={errors.title?.message}
                            />
                        )}
                    />
                </FormItem>
                <FormItem label="Category" className='mb-4'>
                    <SelectBox
                        control={control as unknown as Control<FieldValues>}
                        options={categoriesOptions}
                        name="category"
                        rules={{ required: true }}
                    />
                </FormItem>
                <FormItem label="Short Content" className="mb-4">
                    <Controller
                        name="shortContent"
                        control={control}
                        defaultValue={''}
                        render={({ field }) => (
                            <TextBox
                                {...field}

                                placeholder="Enter your Short Content"
                                type="text"
                                error={errors.shortContent}
                                errorMessage={errors.shortContent?.message}
                            />
                        )}
                    />
                </FormItem>
                <FormItem label="Content" className="my-8 pb-8">
                    <Controller
                        name="content"
                        defaultValue={''}
                        control={control}
                        render={({ field }) => (
                            <RichTextEditor
                                value={field.value}
                                onChange={(value: string) => field.onChange(value)}
                                errorMessage={errors.content?.message}
                            />
                        )}
                    />
                </FormItem>
                <div className='py-4 flex items-center'>
                    <p className='mr-8'>Status </p>
                    <PublishStatusToggle published={watchPublished} onChange={(published) => setValue("published", published)} />
                </div>
                <div className="mb-4 flex my-8 justify-center md:space-x-40 space-x-16">
                    {
                        editPost && 
                            <Button type="button"
                                onClick={() => deletePost(editPost.id)}
                                loading={allLoading}
                                className="w-full md:w-60  flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-primary hover:text-secondary focus:outline-none">Delete</Button>
                      }
                    
                        <Button type="submit"
                            loading={allLoading}
                            className="w-full md:w-60   flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary hover:text-secondary focus:outline-none">Save</Button>
                    
                </div>
            </form>
        </div>
    )
}