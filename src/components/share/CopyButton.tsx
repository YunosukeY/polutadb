import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CopyButtonProps {
  target: string;
  iconSize: number;
}
const CopyButton: React.FC<CopyButtonProps> = ({ target, iconSize }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CopyToClipboard text={target}>
        <IconButton onClick={handleClick}>
          <FileCopyIcon style={{ fontSize: iconSize }} />
        </IconButton>
      </CopyToClipboard>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant='filled' severity='success'>
          Copied!
        </MuiAlert>
      </Snackbar>
    </>
  );
};
export default CopyButton;
