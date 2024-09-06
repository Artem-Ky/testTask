import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Document, DocumentResponse } from '@/entities/Documents';
import { $api } from '@/shared/api/api';
import { updateDocumentToTable } from '@/widgets/DocumentTable';

export const editDocument = createAsyncThunk<
    DocumentResponse,
    Document,
    ThunkConfig<string>
>('createDocumentModal/editDocument', async (document, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
        const response = await $api.post<DocumentResponse>(
            `/ru/data/v3/testmethods/docs/userdocs/set/${document.id}`,
            document,
        );

        if (!response.data) {
            throw new Error();
        }
        dispatch(updateDocumentToTable(response.data.data));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
