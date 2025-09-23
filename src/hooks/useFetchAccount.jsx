import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useFetchAccount(fetchApi, initialParams = '5') {
    const [state, setState] = useState({
        datas: [],
        loading: true,
        isFull: false,
    });
    useEffect(() => {
        const fetch = async params => {
            try {
                const result = await fetchApi(params);
                setState(prev => ({
                    ...prev,
                    datas: result,
                    loading: false,
                }));
            } catch (error) {
                console.log(error);
            }
        };
        fetch(state.isFull ? 'all' : initialParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.isFull]);

    const handleToggleParams = () => {
        setState(prev => ({
            ...prev,
            isFull: !prev.isFull,
            loading: true,
        }));
    };
    return { ...state, handleToggleParams };
}

useFetchAccount.propTypes = {
    fetchApi: PropTypes.func.isRequired,
    initialParams: PropTypes.string,
};

export default useFetchAccount;
