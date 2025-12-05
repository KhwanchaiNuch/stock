import { createStore } from 'easy-peasy'
import modalStore from './modal'
import notificationStore from './notification'
import appStore from './app'
import toastStore from './toast'
import userStore from './user'

export default createStore({
  modal: modalStore,
  notification: notificationStore,
  app: appStore,
  toast: toastStore,
  user: userStore,
})
