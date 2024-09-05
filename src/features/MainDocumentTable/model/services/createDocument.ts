import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { $api } from '@/shared/api/api';
import { fetchDocuments } from './fetchDocuments/fetchDocuments';

export const addDocument = createAsyncThunk<
    Document,
    Document,
    ThunkConfig<string>
>('mainDocumentTable/addDocument', async (document, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
        const response = await $api.post<Document>(
            '/ru/data/v3/testmethods/docs/userdocs/create',
            { document },
        );

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchDocuments());

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
