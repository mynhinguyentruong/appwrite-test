import {NextResponse} from "next/server";

import {account} from "#/lib/appwriteConfig";

import sdk from "node-appwrite"
import {cookies} from "next/headers";

if (!process.env.APPWRITE_API_KEY) throw new Error("Provide Appwrite API KEY in local env")
// Init SDK
const client = new sdk.Client();


// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('64749ba6eade18e58a13') // Your project ID
//     .setKey(process.env.APPWRITE_API_KEY) // Your secret API key
// ;
//
// const users = new sdk.Users(client);
// console.log({users})
// const promise = users.listSessions('6479f90459eb835c464e');
//
// promise.then(function (response) {
//    const res = JSON.stringify(response)
//    const data = JSON.parse(res)
//     console.log({res})
// }, function (error) {
//     console.log({error});
// });

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    console.log({searchParams})
    console.log(searchParams.toString())


    return new Response("Set Cookies Success!", {
        status: 200,
        headers: { 'Set-Cookie': `${searchParams.toString()}; SameSite=Strict; HttpOnly`},
    })

}
