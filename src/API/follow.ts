import instance from "./Instance";

type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export const follow = (userId: number) => (
    instance.post<FollowResponseType>(`follow/${userId}/`)
)