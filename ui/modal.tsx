'use client'

import { Fragment, useCallback, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (endpoint: string) => fetch(endpoint).then(res => res.json())



export default function Modal({id}: {id: string}) {
  const { data, error: postError, isLoading: postIsLoading } = useSWR(`/api/post?id=${id}`, fetcher)
  const { data: user, error, isLoading } = useSWR(`/api/user?userId=${data?.user_id}`, fetcher)

  console.log({data});
  

  const [open, setOpen] = useState(true)
  

  const cancelButtonRef = useRef(null)
  const router = useRouter()

  const handleClose = useCallback(() => {
    router.back()
  }, [router])

    // const postRes = await fetch(`/api/post?id=${params.id}`)
  // const post = await postRes.json()

  // const userRes = await fetch(`/api/get`, {
  //   method: 'POST',
  //   body: JSON.stringify({ user_id: post.user_id})
  // })

  // const user = await userRes.json()

  return data && user && (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child> 

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Image
                        className="h-8 w-8 rounded-full"
                        width={32}
                        height={32}
                        src={user.user_image}
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {user && user.user_name}
                      </Dialog.Title>
                      <div className="mb-3 w-full mt-2 dark:text-white text-slate-900">
                            {/* {JSON.parse(data?.content_body).split("\n").map((line: string, index: number) => (<p key={index} className="mb-2">{line} </p>))} */}
                            {data?.content_body && JSON.parse(data?.content_body).split("\n").map((line: string, index: number) => (<p key={index} className="mb-2">{line} </p>))}
                           {/*Might want to loop through each \n*/}
                           {/* Currently image is not rendered correctly, need to find alter way*/}
                            <div className="mt-1  gap-1 rounded-3xl overflow-scroll max-h-96">
                            {data?.image_url.length > 0 ? 
                                data?.image_url.length === 1 
                                ? (<div className="md:flex-shrink pr-6 pt-3 overflow-scroll" >
                                <Image width={0} height={0} sizes="100vw" className="rounded-lg object-cover w-full h-64" src={data.image_url[0]} alt="Woman paying for a purchase"/>
                              </div>)
                                : data.image_url?.map((url: string, index: number) => 
                                    (<div key={index} className='overflow-scroll h-36'>
                                        <Image src={url} width={500} height={500}
                                                alt="tweet image"
                                                      className="border border-solid border-grey-light rounded-sm object-cover object-center"/>
                                    </div>
                            )) : (<div></div>)
                            }
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3  inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => window.location.reload()}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="mt-3 mr-2 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-900 sm:mt-0 sm:w-auto"
                    onClick={handleClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
