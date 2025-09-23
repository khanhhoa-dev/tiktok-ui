import * as httpRequestAccount from '@/utils/httpRequestAccount';

export const AccountSuggested = async p => {
    try {
        const result = await httpRequestAccount.getAccountSuggested(
            'account/suggested',
            {
                params: {
                    p,
                },
            }
        );
        return result.suggested_accounts;
    } catch (error) {
        console.error('Error in getAccountSuggested:', error);
        throw error;
    }
};

export const AccountFollowing = async p => {
    try {
        const result = await httpRequestAccount.getAccountFollowing(
            'account/following',
            {
                params: {
                    p,
                },
            }
        );
        return result.following_accounts;
    } catch (error) {
        console.error('Error in getAccountSuggested:', error);
        throw error;
    }
};
