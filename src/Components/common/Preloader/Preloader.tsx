import React, {FC} from 'react';
import s from "./Preloader.module.css";
import spinner from "../../../assets/images/LoadingSpinner.svg";

type PreloaderProps = {
    containerClassName?: string
    imageClassName?: string
}

const Preloader: FC<PreloaderProps> = (props) => {
    const finalContainerClassName = `${s.spinner} ${props.containerClassName
        ? props.containerClassName
        : ""
    }`
    const finalImageClassName = `${props.imageClassName ? props.imageClassName : ""}`

    return (
        <div className={finalContainerClassName}>
            <img src={spinner} alt="spinner" className={finalImageClassName}/>
        </div>
    )
}

export default Preloader