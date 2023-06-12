'use client'

import Image from "next/image";
import {useEffect, useState} from "react";
import {databases, storage} from "#/lib/appwriteConfig";
import {Models, Query} from "appwrite";
import Link from "next/link";


interface PostProps extends Models.Document {
    content_body: string,
    user_id: string,
    likes: number
}

type LikePostFn = (postId: string, userId: string | undefined) => Promise<void>

if (!process.env.NEXT_PUBLIC_DATABASE_ID) throw new Error("Provide NEXT_PUBLIC_DATABASE_ID ENV")
if (!process.env.NEXT_PUBLIC_POST_COLLECTION_ID) throw new Error ("Provide NEXT_PUBLIC_POST_COLLECTION_ID")



export default function Post({post, user, likePost}: {post: Models.Document, user: Models.User<Models.Preferences> | Models.Session, likePost: LikePostFn}) {

    const [owner, setOwner] = useState<Models.Document | null>(null)

  
    useEffect(() => {
        const { user_id, hasPhoto, $id } = post

        const promise = databases.listDocuments('647b675e73a83b821ca7', '647cb553d054c55d41db',[
            Query.equal('user_id', user_id)
        ])

        promise
            .then(res => setOwner(res.documents[0]))
            .catch(err => {
                console.log("Unable to get owner for this post")
                console.log(err)
            })
        console.log("useeffect run")

    },[post])

    return (
        owner && (
            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8  pl-3 pt-3 ">
                    <div><a href="#"><Image width={30} height={30}
                                            src={owner?.user_image} alt="avatar"
                                            className="rounded-full sm:h-10 sm:w-10 mr-2"/></a></div>
                </div>

                <div className="w-7/8 p-2 pl-0 ">
                    <div className="flex justify-between w-full">
                        <div>
                            <span className="font-bold text-base leading-6 dark:text-white text-slate-900"><a href="#" className="text-black dark:text-white">{owner?.user_name}</a></span>
                            <span className="text-grey-dark mx-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">{owner?.user_handle && `@${owner?.user_handle}`}</span>
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
                            
                           {/*Might want to loop through each \n*/}
                           {/* Currently image is not rendered correctly, need to find alter way*/}
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
                      
                            {/* <span className="mr-8 flex hover:cursor-pointer"
                                  onClick={() => likePost(post.$id, user?.$id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                                <button

                                className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> {post?.likes.length}</button>
                            </span> */}
                            {/*Comment feature here*/}
      {/*                      <span className="mr-8 flex">*/}
      {/*                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">*/}
      {/*<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />*/}
      {/*                          </svg>*/}

      {/*                          <a href="#"*/}
      {/*                                                className="text-grey-dark hover:no-underline hover:text-red"><i*/}
      {/*                          className="fa fa-heart fa-lg mr-2"></i> {post?.likes.length}</a></span>*/}
                            
                      
                        {/* SVG */}
                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a href="#" className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            {/* HEART */}
                            <div className="flex-1 text-center py-2 m-2">
                                <div className="flex items-center justify-center">
                                <button onClick={() => likePost(post.$id, user?.$id)} className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    {/* <span>1</span> */}
                                </button>
                                <span className="mt-1">{post?.likes.length}</span>
                                </div>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center dark:text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full dark:hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </a>
                            </div>
                        </div>
                        <div><Link href={`/post/${post.$id}`} className="text-teal">Show this thread</Link></div>

                    </div>
                </div>
        </div>)
    )
}
