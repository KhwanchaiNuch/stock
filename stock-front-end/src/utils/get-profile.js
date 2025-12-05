import axios from 'axios'
import { apiEndpoint } from 'config'
import { get } from 'lodash'

const getProfile = async (token) => {
  try {
    const response = await axios.create({
      baseURL: apiEndpoint,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).post('/api/v1/users/user-profile').then(res => {
      return res
    }).catch(e => {
      console.log('error ===>', e)
      return null
    })
    return get(response, 'data.result', {})
  } catch (err) {
    return null
  }
}

export default getProfile
