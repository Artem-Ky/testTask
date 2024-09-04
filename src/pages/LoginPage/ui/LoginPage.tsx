import { FC, memo, useState } from 'react';
import cnBind from 'classnames/bind';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './LoginPage.module.scss';
import { Page } from '@/widgets/Page';
import { LoginForm } from '@/features/AuthByUsername';
import { RoutePath } from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';

interface LoginPageProps {
    classNames?: string[];
}

const LoginPage: FC<LoginPageProps> = memo((props: LoginPageProps) => {
    const { classNames = [] } = props;
    const cn = cnBind.bind(cls);
    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    const [redirectToMain, setRedirectToMain] = useState<boolean>(!!auth);

    const handleSuccess = () => {
        setRedirectToMain(true);
    };

    if (redirectToMain) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return (
        <Page
            classNames={[
                cn(
                    cls.LoginPage,
                    ...classNames.map((clsName) => cls[clsName] || clsName),
                ),
            ]}
        >
            <LoginForm onSuccess={handleSuccess} />
        </Page>
    );
});

export default LoginPage;
