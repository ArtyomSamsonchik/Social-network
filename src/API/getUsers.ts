import {UserType} from "../redux/usersPageReducer";
import instance from "./Instance";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

type RequestParameters = {
    page?: number
    count?: number
    friend?: boolean
    term?: string
}

const initParameters: RequestParameters = {
    page: 1,
    count: 10
}

export const getUsers = (parameters: RequestParameters = initParameters) => {
    const requestParams = Object.entries(parameters)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")

    return instance.get<UsersResponseType>(`users?${requestParams}`)
}
