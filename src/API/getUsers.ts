import {UserType} from "../redux/UsersPageReducer";
import instance from "./Instance";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}
// TODO: move paremeters. Set page as first parameter, usersCount - as second.
//  UsersCount is almost unnecessary
export const getUsers = (usersCount: number = 10, page: number = 1) =>
    instance.get<UsersResponseType>(`/users?count=${usersCount}&page=${page}`)