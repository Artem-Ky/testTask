export interface User {
    data: {
        token: string;
    }
}

export interface UserSchema {
    authData?: User;

    _inited?: boolean;
}
