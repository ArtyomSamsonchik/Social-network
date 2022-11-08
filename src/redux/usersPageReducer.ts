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

export type FollowingInProgressType = {
    [userId: string]: boolean
}

export type UsersPageType = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetchingUsers: boolean
    followingInProgress: FollowingInProgressType
}

type FollowUserAT = ReturnType<typeof followUser>
type UnFollowUserAT = ReturnType<typeof unfollowUser>
type setUsersAT = ReturnType<typeof setUsers>
type setUsersCountAT = ReturnType<typeof setUsersCount>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setIsFetchingUsersAT = ReturnType<typeof setIsFetchingUsers>
type setUpFollowingAT = ReturnType<typeof setUpFollowing>

export type UsersPageActionsType = FollowUserAT
    | UnFollowUserAT
    | setUsersAT
    | setUsersCountAT
    | setCurrentPageAT
    | setIsFetchingUsersAT
    | setUpFollowingAT

const initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 10,
    isFetchingUsers: false,
    followingInProgress: {}
}

const usersPageReducer = (state: UsersPageType = initialState, action: UsersPageActionsType) => {
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
                users: action.users,
                followingInProgress: {}
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
        case "SET-UP-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.settingUpFollowing
                    ? {...state.followingInProgress, [action.userId]: true}
                    : {...state.followingInProgress, [action.userId]: false}
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

export const setUpFollowing = (userId: number, settingUpFollowing: boolean) => ({
    type: "SET-UP-FOLLOWING",
    userId,
    settingUpFollowing
}) as const

export default usersPageReducer