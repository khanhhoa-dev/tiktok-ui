import * as httpRequestAccount from '@/utils/httpRequestAccount';

// GET ACCOUNTS SUGGESTED & FOLLOWING
export const AccountSuggested = async () => {
    try {
        const result =
            await httpRequestAccount.getAccountSuggested('accounts/suggested');
        return result;
    } catch (error) {
        console.error('Error in AccountSuggested:', error);
        throw error;
    }
};

export const AccountFollowing = async () => {
    try {
        const result =
            await httpRequestAccount.getAccountFollowing('accounts/following');
        return result;
    } catch (error) {
        console.error('Error in AccountFollowing:', error);
        throw error;
    }
};

//POST FOLLOW
export const Follow = async id => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await httpRequestAccount.patchFollow(`accounts/${id}`, {
            type: 'following',
        });
    } catch (error) {
        throw error;
    }
};
