import { action, thunk, persist } from 'easy-peasy'
import { set, isEmpty } from 'lodash'
import Cookie from 'js-cookie'
import getProfile from 'utils/get-profile'
import logout from 'utils/logout'
import { isProduction, storageKey, storageKeyRefresh } from 'config'

export default persist(
    {
        authenticated: false,
        user: null,
        setUser: thunk(async (actions, { token, refreshToken }) => {
            Cookie.set(storageKey, token, { expires: 15, secure: isProduction })
            if (refreshToken) {
                Cookie.set(storageKeyRefresh, refreshToken, { expires: 15, secure: isProduction })
            }
            try {
                const myProfile = await getProfile(token)
                if (isEmpty(myProfile)) {
                    actions.clearUser()
                } else {
                    actions.setUserData(myProfile)
                    actions.setAuthenticated(true)
                }
            } catch (err) {
                console.log('err: ', err)
            }
        }),
        setUserData: action((state, user) => {
            state.user = { ...state.user, ...user }
        }),
        updateUserData: action((state, { path, value }) => {
            set(state, path, value)
        }),
        clearUser: thunk(async (actions) => {
            try {
                await logout()
                Cookie.remove(storageKey)
                Cookie.remove(storageKeyRefresh)
                actions.clearUserStore()
            } catch (err) {
                console.log('err: ', err)
            }
        }),
        clearUserStore: action(async (state) => {
            state.user = null
            state.authenticated = false
        }),
        setAuthenticated: action((state, authenticated) => {
            state.authenticated = authenticated
        }),
        refetchMyProfileData: thunk(async (actions) => {
            const token = await Cookie.get(storageKey)
            try {
                const myProfile = await getProfile(token)
                if (isEmpty(myProfile)) {
                    actions.clearUser()
                } else {
                    actions.setUserData(myProfile)
                    actions.setAuthenticated(true)
                }
            } catch (err) {
                console.log('refetchMyProfileData err: ', err)
            }
        }),
    },
    { storage: 'localStorage' }
);
