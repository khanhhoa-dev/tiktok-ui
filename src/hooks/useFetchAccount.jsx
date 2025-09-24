import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useFetchAccount(fetchApi, initialParams = 5) {
    const [state, setState] = useState({
        datas: [],
        isFull: false,
    });
    useEffect(() => {
        const fetch = async () => {
            try {
                const result = await fetchApi();
                setState(prev => ({
                    ...prev,
                    datas: result,
                }));
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.isFull]);

    const handleToggleParams = () => {
        setState(prev => ({
            ...prev,
            isFull: !prev.isFull,
        }));
    };
    const datas = state.isFull
        ? state.datas
        : state.datas.slice(0, initialParams);
    return { ...state, handleToggleParams, datas };
}

useFetchAccount.propTypes = {
    fetchApi: PropTypes.func.isRequired,
    initialParams: PropTypes.number,
};

export default useFetchAccount;
