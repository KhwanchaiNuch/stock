import { useState } from 'react'
import { httpCommon } from 'connectors/http-common'

const usePut = (api) => {
  const [loading, setLoading] = useState(false)

  const fetchDataHandler = ({ variables }) => {
    const http = httpCommon()
    return http.put(api, {
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
    onPut: fetchData
  }
}

export default usePut
