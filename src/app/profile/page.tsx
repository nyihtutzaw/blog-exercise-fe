
'use client';
import { profile as getProfile } from "@/actions"
import { PostItem } from "@/components/PostItem"
import { ProtectedPage } from "@/layouts/ProtectedPage";
import { User } from "@/types";

import { useEffect, useState } from "react";







export default  function AuthorDetail() {

    
    const [profile,setProfile]=useState<User>();

    useEffect(()=>{
        async function loadData(){
            const userProfile = await getProfile();
            setProfile(userProfile);
        }
        loadData();
    },[profile])



    return (
        <ProtectedPage>
        <div className="container mx-auto px-4 py-8">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">{profile?.name}</h1>
                <div className="flex items-center mb-4 text-gray-600">
                    <span className="mr-2 font-bold">{profile?.email}</span>
                </div>
            </div>
            <h3 className="py-4">Blog List</h3>
            <div className="grid gap-4 grid-cols-1  md:grid-cols-2">
                {
                    profile?.posts.map((post) => (
                        <PostItem post={post} key={post.id} showStatus />
                    ))
                }
            </div>

        </div>
        </ProtectedPage>
    )
}