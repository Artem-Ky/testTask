import { FC, memo } from 'react';
import cnBind from 'classnames/bind';
import { useSelector } from 'react-redux';
import cls from './MainDocumentTable.module.scss';
import { DocumentsTable } from '@/entities/Document';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getMainDocumentIsLoading } from '../../model/selectors/getDocuments';
import { getMainDocuments } from '../../model/slices/MainDocumentTableSlice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchDocuments } from '../../model/services/fetchDocuments/fetchDocuments';

interface MainDocumentTableProps {
    classNames?: string[];
}

export const MainDocumentTable: FC<MainDocumentTableProps> = memo(
    (props: MainDocumentTableProps) => {
        const { classNames = [] } = props;
        const cn = cnBind.bind(cls);

        const dispatch = useAppDispatch();

        const documents = useSelector(getMainDocuments.selectAll);
        const documentsIsLoading = useSelector(getMainDocumentIsLoading);

        useInitialEffect(() => {
            dispatch(fetchDocuments());
        });

        return (
            <DocumentsTable
                documents={documents}
                isLoading={documentsIsLoading}
            />
        );
    },
);
