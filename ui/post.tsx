'use client'

import {UserCircleIcon} from "@heroicons/react/24/solid";

export default function Post() {

    return (
        <article className="flex max-w-xl flex-col items-start justify-between">
        {/*  Round Ava/Name and Content Comments, Likes ...  */}
            <div className="relative mt-8 flex items-center gap-x-4">
                <UserCircleIcon alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">

                            <span className="absolute inset-0" />
                        Something...

                    </p>
                </div>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                        <span className="absolute inset-0" />
                       Tittle

                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Post Descr</p>
            </div>
        </article>
    )
}
