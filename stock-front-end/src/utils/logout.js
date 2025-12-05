import { httpCommon } from 'connectors/http-common'

const logout = async () => {
    try {
        const http = httpCommon()
        http.post('/api/v1/auth/logout').then(res => {
            // console.log('logout success ===>', res);
        }).catch(e => {
            console.log('error ===>', e)
        });
    } catch (err) {
    }
};

export default logout
