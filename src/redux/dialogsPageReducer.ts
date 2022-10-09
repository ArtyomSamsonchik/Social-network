import {DialogsPageType, MessageType, UserIDType} from "./store";

type AddMessageAT = ReturnType<typeof addMessageAC>

export type DialogsPageActionsType = AddMessageAT

const dialogsPageReducer = (state: DialogsPageType, action: DialogsPageActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessageType = {
                authorName: "JS Developer",
                messageText: action.messageText
            }

            state = {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [action.userID]: [
                        ...(state.dialogs[action.userID] || []),
                        newMessage
                    ]
                }
            }
            return state
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