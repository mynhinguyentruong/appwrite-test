import { getPost } from "#/lib/appwrite/getImageLink";
import PostPage from "./postpage";


export default async function Page({ params: { id }}: { params: { id: string }}) {

    const post = await getPost(id)

    
    return <PostPage post={post} />  
}

