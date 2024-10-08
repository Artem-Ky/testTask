import { FC, memo } from 'react';
import { Page } from '@/widgets/Page';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { DocumentsTable, documentTableReducer } from '@/widgets/DocumentTable';

const MainPage: FC = memo(() => {
    const reducers: ReducersList = {
        documentsTable: documentTableReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <div>Главная страница сайта</div>
                <DocumentsTable />
            </Page>
        </DynamicModuleLoader>
    );
});

export default MainPage;
