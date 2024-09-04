import React, {
    FC, memo, useCallback,
} from 'react';
import cnBind from 'classnames/bind';
import { useSelector } from 'react-redux';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getRememberMe } from '../../model/selectors/getRememberMe/getRememberMe';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import cls from './LoginForm.module.scss';
import { AppDispatch } from '@/app/providers/StoreProvider';

interface LoginFormProps {
    classNames?: string[];
    onSuccess: () => void;
}

export const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { classNames = [], onSuccess } = props;
    const cn = cnBind.bind(cls);
    const dispatch: AppDispatch = useAppDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const rememberMe = useSelector(getRememberMe);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    const initialReducers: ReducersList = {
        loginForm: loginReducer,
    };

    const onChangeUsername = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setUsername(event.target.value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPassword(event.target.value));
        },
        [dispatch],
    );

    const onChangeRememberMe = useCallback(() => {
        dispatch(loginActions.setRememberMe(!rememberMe));
    }, [dispatch, rememberMe]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
                remember: rememberMe,
            }),
        );
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, rememberMe, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form
                className={cn(
                    cls.LoginForm,
                    ...classNames.map((clsName) => cls[clsName] || clsName),
                )}
            >
                {error && (
                    <Typography>
                        Вы ввели неправильный логин или пароль
                    </Typography>
                )}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">
                        Номер
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        name="username"
                        type="text"
                        autoFocus
                        value={username}
                        onChange={onChangeUsername}
                        label="Username"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Пароль
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={onChangePassword}
                        endAdornment={(
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )}
                        label="Password"
                    />
                </FormControl>
                <FormControlLabel
                    label="Запомнить меня?"
                    control={(
                        <Checkbox
                            checked={rememberMe}
                            onChange={onChangeRememberMe}
                        />
                    )}
                />
                <Button
                    onClick={onLoginClick}
                    disabled={isLoading}
                    type="submit"
                >
                    Войти
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});
