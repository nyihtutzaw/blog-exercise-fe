import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { DefaultLayout } from '@/layouts/default';


export const metadata: Metadata = {
    title: 'Blogging',
    description: 'You can read our blogs of all category',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {


    return (
        <html lang="en">
            <body className={`${true ? 'sidebar-open' : ''}`}>
                <DefaultLayout>{children}</DefaultLayout>
            </body>
        </html>
    );
}