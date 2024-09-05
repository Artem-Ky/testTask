import { StateSchema } from '@/app/providers/StoreProvider';

export const getCreateDocumentFormCompanySigDate = (state: StateSchema) => state.CreateDocumentForm?.companySigDate;
export const
    getCreateDocumentFormCompanySignatureName = (state: StateSchema) => state.CreateDocumentForm?.companySignatureName;
export const getCreateDocumentFormDocumentName = (state: StateSchema) => state.CreateDocumentForm?.documentName;
export const getCreateDocumentFormDocumentStatus = (state: StateSchema) => state.CreateDocumentForm?.documentStatus;
export const getCreateDocumentFormDocumentType = (state: StateSchema) => state.CreateDocumentForm?.documentType;
export const getCreateDocumentFormEmployeeNumber = (state: StateSchema) => state.CreateDocumentForm?.employeeNumber;
export const getCreateDocumentFormEmployeeSigDate = (state: StateSchema) => state.CreateDocumentForm?.employeeSigDate;
export const getCreateDocumentFormEmployeeSignatureName = (
    state: StateSchema,
) => state.CreateDocumentForm?.employeeSignatureName;
