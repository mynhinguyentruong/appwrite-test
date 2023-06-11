export default function PostPage({ params: { id }}) {
    
    return (
        
<div className="dark:bg-gray-900 bg-white">
        <div className="flex">

            <div className="w-2/5 dark:text-white text-slate-900 h-12 pl-32 py-4 h-auto">
                {/* <!--left menu--> */}
                <svg fill="white" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 48.839 48.839" xmlSpace="preserve">
                    <g>
                <path d="M39.041,36.843c2.054,3.234,3.022,4.951,3.022,6.742c0,3.537-2.627,5.252-6.166,5.252
                    c-1.56,0-2.567-0.002-5.112-1.326c0,0-1.649-1.509-5.508-1.354c-3.895-0.154-5.545,1.373-5.545,1.373
                    c-2.545,1.323-3.516,1.309-5.074,1.309c-3.539,0-6.168-1.713-6.168-5.252c0-1.791,0.971-3.506,3.024-6.742
                    c0,0,3.881-6.445,7.244-9.477c2.43-2.188,5.973-2.18,5.973-2.18h1.093v-0.001c0,0,3.698-0.009,5.976,2.181
                    C35.059,30.51,39.041,36.844,39.041,36.843z M16.631,20.878c3.7,0,6.699-4.674,6.699-10.439S20.331,0,16.631,0
                    S9.932,4.674,9.932,10.439S12.931,20.878,16.631,20.878z M10.211,30.988c2.727-1.259,3.349-5.723,1.388-9.971
                    s-5.761-6.672-8.488-5.414s-3.348,5.723-1.388,9.971C3.684,29.822,7.484,32.245,10.211,30.988z M32.206,20.878
                    c3.7,0,6.7-4.674,6.7-10.439S35.906,0,32.206,0s-6.699,4.674-6.699,10.439C25.507,16.204,28.506,20.878,32.206,20.878z
                    M45.727,15.602c-2.728-1.259-6.527,1.165-8.488,5.414s-1.339,8.713,1.389,9.972c2.728,1.258,6.527-1.166,8.488-5.414
                    S48.455,16.861,45.727,15.602z"/>
                </g>
                </svg>              
              <nav className="mt-5 px-2">
                <a href="#" className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full text-blue-300">
              <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
              </svg>
              Home
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
              
              Dashboard
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
             Notifications
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Messages
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              Bookmarks
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Lists
            </a>
                <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Profile
            </a>
                <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              More
            </a>
                
                <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-700 dark:text-white text-slate-900 font-bold py-2 px-4 rounded-full">
                Tweet
              </button>
          </nav>
              
        <div className="flex-shrink-0 flex hover:bg-gray-00 rounded-full p-4 mt-12 mr-2">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div className="">
                <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
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
              
        </div>

            <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
                {/* <!--middle wall--> */}
             
                <div className="flex">
                    <div className="flex-1 m-2">
                        <h2 className="px-4 py-2 text-xl font-semibold dark:text-white text-slate-900">Home</h2>
                    </div>
                    <div className="flex-1 px-4 py-2 m-2">
                        <a href="" className=" text-2xl font-medium rounded-full dark:text-white text-slate-900 hover:border hover:border-gray-800 hover:text-blue-300 float-right">
                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><g><path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g>
                            </svg>
                        </a>
                    </div>
                </div>

                <hr className="border-gray-600"/>
                {/* <!--middle creat tweet--> */}
                <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea className=" bg-transparent text-gray-400 font-medium text-lg w-full" rows={2} cols={50} placeholder="What's happening?"></textarea>
                    </div>                    
                </div>
                {/* <!--middle creat tweet below icons--> */}
                <div className="flex">
                    <div className="w-10"></div>

                    <div className="w-64 px-2">
                        
                        <div className="flex items-center">
                            <div className="flex-1 text-center px-1 py-1 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                  </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <button className="bg-gray-400 mt-5 hover:bg-gray-600 dark:text-white text-slate-900 font-bold py-2 px-8 rounded-full mr-8 float-right">
                            Tweet
                          </button>
                    </div>
                </div>

                <hr className="border-gray-500 border-4"/>

                
            <div>
            </div>



            {/* <!--first tweet start--> */}
            <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium dark:text-white text-slate-900">
                        Sonali Hirave 
                        <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @ShonaDesign . 16 April
                          </span>
                           </p>
                    </div>
                  </div>
                </a>
            </div>
            <div className="pl-16">
                <p className="text-base width-auto font-medium dark:text-white text-slate-900 flex-shrink">
                  Day 07 of the challenge <span className="text-blue-400">#100DaysOfCode</span> 
                  I was wondering what I can do with <span className="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
                  [07/100]
                  <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
                </p>


                <div className="flex">
                    <div className="w-full">
                        
                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                
                </div>
                
              </div>
              <hr className="border-gray-600"/>

                {/* <!--second tweet--> */}

              <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium dark:text-white text-slate-900">
                        Sonali Hirave 
                        <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @ShonaDesign . 16 April
                          </span>
                           </p>
                    </div>
                  </div>
                </a>
            </div>


            <div className="pl-16">
                <p className="text-base width-auto font-medium dark:text-white text-slate-900 flex-shrink">
                  Day 07 of the challenge <span className="text-blue-400">#100DaysOfCode</span> 
                  I was wondering what I can do with <span className="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
                  [07/100]
                  <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
                </p>

                <div className="md:flex-shrink pr-6 pt-3 overflow-hidden" >
                    <img className="rounded-lg object-cover w-full h-64" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"/>
                  </div>
                <div className="flex">
                    <div className="w-full">
                        
                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                
                </div>
                
              </div>
              <hr className="border-gray-600"/>




              {/* <!--third tweet--> */}

              <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium dark:text-white text-slate-900">
                        Sonali Hirave 
                        <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @ShonaDesign . 16 April
                          </span>
                           </p>
                    </div>
                  </div>
                </a>
            </div>
            <div className="pl-16">
                <p className="text-base width-auto font-medium dark:text-white text-slate-900 flex-shrink">
                  Day 07 of the challenge <span className="text-blue-400">#100DaysOfCode</span> 
                  I was wondering what I can do with <span className="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
                  [07/100]
                  <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
                </p>

        
                <div className="flex">
                    <div className="w-full">
                        
                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                            </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                
                </div>
                
              </div>
              <hr className="border-gray-600"/>

        </div>


            <div className="w-2/5 h-12">
                {/* <!--right menu--> */}

                <div className="relative text-gray-300 w-80 p-5 pb-0 mr-16">
                    <button type="submit" className="absolute ml-4 mt-3 mr-4">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                      </button>

                    <input type="search" name="search" placeholder="Search Twitter" className="bg-gray-800 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"/>
                    
                </div>
        


                    {/* <!--second-trending tweet section--> */}
                <div className="max-w-sm rounded-lg bg-gray-800 overflow-hidden shadow-lg m-4 mr-20">
                    <div className="flex">
                        <div className="flex-1 m-2">
                            <h2 className="px-4 py-2 text-xl w-48 font-semibold dark:text-white text-slate-900">Germany trends</h2>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full dark:text-white text-slate-900 hover:bg-gray-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </a>
                        </div>
                    </div>

    
                    <hr className="border-gray-600"/>

                        {/* <!--first trending tweet--> */}
                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">1 . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold dark:text-white text-slate-900">#Microsoft363</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,466 Tweets</p>
                            
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                        </div>
                    </div>
                    <hr className="border-gray-600"/>

                    {/* <!--second trending tweet--> */}

                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">2 .  Politics . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold dark:text-white text-slate-900">#HI-Fashion</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">8,464 Tweets</p>
                            
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                        </div>
                    </div>
                    <hr className="border-gray-600"/>

                    {/* <!--third trending tweet--> */}

                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">3 .  Rock . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold dark:text-white text-slate-900">#Ferrari</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,586 Tweets</p>
                            
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                        </div>
                    </div>
                    <hr className="border-gray-600"/>

                    {/* <!--forth trending tweet--> */}

                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">4 . Auto Racing . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold dark:text-white text-slate-900">#vettel</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">9,416 Tweets</p>
                            
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                        </div>
                    </div>
                    <hr className="border-gray-600"/>

                    {/* <!--show more--> */}

                    <div className="flex">
                        <div className="flex-1 p-4">
                            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>  
                        </div>
                    </div>
                
                </div>


                {/* <!--third-people suggetion to follow section--> */}
                
                <div className="max-w-sm rounded-lg bg-gray-800 overflow-hidden shadow-lg m-4 mr-20">
                    <div className="flex">
                        <div className="flex-1 m-2">
                            <h2 className="px-4 py-2 text-xl w-48 font-semibold dark:text-white text-slate-900">Who to follow</h2>
                        </div>
                    </div>

    
                    <hr className="border-gray-600"/>

                        {/* <!--first person who to follow-->  */}
                        
                    <div className="flex flex-shrink-0">
                        <div className="flex-1 ">
                            <div className="flex items-center w-48">
                                <div>
                                  <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                </div>
                                <div className="ml-3 mt-3">
                                  <p className="text-base leading-6 font-medium dark:text-white text-slate-900">
                                    Sonali Hirave
                                  </p>
                                  <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                    @ShonaDesign
                                  </p>
                                </div>
                              </div>
                            
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" float-right">
                                <button className="bg-transparent hover:bg-gray-500 dark:text-white text-slate-900 font-semibold hover:dark:text-white text-slate-900 py-2 px-4 border border-white hover:border-transparent rounded-full">
                                    Follow
                                  </button>  
                            </a>
                            
                        </div>
                    </div>
                    <hr className="border-gray-600"/>

                    {/* <!--second person who to follow-->  */}
                        
                    <div className="flex flex-shrink-0">
                        <div className="flex-1 ">
                            <div className="flex items-center w-48">
                                <div>
                                  <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                </div>
                                <div className="ml-3 mt-3">
                                  <p className="text-base leading-6 font-medium dark:text-white text-slate-900">
                                    Sonali Hirave
                                  </p>
                                  <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                    @ShonaDesign
                                  </p>
                                </div>
                              </div>
                            
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" float-right">
                                <button className="bg-transparent hover:bg-gray-500 dark:text-white text-slate-900 font-semibold hover:dark:text-white text-slate-900 py-2 px-4 border border-white hover:border-transparent rounded-full">
                                    Follow
                                  </button>  
                            </a>
                            
                        </div>
                    </div>

                    <hr className="border-gray-600"/>

                   

                    {/* <!--show more--> */}

                    <div className="flex">
                        <div className="flex-1 p-4">
                            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>  
                        </div>
                    </div>
                
                </div>

            <div className="flow-root m-6 inline">
                <div className="flex-1">
                    <a href="#">
                    <p className="text-sm leading-6 font-medium text-gray-500">Terms Privacy Policy Cookies Imprint Ads info</p>
                  	</a>
           		 </div>
                <div className="flex-2">
                    <p className="text-sm leading-6 font-medium text-gray-600"> © 2020 Twitter, Inc.</p>
                </div>
                </div>
        </div>

    </div>
        
    </div>
    )
}