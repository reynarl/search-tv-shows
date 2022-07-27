import axios from 'axios'
import { useEffect } from 'react'

const useFetch = (series, setSeries, url, state) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${url}`)
        setSeries(data)
        console.log(data)
      } catch (error) {
        console.log(error.message)
        setSeries([])
      }
    }
    getData()
  }, [state])

  return { series }
}

export default useFetch
