import {Component, memo} from "react";
import UserImage from "../../common/UserImage/UserImage";
import {UserType} from "../../../redux/UsersPageReducer";

type UserProps = {
    user: UserType
    onClick: (isFollowed: boolean, userId: number) => void
}

class User extends Component<UserProps> {
    render() {
        const {user, onClick} = this.props
        const buttonName = user.followed ? "Unfollow" : "Follow"
        const userStatus = user.status

        const onClickHandler = () => {
            onClick(user.followed, user.id)
        }

        return (
            <div>
                <div>
                    <UserImage imageAlt={"user"} imageSrc={user.photos.small}/>
                    <button onClick={onClickHandler}>
                        {buttonName}
                    </button>
                </div>
                <div>
                    <div>{user.name}</div>
                    {userStatus && <div>{userStatus}</div>}
                </div>
            </div>
        )
    }
}

export const MemoUser = memo(User)