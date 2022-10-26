import {addPost, MainPageActionsType} from "../../../redux/mainPageReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {MapActionCreators, MapToPropsReturnType} from "../../../helpers/typeHelpers";

type MapStateRT = MapToPropsReturnType<typeof MyPosts, "posts">
type MapAC = MapActionCreators<typeof MyPosts, "addPost", MainPageActionsType>

const mapStateToProps = (state: AppStateType): MapStateRT => ({
    posts: state.mainPageData.posts,
})

const ConnectedMyPosts = connect(mapStateToProps, {
    addPost
} as MapAC)
(MyPosts)

export default ConnectedMyPosts