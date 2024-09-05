import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './EditDocumentModal.module.scss';
import { memo } from 'react';
import cnBind from 'classnames/bind'

interface EditDocumentModalProps {
    classNames?: string[];
}

export const EditDocumentModal:FC<EditDocumentModalProps> = memo((props: EditDocumentModalProps) => {
    const { classNames = [] } = props;
    const { t } = useTranslation();
    const cn = cnBind.bind(cls);
    
    return (
        <div className={cn(cls.EditDocumentModal, ...classNames.map(clsName => cls[clsName] || clsName))}>
           
        </div>
    );
});