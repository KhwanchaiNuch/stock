import { get } from 'lodash'
import { useStoreState } from 'easy-peasy'
import { includes, __ } from 'ramda'

const usePermission = () => {
  const user = useStoreState(state => state.user.user)
  const userRole = get(user, 'role', '')
  const isAllowPermission = includes(__, ['OPERATOR', 'ADMIN'])
  return { isAllow: isAllowPermission(userRole) }
}

export default usePermission
