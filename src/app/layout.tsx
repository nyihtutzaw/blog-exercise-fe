import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { DefaultLayout } from '@/layouts/default';
import { getCategories } from '@/actions';



export const metadata: Metadata = {
    title: 'Blogger',
    description: 'You can read our blogs of all category',
};



export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    const categories = await getCategories();
 
    return (
        <html lang="en">
            <body className={`${true ? 'sidebar-open' : ''}`}>
                <DefaultLayout categories={categories}>{children}</DefaultLayout>
            </body>
        </html>
    );
}