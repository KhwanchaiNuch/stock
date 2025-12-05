import { useState } from 'react'
import { httpCommon } from 'connectors/http-common'

const usePost = (api) => {
  const [loading, setLoading] = useState(false)

  const fetchDataHandler = ({ variables }) => {
    const http = httpCommon()
    return http.post(api, {
      ...variables
    })
  }

  const fetchData = ({ variables, onDone = null, onError = null }) => {
    if (loading) return
    setLoading(true)
    fetchDataHandler({ variables })
      .then(response => {
        setLoading(false)
        if (onDone) {
          onDone(response.data)
        }
      })
      .catch(e => {
        // console.log('error ===>', e);
        setLoading(false)
        if (onError) {
          onError(e)
        }
      })
  }

  return {
    onPost: fetchData
  }
}

export default usePost
