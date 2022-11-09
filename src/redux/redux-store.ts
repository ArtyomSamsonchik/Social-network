import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    mainPageData: mainPageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebarPageData: sidebarPageReducer,
    usersPageData: usersPageReducer,
    authData: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

export default store

// @ts-ignore
window.store = store