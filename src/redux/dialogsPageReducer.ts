import {DialogsPageType, MessageType, UserIDType, users} from "./store";

type AddMessageAT = ReturnType<typeof addMessageAC>

export type DialogsPageActionsType = AddMessageAT

const initialState: DialogsPageType = {
    users,
    dialogs: {
        [users[0].id]: [
            {authorName: "Vasya", messageText: "Hello"},
            {authorName: "Vasya", messageText: "What's up?"},
            {authorName: "Vasya", messageText: "How are you?"},
            {authorName: "Vasya", messageText: "When we go to drink?"}
        ]
    }
}

const dialogsPageReducer = (state = initialState, action: DialogsPageActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
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
        }
        default: {
            return state
        }
    }
}

export const addMessageAC = (userID: UserIDType, messageText: string) => ({
    type: "ADD-MESSAGE", messageText, userID
}) as const

export default dialogsPageReducer