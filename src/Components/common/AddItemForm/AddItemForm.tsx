import React, {FC} from 'react';
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {Field, reduxForm} from "redux-form";
import s from "./AddItemForm.module.css"

export type AddItemFormData = {
    addItem: string
}

type OwnProps = {
    className?: string
    placeholder?: string
}

type AddItemFormProps = InjectedFormProps<AddItemFormData> & OwnProps

const AddItemForm: FC<AddItemFormProps> = (props) => {
    const {pristine, invalid} = props

    return (
        <div className={props.className ? props.className : ""}>
            <form className={s.add_item} onSubmit={props.handleSubmit}>
                <Field name={"addItem"}
                       component={"textarea"}
                       placeholder={props.placeholder ? props.placeholder : ""}
                       spellCheck={false}
                       cols={50}
                       rows={5}
                />
                <button className={s.button} disabled={pristine || invalid}>Add</button>
            </form>
        </div>
    )
}


export default reduxForm<AddItemFormData, OwnProps>({
    form: "addItem"
})(AddItemForm)