import userImageURL from "../images/Portrait_Placeholder.png";

//  Types
export type UserType = {
    id: number,
    name: string
    imageSrc: string
}

export type MessageType = {
    //add time type
    authorName: string    //replace to UserType in future
    messageText: string
}

export type DialogsType = {
    [userID: number]: MessageType[]
}

export type PostType = {
    user: UserType
    postText: string
    date: string
    likesCount: number
}

export type DialogsPageType = {
    users: UserType[]
    dialogs: DialogsType
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

//  BLL
const users = [
    {id: 1, name: "Sanya", imageSrc: userImageURL},
    {id: 2, name: "Artyom", imageSrc: userImageURL},
    {id: 3, name: "Ilya", imageSrc: userImageURL},
    {id: 4, name: "Anton", imageSrc: userImageURL},
    {id: 5, name: "Vasya", imageSrc: userImageURL}
];

export const state: StateType = {
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