import { action, thunk } from 'easy-peasy'
import delay from 'utils/delay'
import get from 'lodash/get'

export default {
  $isOpen: false,
  props: {},
  numberOfUnseen: 0,
  lastNotifications: [],
  setIsOpen: action((state, isOpen) => {
    state.isOpen = isOpen
  }),
  setProps: action((state, props) => {
    state.props = props
  }),
  showNotification: thunk(async (actions, { props }) => {
    actions.setIsOpen(true)
    actions.setProps(props)
    const notAutoClose = get(props, 'notAutoClose', false)
    const disappearedIn = get(props, 'disappearedIn', 3000)
    if (!notAutoClose) {
      await delay(disappearedIn)
      return actions.hideNotification()
    }
  }),
  hideNotification: action((state) => {
    state.isOpen = false
    state.props = {}
  }),
  increaseNumberOfUnseen: action((state) => {
    state.numberOfUnseen += 1
  }),
  clearNumberOfUnseen: action((state) => {
    state.numberOfUnseen = 0
  }),
  updateLastNotification: action((state, payload) => {
    state.lastNotifications = [payload, ...state.lastNotifications];
  })
}
