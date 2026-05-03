"use server"

import { Get } from "@/libs/Fetch";
import { connection } from "next/server";


export default async function getUser(){
    await connection(); 
    
    const userResponse = await Get('user');
    
    if (!!userResponse.id){ 
        // if has id, then has an User
        return userResponse;
    }

    return null;
}