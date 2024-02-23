import React, { useCallback } from 'react';
import { IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useBool } from '../../../../../../../lib/useBool';

type CopyButtonProps = {
  title: string;
  url: string;
  iconSize: number;
};
const CopyButton: React.FC<CopyButtonProps> = ({ title, url, iconSize }) => {
  const [open, handleOpen, handleClose] = useBool(false);
  const handleClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(`${title} ${url}`);
    handleOpen();
  }, [handleOpen, title, url]);

  return (
    <>
      <IconButton onClick={handleClick} aria-label={`${title}のリンクをコピー`} size='large'>
        <FileCopyIcon style={{ fontSize: iconSize }} />
      </IconButton>
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
