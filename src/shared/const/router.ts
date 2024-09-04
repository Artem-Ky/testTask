export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    //
    Not_Found = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    //
    [AppRoutes.Not_Found]: '*',
};
