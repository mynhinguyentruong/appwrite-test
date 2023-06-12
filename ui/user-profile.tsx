'use client'

import Image from "next/image"
import { databases } from "#/lib/appwriteConfig"
import { Query, Models } from "appwrite"
import { useEffect, useState } from "react"

export default function UserProfile({user}: {user: Models.User<Models.Preferences> | Models.Session}) {
    const [owner, setOwner] = useState<Models.Document | null>()



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
    }, [])



    return (
        <div className="flex-shrink-0 flex hover:bg-gray-00 rounded-full p-4 mt-12 mr-2">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div className="">
                <Image width={40} height={40} className="inline-block h-10 w-10 rounded-full" src={owner?.image_url} alt="" />
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium dark:text-white text-slate-900">
                  Sonali Hirave
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @ShonaDesign
                </p>
              </div>
            </div>
          </a>
        </div>
    )
}