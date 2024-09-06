import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Document, DocumentResponse } from '@/entities/Documents';
import { $api } from '@/shared/api/api';
import { removeDocumentToTable } from '@/widgets/DocumentTable';

export const deleteDocument = createAsyncThunk<
    DocumentResponse,
    Document,
    ThunkConfig<string>
>('createDocumentModal/deleteDocument', async (document, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
        const response = await $api.post<DocumentResponse>(
            `/ru/data/v3/testmethods/docs/userdocs/delete/${document.id}`,
            {},
        );

        if (!response.data) {
            throw new Error();
        }
        dispatch(removeDocumentToTable(document));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
