import { CircularProgress } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 'min-content',
    width: 'max-content',
    maxWidth: '90vw',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    zIndex: 10,
};

export const Loader = () => <CircularProgress sx={style} />;
