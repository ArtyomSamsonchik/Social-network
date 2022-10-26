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

type FollowUserAT = ReturnType<typeof followUser>
type UnFollowUserAT = ReturnType<typeof unfollowUser>
type setUsersAT = ReturnType<typeof setUsers>
type setUsersCountAT = ReturnType<typeof setUsersCount>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setIsFetchingUsersAT = ReturnType<typeof setIsFetchingUsers>

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


export const followUser = (userId: number) => ({
    type: "FOLLOW",
    userId
}) as const

export const unfollowUser = (userId: number) => ({
    type: "UNFOLLOW",
    userId
}) as const

export const setUsers = (users: UserType[]) => ({
    type: "SET-USERS",
    users
}) as const

export const setUsersCount = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage
}) as const

export const setIsFetchingUsers = (isFetching: boolean) => ({
    type: "SET-IS-FETCHING-USERS",
    isFetching
}) as const

export default usersReducer