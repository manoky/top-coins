import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface NotificationProps {
  handleClose: () => void;
  open: boolean;
  error: string;
}

const Notification = ({
  handleClose,
  open,
  error,
}: NotificationProps): JSX.Element => {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled" onClose={handleClose}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
