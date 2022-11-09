// export {getUsers} from "./getUsers";
// export {getProfile} from "./getProfile";
// export {getUserAuthData} from "./getUserAuthData";
// export {follow} from "./follow";
// export {unfollow} from "./unfollow";

import {getUserAuthData} from "./getUserAuthData";
import {getProfile} from "./getProfile";
import {getUsers} from "./getUsers";
import {follow} from "./follow";
import {unfollow} from "./unfollow";

const API = {
    getUsers,
    getProfile,
    getUserAuthData,
    follow,
    unfollow
}

export default API