import { Suspense, useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
// import { getUserInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Router } from './providers/router';

const App = () => {
    const dispatch = useAppDispatch();
    // const userInited = useSelector(getUserInited);

    useEffect(() => {
        // dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <div className="content-page">
                    {/* <div className="content">{userInited && <Router />}</div> */}
                    <div className="content">
                        <Router />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
