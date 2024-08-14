import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import React from "react";

interface PageProps{
    params:{
        fileid:string;
    }
}

export default async function Page({params}:PageProps){
    //retrieving file id
    const {fileid} = params;

    
    const {getUser}=getKindeServerSession()
    const user = await getUser();

    if(!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

    //database call
    const file=await db.file.findFirst({
        where:{
            id:fileid,
            userId:user.id
        }
    })

    if(!file) notFound();

    return(
        <div>
            {fileid}
        </div>
    )
}