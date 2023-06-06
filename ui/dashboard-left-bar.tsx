export default function DashboardLeftBar() {

    return (
        <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
            <h1><a href="#" className="text-black font-bold no-underline hover:underline">St. Clair</a></h1>
            <div className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">@rosehillpark</a>
            </div>

            <div className="mb-4">
                For dog owners that frequent the reservoir at David A. Balfour Park, near Yonge and St. Clair.
            </div>
            <div className="mb-4"><i className="fa fa-calendar fa-lg text-grey-darker mr-1"></i><a href="#"
                                                                                                   className="text-teal no-underline hover:underline">Created
                in June 2023</a></div>
        </div>
    )
}
