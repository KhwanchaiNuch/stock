import { storageKey, storageKeyRefresh } from 'config'
import cookie from 'cookie'
import { get } from 'lodash'
import { useStoreActions, useStoreState } from 'easy-peasy'

const AuthViewHandler = ({ children }) => {
  const setUser = useStoreActions((actions) => actions.user.setUser)
  const accessToken = get(cookie.parse(document.cookie), storageKey)
  const refreshToken = get(cookie.parse(document.cookie), storageKeyRefresh)
  const authenticated = useStoreState((state) => state.user.authenticated)

  const initUser = async () => {
    setUser({
      token: accessToken,
      refreshToken
    })
  }

  if (refreshToken) {
    initUser()
  }

  return children(authenticated)
}

export default AuthViewHandler
