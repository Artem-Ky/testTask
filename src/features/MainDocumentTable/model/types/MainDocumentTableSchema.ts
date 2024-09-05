import { EntityState } from '@reduxjs/toolkit';
import { Document } from '@/entities/Document';

export interface MainDocumentTableSchema extends EntityState<Document, string> {
    isLoading?: boolean;
    error?: string;
}
