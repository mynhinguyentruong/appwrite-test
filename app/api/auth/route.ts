if (!process.env.APPWRITE_API_KEY)
  throw new Error("Provide Appwrite API KEY in local env");

// we can do this as an alternative if browser reject 3rd party cookie setting
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log({ searchParams });
  console.log(searchParams.toString());

  return new Response("Set Cookies Success!", {
    status: 200,
    headers: {
      "Set-Cookie": `${searchParams.toString()}; SameSite=Strict; HttpOnly`,
    },
  });
}
