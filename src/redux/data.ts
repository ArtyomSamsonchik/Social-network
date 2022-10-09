import userImageURL from "../images/Portrait_Placeholder.png";

export type UserIDType = number

export type UserType = {
    id: UserIDType,
    name: string
    imageSrc: string
}

export const users: UserType[] = [
    {id: 1, name: "Sanya", imageSrc: userImageURL},
    {id: 2, name: "Artyom", imageSrc: userImageURL},
    {id: 3, name: "Ilya", imageSrc: userImageURL},
    {id: 4, name: "Anton", imageSrc: userImageURL},
    {id: 5, name: "Vasya", imageSrc: userImageURL}
]