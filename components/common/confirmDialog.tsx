import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'

interface Props {
    message: string
    acceptMessage: string
    denyMessage: string
    isOpen: boolean
    doAccept: () => Promise<void>
    doDeny: () => void
}

export const ConfirmDialog: React.FC<Props> = ({ message, acceptMessage, denyMessage, isOpen, doAccept, doDeny }) => {
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => doDeny()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <Typography variant="body1">{message}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => doDeny()} color="primary">
                        {denyMessage}
                    </Button>
                    <Button onClick={() => doAccept()} color="primary">
                        {acceptMessage}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
