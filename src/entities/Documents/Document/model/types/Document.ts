export interface Document {
    id: string;
    companySigDate: string;
    companySignatureName: string;
    documentName: string;
    documentStatus: string;
    documentType: string;
    employeeNumber: string;
    employeeSigDate: string;
    employeeSignatureName: string;
}

export interface DocumentFetch {
    data: Document[];
}

export interface DocumentAddResponse {
    data: Document;
}
