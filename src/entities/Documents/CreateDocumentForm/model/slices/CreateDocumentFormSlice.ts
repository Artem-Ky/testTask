import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateDocumentFormSchema } from '../types/CreateDocumentFormSchema';

const initialState: CreateDocumentFormSchema = {
    companySigDate: new Date().toISOString(),
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: new Date().toISOString(),
    employeeSignatureName: '',
    error: undefined,
};

export const CreateDocumentFormSlice = createSlice({
    name: 'createDocumentForm',
    initialState,
    reducers: {
        setCompanySigDate: (state, action: PayloadAction<string>) => {
            state.companySigDate = action.payload;
        },
        setCompanySignatureName: (state, action: PayloadAction<string>) => {
            state.companySignatureName = action.payload;
        },
        setDocumentName: (state, action: PayloadAction<string>) => {
            state.documentName = action.payload;
        },
        setDocumentStatus: (state, action: PayloadAction<string>) => {
            state.documentStatus = action.payload;
        },
        setDocumentType: (state, action: PayloadAction<string>) => {
            state.documentType = action.payload;
        },
        setEmployeeNumber: (state, action: PayloadAction<string>) => {
            state.employeeNumber = action.payload;
        },
        setEmployeeSigDate: (state, action: PayloadAction<string>) => {
            state.employeeSigDate = action.payload;
        },
        setEmployeeSignatureName: (state, action: PayloadAction<string>) => {
            state.employeeSignatureName = action.payload;
        },
    },
});

export const { actions: CreateDocumentFormActions } = CreateDocumentFormSlice;
export const { reducer: CreateDocumentFormReducer } = CreateDocumentFormSlice;
