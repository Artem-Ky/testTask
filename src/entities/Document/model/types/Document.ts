export interface Document {
    id: string;
    companySigDate: Date;
    companySignatureName: string;
    documentName: string;
    documentStatus: string;
    documentType: string;
    employeeNumber: string;
    employeeSigDate: Date;
    employeeSignatureName: string;
}

export interface DocumentFetch {
    data: Document[];
}
