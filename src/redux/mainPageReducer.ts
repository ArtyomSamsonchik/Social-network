import {MainPageType, PostType} from "./store";
import userImageURL from "../images/Portrait_Placeholder.png";

type AddPostAT = ReturnType<typeof addPostAC>

export type MainPageActionsType = AddPostAT

const mainPageReducer = (state: MainPageType, action: MainPageActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const user = {id: 2, name: "Artyom", imageSrc: userImageURL}    //TODO: fix in future
            const date = new Date().toLocaleString("ru-RU")
            const newPost: PostType = {
                user,
                postText: action.postText,
                date,
                likesCount: 0
            }

            state = {
                ...state,
                posts: [newPost, ...state.posts]
            }
            return state
        }
        default: {
            return state
        }
    }
}

export const addPostAC = (postText: string) => ({
    type: "ADD-POST", postText
}) as const

export default mainPageReducer