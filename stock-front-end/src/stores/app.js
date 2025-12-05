import { action } from 'easy-peasy'

export default {
    appLoading: false,
    setAppLoading: action((state, loading) => {
        state.appLoading = loading
    })
};
