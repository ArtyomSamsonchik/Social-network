import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import s from "./AddItemArea.module.css"

type AddItemAreaProps = {
    className?: string
    placeholder?: string
    addItem: (text: string) => void
}

export const AddItemArea: React.FC<AddItemAreaProps> = (props) => {
    const [textValue, setTextValue] = useState("")

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.currentTarget.value)
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addPost()
        }
    }

    const addPost = () => {
        props.addItem(textValue)
        setTextValue("")
    }

    const finalClassName = `${s.add_post} ${props.className ? props.className : ""}`

    return (
        <div className={finalClassName}>
            <textarea cols={50} rows={5}
                      value={textValue}
                      placeholder={props.placeholder ? props.placeholder : ""}
                      spellCheck={false}
                      onChange={onChangeTextHandler}
                      onKeyDown={onKeyDownHandler}
            ></textarea>
            <button className={s.button}
                    onClick={addPost}
            >Add</button>
        </div>
    )
}