import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Document } from '../../../Document/model/types/Document';

const initialState: Document = {
    id: '',
    companySigDate: new Date().toISOString(),
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: new Date().toISOString(),
    employeeSignatureName: '',
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
        setAllDocument: (state, action: PayloadAction<Document>) => {
            state.id = action.payload.id;
            state.companySigDate = action.payload.companySigDate;
            state.companySignatureName = action.payload.companySignatureName;
            state.documentName = action.payload.documentName;
            state.documentStatus = action.payload.documentStatus;
            state.documentType = action.payload.documentType;
            state.employeeNumber = action.payload.employeeNumber;
            state.employeeSigDate = action.payload.employeeSigDate;
            state.employeeSignatureName = action.payload.employeeSignatureName;
        },
        clearForm: () => initialState,
    },
});

export const { actions: CreateDocumentFormActions } = CreateDocumentFormSlice;
export const { reducer: CreateDocumentFormReducer } = CreateDocumentFormSlice;
