import { EntityState } from '@reduxjs/toolkit';
import { Document } from '@/entities/Documents';

export interface documentTableSchema extends EntityState<Document, string> {
    isLoading?: boolean;
    error?: string;
}
