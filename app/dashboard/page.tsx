'use client'

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import {account} from "#/lib/appwriteConfig";
import {useEffect, useState} from "react";
import GlobalNav from "#/ui/global-nav";

export interface IParams {
    userId?: string,
    secret?: string
}

export default function Page({params}: {params: IParams} ) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const userId = searchParams.get('userId')
    const secret = searchParams.get('secret')

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (userId && secret) {
            const promise = account.updateMagicURLSession(userId, secret);

            promise
                .then(function (response) {
                    console.log("New session created: ")
                    console.log(response); // Success
                    const {userId, $id} = response
                    console.log({userId} )

                    setIsAuthenticated(true)
                })
                .catch(error => {
                    console.log("Error when update URL SESSION")
                    console.log(error)
                    router.push('/login')
                })
        } else {
            const promise = account.get()
            promise
                .then(function (response) {
                    console.log("Success getting session")
                    console.log(response); // Success
                    // Permission.write(Role.user(response.$id, 'verified'))
                    setIsAuthenticated(true)
                })
                .catch(error => {
                    console.log("Error while trying to get session")
                    console.log({error})

                    router.push('/login')
                });

        }
    }, [isAuthenticated])


    return (
        isAuthenticated &&
        <div className="flex ">
            <GlobalNav />
            <aside>asdsad</aside>
        </div>

    )

}
