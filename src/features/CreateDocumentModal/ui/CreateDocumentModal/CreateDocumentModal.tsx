import {
    FC, memo, Suspense, useCallback, useState,
} from 'react';
import cnBind from 'classnames/bind';
import {
    Box, Button, Modal,
} from '@mui/material';
import cls from './CreateDocumentModal.module.scss';
import { CreateDocumentForm } from '@/entities/Documents/CreateDocumentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createDocument } from '../../model/services/CreateDocumentServis';
import { Document } from '@/entities/Documents';

interface CreateDocumentModalProps {
    classNames?: string[];
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
export const CreateDocumentModal: FC<CreateDocumentModalProps> = memo(
    (props: CreateDocumentModalProps) => {
        const { classNames = [] } = props;
        const cn = cnBind.bind(cls);
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const dispatch = useAppDispatch();

        const onCreateDocument = useCallback(
            (document: Document) => {
                dispatch(createDocument(document));
            },
            [dispatch],
        );

        return (
            <div
                className={cn(
                    cls.CreateDocumentModal,
                    ...classNames.map((clsName) => cls[clsName] || clsName),
                )}
            >
                <Button onClick={handleOpen}>Создать</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Suspense fallback="...">
                            <CreateDocumentForm onSendForm={onCreateDocument} />
                        </Suspense>
                    </Box>
                </Modal>
            </div>
        );
    },
);
