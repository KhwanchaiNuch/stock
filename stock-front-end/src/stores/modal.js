import { thunk, action } from 'easy-peasy'
import delay from 'utils/delay'
export default {
  modalType: null,
  modalProps: {},
  $isOpen: false,
  openModal: action((state, { type, data }) => {
    state.isOpen = true
    state.modalType = type
    state.modalProps = data
  }),
  clearModal: action(state => {
    state.modalType = null
    state.modalProps = {}
  }),
  setIsOpen: action((state, bool) => {
    state.isOpen = bool
  }),
  closeModal: thunk(async actions => {
    actions.setIsOpen(false)
    await delay(300)
    actions.clearModal()
  })
}
