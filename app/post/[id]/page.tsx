'use client'

import Image from "next/image"
import Link from "next/link"
import DashboardLeftBar from "#/ui/dashboard-left-bar"
import DashboardRightBar from "#/ui/dashboard-right-bar"
import { useEffect, useState, useCallback, ChangeEvent, useContext } from "react"
import { account } from "#/lib/appwriteConfig"
import { Models } from "appwrite"
import useSWR from 'swr'
import { useRouter } from "next/navigation"
import { UserContext } from "#/app/user-provider"

const fetcher = (endpoint: string) => fetch(endpoint).then(res => res.json())


export default function PostPage({ params: { id }}: { params: { id: string }}) {
    // const [currentUser, setCurrentUser] = useState<Models.User<Models.Preferences> | null>(null)
    const [content, setContent] = useState("")
    const context = useContext(UserContext)

    const { data: post, error, isLoading } = useSWR(`/api/post?id=${id}`, fetcher)
    const { data: user, error: userError, isLoading: userIsLoading } = useSWR(`/api/user?userId=${post?.user_id}`, fetcher)
    const { data: currentUser, error: currentUserError, isLoading: currentUserIsLoading} = useSWR(`/api/user?userId=${context?.user?.$id}`, fetcher)

    console.log({user});
    
  
    const router = useRouter()

    const handleClose = useCallback(() => {
        router.back()
      }, [router])

    function likePost(postId: string, userId: string) {

    }

    function contentChanges(e: ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value)
    }

    // useEffect(() => {
    //     const promise = account.get()
    //         promise
    //             .then(function (response) {
    //                 console.log("Success getting session")
    //                 console.log(response); // Success
    //                 // Permission.write(Role.user(response.$id, 'verified'))
    //                 setCurrentUser(response)
    //             })
    //             .catch(error => {
    //                 console.log("Error while trying to get session")
    //                 console.log({error})

    //             });
    // }, [])
    
    return user && (
        <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
            <DashboardLeftBar inputRef={undefined} />
            <div className="w-full lg:w-1/2  mb-4 border-x-2">
        <svg
        onClick={handleClose} 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ml-3 mb-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>


            
                {/* The tweet */}
            <div className="flex border-b border-solid border-grey-light">
                
                <div className="w-1/8  pl-3 pt-3 ">
                    <div><a href="#"><Image width={30} height={30}
                                            src={user.user_image ? user.user_image : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt="avatar"
                                            className="rounded-full sm:h-12 sm:w-12 mr-2 p-1"/></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0 ">
                    <div className="flex justify-between w-full">
                        <div>
                            <span className="font-bold text-base leading-6 dark:text-white text-slate-900"><a href="#" className="text-black dark:text-white">{user.user_name}</a></span>
                            <span className="text-grey-dark mx-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">@{user.user_handle}</span>
                            <span className="text-grey-dark mx-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">&middot;</span>
                            <span className="text-grey-dark mx-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">{post?.$createdAt.slice(0,10)}</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i
                                className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                    <div className="mb-3 w-full mt-2 dark:text-white text-slate-900">
                            {JSON.parse(post?.content_body).split("\n").map((line: string, index: number) => (<p key={index} className="mb-2">{line} </p>))}
 
                            <div className="mt-1  gap-1 rounded-3xl overflow-scroll max-h-96">
                            {post?.image_url.length > 0 ? 
                                post?.image_url.length === 1 
                                ? (<div className="md:flex-shrink pr-6 pt-3 overflow-scroll" >
                                <Image width={0} height={0} sizes="100vw" className="rounded-lg object-cover w-full h-64" src={post.image_url[0]} alt="Woman paying for a purchase"/>
                              </div>)
                                : post.image_url?.map((url: string, index: number) => 
                                    (<div key={index} className='overflow-scroll h-36'>
                                        <Image src={url} width={500} height={500}
                                                alt="tweet image"
                                                      className="border border-solid border-grey-light rounded-sm object-cover object-center"/>
                                    </div>
                            )) : (<div></div>)
                            }
                            </div>
                        </div>
                            
                        {/* SVG */}
                        <div className="flex items-center">
                            {/* <div className=" text-center">
                                <a href="#" className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div> */}
                            {/* HEART */}
                            <div className=" text-center py-2 m-2">
                                <div className="flex items-center justify-center">
                                <button onClick={() => likePost(post.$id, user?.$id)} className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    {/* <span>1</span> */}
                                </button>
                                <span className="mt-1">{post?.likes.length}</span>
                                </div>
                            </div>

                        
                        </div>

                    </div>
                </div>
        </div>
        {/* change */}
        <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <Image width={40} height={40} className="inline-block h-10 w-10 rounded-full" src={currentUser?.user_image} alt="" />
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea 
                        name="content_body"
                        value={content}
                        onChange={contentChanges}
                        id="content_body"
                        className="border-none bg-transparent text-gray-400 font-medium text-lg w-full" rows={2} cols={50} placeholder="Tweet your reply!"></textarea>
                    </div>

                </div>
        {/* change */}
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
                            // onClick={handleSubmitAsync}
                            className="bg-blue-400 hover:bg-blue-500 dark:bg-gray-400 mt-5 dark:hover:bg-gray-600 text-white text-slate-900 font-bold py-2 px-8 rounded-full mr-8 float-right">
                            Reply
                          </button>
                    </div>
                </div>
            </div>
            <DashboardRightBar/>
        </div>
    )
}

