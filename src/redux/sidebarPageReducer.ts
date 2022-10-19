import {users} from "./data";
import {UserType} from "./mainPageReducer";

export type SidebarPageType = {
    users: UserType[]
}

const initialtState: SidebarPageType = {
    users
}

const sidebarPageReducer = (state = initialtState, action: any): SidebarPageType => {
    return state
}

export default sidebarPageReducer