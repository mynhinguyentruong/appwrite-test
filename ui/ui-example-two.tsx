'use client';

import Image from "next/image";
import {useEffect, useState, ChangeEvent, FormEvent, MouseEvent} from "react";
import {account, databases, storage} from "#/lib/appwriteConfig";
import {ID, Query, Models} from "appwrite";
import Post from "#/ui/post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLeftBar from "#/ui/dashboard-left-bar";

import Navbar from "#/ui/navbar";
import Modal from "./modal";
import DashboardRightBar from "./dashboard-right-bar";



// once new post submitted -> new bucket get created -> file uploaded to that bucket -> update posts state in this component with the url

export default function UiExampleTwo ({ user }: {user: Models.User<Models.Preferences> | Models.Session}) {


    const [selectedImages, setSelectedImages] = useState<FileList | null>(null)
    const [imageUrl, setImageUrl] = useState<string[] | []>([])
    const [content, setContent] = useState("")
    const [posts, setPosts] = useState<Models.Document[] | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [owner, setOwner] = useState<Models.Document | null>(null)


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
    }

    async function handleSubmitAsync() {
        setIsLoading(true)

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

        const data = {
            content_body: JSON.stringify(content),
            user_id: user.$id,
            hasPhoto: !!selectedImages
        }

        const urls: string[] = []
        try {
            const res = await fetch('/api/new-post', {
                method: "POST",
                body: JSON.stringify(data)
            })
            const { postId } = await res.json()

            if (selectedImages) {
                for (const image of selectedImages) {
                    const file = await storage.createFile(postId, ID.unique(), image)
                    console.log("file upload success");
                    urls.push(`https://cloud.appwrite.io/v1/storage/buckets/${postId}/files/${file.$id}/view?project=64749ba6eade18e58a13`)
                }
            }
            
            // update doc here
            const post = await fetch('/api/update-post', {
                method: 'POST',
                body: JSON.stringify({
                    postId,
                    urls

                })
            })
            setSelectedImages(null)
            setIsLoading(false)
            } catch (error) {
                console.log({error});
                
        }
    }

    useEffect(() => {
        if (selectedImages) {
            const arr = []
            for (const image of selectedImages) {
                const url = URL.createObjectURL(image)
                arr.push(url)
            }
            setImageUrl(arr)
        }
    }, [selectedImages])

    useEffect(() => {
        const promise = databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID as string, process.env.NEXT_PUBLIC_POST_COLLECTION_ID as string, [
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

    useEffect(() => {
        const promise = databases.listDocuments('647b675e73a83b821ca7', '647cb553d054c55d41db',[
            Query.equal('user_id', user.$id)
        ])

        promise
            .then(res => setOwner(res.documents[0]))
            .catch(err => {
                console.log("Unable to get owner for this post")
                console.log(err)
            })
        console.log("useeffect run")
    }, [user.$id])

    return (
        <div className="bg-white dark:bg-black">
            <ToastContainer/>
            {/* <Navbar /> */}
    <div className="bg-white border">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">


        </div>

    </div>

    <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
        <DashboardLeftBar/>

        <div className="w-full lg:w-1/2  mb-4 border-x-2">
        <div className="flex">
                    <div className="flex-1 m-2">
                        <h2 className="px-4 py-2 text-xl font-semibold dark:text-white text-slate-900">Dashboard</h2>
                    </div>
                    <div className="flex-1 px-4 py-2 m-2">
                        <a href="" className=" text-2xl font-medium rounded-full dark:text-white text-slate-900 hover:bg-slate-100 hover:text-blue-300 float-right">
                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><g><path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g>
                            </svg>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-300"/>
            <div className="w-7/8 p-3 pl-0 ">
                {/* change */}
           
                {/* <!--middle creat tweet--> */}
                <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <Image width={40} height={40} className="inline-block h-10 w-10 rounded-full" src={owner?.user_image} alt="" />
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea 
                        name="content_body"
                        value={content}
                        onChange={contentChanges}
                        id="content_body"
                        className="border-none bg-transparent text-gray-400 font-medium text-lg w-full" rows={2} cols={50} placeholder="What's happening?"></textarea>
                    </div>

                </div>
                <div className="flex">
                    <div className="flex w-3"></div>
                    <div className=" grid grid-cols-2 gap-1 overflow-hidden max-h-80">
                    {imageUrl && imageUrl.map(url => (
                        <div key={url} className="rounded-xl overflow-scroll max-h-40">
                            <Image src={url} alt={"Uploaded images"} width={300} height={300} />
                        </div>
                    ))}
                </div>
                </div>
                

                <div className="flex">
                    <div className="w-10"></div>

                    <div className="w-64 px-2">
                        
                        <div className="flex items-center">
                            <div className="flex-1 text-center px-1 py-1 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:border-gray-800 hover:text-blue-300">
                                <label htmlFor="file">
                                    <svg className="text-center h-7 w-6 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </label>
                                  </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:border-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:border-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <button 
                            onClick={handleSubmitAsync}
                            className="bg-blue-400 hover:bg-blue-500 dark:bg-gray-400 mt-5 dark:hover:bg-gray-600 text-white text-slate-900 font-bold py-2 px-8 rounded-full mr-8 float-right">
                            Tweet
                          </button>
                    </div>
                </div>
                
                {/* change */}
                <input type="file" id="file" name="file" multiple accept="image/*"
                                          onChange={fileChanges} hidden
                                   />
                            {/* <div className="mb-4">
                               <form onSubmit={handleSubmitAsync}>
                                   
                                   
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

                            </div> */}

            </div>
            <div className="flex justify-around p-3 text-lg font-bold border-b border-solid border-grey-light">
                
            </div>
            {posts && posts.map(post => (
                <Post key={post.$id} post={post} user={user} likePost={likePost} />
            ))}
        </div>
        <DashboardRightBar />
    </div>
    
        </div>
    )
}
