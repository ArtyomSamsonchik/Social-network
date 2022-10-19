import {addPostAC, MainPageActionsType} from "../../../redux/mainPageReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {MapToPropsType} from "../../../helpers/typeHelpers";

const mapStateToProps = (state: AppStateType): MapToPropsType<typeof MyPosts, "posts"> => ({
    posts: state.mainPageData.posts
})

const mapDispatchToProps = (dispatch: Dispatch<MainPageActionsType>): MapToPropsType<typeof MyPosts, "addPost"> => ({
    addPost: (text) => {
        dispatch(addPostAC(text))
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer