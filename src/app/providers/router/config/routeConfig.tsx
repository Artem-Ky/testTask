import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/shared/const/router';

export type appRouteProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, appRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true,
    },
    //
    [AppRoutes.Not_Found]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
