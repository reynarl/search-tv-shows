import { useParams, NavLink } from 'react-router-dom'

import useFetch from '../hooks/useFetch'

const Serie = () => {
  const { movieId } = useParams()

  // endpoint
  const URL = 'https://api.tvmaze.com'
  const seriesQuery = `${URL}/shows/${movieId}`

  // using Custom Hook 'useFetch'
  const { series } = useFetch(seriesQuery, '')
  console.log(series.id)

  return (
    <section>
      <NavLink className='nav-link' to='/'>Inicio</NavLink>
      <p>{series?.name}</p>
      <p>{series?.summary}</p>
    </section>
  )
}

export default Serie
