'use client'
import Image from 'next/image'
import { account } from "#/lib/appwriteConfig";
import {useEffect} from "react";





export default  function Home() {

  useEffect(() => {
    const fallbackCookies = localStorage.getItem('cookieFallback');

    if (fallbackCookies) {
      // send req to api that update the cookie
      const cookies = JSON.parse(fallbackCookies)
      const key = Object.keys(cookies)[0]
      const value = cookies[key]
      console.log(`/api/auth?${key}=${value}`)
      fetch(`/api/auth?${key}=${value}`)
          .then(res => console.log(res))
          .catch(err => console.log(err))

        const promise =  account.get()
        promise
            .then(response => {

            })
            .catch(error => console.log(error))
    }

  }, [])

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
       )


}
