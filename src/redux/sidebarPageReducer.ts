import {UserType} from "./usersPageReducer"

type setFollowedUsersAT = ReturnType<typeof setFollowedUsers>
export type SidebarPageActionsType = setFollowedUsersAT

export type SidebarPageType = {
    followedUsers: UserType[]
}

const initialState: SidebarPageType = {
    followedUsers: []
}

const sidebarPageReducer = (state: SidebarPageType = initialState, action: SidebarPageActionsType): SidebarPageType => {
    switch (action.type) {
        case "SET-FOLLOWED-USERS":
            return {
                ...state,
                followedUsers: action.followedUsers
            }
        default:
            return state
    }
}

const setFollowedUsers = (followedUsers: UserType[]) => ({
    type: "SET-FOLLOWED-USERS",
    followedUsers
}) as const

export default sidebarPageReducer