import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    root: {
        minWidth: "35%",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: '16px'
    },
    buttons: {
        display: "flex",
        alignItems: "center",
    },
}));
