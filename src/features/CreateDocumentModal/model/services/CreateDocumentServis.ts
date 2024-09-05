import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Document, DocumentAddResponse } from '@/entities/Documents';
import { $api } from '@/shared/api/api';
import { addDocumentToTable } from '@/widgets/DocumentTable';

export const createDocument = createAsyncThunk<
    DocumentAddResponse,
    Document,
    ThunkConfig<string>
>('createDocumentModal/createDocument', async (document, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
        const response = await $api.post<DocumentAddResponse>(
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
