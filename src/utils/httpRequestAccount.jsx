import axios from 'axios';

// Account List
const requestAccount = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_ACCOUNT,
});
export const getAccountSuggested = async (path, option = {}) => {
    try {
        const result = await requestAccount.get(path, option);
        return result.data;
    } catch (error) {
        console.error('Error in getAccountSuggested:', error);
        throw error;
    }
};

export const getAccountFollowing = async (path, option = {}) => {
    try {
        const result = await requestAccount.get(path, option);
        return result.data;
    } catch (error) {
        console.error('Error in getAccountFollowing:', error);
        throw error;
    }
};

// Follow
export const patchFollow = async (path, data = {}, option = {}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const result = await requestAccount.patch(path, data, option);
        return result.data;
    } catch (error) {
        throw error;
    }
};
