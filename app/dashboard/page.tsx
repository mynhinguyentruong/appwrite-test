'use client'

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import {account} from "#/lib/appwriteConfig";
import {useEffect, useState} from "react";
import GlobalNav from "#/ui/global-nav";
import Image from "next/image";
import UiExampleTwo from "#/ui/ui-example-two";

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
                    router.push('/dashboard')
                })
                .catch(error => {
                    console.log("Error when update URL SESSION")
                    console.log("Possible error was thrown when appwrite trying to inject session cookie into the browser but browser block 3rd party cookie")
                    console.log(error)
                    if (!isAuthenticated) {
                        router.push('/login')
                    }
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
           <UiExampleTwo/>
    )

}
