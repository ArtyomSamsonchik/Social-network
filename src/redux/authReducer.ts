type loginUserAT = ReturnType<typeof setUserAuthData>
export type AuthActionsType = loginUserAT

export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    loggedIn: boolean
}

const initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    loggedIn: false
}

const authReducer = (state: AuthDataType = initialState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case "SET-USER-AUTH-DATA":
            return {
                ...state,
                ...action.loginData,
                loggedIn: true
            }
        default:
            return state
    }
}

export default authReducer

export const setUserAuthData = (loginData: Omit<AuthDataType, "loggedIn">) => ({
    type: "SET-USER-AUTH-DATA",
    loginData
}) as const