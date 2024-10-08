import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Document, DocumentResponse } from '@/entities/Documents';
import { $api } from '@/shared/api/api';
import { addDocumentToTable } from '@/widgets/DocumentTable';

export const createDocument = createAsyncThunk<
    DocumentResponse,
    Document,
    ThunkConfig<string>
>('createDocumentModal/createDocument', async (document, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
        const response = await $api.post<DocumentResponse>(
            '/ru/data/v3/testmethods/docs/userdocs/create',
            document,
        );

        if (!response.data) {
            throw new Error();
        }
        dispatch(addDocumentToTable(response.data.data));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
