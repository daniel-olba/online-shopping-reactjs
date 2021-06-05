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
    media: {
        height: 10,
        paddingTop: "56.25%",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: '16px'
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttons: {
        display: "flex",
        alignItems: "center",
    },
}));
