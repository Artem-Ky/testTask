import { StateSchema } from '@/app/providers/StoreProvider';

export const getDocumentIsLoading = (state: StateSchema) => state.documentsTable?.isLoading;
export const getDocumentError = (state: StateSchema) => state.documentsTable?.error;
