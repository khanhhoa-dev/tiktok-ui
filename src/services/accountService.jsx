import * as httpRequestAccount from '@/utils/httpRequestAccount';

export const AccountSuggested = async () => {
    try {
        const result =
            await httpRequestAccount.getAccountSuggested('account/suggested');
        return result.suggested_accounts;
    } catch (error) {
        console.error('Error in getAccountSuggested:', error);
        throw error;
    }
};

export const AccountFollowing = async () => {
    try {
        const result =
            await httpRequestAccount.getAccountFollowing('account/following');
        return result.following_accounts;
    } catch (error) {
        console.error('Error in getAccountSuggested:', error);
        throw error;
    }
};
