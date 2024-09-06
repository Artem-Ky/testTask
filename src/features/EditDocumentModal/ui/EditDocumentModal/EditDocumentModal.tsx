import {
    FC, memo, Suspense, useCallback, useState,
} from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { editDocument } from '../../model/services/EditDocumentServis';
import { Document } from '@/entities/Documents';
import { CreateDocumentForm } from '@/entities/Documents/CreateDocumentForm';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';

interface EditDocumentModalProps {
    classNames?: string[];
    document: Document;
}

export const EditDocumentModal: FC<EditDocumentModalProps> = memo(
    (props: EditDocumentModalProps) => {
        const { classNames = [], document } = props;
        const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const dispatch = useAppDispatch();

        const onEditDocument = useCallback(
            async (document: Document) => {
                try {
                    setLoading(true);
                    await dispatch(editDocument(document)).unwrap();
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
                buttonTitle="edit"
            >
                <>
                    <Suspense fallback="...">
                        <CreateDocumentForm
                            onSendForm={onEditDocument}
                            editableDocument={document}
                            isLoading={loading}
                        />
                    </Suspense>
                    {loading && <Loader />}
                </>
            </Modal>
        );
    },
);
