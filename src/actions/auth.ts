import type { User } from "@/types/user";

export default async function authUser(data: User) {
  const userCredentials = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }
  );

  return userCredentials.json()
}

