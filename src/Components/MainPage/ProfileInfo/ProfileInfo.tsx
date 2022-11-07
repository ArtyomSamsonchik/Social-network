import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/mainPageReducer";
import UserImage from "../../common/UserImage/UserImage";

type ProfileInfoProps = {
    profile: ProfileType
}

export const ProfileInfo: FC<ProfileInfoProps> = (props) => {
    //TODO: fix ! in future. Maybe add Preloader here, not in main page.
    const {
        lookingForAJob, lookingForAJobDescription, contacts, fullName, photos
    } = props.profile!

    const renderedContacts = Object.entries(contacts)
        .filter(([, link]) => link)
        .map(([site, link], i) => {
            return <a key={"link" + i} href={link}>{site}</a>
        })

    const userCaption = lookingForAJob
        && `Looking for a job: ${lookingForAJobDescription}`

    return (
        <div className={s.profile}>
            <div className={s.user_info_container}>
                <UserImage imageSrc={photos?.large}
                           className={s.image_container}
                           imageAlt={"user"}
                />
                <div className={s.user_info}>
                    <div className={s.user_name}>{fullName || "User wasn't loaded"}</div>
                    <div>{userCaption}</div>
                </div>
            </div>
            <div className={s.contacts}>{renderedContacts}</div>
        </div>
    )
}