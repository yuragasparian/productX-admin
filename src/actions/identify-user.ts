import { PublicUser } from "@/types/user";

const identifyUser = async ():Promise<PublicUser> => {
    const user = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return user.json()
}

export default identifyUser