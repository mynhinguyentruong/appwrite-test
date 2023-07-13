import { getPost } from "#/lib/appwrite/appwriteMethods";
import PostPage from "./postpage";


export default async function Page({ params: { id }}: { params: { id: string }}) {

    const post = await getPost(id)

    
    return <PostPage post={post} />  
}

