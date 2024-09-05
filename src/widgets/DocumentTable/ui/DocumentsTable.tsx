import { FC, memo } from 'react';
import cnBind from 'classnames/bind';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import cls from './DocumentsTable.module.scss';
import { Document } from '@/entities/Documents';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchDocuments } from '../model/services/fetchDocuments/fetchDocuments';
import { getDocuments } from '../model/slices/documentTableSlice';
import { getDocumentIsLoading } from '../model/selectors/getDocuments';

interface DocumentsTableProps {
    className?: string;
    isLoading?: boolean;
}

export const DocumentsTable: FC<DocumentsTableProps> = memo(
    (props: DocumentsTableProps) => {
        const { className = '', isLoading } = props;
        const cn = cnBind.bind(cls);

        const dispatch = useAppDispatch();

        const documents = useSelector(getDocuments.selectAll);
        const documentsIsLoading = useSelector(getDocumentIsLoading);

        useInitialEffect(() => {
            dispatch(fetchDocuments());
        });

        return (
            <TableContainer
                component={Paper}
                className={cn(cls.DocumentsTable, cls[className])}
            >
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>companySigDate</TableCell>
                            <TableCell align="right">
                                companySignatureName
                            </TableCell>
                            <TableCell align="right">documentName</TableCell>
                            <TableCell align="right">documentStatus</TableCell>
                            <TableCell align="right">documentType</TableCell>
                            <TableCell align="right">employeeNumber</TableCell>
                            <TableCell align="right">employeeSigDate</TableCell>
                            <TableCell align="right">
                                employeeSignatureName
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {documents?.map((document) => (
                            <TableRow
                                key={document.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {dayjs(document.companySigDate).format(
                                        'DD-MM-YYYY',
                                    )}
                                </TableCell>
                                <TableCell align="right">
                                    {document.companySignatureName}
                                </TableCell>
                                <TableCell align="right">
                                    {document.documentName}
                                </TableCell>
                                <TableCell align="right">
                                    {document.documentStatus}
                                </TableCell>
                                <TableCell align="right">
                                    {document.documentType}
                                </TableCell>
                                <TableCell align="right">
                                    {document.employeeNumber}
                                </TableCell>
                                <TableCell align="right">
                                    {dayjs(document.employeeSigDate).format(
                                        'DD-MM-YYYY',
                                    )}
                                </TableCell>
                                <TableCell align="right">
                                    {document.employeeSignatureName}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    },
);
