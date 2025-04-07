export type User = {
    id: number;
    username: string;
    password: string;
    user_image: string;
}

export type PublicUser = Omit<User, "password">