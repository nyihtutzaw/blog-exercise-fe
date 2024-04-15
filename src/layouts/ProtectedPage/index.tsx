'use client'
import React, { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Prop = {
    children: ReactNode;
}

export const ProtectedPage: FC<Prop> = ({ children }) => {

    const { data: session } = useSession();
    if (!session || !session.user) {
        redirect("/login");
    }

    return (
        <div>
            {children}
        </div>
    );
}