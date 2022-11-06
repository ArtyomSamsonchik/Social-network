import React from 'react';
import s from "./UserImage.module.css"
import defaultImageSrc from "../../../assets/images/Portrait_Placeholder.png"

type UserImageProps = {
    className?: string
    imageSrc?: string
    imageAlt: string
}

const UserImage: React.FC<UserImageProps> = (props) => {
    const finalClassName = `${s.image_container} ${props.className ? props.className : ""}`
    const imageSrc = props.imageSrc ? props.imageSrc : defaultImageSrc

    return (
        <span className={finalClassName}>
            <img src={imageSrc} alt={props.imageAlt}/>
        </span>
    )
}

export default UserImage