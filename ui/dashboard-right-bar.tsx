import Image from "next/image";
import Dog from '#/public/dog_one.jpg';
import Link from "next/link";


export default function DashboardRightBar() {

    return (
        <div className="w-full lg:w-1/4 pl-4 ">

            <div className=" p-3 mb-3">
                <div className="mb-3">
                    <span className="text-lg font-bold">Media</span>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-1 rounded-3xl overflow-scroll">
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
                    <Image width={500} height={500} src={Dog} alt="dog image"/>
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