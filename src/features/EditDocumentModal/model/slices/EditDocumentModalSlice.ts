import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditDocumentModalSchema } from '../types/EditDocumentModalSchema';

const initialState: EditDocumentModalSchema = {
    
};

export const EditDocumentModalSlice = createSlice({
    name: 'EditDocumentModal',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: EditDocumentModalActions } = EditDocumentModalSlice;
export const { reducer: EditDocumentModalReducer } = EditDocumentModalSlice;