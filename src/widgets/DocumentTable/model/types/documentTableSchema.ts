import { EntityState } from '@reduxjs/toolkit';
import { Document } from '@/entities/Document';

export interface documentTableSchema extends EntityState<Document, string> {
    isLoading?: boolean;
    error?: string;
}
