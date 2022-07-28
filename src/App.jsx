import { useRef, useState } from 'react'
// components
import ViewSeries from './components/ViewSeries'
import Home from './components/Home'
// customHook
import useFetch from './hooks/useFetch'

function App () {
  const inputSearch = useRef(null)
  const [text, setText] = useState('')
  const [home, setHome] = useState(true)

  // endpoints
  const URL = 'https://api.tvmaze.com'
  const scheduleQuery = `${URL}/schedule?date=2022-07-27`
  const seriesQuery = `${URL}/search/shows?q=${text}`

  // using Custom Hook 'useFetch'
  const { series: schedule } = useFetch(scheduleQuery, '')
  const { series } = useFetch(seriesQuery, text)

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(inputSearch.current.value)
    setHome(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type='search' placeholder='Buscar serie' />
      </form>
      {home ? <Home schedule={schedule} /> : <ViewSeries text={text} series={series} />}
    </>
  )
}

export default App
