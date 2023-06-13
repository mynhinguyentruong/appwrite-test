'use client'

import { account } from "#/lib/appwriteConfig"
import { Models } from "appwrite"

import { ReactNode, createContext, useEffect, useState } from "react"

export const UserContext = createContext<null | User>(null)

export type User = {
    user: Models.User<Models.Preferences> | null
}

export default function UserProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)

    const getAccount = async () => {
        const user = await account.get()

        if (!user) return setUser(null)

        setUser(user)
    }

    useEffect(() => {
        getAccount()
    }, [])

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}