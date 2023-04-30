import * as React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField
} from "@mui/material";

export function FloodPopUpZip() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Are you being impacted by a flood right now?
            </Button>
            <h3 className="mapTitle">Tracking the Flooded Regions</h3>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Let us know</DialogTitle>
                <DialogContent>
                    <DialogContentText width="450px">
                        To help us better understand what greater areas are
                        being impacted by this flood, please enter your zip
                        code.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Zip Code"
                        type="zip code"
                        variant="standard"
                        text-align="right"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
