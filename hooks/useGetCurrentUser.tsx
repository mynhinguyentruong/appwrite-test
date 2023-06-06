'use client'

import { account } from "#/lib/appwriteConfig";
import { Models } from "appwrite"
import {useEffect, useState} from "react";

// Since account.get() can only be called in the client, to reduce repetitive logic either custom hook or context can be used
// Performance ?
export function useGetCurrentUser() {
    const [currentUser, setCurrentUser] = useState<Models.User<Models.Preferences> | undefined>(undefined)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const promise = account.get()

        promise
            .then(res => setCurrentUser(res))
            .catch(err => {
                console.log("Failed to get active session")
                console.log(err)
            })
    })

    return currentUser

}
