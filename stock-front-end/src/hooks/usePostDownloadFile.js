import { useState } from 'react'
import { httpCommon } from 'connectors/http-common'

const usePostDownloadFile = (api) => {
  const [loading, setLoading] = useState(false)

  const fetchDataHandler = ({ variables }) => {
    const http = httpCommon()
    http.defaults.responseType = 'blob'
    console.log(http.defaults)
    console.log(variables)
    return http.post(api, {
      ...variables
    })
  }

  const fetchData = ({ variables, onDone = null, onError = null }) => {
    console.log(variables)
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

export default usePostDownloadFile
