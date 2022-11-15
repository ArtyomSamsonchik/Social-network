import {AppThunk} from "./redux-store";
import {authAPI} from "../API";
import {batch} from "react-redux";

type LoginUserAT = ReturnType<typeof setUserAuthData>
type setLoggingProgressAT = ReturnType<typeof setAuthProgress>
export type AuthActionsType = LoginUserAT | setLoggingProgressAT

export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    loggedIn: boolean
    authInProgress: boolean
}


const initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    loggedIn: false,
    authInProgress: true
}

const authReducer = (state: AuthDataType = initialState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case "SET-USER-AUTH-DATA":
            return {
                ...state,
                ...action.loginData,
                loggedIn: true
            }
        case "SET-AUTH-PROGRESS":
            return {
                ...state,
                authInProgress: action.authInProgress
            }
        default:
            return state
    }
}


export const setUserAuthData = (loginData: { userId: number, email: string, login: string }) => ({
    type: "SET-USER-AUTH-DATA",
    loginData
}) as const

export const setAuthProgress = (authInProgress: boolean) => ({
    type: "SET-AUTH-PROGRESS",
    authInProgress
}) as const

export const authorize = (): AppThunk => (dispatch) => {
    authAPI.me().then(({data}) => {
        const {id: userId, login, email} = data.data

        if (data.resultCode === 0) {
            batch(() => {
                dispatch(setUserAuthData({userId, login, email}))
                dispatch(setAuthProgress(false))
            })
        }
    })
}

export default authReducer