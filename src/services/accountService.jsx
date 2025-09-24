import * as httpRequestAccount from '@/utils/httpRequestAccount';

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
