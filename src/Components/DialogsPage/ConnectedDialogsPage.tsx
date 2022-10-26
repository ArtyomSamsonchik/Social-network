import {addMessageToDialog, DialogsPageActionsType, openNewDialog} from "../../redux/dialogsPageReducer";
import {DialogsPage} from "./DialogsPage";
import {UserIDType} from "../../redux/mainPageReducer";
import {AppStateType} from "../../redux/redux-store";
import {MapToPropsReturnType} from "../../helpers/typeHelpers";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateRT = MapToPropsReturnType<typeof DialogsPage, "dialogsPageData">
type mapDispatchRT = MapToPropsReturnType<typeof DialogsPage, "addMessageToDialog" | "openNewDialog">

const mapStateToProps = (state: AppStateType): mapStateRT => ({
    dialogsPageData: state.dialogsPageData
})

// TODO: Too complex dispatch logic. Think about simplification, that allows to use short AC notation.
const mapDispatchToProps = (dispatch: Dispatch<DialogsPageActionsType>): mapDispatchRT => ({
    addMessageToDialog: (messageText, activeDialogID: UserIDType | null) => {
        if (activeDialogID) {
            dispatch(addMessageToDialog(activeDialogID, messageText))
        }
    },
    openNewDialog: (userID) => {
        dispatch(openNewDialog(userID))
    }
})

const ConnectedDialogsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogsPage)

export default ConnectedDialogsPage