'use client'

import { account } from "#/lib/appwriteConfig";
import { Models } from "appwrite"
import {useEffect, useState} from "react";

export function useGetCurrentUser() {
    const [currentUser, setCurrentUser] = useState<Models.User<Models.Preferences> | undefined>(undefined)
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
