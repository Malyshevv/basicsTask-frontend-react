import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { userListRequestAsync } from '../redux/User/Lists/reducerUserLists';

export function useAccountsLoad() {

    const loading = useSelector<RootState, any>((state) => state.accounts.loading);
    const accounts = useSelector<RootState, any>((state) => state.accounts.data);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(userListRequestAsync());
    }, []);

    return {
        loading,
        accounts,
    };
}
