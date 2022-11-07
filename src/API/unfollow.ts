import instance from "./Instance";

type UnfollowResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export const unfollow = (userId: number) => (
    instance.delete<UnfollowResponseType>(`follow/${userId}/`)
)