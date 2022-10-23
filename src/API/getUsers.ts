import {UserType} from "../redux/UsersPageReducer";
import instance from "./instance";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const getUsers = (usersCount: number = 10, page: number = 1) =>
    instance.get<UsersResponseType>(`/users?count=${usersCount}&page=${page}`)