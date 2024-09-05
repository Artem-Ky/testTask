import {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { documentTableSchema } from '@/widgets/DocumentTable';
import { Document } from '@/entities/Documents';

export interface StateSchema {
    user: UserSchema;

    //  async
    loginForm?: LoginSchema;
    documentsTable?: documentTableSchema;
    CreateDocumentForm?: Document;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
