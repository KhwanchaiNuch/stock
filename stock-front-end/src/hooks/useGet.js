import { useState, useEffect, useRef } from 'react'
import { httpCommon } from 'connectors/http-common'
import { curry, get, omitBy, isFunction, chain, omit } from 'lodash'
import { propOr } from 'ramda'

const getVariables = propOr({}, 'variables')
const getTotalLoadmoreableItem = curry((pathOfLoadmoreableItem, items) =>
  chain(items)
    .get(`${pathOfLoadmoreableItem}`)
    .size()
    .value()
)
const getLimit = (limit, offset) => (isFunction(limit) ? limit(offset) : limit)
const getLoadmoreableItem = curry((path, items) => get(items, `${path}`))

const useGet = (query, options) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const fetchApiRef = useRef(false)

  const fetchDataHandler = () => {
    const http = httpCommon()
    return http.get(query, {
      params: {
        ...getVariables(options)
      }
    })
  }

  const fetchData = () => {
    if (loading) return
    setLoading(true)
    fetchDataHandler()
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        console.log('error ===>', e)
      })
  }

  const onFetch = () => {
    setData([])
    fetchData()
  }

  const onQueryData = async (queryFetch, optionsFetch) => {
    const http = httpCommon()
    http.get(queryFetch, {
      params: {
        ...getVariables(optionsFetch)
      }
    }).then(response => {
      return response.data
    })
      .catch(e => {
        console.log('error ===>', e)
      })
  }

  const onFetchQuery = (queryFetch, optionsFetch) => {
    setLoading(true)
    setData([])
    const http = httpCommon()
    http.get(queryFetch, {
      params: {
        ...getVariables(optionsFetch)
      }
    }).then(response => {
      setData(response.data)
      setLoading(false)
    })
      .catch(e => {
        setLoading(false)
        console.log('error ===>', e)
      })
  }

  const refetchHandler = () => {
    onFetch()
  }

  useEffect(() => {
    if (get(options, 'skip', false)) return
    if (fetchApiRef.current) return
    fetchApiRef.current = true
    onFetch()
  }, [])

  const loadMoreHandler = async ({
    pathOfLoadmoreableItem,
    limit = 10,
    onDone,
    limitKey = 'limit',
    offsetKey = 'offset'
  }) => {
    const offset =
            getTotalLoadmoreableItem(pathOfLoadmoreableItem)(data) +
            get(options, 'variables.offset', 0)
    const variables = {
      ...getVariables(options),
      [offsetKey]: offset,
      ...omitBy({ limit: getLimit(limit, offset) }, (i) => !i)
    }
    let hasMore = true
    const dataLoadMore = limitKey === 'limit'
      ? variables
      : omit(
        {
          ...variables,
          [limitKey]: variables.limit
        },
        'limit'
      )
    if (loading) return
    setLoading(true)
    const http = httpCommon()
    http.get(query, {
      params: {
        ...dataLoadMore
      }
    })
      .then(response => {
        const prevData = getLoadmoreableItem(pathOfLoadmoreableItem)(data)
        const fetchMoreResultData = getLoadmoreableItem(pathOfLoadmoreableItem)(response.data)
        const mergeData = [...prevData, ...fetchMoreResultData]
        setData({
          ...data,
          [`${pathOfLoadmoreableItem}`]: mergeData
        })
        if (get(fetchMoreResultData, 'length', 0) < limit) {
          hasMore = false
        }
        if (onDone) {
          onDone({ hasMore, results: mergeData })
        }
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        console.log('error ===>', e)
      })
  }

  return {
    data,
    loading,
    refetch: refetchHandler,
    loadMore: loadMoreHandler,
    onFetchQuery,
    onQueryData
  }
}

export default useGet
