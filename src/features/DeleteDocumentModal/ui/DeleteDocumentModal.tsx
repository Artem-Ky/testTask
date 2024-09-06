import {
    FC, memo, Suspense, useCallback, useState,
} from 'react';
import { CreateDocumentForm } from '@/entities/Documents/CreateDocumentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deleteDocument } from '../model/services/DeleteDocumentServis';
import { Document } from '@/entities/Documents';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';

interface DeleteDocumentModalProps {
    classNames?: string[];
    document: Document;
}

export const DeleteDocumentModal: FC<DeleteDocumentModalProps> = memo(
    (props: DeleteDocumentModalProps) => {
        const { classNames = [], document } = props;
        const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const dispatch = useAppDispatch();

        const onDeleteDocument = useCallback(
            async (document: Document) => {
                try {
                    setLoading(true);
                    await dispatch(deleteDocument(document)).unwrap();
                    setLoading(false);
                    handleClose();
                } catch (err: any) {
                    setLoading(false);
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
                buttonTitle="delete"
            >
                <>
                    <Suspense fallback="...">
                        <CreateDocumentForm
                            onSendForm={onDeleteDocument}
                            editableDocument={document}
                            isLoading={loading}
                            readOnly
                        />
                    </Suspense>
                    {loading && <Loader />}
                </>
            </Modal>
        );
    },
);
