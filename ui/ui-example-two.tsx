'use client';

import Image from "next/image";
import {useEffect, useState, ChangeEvent, FormEvent} from "react";
import {account, databases, storage} from "#/lib/appwriteConfig";
import {ID, Permission, Role, Query, Models} from "appwrite";
import Post from "#/ui/post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLeftBar from "#/ui/dashboard-left-bar";


export default function UiExampleTwo () {


    const [selectedImages, setSelectedImages] = useState<FileList | null>(null)
    const [imageUrl, setImageUrl] = useState<string[] | []>([])
    const [content, setContent] = useState("")
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
    const [posts, setPosts] = useState<Models.Document[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function fileChanges(e: ChangeEvent<HTMLInputElement>) {
        setSelectedImages(e.target.files)

    }

    function contentChanges(e: ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        // get current logged in userid
        e.preventDefault()
        setIsLoading(true)
        const data = {
            content_body: content,
            user_id: user?.$id,
            hasPhoto: !!selectedImages
        }
        const promise = databases.createDocument('647b675e73a83b821ca7','647f52561dc3d331e6aa',ID.unique(),data)

        promise
            .then(res => {
                console.log("Success add doc")
                console.log(res)
                setIsLoading(false)
                toast('Post sent successfully ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setContent("")
                if (selectedImages) {
                    fetch('/api/create-bucket', {
                        method: 'POST',
                        body: JSON.stringify({
                            postId: res.$id
                        })
                    })
                        .then(res => res.json())
                        .then(res => {
                            console.log({res})
                            for (const image of selectedImages) {


                                const promise = storage.createFile(res.bucketId, ID.unique(), image)

                                promise
                                    .then(res => {
                                        console.log(res)
                                        console.log("File upload success")
                                        setSelectedImages(null)
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        console.log(`There is some error uploading file in bucket ${res.$id}`)
                                    })
                            }
                        })

                }
        })
            .catch(error => {
                console.log("Fail to create new doc")
                console.log(error)
        })
    }

    useEffect(() => {
        const promise = account.get()
        promise.then(res => {
            console.log(res)
            setUser(res)
        }).catch(error => console.log(error))


    }, [])

    useEffect(() => {
        if (selectedImages) {
            const arr = []
            for (const image of selectedImages) {
                const url = URL.createObjectURL(image)
                arr.push(url)
            }
            setImageUrl(arr)
            console.log(arr)
        }
    }, [selectedImages])

    useEffect(() => {
        const promise = databases.listDocuments('647b675e73a83b821ca7', '647f52561dc3d331e6aa', [
            Query.orderDesc('$createdAt')
        ])

        promise
            .then(posts => {
                console.log(posts.documents)
                setPosts(posts.documents)
            })
            .catch(error => {
                console.log("Failed to get post")
                console.log(error)
            })
    }, [isLoading])

    return (
        <>
        <div className="bg-white">
            <ToastContainer/>
            <div className="container mx-auto flex flex-col lg:flex-row items-center py-4">
                <nav className="w-full lg:w-2/5 " >
                    <a href="#"
                       className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i
                        className="fa fa-home fa-lg"></i> Home</a>
                    <a href="#"
                       className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i
                        className="fa fa-bolt fa-lg"></i> Moments</a>
                    <a href="#"
                       className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i
                        className="fa fa-bell fa-lg"></i> Notifications</a>
                    <a href="#"
                       className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i
                        className="fa fa-envelope fa-lg"></i> Messages</a>

                </nav>
                <div className="w-full lg:w-1/5 text-center my-4 lg:my-0"><a href="#"><i
                    className="fa fa-twitter fa-lg text-blue"></i></a></div>
                <div className="w-full lg:w-2/5 flex lg:justify-end">
                    <div className="mr-4 relative">
                        <input type="text" className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full"
                               placeholder="Search Twitter"/>
                            <span className="flex items-center absolute pin-r pin-y mr-3"><i
                                className="fa fa-search text-grey"></i></span>
                    </div>
                    <div className="mr-4"><a href="#"><Image width={30} height={30}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar.jpg" alt="avatar"
                        className="h-8 w-8 rounded-full"/></a></div>
                    <div>
                        <button
                            className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full">Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    <div className="bg-white border">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">


        </div>

    </div>

    <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
        <DashboardLeftBar/>


        <div className="w-full lg:w-1/2 bg-white mb-4 ">
            <div className="w-7/8 p-3 pl-0 bg-gray-100">

                            <div className="mb-4">
                               <form onSubmit={handleSubmit}>
                                   <textarea
                                       rows={2}
                                       wrap="hard"
                                       placeholder="What is happening?!"
                                       name="content_body"
                                       value={content}
                                       onChange={contentChanges}
                                       id="content_body"
                                       className="w-full border-none bg-gray-100 " />
                                   <div className="flex rounded-md overflow-hidden	">
                                   {imageUrl && imageUrl.map(url => (
                                       <div key={url} className="mr-3 rounded rounded-md overflow-hidden	">
                                      <Image src={url} alt={"Uploaded images"} width={100} height={100} />
                                       </div>
                                   ))}
                                   </div>
                                   <input type="file" id="file" name="file" multiple accept="image/*"
                                          onChange={fileChanges} hidden
                                   />
                                   <div className="flex justify-between rounded-md mt-3 mx-3">
                                   <label htmlFor="file">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                       </svg>
                                   </label>
                                   <button type="submit"
                                   >
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                       </svg>
                                   </button>
                                   </div>
                               </form>

                            </div>

            </div>
            <div className="flex justify-around p-3 text-lg font-bold border-b border-solid border-grey-light">
                <a href="#" className="text-black mr-6 no-underline hover:underline ">For you</a>
                <a href="#" className="mr-6 text-teal no-underline hover:underline">Following</a>
            </div>
            {posts && posts.map(post => (
                <Post key={post.$id} post={post} user={user} />
            ))}

        </div>

        <div className="w-full lg:w-1/4 pl-4 ">

            <div className="bg-white p-3 mb-3">
                <div className="mb-3">
                    <span className="text-lg font-bold">Trends for you</span>
                </div>

                <div className="mb-3 leading-tight">
                    <div><a href="#" className="text-teal font-bold">Happy New Year</a></div>
                    <div><a href="#" className="text-grey-dark text-xs">645K Tweets</a></div>
                </div>

                <div className="mb-3 leading-tight">
                    <div><a href="#" className="text-teal font-bold">Happy 2018</a></div>
                    <div><a href="#" className="text-grey-dark text-xs">NYE 2018 Celebrations</a></div>
                </div>

                <div className="mb-3 leading-tight">
                    <div><a href="#" className="text-teal font-bold">#ByeBye2017</a></div>
                    <div><a href="#" className="text-grey-dark text-xs">21.7K Tweets</a></div>
                </div>

                <div className="mb-3 leading-tight">
                    <div><a href="#" className="text-teal font-bold">#SomeHashTag</a></div>
                    <div><a href="#" className="text-grey-dark text-xs">45K Tweets</a></div>
                </div>

                <div className="mb-3 leading-tight">
                    <div><a href="#" className="text-teal font-bold">Something Trending</a></div>
                    <div><a href="#" className="text-grey-dark text-xs">36K Tweets</a></div>
                </div>

                <div className="mb-3 leading-tight">
                    <div><a href="#" className="text-teal font-bold">#ColdAF</a></div>
                    <div><a href="#" className="text-grey-dark text-xs">100K Tweets</a></div>
                </div>

            </div>

            <div className="mb-3 text-xs">
                <span className="mr-2"><a href="#" className="text-grey-darker">&copy; 2023 St.Clair </a></span>
                <span className="mr-2"><a href="#" className="text-grey-darker">About</a></span>
                <span className="mr-2"><a href="#" className="text-grey-darker">Help Center</a></span>
                <span className="mr-2"><a href="#" className="text-grey-darker">Terms</a></span>
                <span className="mr-2"><a href="#" className="text-grey-darker">Privacy policy</a></span>
                <span className="mr-2"><a href="#" className="text-grey-darker">Cookies</a></span>
                <span className="mr-2"><a href="#" className="text-grey-darker">Ads info</a></span>
            </div>
        </div>

    </div>
        </>
    )
}
