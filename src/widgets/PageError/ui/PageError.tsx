import { FC } from 'react';
import cnBind from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    classNames?: string[];
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { classNames = [] } = props;
    const cn = cnBind.bind(cls);
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div />
        // <VStack
        //     justify="center"
        //     align="center"
        //     classNames={[
        //         cn(
        //             cls.PageError,
        //             ...classNames.map((clsName) => cls[clsName] || clsName),
        //         ),
        //     ]}
        // >
        //     <p>{t('Произошла непредвиденная ошибка')}</p>
        //     <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        // </VStack>
    );
};
