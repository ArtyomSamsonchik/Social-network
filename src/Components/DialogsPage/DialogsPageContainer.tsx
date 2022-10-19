import {addMessageAC, DialogsPageActionsType, setActiveDialogAC} from "../../redux/dialogsPageReducer";
import {DialogsPage} from "./DialogsPage";
import {UserIDType} from "../../redux/mainPageReducer";
import {AppStateType} from "../../redux/redux-store";
import {MapToPropsType} from "../../helpers/typeHelpers";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType): MapToPropsType<typeof DialogsPage, "dialogsPageData"> => ({
    dialogsPageData: state.dialogsPageData
})

const mapDispatchToProps = (
    dispatch: Dispatch<DialogsPageActionsType>
): MapToPropsType<typeof DialogsPage, "addMessageToDialog" | "openNewDialog"> => ({
    addMessageToDialog: (messageText, activeDialogID: UserIDType | null) => {
        if (activeDialogID) {
            dispatch(addMessageAC(activeDialogID, messageText))
        }
    },
    openNewDialog: (userID) => {
        dispatch(setActiveDialogAC(userID))
    }
})

const DialogsPageContainer =
    connect(mapStateToProps, mapDispatchToProps)(DialogsPage)

export default DialogsPageContainer