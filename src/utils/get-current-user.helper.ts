"use server"

import { auth } from "@/lib/auth"



export const currentUser = async () => {
    const session = await auth()
    const user = session?.user
    if(!user) return undefined
    return user;
}