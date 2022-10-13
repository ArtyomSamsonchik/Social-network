import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";


const rootReducer = combineReducers({
    mainPageData: mainPageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebarPageData: sidebarPageReducer
})

const store = createStore(rootReducer)

export type AppStoreType = typeof store
export default store