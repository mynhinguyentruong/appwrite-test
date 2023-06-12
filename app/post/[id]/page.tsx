'use client'
import Image from "next/image"
import DashboardLeftBar from "#/ui/dashboard-left-bar"
import DashboardRightBar from "#/ui/dashboard-right-bar"
import { useEffect, useState } from "react"
import { account } from "#/lib/appwriteConfig"
import { Models } from "appwrite"

export default function PostPage({ params: { id }}: { params: { id: string }}) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)

    useEffect(() => {
        const promise = account.get()
            promise
                .then(function (response) {
                    console.log("Success getting session")
                    console.log(response); // Success
                    // Permission.write(Role.user(response.$id, 'verified'))
                    setUser(response)
                })
                .catch(error => {
                    console.log("Error while trying to get session")
                    console.log({error})

                });
    }, [])
    
    return (
        <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
            <DashboardLeftBar />
            <div className="w-full lg:w-1/2  mb-4 border-x-2">
                Hi
            </div>
            <DashboardRightBar/>
        </div>

    )
}