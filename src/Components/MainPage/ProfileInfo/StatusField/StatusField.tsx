import React, {ChangeEvent, Component} from 'react';

type StatusFieldProps = {
    status: string | null
    updateStatus: (status: string) => void
}

type StatusFieldState = {
    editMode: boolean
    status: string
}

class StatusField extends Component<StatusFieldProps, StatusFieldState> {
    constructor(props: StatusFieldProps) {
        super(props);

        this.state = {
            editMode: false,
            status: ""
        }

        this.onBlurHandler = this.onBlurHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onDoubleClickHandler = this.onDoubleClickHandler.bind(this)
    }

    onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        this.setState({status: e.currentTarget.value})
    }

    onBlurHandler() {
        this.setState({editMode: false, status: ""})
        this.props.updateStatus(this.state.status)
    }

    onDoubleClickHandler() {
        this.setState({editMode: true,
            status: this.props.status || "new status..."
        })
    }

    render() {
        const caption = this.props.status || "status must be here..."

        return (
            this.state.editMode
                ? <input value={this.state.status}
                         onChange={this.onChangeHandler}
                         onBlur={this.onBlurHandler}
                         autoFocus
                />
                : <span onDoubleClick={this.onDoubleClickHandler}>{caption}</span>
        )
    }
}

export default StatusField
