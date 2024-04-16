'use client';
import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { LoginFormData } from '@/types';
import { Button, TextBox, ErrorContainer, FormItem } from '@/components';
import { useLogin } from './useLogin';
import Link from 'next/link';


const schema = object().shape({
    email: string().required('Email is required'),
    password: string().required('Password is required'),
});


export default function LoginPage() {

    const { error, login, loading } = useLogin();
    const { handleSubmit, control, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = useCallback(async (data: LoginFormData) => {
        await login(data.email, data.password);
    }, [login]);

    return (
        <div className="min-h-screen flex items-start justify-center">
            <div className="max-w-xl w-full p-6 mt-4 bg-white rounded-lg shadow-lg">
                <div className='flex justify-center p-2'>
                    <Image src='/blogger.png'
                        alt="Logo"
                        width={100}
                        height={100}
                        objectFit='contain'
                    />
                </div>
                <h4 className="text-2xl font-semibold text-center mb-8">Login</h4>
                <ErrorContainer error={error} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormItem label="Email" className="mb-4">
                        <Controller
                            name="email"
                            defaultValue="" 
                            control={control}
                            render={({ field }) => (
                                <TextBox
                                    {...field}
                                    placeholder="Enter your email"
                                    type="email"
                                    error={errors.email}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem label="Password" className="mb-4">
                        <Controller
                            name="password"
                            defaultValue="" 
                            control={control}
                            render={({ field }) => (
                                <TextBox
                                    {...field}
                                    placeholder="Enter your password"
                                    type="password"
                                    error={errors.password}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />
                    </FormItem>
                    <div className="mb-4">
                        <Button type="submit"
                            className="w-full flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary hover:text-secondary focus:outline-none" loading={loading}>Login</Button>
                    </div>
                    <div className='py-4 text-center'>
                        <Link href='/register' className='text-primary underline'>{`If you don't have account, click here to create`}</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};