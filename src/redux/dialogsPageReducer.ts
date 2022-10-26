import {users} from "./data";
import {UserIDType, UserType} from "./mainPageReducer";

type AddMessageAT = ReturnType<typeof addMessageToDialog>
type SetActiveDialogAT = ReturnType<typeof openNewDialog>
export type DialogsPageActionsType = AddMessageAT | SetActiveDialogAT

export type MessageType = {
    //add time type
    authorName: string    //replace to UserType in future
    messageText: string
}
export type DialogType = {
    [userID: UserIDType]: MessageType[]
}
export type DialogsPageType = {
    users: UserType[]
    dialogs: DialogType
    activeDialogID: UserIDType | null
}

const initialState: DialogsPageType = {
    users,
    dialogs: {
        [users[0].id]: [
            {authorName: "Vasya", messageText: "Hello"},
            {authorName: "Vasya", messageText: "What's up?"},
            {authorName: "Vasya", messageText: "How are you?"},
            {authorName: "Vasya", messageText: "When we go to drink?"}
        ]
    },
    activeDialogID: null
}

const dialogsPageReducer = (state = initialState, action: DialogsPageActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                authorName: "JS Developer",
                messageText: action.messageText
            }

            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [action.userID]: [
                        ...(state.dialogs[action.userID] || []),
                        newMessage
                    ]
                }
            }
        case "SET-ACTIVE-DIALOG":
            return {
                ...state,
                activeDialogID: action.userID
            }
        default:
            return state
    }
}

export const addMessageToDialog = (userID: UserIDType, messageText: string) => ({
    type: "ADD-MESSAGE", messageText, userID
}) as const

export const openNewDialog = (userID: UserIDType) => ({
    type: "SET-ACTIVE-DIALOG",
    userID
}) as const

export default dialogsPageReducer