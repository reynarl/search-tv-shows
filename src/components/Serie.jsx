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
      {/* DESCRIPTION */}
      {
        series.length !== 0
          ? (
            <div className='card-serie card text-bg-dark'>
              {series.image
                ? <img src={series.image?.original} alt={series?.name} height={500} style={{ objectFit: 'cover' }} />
                : console.log('PONER OTRA IMAGEN')}
              <div className='card-serie-description card-img-overlay d-flex'>
                <div>
                  {series.image
                    ? <img src={series.image?.medium} alt={series?.name} height={300} style={{ objectFit: 'contain' }} />
                    : console.log('PONER OTRA IMAGEN')}
                  <p>⭐{series.rating?.average},0</p>
                </div>
                <div className='contain-description'>
                  <h2 className='card-title'>{series?.name} <span className='type'>{series?.type}</span></h2>
                  <p dangerouslySetInnerHTML={{ __html: series?.summary }} />
                  {series.genres?.map(genre => (<p className='genre'>{genre}</p>))}
                </div>
              </div>
            </div>
            )
          : <p>Sin resultados</p>
      }
      {/* EPISODIOS */}
      {/* CAST */}
    </section>
  )
}

export default Serie
