'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import {account, databases} from "#/lib/appwriteConfig";
import {ID, Permission, Role, Query } from "appwrite";
import Post from "#/ui/post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UiExampleTwo () {


    const [selectedImages, setSelectedImages] = useState([])
    const [imageUrl, setImageUrl] = useState([])
    const [content, setContent] = useState("")
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    function fileChanges(e) {
        setSelectedImages(e.target.files)

    }

    function contentChanges(e) {
        setContent(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        // get current logged in userid
        e.preventDefault()

        const data = {
            date: new Date().toJSON().slice(0, 10),
            content_body: content,
            image_url: imageUrl ?? null,
            user_id: user?.$id
        }
        const promise = databases.createDocument('647b675e73a83b821ca7','647c942f2404bcddaecf',ID.unique(),data)

        promise
            .then(res => {
                console.log("Success add doc")
                console.log(res)
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
        if (selectedImages.length > 0) {
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
        const promise = databases.listDocuments('647b675e73a83b821ca7', '647c942f2404bcddaecf', [
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
    }, [])

    return (
        <>
        <div className="bg-white">
            <ToastContainer

            />


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
        <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
            <h1><a href="#" className="text-black font-bold no-underline hover:underline">St. Clair</a></h1>
            <div className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">@rosehillpark</a>
            </div>

            <div className="mb-4">
                Community Description <a href="#"
                                                                              className="text-teal no-underline hover:underline">@adamwathan</a>, <a
                href="#" className="text-teal no-underline hover:underline">@reinink</a>, <a href="#"
                                                                                             className="text-teal no-underline hover:underline">@davidhemphill</a>,
                and <a href="#" className="text-teal no-underline hover:underline">@steveschoger</a>.
            </div>

            <div className="mb-2"><i className="fa fa-link fa-lg text-grey-darker mr-1"></i><a href="#"
                                                                                               className="text-teal no-underline hover:underline">tailwindcss.com</a>
            </div>
            <div className="mb-4"><i className="fa fa-calendar fa-lg text-grey-darker mr-1"></i><a href="#"
                                                                                                   className="text-teal no-underline hover:underline">Joined
                August 2017</a></div>

            <div className="mb-4">
                <button
                    className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full w-full h-10">Tweet
                    to Tailwind CSS
                </button>
            </div>

            <div className="mb-4"><i className="fa fa-user fa-lg text-grey-dark mr-1"></i><a href="#"
                                                                                             className="text-teal no-underline hover:underline">27
                Followers you know</a></div>



            <div className="mb-4"><i className="fa fa-picture-o fa-lg text-grey-dark mr-1"></i><a href="#"
                                                                                                  className="text-teal">Photos
                and videos</a></div>


        </div>


        <div className="w-full lg:w-1/2 bg-white mb-4">
            <div className="w-7/8 p-3 pl-0 bg-gray-100">

                            <div className="mb-4">
                               <form onSubmit={handleSubmit}>
                                   <textarea
                                       rows={4}
                                       wrap="hard"
                                       placeholder="Nhi, What is happening?!"
                                       name="content_body"
                                       value={content}
                                       onChange={contentChanges}
                                       id="content_body"
                                       className="w-full border-none bg-gray-100 " />
                                   <div className="flex">
                                   {imageUrl && imageUrl.map(url => (
                                       <div key={url}>
                                      <Image src={url} alt={"Uploaded images"} width={50} height={50} />
                                       </div>
                                   ))}
                                   </div>
                                   <input type="file" id="file" name="file" multiple accept="image/*"
                                          onChange={fileChanges}
                                   />
                                   <button>Submit</button>

                               </form>

                            </div>

            </div>
            <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
                <a href="#" className="text-black mr-6 no-underline hover-underline">Tweets</a>
                <a href="#" className="mr-6 text-teal no-underline hover:underline">Tweets &amp; Replies</a>
                <a href="#" className="text-teal no-underline hover:underline">Media</a>
            </div>
            {posts && posts.map(post => (
                <Post key={post.$id} post={post}/>
            ))}

            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><i className="fa fa-thumb-tack text-teal mr-2"></i></div>
                    <div><a  href="#"><Image width={30} height={30} className="rounded-full h-12 w-12 mr-4"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg" alt="avatar"
                        /></a></div>
                </div>
                <div className="w-7/8 p-3 pl-0">
                    <div className="text-xs text-grey-dark">Pinned Tweet</div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">Tailwind CSS</a></span>
                            <span className="text-grey-dark mx-1">@tailwindcss</span>
                            <span className="text-grey-dark mx-1">&middot;</span>
                            <span className="text-grey-dark mx-1">15 Dec 2017</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i
                                className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4">
                            <p className="mb-6">🎉 Tailwind CSS v0.4.0 is out!</p>
                            <p className="mb-6">Makes `apply` more useful when using !important utilities, and includes
                                an improved default color palette:</p>
                            <p className="mb-4"><a href="#" className="text-teal">github.com/tailwindcss/ta...</a></p>
                            <p><a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg"
                                                alt="tweet image"
                                                className="border border-solid border-grey-light rounded-sm"/></a></p>
                        </div>
                    </div>

                    <div className="pb-2">
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                            className="fa fa-comment fa-lg mr-2"></i> 9</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-green"><i
                            className="fa fa-retweet fa-lg mr-2"></i> 29</a></span>
                        <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-red"><i
                            className="fa fa-heart fa-lg mr-2"></i> 135</a></span>
                        <span className="mr-8"><a href="#"
                                                  className="text-grey-dark hover:no-underline hover:text-teal"><i
                            className="fa fa-envelope fa-lg mr-2"></i></a></span>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-solid border-grey-light">

                <div className="w-1/8 text-right pl-3 pt-3 mr-2">
                    <div><i className="fa fa-retweet text-grey-dark mr-2"></i></div>
                    <div><a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_adam.jpg"
                                          alt="avatar" className="rounded-full h-12 w-12 mr-4"/></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0">
                    <div className="text-xs text-grey-dark">Tailwind CSS Retweeted</div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">Adam Wathan</a></span>
                            <span className="text-grey-dark">@adamwathan</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">7 Dec 2017</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i
                                className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6">💥 Check out this Slack clone built with <a href="#"
                                                                                           className="text-teal">@tailwindcss</a> using
                                no custom CSS and just the default configuration:</p>
                            <p className="mb-4"><a href="#"
                                                   className="text-teal">https://codepen.io/adamwathan/pen/JOQWVa...</a>
                            </p>
                            <p className="mb-6">(based on some work <a href="#"
                                                                       className="text-teal">@Killgt</a> started for <a
                                href="#" className="text-teal">tailwindcomponents.com</a> !)</p>
                            <p><a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet2.jpg"
                                                alt="tweet image"
                                                className="border border-solid border-grey-light rounded-sm "/></a></p>
                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> 19</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-green"><i
                                className="fa fa-retweet fa-lg mr-2"></i> 56</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-red"><i
                                className="fa fa-heart fa-lg mr-2"></i> 247</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-teal"><i
                                className="fa fa-envelope fa-lg mr-2"></i></a></span>
                        </div>

                        <div><a href="#" className="text-teal">Show this thread</a></div>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-solid border-grey-light">

                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><a href="#"><Image width={30} height={30}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg" alt="avatar"
                        className="rounded-full h-12 w-12 mr-2"/></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0">
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">Tailwind CSS</a></span>
                            <span className="text-grey-dark">@tailwindcss</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">1 Dec 2017</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i
                                className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6">🎉 Tailwind CSS v0.3.0 is here!</p>
                            <p className="mb-4">Enable/disable modules, focus and group-hover variants, new utilities,
                                and more.</p>
                            <p className="mb-4">Learn more in our upgrade guide:</p>
                            <p className="mb-6"><a href="#" className="text-teal">github.com/tailwind/ta...</a></p>
                            <p><a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet3.jpg"
                                                alt="tweet image"
                                                className="border border-solid border-grey-light rounded-sm"/></a></p>
                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> 6</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-green"><i
                                className="fa fa-retweet fa-lg mr-2"></i> 74</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-red"><i
                                className="fa fa-heart fa-lg mr-2"></i> 206</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-teal"><i
                                className="fa fa-envelope fa-lg mr-2"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-solid border-grey-light">

                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><i className="fa fa-retweet text-grey-dark mr-2"></i></div>
                    <div><a href="#"><Image width={30} height={30}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_egghead.jpg" alt="avatar"
                        className="rounded-full h-12 w-12 mr-2"/></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0">
                    <div className="text-xs text-grey-dark">Tailwind CSS Retweeted</div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">egghead.io</a></span>
                            <span className="text-grey-dark">@eggheadio</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">29 Nov 2017</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i
                                className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6">Create a Responsive Card Component by Composing Tailwind&apos;s Utility
                                Classes - <a href="#" className="text-teal">#html</a> lesson by <a href="#"
                                                                                                   className="text-teal">@simonswiss</a>
                            </p>
                            <div className="flex border border-solid border-grey rounded">
                                <div className="w-1/4">
                                    <Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet4.jpg"
                                         alt="image"/>
                                </div>
                                <div className="w-3/4 p-3">
                                    <div className="font-bold mb-1">egghead Lesson: Abstract utility classes to ...
                                    </div>
                                    <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Temporibus voluptate tempore itaque culpa hic qui nostrum, minus harum
                                        cupiditate a voluptatibus.</p>
                                        <div className="text-grey-dark">egghead.io</div>
                                </div>
                            </div>

                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-blue-light"><i
                                className="fa fa-comment fa-lg mr-2"></i> 2</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-green"><i
                                className="fa fa-retweet fa-lg mr-2"></i> 8</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-red"><i
                                className="fa fa-heart fa-lg mr-2"></i> 24</a></span>
                            <span className="mr-8"><a href="#"
                                                      className="text-grey-dark hover:no-underline hover:text-teal"><i
                                className="fa fa-envelope fa-lg mr-2"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full lg:w-1/4 pl-4">
            <div className="bg-white p-3 mb-3">
                <div>
                    <span className="text-lg font-bold">Who to follow</span>
                    <span>&middot;</span>
                    <span><a href="#" className="text-teal text-xs">Refresh</a></span>
                    <span>&middot;</span>
                    <span><a href="#" className="text-teal text-xs">View All</a></span>
                </div>

                <div className="flex border-b border-solid border-grey-light">
                    <div className="py-2">
                        <a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow1.jpg"
                                         alt="follow1" className="rounded-full h-12 w-12"/></a>
                    </div>
                    <div className="pl-2 py-2 w-full">
                        <div className="flex justify-between mb-1">
                            <div>
                                <a href="#" className="font-bold text-black">Nuxt.js</a> <a href="#"
                                                                                            className="text-grey-dark">@nuxt_js</a>
                            </div>

                            <div>
                                <a href="#" className="text-grey hover:text-grey-dark"><i
                                    className="fa fa-times"></i></a>
                            </div>
                        </div>
                        <div>
                            <button
                                className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex border-b border-solid border-grey-light">
                    <div className="py-2">
                        <a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow2.jpg"
                                         alt="follow1" className="rounded-full h-12 w-12"/></a>
                    </div>
                    <div className="pl-2 py-2 w-full">
                        <div className="flex justify-between mb-1">
                            <div>
                                <a href="#" className="font-bold text-black">Laracon EU</a> <a href="#"
                                                                                               className="text-grey-dark">@LaraconEU</a>
                            </div>

                            <div>
                                <a href="#" className="text-grey hover:text-grey-dark"><i
                                    className="fa fa-times"></i></a>
                            </div>
                        </div>
                        <div>
                            <button
                                className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex border-b border-solid border-grey-light">
                    <div className="py-2">
                        <a href="#"><Image width={30} height={30} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow3.jpg"
                                         alt="follow1" className="rounded-full h-12 w-12"/></a>
                    </div>
                    <div className="pl-2 py-2 w-full">
                        <div className="flex justify-between mb-1">
                            <div>
                                <a href="#" className="font-bold text-black">Laracon US</a> <a href="#"
                                                                                               className="text-grey-dark">@LaraconUS</a>
                            </div>

                            <div>
                                <a href="#" className="text-grey hover:text-grey-dark"><i
                                    className="fa fa-times"></i></a>
                            </div>
                        </div>
                        <div>
                            <button
                                className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex border-b border-solid border-grey-light">
                    <div className="py-4">
                        <a href="#" className=" p-1"><Image width={30} height={30}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_outlook.png" alt="follow1"
                            className="rounded h-6 w-6"/></a>
                    </div>
                    <div className="pl-2 py-2 w-full">
                        <div className="flex justify-between">
                            <div>
                                <a href="#" className="font-bold text-black">Find people you know</a>
                            </div>
                        </div>
                        <div className="text-xs">
                            Import your contacts from Outlook
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <a href="#" className="text-teal text-xs">Connect other address book</a>
                </div>
            </div>

            <div className="bg-white p-3 mb-3">
                <div className="mb-3">
                    <span className="text-lg font-bold">Trends for you</span>
                    <span>&middot;</span>
                    <span><a href="#" className="text-teal text-xs">Change</a></span>
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
                <span className="mr-2"><a href="#" className="text-grey-darker">&copy; 2018 Twitter</a></span>
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
