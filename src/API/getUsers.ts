import instance from "./index";
import {UserType} from "../redux/UsersPageReducer";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const getUsers = () => instance.get<UsersResponseType>("/users")