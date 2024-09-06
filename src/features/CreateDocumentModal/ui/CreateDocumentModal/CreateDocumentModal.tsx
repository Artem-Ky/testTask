import {
    FC, memo, Suspense, useCallback, useState,
} from 'react';
import { CreateDocumentForm } from '@/entities/Documents/CreateDocumentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createDocument } from '../../model/services/CreateDocumentServis';
import { Document } from '@/entities/Documents';
import { Modal } from '@/shared/ui/Modal';

interface CreateDocumentModalProps {
    classNames?: string[];
}

export const CreateDocumentModal: FC<CreateDocumentModalProps> = memo(
    (props: CreateDocumentModalProps) => {
        const { classNames = [] } = props;
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const dispatch = useAppDispatch();

        const onCreateDocument = useCallback(
            async (document: Document) => {
                try {
                    await dispatch(createDocument(document)).unwrap();
                    handleClose();
                } catch (err: any) {
                    console.log(err);
                }
            },
            [dispatch],
        );

        return (
            <Modal
                classNames={classNames}
                isOpen={open}
                onClose={handleClose}
                onOpen={handleOpen}
                buttonTitle="create"
            >
                <Suspense fallback="...">
                    <CreateDocumentForm onSendForm={onCreateDocument} />
                </Suspense>
            </Modal>
        );
    },
);
