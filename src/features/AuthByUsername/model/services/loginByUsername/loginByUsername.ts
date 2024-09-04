import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { $api } from '@/shared/api/api';

interface LoginByUsernameProps {
    username: string;
    password: string;
    remember: boolean;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async ({ username, password, remember }, ThunkAPI) => {
        const { rejectWithValue, dispatch } = ThunkAPI;
        try {
            const response = await $api.post<User>('/ru/data/v3/testmethods/docs/login', {
                username,
                password,
            });

            if (!response.data.data.token) {
                throw new Error();
            }

            if (remember) {
                localStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify(response.data.data.token),
                );
            } else {
                sessionStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify(response.data.data.token),
                );
            }
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
