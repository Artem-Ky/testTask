import {
    FC, memo, ReactElement,
} from 'react';
import cnBind from 'classnames/bind';
import { Box, Button, Modal as HModal } from '@mui/material';
import cls from './Modal.module.scss';

interface ModalProps {
    classNames?: string[];
    children: ReactElement;
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
    buttonTitle?: string;
}

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
};

export const Modal: FC<ModalProps> = memo((props: ModalProps) => {
    const {
        classNames = [],
        children,
        isOpen,
        onClose,
        buttonTitle,
        onOpen,
    } = props;
    const cn = cnBind.bind(cls);

    return (
        <div
            className={cn(
                cls.Modal,
                ...classNames.map((clsName) => cls[clsName] || clsName),
            )}
        >
            {buttonTitle && onOpen && <Button onClick={onOpen}>{buttonTitle}</Button>}
            <HModal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </HModal>
        </div>
    );
});
