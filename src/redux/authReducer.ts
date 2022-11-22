import {AppThunk} from "./redux-store";
import {authAPI, LoginRequestDataType} from "../API";
import {batch} from "react-redux";

type LoginUserAT = ReturnType<typeof setUserAuthData>
type setAuthProgressAT = ReturnType<typeof setAuthProgress>
export type AuthActionsType = LoginUserAT | setAuthProgressAT

//TODO: Add more statuses to handle app initialization behavior, e.g. "login_error"
export type AuthProgressType = "pending" | "loggedIn" | "loggedOut" | "loginFailure"

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

const authReducer = (state = initialState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case "SET-AUTH-DATA":
            return {...state, ...action.loginData}
        case "SET-AUTH-PROGRESS":
            return {...state, authProgress: action.authProgress}
        default:
            return state
    }
}


export const setUserAuthData = (loginData: Omit<AuthDataType, "authProgress">) => ({
    type: "SET-AUTH-DATA",
    loginData
}) as const

export const setAuthProgress = (authProgress: AuthProgressType) => ({
    type: "SET-AUTH-PROGRESS",
    authProgress
}) as const

export const authorize = (): AppThunk => (dispatch) => {
    authAPI.me().then(({data}) => {
        const {id: userId, login, email} = data.data

        if (data.resultCode === 0) {
            batch(() => {
                dispatch(setUserAuthData({userId, login, email}))
                dispatch(setAuthProgress("loggedIn"))
            })
        } else {
            dispatch(setAuthProgress("loginFailure"))
        }
    })
}

export const login = (config: LoginRequestDataType): AppThunk => dispatch => {
    dispatch(setAuthProgress("pending"))

    authAPI.login(config).then(({data}) => {
        if (data.resultCode === 0) dispatch(authorize())
    })
}

export const logout = (): AppThunk => dispatch => {
    authAPI.logout().then(({data}) => {
        if (data.resultCode === 0) {
            batch(() => {
                dispatch(setUserAuthData({userId: null, login: null, email: null}))
                dispatch(setAuthProgress("loggedOut"))
            })
        }
    })
}

export default authReducer