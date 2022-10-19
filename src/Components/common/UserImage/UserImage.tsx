import React from 'react';
import s from "./UserImage.module.css"

type UserImageProps = {
    className?: string
    imageSrc?: string
    imageAlt: string
}

const UserImage: React.FC<UserImageProps> = (props) => {
    const finalClassName = s.image_container + (props.className ? props.className : "")

    return (
        <div className={finalClassName}>
            <img src={props.imageSrc} alt={props.imageAlt}/>
        </div>
    )
}

export default UserImage