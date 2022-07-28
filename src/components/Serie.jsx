import { useParams, NavLink } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import SerieEpisodes from './SerieEpisodes'
import imgNotFound from '../assets/not-found.jpg'

const Serie = () => {
  const { movieId } = useParams()

  // endpoints
  const URL = 'https://api.tvmaze.com/shows'
  const seriesQuery = `${URL}/${movieId}`
  const serieEpisodeQuery = `${URL}/${movieId}/seasons`

  // using Custom Hook 'useFetch'
  const { series } = useFetch(seriesQuery, '')
  const { series: episodes } = useFetch(serieEpisodeQuery, '')

  return (
    <section className='serie-contain'>
      <NavLink className='btnStart nav-link m-2' to='/'> ← Back</NavLink>
      {/* DESCRIPTION */}
      {
        series.length !== 0
          ? (
            <div className='card-serie card text-bg-dark'>
              {series.image
                ? <img src={series.image?.original} alt={series?.name} height={480} style={{ objectFit: 'cover' }} />
                : <img src={imgNotFound} alt='not found' />}
              <div className='card-serie-description card-img-overlay d-flex'>
                <div>
                  {series.image
                    ? <img src={series.image?.medium} alt={series?.name} height={300} style={{ objectFit: 'contain' }} />
                    : <img src={imgNotFound} alt='not found' />}
                  <p className='rate text-center'><span>{series.rating.average ? `⭐${series.rating.average}` : '⭐ 0,0'}</span></p>
                </div>
                <div className='contain-description'>
                  <h2 className='card-title text-center'>{series?.name} <span className='type'>{series?.type}</span></h2>
                  <p className='description' dangerouslySetInnerHTML={{ __html: series?.summary }} />
                  {/* {series.genres?.map(genre => (<p className='genre'>{genre}</p>))} */}
                </div>
              </div>
            </div>
            )
          : <p>Sin resultados</p>
      }
      {/* EPISODIOS */}
      <SerieEpisodes episodes={episodes} />
      {/* CAST */}
    </section>
  )
}

export default Serie
