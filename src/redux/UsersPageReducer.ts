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

type FollowUserAT = ReturnType<typeof followUserAC>
type UnFollowUserAT = ReturnType<typeof unfollowUserAC>
type UsersPageActionsType = FollowUserAT | UnFollowUserAT

const initialState: UserType[] = []


const usersReducer = (state: UserType[] = initialState, action: UsersPageActionsType) => {
    switch(action.type) {
        case "FOLLOW":
            return state.map(user => user.id !== action.userId
                ? user
                : {...user, followed: true}
            )
        case "UNFOLLOW":
            return state.map(user => user.id !== action.userId
                ? user
                : {...user, followed: false}
            )
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

export default usersReducer