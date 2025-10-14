"use server"

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"


export const currentUser = async () => {
    const session = await getServerSession(authOptions)
    const user = session?.user
    if(!user) return undefined
    return user;
}