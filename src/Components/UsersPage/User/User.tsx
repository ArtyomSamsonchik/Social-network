import React from "react";
import UserImage from "../../common/UserImage/UserImage";
import {UserType} from "../../../redux/UsersPageReducer";

type UserProps = {
    user: UserType
    onClick: () => void
}

class User extends React.Component<UserProps> {
    render() {
        const buttonName = this.props.user.followed ? "Unfollow" : "Follow"

        return (
            <div>
                <div>
                    <UserImage imageAlt={"user"} imageSrc={this.props.user.photos.small}/>
                    <button onClick={this.props.onClick}>
                        {buttonName}
                    </button>
                </div>
                <div>
                    <div>User name</div>
                    <div>User info</div>
                </div>
            </div>
        )
    }
}

export default User