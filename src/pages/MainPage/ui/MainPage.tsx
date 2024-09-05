import { FC, memo } from 'react';
import { Page } from '@/widgets/Page';
import {
    MainDocumentTable,
    MainDocumentTableReducer,
} from '@/features/MainDocumentTable';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const MainPage: FC = memo(() => {
    const reducers: ReducersList = {
        mainDocumentsTable: MainDocumentTableReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <div>Главная страница сайта</div>
                <MainDocumentTable />
            </Page>
        </DynamicModuleLoader>
    );
});

export default MainPage;
