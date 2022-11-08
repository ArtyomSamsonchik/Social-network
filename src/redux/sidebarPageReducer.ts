import {UserType} from "./usersPageReducer"

type setFollowedUsersAT = ReturnType<typeof setFollowedUsers>
type setIsFetchingFollowedUsersAT = ReturnType<typeof setIsFetchingFollowedUsers>
export type SidebarPageActionsType = setFollowedUsersAT | setIsFetchingFollowedUsersAT

export type SidebarPageType = {
    followedUsers: UserType[]
    isFetchingFollowedUsers: boolean
}

const initialState: SidebarPageType = {
    followedUsers: [],
    isFetchingFollowedUsers: false
}

const sidebarPageReducer = (state: SidebarPageType = initialState, action: SidebarPageActionsType): SidebarPageType => {
    switch (action.type) {
        case "SET-FOLLOWED-USERS":
            return {
                ...state,
                followedUsers: action.followedUsers
            }
        case "SET-IS-FETCHING-FOLLOWED-USERS":
            return {
                ...state,
                isFetchingFollowedUsers: action.isFetching
            }
        default:
            return state
    }
}

export const setFollowedUsers = (followedUsers: UserType[]) => ({
    type: "SET-FOLLOWED-USERS",
    followedUsers
}) as const

export const setIsFetchingFollowedUsers = (isFetching: boolean) => ({
    type: "SET-IS-FETCHING-FOLLOWED-USERS",
    isFetching
}) as const

export default sidebarPageReducer