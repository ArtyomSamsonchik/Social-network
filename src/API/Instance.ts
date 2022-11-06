import axios from "axios";

const ADMIN_API_KEY = "3a0fd058-a035-41ce-a05e-8b1d5cd36226"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": ADMIN_API_KEY
    }
})

export default instance