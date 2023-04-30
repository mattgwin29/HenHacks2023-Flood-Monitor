import * as React from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";

export function FloodPopUp() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                    {"Are you currently being impacted by a flood right now?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
