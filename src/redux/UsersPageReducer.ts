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

export type UsersPageType = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetchingUsers: boolean
}

type FollowUserAT = ReturnType<typeof followUserAC>
type UnFollowUserAT = ReturnType<typeof unfollowUserAC>
type setUsersAT = ReturnType<typeof setUsersAC>
type setUsersCountAT = ReturnType<typeof setUsersCountAC>
type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type setIsFetchingUsersAT = ReturnType<typeof setIsFetchingUsersAC>

export type UsersPageActionsType = FollowUserAT
    | UnFollowUserAT
    | setUsersAT
    | setUsersCountAT
    | setCurrentPageAT
    | setIsFetchingUsersAT

const initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 10,
    isFetchingUsers: false
}

const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionsType) => {
    switch (action.type) {
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
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-IS-FETCHING-USERS":
            return {
                ...state,
                isFetchingUsers: action.isFetching
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

export const setUsersCountAC = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
}) as const

export const setCurrentPageAC = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage
}) as const

export const setIsFetchingUsersAC = (isFetching: boolean) => ({
    type: "SET-IS-FETCHING-USERS",
    isFetching
}) as const

export default usersReducer