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
        justifyContent: "space-between",
        padding: "16px",
    },
    cardContent: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "flex-start",
        padding: "16px",
    },
}));
