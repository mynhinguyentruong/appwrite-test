'use client'

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import {account} from "#/lib/appwriteConfig";
import {useEffect, useState} from "react";
import GlobalNav from "#/ui/global-nav";
import Image from "next/image";

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
        <div className="flex h-screen ">
            <GlobalNav />
            <div className="bg-gray-50 dark:bg-black p-10 flex items-center justify-center w-full">
                <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img className="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"/>
                            <div className="ml-1.5 text-sm leading-tight">
                                <span className="text-black dark:text-white font-bold block ">Visualize Value</span>
                                <span className="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
                            </div>
                        </div>
                        <svg className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </div>
                    <p className="text-black dark:text-white block text-xl leading-snug mt-3">“No one ever made a decision because of a number. They need a story.” — Daniel Kahneman</p>
                    <Image width={12} height={12} className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src=""/>
                    <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
                    <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
                    <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                        <div className="flex items-center mr-6">
                            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24"  ><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                            <span className="ml-3">615</span>
                        </div>
                        <div className="flex items-center mr-6">
                            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24" ><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                            <span className="ml-3">93 people are Tweeting about this</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-64 flex flex-row bg-gray-100">
                <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                    <div className="flex items-center justify-center h-20 shadow-md">
                        <h1 className="text-3xl uppercase text-indigo-500">Online</h1>
                    </div>
                    <ul className="flex flex-col py-4">
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-home"></i></span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-music"></i></span>
                                <span className="text-sm font-medium">Music</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-drink"></i></span>
                                <span className="text-sm font-medium">Drink</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-shopping-bag"></i></span>
                                <span className="text-sm font-medium">Shopping</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-chat"></i></span>
                                <span className="text-sm font-medium">Chat</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-user"></i></span>
                                <span className="text-sm font-medium">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-bell"></i></span>
                                <span className="text-sm font-medium">Notifications</span>
                                <span
                                    className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span
                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                    className="bx bx-log-out"></i></span>
                                <span className="text-sm font-medium">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )

}
