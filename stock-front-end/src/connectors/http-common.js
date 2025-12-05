import axios from 'axios'
import { apiEndpoint, storageKey } from 'config'
import cookie from 'cookie'
import { get } from 'lodash'

export const httpCommon = () => {
  const token = get(cookie.parse(document.cookie), storageKey)
  return axios.create({
    baseURL: apiEndpoint,
    headers: token ? {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    } : {
      'Content-type': 'application/json'
    }
  })
}
