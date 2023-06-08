'use client';

import Image from "next/image";
import {useEffect, useState, ChangeEvent, FormEvent} from "react";
import {account, databases, storage} from "#/lib/appwriteConfig";
import {ID, Permission, Role, Query, Models} from "appwrite";
import Post from "#/ui/post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLeftBar from "#/ui/dashboard-left-bar";
import Link from "next/link";

import Dog from '#/public/dog_one.jpg'
import Navbar from "#/ui/navbar";

// once new post submitted -> new bucket get created -> file uploaded to that bucket -> update posts state in this component with the url

export default function UiExampleTwo () {


    const [selectedImages, setSelectedImages] = useState<FileList | null>(null)
    const [imageUrl, setImageUrl] = useState<string[] | []>([])
    const [content, setContent] = useState("")
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
    const [posts, setPosts] = useState<Models.Document[] | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function likePost(postId: string, userId: string | undefined) {
        if (!userId) return;
        setPosts((prevPosts: Models.Document[] | undefined) => {
            return prevPosts?.map(prevPost => {
                if (prevPost.$id === postId) {
                    if (prevPost.likes.some((id: string) => id === userId)) {
                        const promise = databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID as string, process.env.NEXT_PUBLIC_POST_COLLECTION_ID as string, postId, {
                            likes: prevPost.likes.filter((userId: string) => userId !== user?.$id)
                        })
            
                        promise.then(res => console.log("doc updated")).catch(err => console.log("error update likes attr"))
                        return {...prevPost, likes: prevPost.likes.filter((id: string) => id !== userId)}
                    } else {
                        const promise = databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID as string, process.env.NEXT_PUBLIC_POST_COLLECTION_ID as string, postId, {
                            likes: [...prevPost.likes, userId]
                        })
                        return {...prevPost, likes: [...prevPost.likes, userId]}
                    }
                } else {
                    return prevPost
                }
            })
        })
    }

    function fileChanges(e: ChangeEvent<HTMLInputElement>) {
        setSelectedImages(e.target.files)

    }

    function contentChanges(e: ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value)
        console.log(JSON.stringify(e.target.value))
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        // get current logged in userid
        e.preventDefault()
        setIsLoading(true)
        const data = {
            content_body: JSON.stringify(content),
            user_id: user?.$id,
            hasPhoto: !!selectedImages
        }
        const promise = databases.createDocument('647b675e73a83b821ca7','647f52561dc3d331e6aa',ID.unique(),data)

        promise
            .then(post => {
                console.log("Success add doc")
                console.log(post)
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
                            postId: post.$id
                        })
                    })
                        .then(res => res.json())
                        .then(bucket => {
                            console.log({bucket})
                            const urls: string[] = []
                            for (const image of selectedImages) {


                                const promise = storage.createFile(bucket.bucketId, ID.unique(), image)

                                promise
                                    .then(file => {
                                        console.log(file)
                                        console.log("File upload success")
                                        setPosts((prevPosts: Models.Document[] | undefined) => {
                                            return prevPosts?.map(prevPost => {
                                                return prevPost.$id === bucket.bucketId ? {...prevPost, image_url: [...prevPost.image_url, `https://cloud.appwrite.io/v1/storage/buckets/${bucket.bucketId}/files/${file.$id}/view?project=64749ba6eade18e58a13`]} : prevPost
                                            })
                                        })
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        console.log(`There is some error uploading file in bucket ${bucket.bucketId}`)
                                    })
                            }
                            // update post with the url
                            const promise = databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID as string, process.env.NEXT_PUBLIC_POST_COLLECTION_ID as string, post.$id, {
                                image_url: urls
                            })

                            promise.then(res => {
                                console.log("update url in post success")
                            }).catch(err => {
                                console.log("could not update url in post")
                            })
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
            <ToastContainer/>
            <Navbar />
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
                <Post key={post.$id} post={post} user={user} likePost={likePost} />
            ))}

        </div>

        <div className="w-full lg:w-1/4 pl-4 ">

            <div className="bg-white p-3 mb-3">
                <div className="mb-3">
                    <span className="text-lg font-bold">Media</span>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-1 rounded-3xl overflow-scroll">
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                </div>

                <Link className="block w-full border border-black-100 text-center font-bold mt-3 p-3 rounded-lg bg-slate-200" href='/media'> See all</Link>

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
