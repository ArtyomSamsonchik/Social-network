import instance from "./Instance";
import {ProfileType} from "../redux/mainPageReducer";

export const getProfile = (userId: number) =>
    instance.get<ProfileType>(`profile/${userId}/`)