export enum AppRoutes {
    MAIN = 'main',
    //
    Not_Found = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    //
    [AppRoutes.Not_Found]: '*',
};
