'use client'

import Modal from "#/ui/modal";
import Image from "next/image";

export default async function PostModal({ params }: { params: { id: string } }) {
  console.log(params.id);
  
  // const postRes = await fetch(`/api/post?id=${params.id}`)
  // const post = await postRes.json()

  // const userRes = await fetch(`/api/get`, {
  //   method: 'POST',
  //   body: JSON.stringify({ user_id: post.user_id})
  // })

  // const user = await userRes.json()

  return <Modal id={params.id} />
}