import { User } from "./user"

export type MessageResponse = {
    success:boolean,
    message:string,
    userData?:User
}