'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { MutableRefObject } from "react";


export default function DashboardLeftBar({inputRef}: {inputRef: any}) {
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname === '/dashboard') {
      inputRef ?? inputRef.current.focus()
    }
  }

    return (
        <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
            {/* Foot SVG */}
            <svg className="fill-current" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
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
            {/* Navigation */}
            <nav className="mt-5 px-2">
                <Link href="/" className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full">
                  <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
                  </svg>
                Home
                </Link>
                <Link href="/dashboard" className={clsx((pathname === '/dashboard') && 'text-blue-300', ' mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-300 hover:text-blue-300')}>
                  <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
                  
                  Dashboard
                </Link>
              
                <Link href="/media" className={clsx((pathname === '/media') && 'text-blue-300', ' mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-300 hover:text-blue-300')}>
                  <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  Media
                </Link>
                    <Link href="/profile" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-300 hover:text-blue-300">
                  <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  Profile
                </Link>
                    <Link href="/more" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:border hover:border-gray-300 hover:text-blue-300">
                  <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  More
                </Link>
                
                <button
                onClick={() => inputRef.current.focus()} 
                className="bg-blue-400 text-white w-48 mt-5 hover:bg-blue-500 text-slate-900 font-bold py-2 px-4 rounded-full">
                Tweet
              </button>
          </nav>
        {/* Profile Image */}
        {/* <UserProfile user={user} /> */}
        
        </div>
    )
}
