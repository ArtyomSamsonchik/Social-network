import userImageURL from "../images/Portrait_Placeholder.png"

//  Types
export type UserIDType = number

export type UserType = {
    id: UserIDType,
    name: string
    imageSrc: string
}

export type MessageType = {
    //add time type
    authorName: string    //replace to UserType in future
    messageText: string
}

export type DialogType = {
    [userID: UserIDType]: MessageType[]
}

export type PostType = {
    user: UserType
    postText: string
    date: string
    likesCount: number
}

export type DialogsPageType = {
    users: UserType[]
    dialogs: DialogType
}

export type MainPageType = {
    posts: PostType[]
}

export type SidebarPageType = {
    users: UserType[]
}

export type StateType = {
    mainPageData: MainPageType
    dialogsPageData: DialogsPageType
    sidebarPageData: SidebarPageType
}

export type SubscriberFunction = () => void

type AddPostAT = ReturnType<typeof addPostAC>
type AddMessageAT = ReturnType<typeof addMessageAC>

export type ActionsType = AddPostAT | AddMessageAT

export type StoreType = {
    _state: StateType
    _subscriber: SubscriberFunction

    getState: () => StateType
    subscribe: (newSubscriber: SubscriberFunction) => void

    dispatch: (action: ActionsType) => void
}

//  DATA
const users: UserType[] = [
    {id: 1, name: "Sanya", imageSrc: userImageURL},
    {id: 2, name: "Artyom", imageSrc: userImageURL},
    {id: 3, name: "Ilya", imageSrc: userImageURL},
    {id: 4, name: "Anton", imageSrc: userImageURL},
    {id: 5, name: "Vasya", imageSrc: userImageURL}
]

const state: StateType = {
    mainPageData: {
        posts: [
            {
                user: users[4],
                date: "01.09.2022 22:30",
                postText: "Lorem ipsum dolor sit amet",
                likesCount: 10
            },
            {
                user: users[0],
                date: "03.11.2022 00:30",
                postText: "Lorem ipsum dolor sit amet",
                likesCount: 1
            },
            {
                user: users[3],
                date: "05.05.2022 19:50",
                postText: "Lorem ipsum dolor sit amet",
                likesCount: 0
            },
            {
                user: users[1],
                date: "20.07.2022 05:15",
                postText: "Lorem ipsum dolor sit amet",
                likesCount: 2
            },
            {
                user: users[2],
                date: "31.12.2022 18:30",
                postText: "Lorem ipsum dolor sit amet",
                likesCount: 9
            },
            {
                user: users[4],
                date: "15.10.2022 03:00",
                postText: "Lorem ipsum dolor sit amet",
                likesCount: 3
            }
        ]
    },
    dialogsPageData: {
        users,
        dialogs: {
           [users[0].id]: [
               {authorName: "Vasya", messageText: "Hello"},
               {authorName: "Vasya", messageText: "What's up?"},
               {authorName: "Vasya", messageText: "How are you?"},
               {authorName: "Vasya", messageText: "When we go to drink?"}
           ]
        }
    },
    sidebarPageData: {users}
}

const store: StoreType = {
    _state: state,
    _subscriber() {
        console.log("No subscriber passed.")
    },
    getState() {
        return this._state
    },
    subscribe(newSubscriber) {
        this._subscriber = newSubscriber
    },
    dispatch(action) {
        switch (action.type) {
            case "ADD-POST": {
                const user = this._state.dialogsPageData.users[1];
                const date = new Date().toLocaleString("ru-RU")
                const newPost: PostType = {
                    user,
                    postText: action.postText,
                    date,
                    likesCount: 0
                 }

                this._state = {
                    ...this._state,
                    mainPageData: {
                        ...this._state.mainPageData,
                        posts: [newPost, ...this._state.mainPageData.posts]
                    }
                }

                this._subscriber()
                break
            }
            case "ADD-MESSAGE": {
                const newMessage: MessageType = {
                    authorName: "JS Developer",
                    messageText: action.messageText
                }

                this._state = {
                    ...this._state,
                    dialogsPageData: {
                        ...this._state.dialogsPageData,
                        dialogs: {
                            ...this._state.dialogsPageData.dialogs,
                            [action.userID]: [
                                ...(this._state.dialogsPageData.dialogs[action.userID] || []),
                                newMessage
                            ]
                        }
                    }
                }

                this._subscriber()
                break
            }
        }
    }
}

export const addPostAC = (postText: string) => ({
    type: "ADD-POST", postText
}) as const

export const addMessageAC = (userID: UserIDType, messageText: string) => ({
    type: "ADD-MESSAGE", messageText, userID
}) as const

export default store