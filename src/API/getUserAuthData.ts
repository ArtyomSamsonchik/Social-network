import instance from "./Instance";

type UserAuthResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
}

export const getUserAuthData = () => instance.get<UserAuthResponseType>('auth/me/')