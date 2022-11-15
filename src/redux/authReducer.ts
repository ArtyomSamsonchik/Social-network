import {AppThunk} from "./redux-store";
import {authAPI} from "../API";
import {batch} from "react-redux";
import {getUserProfile} from "./mainPageReducer";

type LoginUserAT = ReturnType<typeof setUserAuthData>
type setLoggingProgressAT = ReturnType<typeof setAuthProgress>
export type AuthActionsType = LoginUserAT | setLoggingProgressAT

export type AuthProgressType = "pending" | "success" | "failure"

export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    authProgress: AuthProgressType
}


const initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    authProgress: "pending"
}

const authReducer = (state: AuthDataType = initialState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case "SET-USER-AUTH-DATA":
            return {
                ...state,
                ...action.loginData,
            }
        case "SET-AUTH-PROGRESS":
            return {
                ...state,
                authProgress: action.authInProgress
            }
        default:
            return state
    }
}


export const setUserAuthData = (loginData: { userId: number, email: string, login: string }) => ({
    type: "SET-USER-AUTH-DATA",
    loginData
}) as const

export const setAuthProgress = (authInProgress: AuthProgressType) => ({
    type: "SET-AUTH-PROGRESS",
    authInProgress
}) as const

export const authorize = (): AppThunk => (dispatch) => {
    authAPI.me().then(({data}) => {
        const {id: userId, login, email} = data.data

        if (data.resultCode === 0) {
            // debugger
            batch(() => {
                dispatch(setUserAuthData({userId, login, email}))
                dispatch(setAuthProgress("success"))
                dispatch(getUserProfile(data.data.id))
            })
        } else {
            dispatch(setAuthProgress("failure"))
        }
    })
}

export default authReducer