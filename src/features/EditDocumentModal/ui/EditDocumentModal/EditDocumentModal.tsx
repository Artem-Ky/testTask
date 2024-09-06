import {
    FC, memo, Suspense, useCallback, useState,
} from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { editDocument } from '../../model/services/EditDocumentServis';
import { Document } from '@/entities/Documents';
import { CreateDocumentForm } from '@/entities/Documents/CreateDocumentForm';
import { Modal } from '@/shared/ui/Modal';

interface EditDocumentModalProps {
    classNames?: string[];
    document: Document;
}

export const EditDocumentModal: FC<EditDocumentModalProps> = memo(
    (props: EditDocumentModalProps) => {
        const { classNames = [], document } = props;
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const dispatch = useAppDispatch();

        const onEditDocument = useCallback(
            async (document: Document) => {
                try {
                    await dispatch(editDocument(document)).unwrap();
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
                buttonTitle="edit"
            >
                <Suspense fallback="...">
                    <CreateDocumentForm
                        onSendForm={onEditDocument}
                        editableDocument={document}
                    />
                </Suspense>
            </Modal>
        );
    },
);
