import { StateSchema } from '@/app/providers/StoreProvider';

export const getMainDocumentIsLoading = (state: StateSchema) => state.mainDocumentsTable?.isLoading;
export const getMainDocumentError = (state: StateSchema) => state.mainDocumentsTable?.error;
