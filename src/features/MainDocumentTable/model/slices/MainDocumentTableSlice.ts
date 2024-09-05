import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Document } from '@/entities/Document';
import { MainDocumentTableSchema } from '../types/MainDocumentTableSchema';
import { fetchDocuments } from '../services/fetchDocuments/fetchDocuments';

export const mainDocumentAdapter = createEntityAdapter<Document, string>({
    selectId: (document: Document) => document.id,
});

export const getMainDocuments = mainDocumentAdapter.getSelectors<StateSchema>(
    (state) => state.mainDocumentsTable || mainDocumentAdapter.getInitialState(),
);

const MainDocumentTableSlice = createSlice({
    name: 'MainDocumentTableSlice',
    initialState: mainDocumentAdapter.getInitialState<MainDocumentTableSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDocuments.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchDocuments.fulfilled,
                (state, action: PayloadAction<Document[]>) => {
                    state.isLoading = false;
                    mainDocumentAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchDocuments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: MainDocumentTableReducer } = MainDocumentTableSlice;
