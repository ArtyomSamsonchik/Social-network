import userImageURL from "../assets/images/Portrait_Placeholder.png";
import {users} from "./data";       //TODO: doesn't work with path ./store
import API from "../API";
import {AppThunk} from "./redux-store";

type AddPostAT = ReturnType<typeof addPost>
type setUserProfileAT = ReturnType<typeof setUserProfile>
export type MainPageActionsType = AddPostAT | setUserProfileAT

export type UserIDType = number
export type UserType = {
    id: UserIDType,
    name: string
    imageSrc: string
}

export type PostType = {
    user: UserType
    postText: string
    date: string
    likesCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small?: string
    large?: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
} | null

export type MainPageType = {
    profile: ProfileType
    posts: PostType[]
}

const initialState: MainPageType = {
    profile: null,
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
}

const mainPageReducer = (state = initialState, action: MainPageActionsType): MainPageType => {
    switch (action.type) {
        case "ADD-POST":
            const user = {id: 2, name: "Artyom", imageSrc: userImageURL}    //TODO: fix in future
            const date = new Date().toLocaleString("ru-RU")
            const newPost: PostType = {
                user,
                postText: action.postText,
                date,
                likesCount: 0
            }

            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = (postText: string) => ({
    type: "ADD-POST", postText
}) as const

export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    profile
}) as const

export const getUserProfile = (newUserId: number, currentUserId: number): AppThunk => (dispatch) => {
    if (newUserId === currentUserId) return

    dispatch(setUserProfile(null))
    API.getProfile(newUserId).then(({data}) => {
        dispatch(setUserProfile(data))
    })
    window.scrollTo({top: 0})
}

export default mainPageReducer