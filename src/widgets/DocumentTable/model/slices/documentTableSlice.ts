import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Document } from '@/entities/Documents';
import { fetchDocuments } from '../services/fetchDocuments/fetchDocuments';
import { documentTableSchema } from '../types/documentTableSchema';

export const documentAdapter = createEntityAdapter<Document, string>({
    selectId: (document: Document) => document.id,
});

export const getDocuments = documentAdapter.getSelectors<StateSchema>(
    (state) => state.documentsTable || documentAdapter.getInitialState(),
);

const documentTableSlice = createSlice({
    name: 'documentTableSlice',
    initialState: documentAdapter.getInitialState<documentTableSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        addDocumentToTable(state, action: PayloadAction<Document>) {
            documentAdapter.addOne(state, action.payload);
        },
        updateDocumentToTable(state, action: PayloadAction<Document>) {
            documentAdapter.setOne(state, action.payload);
        },
        removeDocumentToTable(state, action: PayloadAction<Document>) {
            documentAdapter.removeOne(state, action.payload.id);
        },
    },
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
                    documentAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchDocuments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: {
        addDocumentToTable,
        updateDocumentToTable,
        removeDocumentToTable,
    },
    reducer: documentTableReducer,
} = documentTableSlice;
