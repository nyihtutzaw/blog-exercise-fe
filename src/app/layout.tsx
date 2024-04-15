import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { DefaultLayout } from '@/layouts/default';
import { getCategories } from '@/actions';
import SessionProvider from '@/layouts/SessionProvider';


export const metadata: Metadata = {
    title: 'Blogger',
    description: 'You can read our blogs of all category',
};



export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    const categories = await getCategories();
    const session = await getServerSession();
    return (
        <html lang="en">
            <body className={`${true ? 'sidebar-open' : ''}`}>
                <SessionProvider session={session}>
                    <DefaultLayout categories={categories}>{children}</DefaultLayout>
                </SessionProvider>
            </body>
        </html>
    );
}