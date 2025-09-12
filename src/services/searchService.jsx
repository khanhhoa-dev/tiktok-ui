import * as httpRequest from '@/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        //Gọi hàm get chứ không phải phương thức get
        const result = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
