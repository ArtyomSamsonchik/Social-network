import {addMessageToDialog, DialogsPageActionsType, openNewDialog} from "../../redux/dialogsPageReducer";
import {DialogsPage} from "./DialogsPage";
import {UserIDType} from "../../redux/mainPageReducer";
import {AppStateType} from "../../redux/redux-store";
import {MapToPropsReturnType} from "../../helpers/typeHelpers";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import withRedirect from "../../helpers/withRedirect";
import {ComponentType} from "react";

type MapStateRT = MapToPropsReturnType<typeof DialogsPage, "dialogsPageData">
type MapDispatchRT = MapToPropsReturnType<typeof DialogsPage, "addMessageToDialog" | "openNewDialog">

const mapStateToProps = (state: AppStateType): MapStateRT => ({
    dialogsPageData: state.dialogsPageData
})

// TODO: Too complex dispatch logic. Think about simplification, that allows to use short AC notation.
const mapDispatchToProps = (dispatch: Dispatch<DialogsPageActionsType>): MapDispatchRT => ({
    addMessageToDialog: (messageText, activeDialogID: UserIDType | null) => {
        if (activeDialogID) {
            dispatch(addMessageToDialog(activeDialogID, messageText))
        }
    },
    openNewDialog: (userID) => {
        dispatch(openNewDialog(userID))
    }
})

// const DialogsPageWithRedirect = withRedirect(DialogsPage)

const ConnectedDialogsPage = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect,
)(DialogsPage)

// const ConnectedDialogsPage = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(DialogsPageWithRedirect)

export default ConnectedDialogsPage