import {AppThunk} from "./redux-store";
import {authAPI, LoginRequestDataType} from "../API";

type LoginUserAT = ReturnType<typeof setUserAuthData>
export type AuthActionsType = LoginUserAT

//TODO: Add more statuses to handle app behavior, e.g. "login_error"
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
            return {
                ...state,
                ...action.loginData,
            }
        default:
            return state
    }
}


export const setUserAuthData = (loginData: AuthDataType) => ({
    type: "SET-AUTH-DATA",
    loginData
}) as const

export const authorize = (): AppThunk => (dispatch) => {
    authAPI.me().then(({data}) => {
        const {id: userId, login, email} = data.data

        if (data.resultCode === 0) {
            dispatch(setUserAuthData({userId, login, email, authProgress: "loggedIn"}))
        } else {
            dispatch(setUserAuthData({userId, login, email, authProgress: "loginFailure"}))
        }
    })
}

//TODO: Maybe request profile instead of .me() request?
export const login = (config: LoginRequestDataType, resolve: (value?: any) => void): AppThunk => dispatch => {
    authAPI.login(config).then(({data}) => {
        if (data.resultCode === 0) dispatch(authorize())
    })
}

export const logout = (): AppThunk => dispatch => {
    authAPI.logout().then(({data}) => {
        if (data.resultCode === 0) {
            dispatch(setUserAuthData({
                userId: null,
                login: null,
                email: null,
                authProgress: "loggedOut"
            }))
        }
    })
}

export default authReducer