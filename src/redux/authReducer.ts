type loginUserAT = ReturnType<typeof loginUser>
type ActionsType = loginUserAT

export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
}

const initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state: AuthDataType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "LOGIN-USER":
            return {
                ...state,
                ...action.loginData
            }
        default:
            return state
    }
}

export default authReducer

const loginUser = (loginData: AuthDataType) => ({
    type: "LOGIN-USER",
    loginData
}) as const