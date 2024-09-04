import {
    FC,
    memo,
    ReactNode,
} from 'react';
import cnBind from 'classnames/bind';
import cls from './Page.module.scss';

interface PageProps {
    classNames?: string[];
    children: ReactNode;
}

export const PAGE_ID = 'PAGE_ID';

export const Page: FC<PageProps> = memo((props: PageProps) => {
    const { classNames = [], children } = props;
    const cn = cnBind.bind(cls);

    return (
        <main
            className={cn(
                ...classNames.map((clsName) => cls[clsName] || clsName),
                cls.Page,
            )}
            id={PAGE_ID}
        >
            {children}
        </main>
    );
});
