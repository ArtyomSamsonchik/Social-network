import React, {ChangeEvent, useState} from 'react';
import s from "./AddNewPost.module.css";

type AddItemAreaProps = {
    placeholder?: string
    addItem: (text: string) => void
}

export const AddItemArea: React.FC<AddItemAreaProps> = (props) => {
    const [textValue, setTextValue] = useState("");

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.currentTarget.value);
    };

    const onAddPostClickHandler = () => {
        props.addItem(textValue);
    };

    return (
        <div className={s.add_post}>

            <textarea id={"input-post"} cols={50} rows={5}
                      value={textValue}
                      placeholder={props.placeholder ? props.placeholder : ""}
                      spellCheck={false}
                      onChange={onChangeTextHandler}
            ></textarea>
            <button className={s.button}
                    onClick={onAddPostClickHandler}
            >Add</button>
        </div>
    );
};