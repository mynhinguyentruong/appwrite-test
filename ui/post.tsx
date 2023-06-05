'use client'

import {UserCircleIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useEffect, useState} from "react";
import {databases} from "#/lib/appwriteConfig";
import {Models, Query} from "appwrite";

interface PostProps extends Models.Document {
    content_body: string,
    user_id: string,
    image_url?: string[],
    likes: number
}
interface Owner extends Models.Document {}


export default function Post({post}: {post: PostProps}) {
    // TODO: query userid for a particular to get user image


    const [owner, setOwner] = useState<Owner|{}>({})

    useEffect(() => {
        const { user_id } = post

        const promise = databases.listDocuments('647b675e73a83b821ca7', '647cb553d054c55d41db',[
            Query.equal('user_id', user_id)
        ])

        promise
            .then(res => setOwner(res.documents[0]))
            .catch(err => {
                console.log("Unable to get owner for this post")
                console.log(err)
            })
    },[post])

    return (
        owner && (<div className="flex border-b border-solid border-grey-light">
            <div className="w-1/8 text-right pl-3 pt-3">
                <div><a href="#"><Image width={30} height={30}
                                        src={owner?.user_image} alt="avatar"
                                        className="rounded-full h-12 w-12 mr-2"/></a></div>
            </div>

            <div className="w-7/8 p-3 pl-0">
                <div className="flex justify-between">
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
                    <div className="mb-6">
                        <p className="mb-6">{post?.content_body} </p>
                       {/*Might want to loop through each \n*/}
                       {/* Currently image is not rendered correctly, need to find alter way*/}
                        <div className="flex">
                        {post?.image_url && post?.image_url.map((url, index) => (
                            <p key={index}><a href={url}><Image width={120} height={120} src={url}
                                                  alt="tweet image"
                                                  className="border border-solid border-grey-light rounded-sm"/></a></p>
                        ))}
                        </div>
                    </div>
                    <div className="pb-2">
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> {post?.likes}</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-green"><i
                            className="fa fa-retweet fa-lg mr-2"></i> {post?.likes}</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-red"><i
                            className="fa fa-heart fa-lg mr-2"></i> {post?.likes}</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-teal"><i
                            className="fa fa-envelope fa-lg mr-2"></i></a></span>
                    </div>
                </div>
            </div>
        </div>)
    )
}
