import {NextResponse} from "next/server";

import {account} from "#/lib/appwriteConfig";



export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const secret = searchParams.get('secret')
    if (userId && secret) {
        const promise = account.updateMagicURLSession(userId, secret);

        promise
            .then(response => {
                const {$id} = response
                const promise = account.getSession($id)
                promise
                    .then(getSessionResponse => {
                        console.log("promise in getSession")
                        console.log({getSessionResponse})
                    })
                    .catch(error => {
                        console.log("error in getSession")
                    })
            })
            .catch(error => console.log(error))
    }

    // return session

    return NextResponse.json({name: "Nhi"})
}
