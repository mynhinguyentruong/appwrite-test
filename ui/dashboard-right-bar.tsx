// TODO: Moving this component to server component

// Move the dashboard page to server

import Image from "next/image";
import Dog from '#/public/dog_one.jpg';
import Link from "next/link";
import { getImageLink } from "#/lib/appwrite/appwriteMethods"


export default function DashboardRightBar() {
//   const data = await getImageLink()
    const data: string[] = []

    return (
        <div className="w-full lg:w-1/4 pl-4 ">

            <div className=" p-3 mb-3">
                <div className="mb-3">
                    <span className="text-lg font-bold">Media</span>
                </div>
                <div className="grid grid-rows-1 gap-1 rounded-3xl overflow-scroll">
                    {data?.slice(0,2).map((url: string, index: number) => ( 
                        <div key={index} className="overflow-hidden">
                            <Image  width={300} height={300} src={url} alt="dog image"/>
                        </div>
                    ))}

                </div>

                <Link className="block w-full  text-center dark:bg-blue-400 dark:text-white mt-3 p-3 rounded-3xl bg-slate-200 font-bold text-blue-400" href='/media'> See all</Link>

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
    )
}
