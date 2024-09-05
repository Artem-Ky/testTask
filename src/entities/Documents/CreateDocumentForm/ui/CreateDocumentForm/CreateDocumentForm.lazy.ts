import { FC, lazy } from 'react';
import { CreateDocumentFormProps } from './CreateDocumentForm';

export const CreateDocumentFormLazy = lazy<FC<CreateDocumentFormProps>>(
    () => import('./CreateDocumentForm'),
);
