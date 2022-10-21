export type UserPhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    status?: string
    photos: UserPhotosType
    followed: boolean
}

type UsersPageType = {
    users: UserType[]
}

type FollowUserAT = ReturnType<typeof followUserAC>
type UnFollowUserAT = ReturnType<typeof unfollowUserAC>
type setUsersAT = ReturnType<typeof setUsersAC>
export type UsersPageActionsType = FollowUserAT | UnFollowUserAT | setUsersAT

const initialState: UsersPageType = {
    users: []
}

const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionsType) => {
    switch(action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                    ? user
                    : {...user, followed: true}
                )
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                    ? user
                    : {...user, followed: false}
                )
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}


export const followUserAC = (userId: number) => ({
    type: "FOLLOW",
    userId
}) as const

export const unfollowUserAC = (userId: number) => ({
    type: "UNFOLLOW",
    userId
}) as const

export const setUsersAC = (users: UserType[]) => ({
    type: "SET-USERS",
    users
}) as const

export default usersReducer