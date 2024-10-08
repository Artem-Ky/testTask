import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Document, DocumentFetch } from '@/entities/Documents';
import { $api } from '@/shared/api/api';

export const fetchDocuments = createAsyncThunk<
    Document[],
    undefined,
    ThunkConfig<string>
>('documentTable/fetchDocuments', async (_props, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
        const response = await $api.get<DocumentFetch>(
            '/ru/data/v3/testmethods/docs/userdocs/get',
        );

        if (!response.data) {
            throw new Error();
        }
        return response.data.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
