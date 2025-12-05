import { useState } from 'react'
import { httpCommon } from 'connectors/http-common'

const useDelete = (api, inBody = false) => {
    const [loading, setLoading] = useState(false)

    const fetchDataHandler = ({ variables }) => {
        const http = httpCommon()
        if (inBody) {
            return http.delete(api, {
                data: {
                    ...variables
                }
            })
        }
        return http.delete(`${api}/${variables.id}`)
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
        onDelete: fetchData
    };
};

export default useDelete
