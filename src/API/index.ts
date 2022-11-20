import axios from "axios";
import {UserType} from "../redux/usersPageReducer";
import {ProfileType} from "../redux/mainPageReducer";


type ApiResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

type AuthMeType = {
    id: number
    email: string
    login: string
}

type RequestParamsType = {
    page?: number
    count?: number
    friend?: boolean
    term?: string
}

export type LoginRequestDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}


const ADMIN_API_KEY = "3a0fd058-a035-41ce-a05e-8b1d5cd36226"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": ADMIN_API_KEY
    }
})

export const usersAPI = {
    getUsers(parameters: RequestParamsType = {page: 1, count: 10}) {
        const requestParams = Object.entries(parameters)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")

        return instance.get<UsersResponseType>(`users?${requestParams}`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}/`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}/`)
    },
    updateStatus(status: string) {
        return instance.put<ApiResponseType>(`profile/status/`, {status})
    }
}

export const followAPI = {
    follow(userId: number) {
        return instance.post<ApiResponseType>(`follow/${userId}/`)

    },
    unfollow(userId: number) {
        return instance.delete<ApiResponseType>(`follow/${userId}/`)
    }
}

export const authAPI = {
    me() {
        return instance.get<ApiResponseType<AuthMeType>>('auth/me/')
    },
    login(config: LoginRequestDataType) {
        return instance.post<ApiResponseType<{userId: number}>>('auth/login', config)
    },
    logout() {
        return instance.delete<ApiResponseType>('auth/login')
    }
}