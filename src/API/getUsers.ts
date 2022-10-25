import {UserType} from "../redux/UsersPageReducer";
import usersInstance from "./UsersInstance";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const getUsers = (usersCount: number = 10, page: number = 1) =>
    usersInstance.get<UsersResponseType>(`/users?count=${usersCount}&page=${page}`)