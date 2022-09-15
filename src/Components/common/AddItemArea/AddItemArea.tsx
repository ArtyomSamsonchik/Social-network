import React, {ChangeEvent, useState} from 'react';
import s from "./AddItemArea.module.css";

type AddItemAreaProps = {
    className?: string
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

    const finalClassName = `${s.add_post} ${props.className ? props.className : ""}`;

    return (
        <div className={finalClassName}>

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