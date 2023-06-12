'use client'

import {FormEvent} from "react";
import {account} from "#/lib/appwriteConfig";
import {ID} from "appwrite";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// function classNames(...classes: string[])  {
//     return classes.filter(Boolean).join(' ')
// }
export default function UserAuthForm() {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get("email")
        console.log({email})
        const url = "https://appwrite-test-nhi-ymihn.vercel.app/dashboard"


        if (typeof email === "string") {
            const promise = account.createMagicURLSession(ID.unique(), email, url);

            promise.then(function (response) {
                console.log("Sending magic url"); // Success
                toast('We just sent you an email verification ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, function (error) {
                console.log(error); // Failure
            });
        }


    }
    return (
        <>
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign In with Email
                    </button>
                </div>
            </form>
        </>
    )
}
