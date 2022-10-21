import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./UsersPageReducer";


const rootReducer = combineReducers({
    mainPageData: mainPageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebarPageData: sidebarPageReducer,
    usersPageData: usersPageReducer
})

const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export default store

// @ts-ignore
window.store = store