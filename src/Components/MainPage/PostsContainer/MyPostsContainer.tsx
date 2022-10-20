import {addPostAC, MainPageActionsType} from "../../../redux/mainPageReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {MapToPropsType} from "../../../helpers/typeHelpers";

type MapStateReturnType = MapToPropsType<typeof MyPosts, "posts">
type MapDispatchReturnType = MapToPropsType<typeof MyPosts, "addPost">

const mapStateToProps = (state: AppStateType): MapStateReturnType => ({
    posts: state.mainPageData.posts,

})

const mapDispatchToProps = (dispatch: Dispatch<MainPageActionsType>): MapDispatchReturnType => ({
    addPost: (text) => {
        dispatch(addPostAC(text))
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer