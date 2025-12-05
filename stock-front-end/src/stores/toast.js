import { thunk, action } from 'easy-peasy'
import delay from 'utils/delay'

export default {
  $isOpen: false,
  message: '',
  type: null,
  setOpen: action((state, isOpen) => {
    state.isOpen = isOpen
  }),
  setMessage: action((state, message) => {
    state.message = message
  }),
  setType: action((state, type) => {
    state.type = type
  }),
  openToast: thunk(async (actions, payload) => {
    actions.setOpen(true)
    actions.setMessage(payload.message)
    actions.setType(payload.type)
    await delay(payload.timeout || 1000)
    actions.setOpen(false)
    actions.setMessage('')
    actions.setType(null)
  })
}