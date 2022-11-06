import {Component, memo} from "react";
import UserImage from "../../common/UserImage/UserImage";
import {UserType} from "../../../redux/UsersPageReducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../App";
import s from "./User.module.css"

type UserProps = {
    user: UserType
    onClick: (isFollowed: boolean, userId: number) => void
}

class User extends Component<UserProps> {
    render() {
        const {user, onClick} = this.props
        const buttonName = user.followed ? "Unfollow" : "Follow"

        const onClickHandler = () => {
            onClick(user.followed, user.id)
        }

        return (
            <li className={s.user}>
                <NavLink to={`${PATH.MAIN_PAGE}/${user.id}`}>
                    <UserImage className={s.user_item_image}
                               imageAlt={"user"}
                               imageSrc={user.photos.small}
                    />
                </NavLink>
                <div className={s.user_item_info}>
                    <NavLink to={`${PATH.MAIN_PAGE}/${user.id}`}>
                        {user.name}
                    </NavLink>
                    <button onClick={onClickHandler}>{buttonName}</button>
                    {user.status && <div>{user.status}</div>}
                </div>
            </li>
        )
    }
}

export const MemoUser = memo(User)