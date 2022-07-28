import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url, state) => {
  const [series, setSeries] = useState([])
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
