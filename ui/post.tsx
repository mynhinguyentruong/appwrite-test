'use client'

import {UserCircleIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useEffect, useState} from "react";
import {databases, storage} from "#/lib/appwriteConfig";
import {Models, Query} from "appwrite";

interface PostProps extends Models.Document {
    content_body: string,
    user_id: string,
    likes: number
}



export default function Post({post, user}: {post: Models.Document, }) {

    const [owner, setOwner] = useState<Models.Document | null>(null)
    const [imageUrls, setImageUrls] = useState<string[] | null>(null)

    const likePost = async () => {
        const isAlreadyLiked = post.likes.some(userId => userId === user.$id)
        if (isAlreadyLiked) {
            // remove the userId from the likes array
            const promise = databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_POST_COLLECTION_ID, post.$id, {
                likes: post.likes.filter(userId => userId !== user.$id)
            })

            promise.then(res => console.log("doc updated")).catch(err => console.log("error update likes attr"))
        }

        if (!isAlreadyLiked) {
            // add the userId
            const currentLikes = [...post.likes]
            currentLikes.push(user.$id)
            const promise = databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_POST_COLLECTION_ID, post.$id, {
                likes: currentLikes
            })
        }
    }

    useEffect(() => {
        const { user_id, $id, hasPhoto } = post

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
        console.log({hasPhoto})
        if (hasPhoto) {
            const filePromise = storage.listFiles($id)

            filePromise
                .then(res => {
                    const array = res.files.map(file => `https://cloud.appwrite.io/v1/storage/buckets/${$id}/files/${file.$id}/view?project=64749ba6eade18e58a13`)
                    setImageUrls(array)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    },[post])

    return (
        owner && (
            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8  pl-3 pt-3 ">
                    <div><a href="#"><Image width={30} height={30}
                                            src={owner?.user_image} alt="avatar"
                                            className="rounded-full sm:h-12 sm:w-12 mr-2"/></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0 ">
                    <div className="flex justify-between w-full">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">{owner?.user_name}</a></span>
                            <span className="text-grey-dark mx-1">{owner?.user_handle && `@${owner?.user_handle}`}</span>
                            <span className="text-grey-dark mx-1">&middot;</span>
                            <span className="text-grey-dark mx-1">{post?.$createdAt.slice(0,10)}</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i
                                className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6 w-full">
                            <p className="mb-6">{post?.content_body} </p>
                           {/*Might want to loop through each \n*/}
                           {/* Currently image is not rendered correctly, need to find alter way*/}
                            <div className="mt-1 grid grid-cols-2 gap-1 rounded-3xl overflow-scroll max-h-96">
                            {imageUrls && imageUrls?.map((url: string, index: number) => (
                                <div key={index} className='overflow-scroll h-36'>
                               <Image src={url} width={500} height={500}
                                                      alt="tweet image"
                                                      className="border border-solid border-grey-light rounded-sm object-cover object-center"/>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="pb-2 flex">
                            <span className="mr-8 flex hover:cursor-pointer"
                                  onClick={likePost}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                                <button

                                className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> {post?.likes.length}</button>
                            </span>
                            {/*Comment feature here*/}
      {/*                      <span className="mr-8 flex">*/}
      {/*                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">*/}
      {/*<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />*/}
      {/*                          </svg>*/}

      {/*                          <a href="#"*/}
      {/*                                                className="text-grey-dark hover:no-underline hover:text-red"><i*/}
      {/*                          className="fa fa-heart fa-lg mr-2"></i> {post?.likes.length}</a></span>*/}
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-teal"><i
                                className="fa fa-envelope fa-lg mr-2"></i></a>
                            </span>
                        </div>
                        <div><a href="#" className="text-teal">Show this thread</a></div>

                    </div>
                </div>
        </div>)
    )
}
