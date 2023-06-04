'use client'

import {UserCircleIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useEffect, useState} from "react";
import {databases} from "#/lib/appwriteConfig";

interface PostProps {
    user_name: string,
    user_image?: string,
    user_handle?: string,
    dog_name?: string,
    date: string,
    image_url?: string[]
}

export default function Post() {

    const [fakePost, setFakePost] = useState({})

    useEffect(() => {
        const promise = databases.getDocument('647b675e73a83b821ca7', '647c942f2404bcddaecf', '647cbbf0891391fa83e5')
        promise
            .then(res => {
                setFakePost(res)
                console.log({res})
            })
    },[])

    return (
        <div className="flex border-b border-solid border-grey-light">

            <div className="w-1/8 text-right pl-3 pt-3">
                <div><a href="#"><Image width={30} height={30}
                                        src={fakePost?.user_image} alt="avatar"
                                        className="rounded-full h-12 w-12 mr-2"/></a></div>
            </div>

            <div className="w-7/8 p-3 pl-0">
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold"><a href="#" className="text-black">{fakePost?.user_name}</a></span>
                        <span className="text-grey-dark">{fakePost.user_handle && `@${fakePost?.user_handle}`}</span>
                        <span className="text-grey-dark">&middot;</span>
                        <span className="text-grey-dark">{fakePost?.$createdAt}</span>
                    </div>
                    <div>
                        <a href="#" className="text-grey-dark hover:text-teal"><i
                            className="fa fa-chevron-down"></i></a>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <p className="mb-6">{fakePost?.content_body} </p>
                        <p className="mb-4">Enable/disable modules, focus and group-hover variants, new utilities,
                            and more.</p>
                        <p className="mb-4">Learn more in our upgrade guide:</p>
                        <p className="mb-6"><a href="#" className="text-teal">github.com/tailwind/ta...</a></p>
                        <p><a href="#"><Image width={120} height={120} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet3.jpg"
                                              alt="tweet image"
                                              className="border border-solid border-grey-light rounded-sm"/></a></p>
                    </div>
                    <div className="pb-2">
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> {fakePost.likes}</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-green"><i
                            className="fa fa-retweet fa-lg mr-2"></i> {fakePost.likes}</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-red"><i
                            className="fa fa-heart fa-lg mr-2"></i> {fakePost.likes}</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-teal"><i
                            className="fa fa-envelope fa-lg mr-2"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
