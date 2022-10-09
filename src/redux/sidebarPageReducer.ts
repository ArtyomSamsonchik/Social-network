import {SidebarPageType} from "./store";
import {users} from "./store";

const initialtState: SidebarPageType = {
    users
}

const sidebarPageReducer = (state = initialtState, action: any) => {
    return state
}

export default sidebarPageReducer