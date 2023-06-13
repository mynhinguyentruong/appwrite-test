import ProfileForm from "#/ui/profile-form"
import { redirect } from "next/navigation"

async function getData() {
    const res = await fetch('https://appwrite-test-nhi-ymihn.vercel.app/api/user?userId=647b981f5d0ead5a24d8')

    if (!res.ok) {
        return undefined
    }

    return res.json()
}

export default async function ProfilePage() {
    const user = await getData()
    console.log({user});
    

    if (!user) redirect('/login')

    return (
        <ProfileForm />
    )
}