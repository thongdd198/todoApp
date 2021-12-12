import React from 'react';
import {Snackbar} from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';


type SnackBarProps = {
    isOpen: boolean
    handleClose: () => void
    type: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Flash: React.FC<SnackBarProps> = ({isOpen, handleClose, type}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isOpen}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={type === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                {type === 'success' ? 'This is a success message!' : 'This is a error message!'}
            </Alert>
        </Snackbar>
    )
}
