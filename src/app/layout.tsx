import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { DefaultLayout } from '@/layouts/default';
import { Category } from '@/types';



export const metadata: Metadata = {
    title: 'Blogger',
    description: 'You can read our blogs of all category',
};



export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {

    async function getCategories(): Promise<Category[]> {

        const res = await fetch('http://localhost:5001/v1/categories');
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }
        const responseJson=await res.json();
        return responseJson.data;
    }

    const categories = await getCategories();

    return (
        <html lang="en">
            <body className={`${true ? 'sidebar-open' : ''}`}>
                <DefaultLayout categories={categories}>{children}</DefaultLayout>
            </body>
        </html>
    );
}