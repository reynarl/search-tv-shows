import { Link } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import Home from './Home'
import imgNotFound from '../assets/not-found.jpg'

const ViewSeries = ({ text }) => {
  // endpoint
  const URL = 'https://api.tvmaze.com'
  const seriesQuery = `${URL}/search/shows?q=${text}`

  // using Custom Hook 'useFetch'
  const { series } = useFetch(seriesQuery, text)

  return (
    <>
      {
        text !== ''
          ? (
            <section>
              <h2>Results for "{text}"</h2>
              {
                series.length !== 0
                  ? (
                    <div className='series-section'>
                      {
                        series.map(serie => (
                          // MOVIE CARD
                          <div className='home-card' key={serie.show.id}>
                            <Link to={`/movies/${serie.show.id}`}>
                              <div className='home-card text-center card text-bg-dark'>
                                {serie.show.image
                                  ? <img src={serie.show.image.medium} alt={serie.show.name} />
                                  : <img src={imgNotFound} alt='not found' />}
                                <p className='title'>{serie.show.name}</p>
                                <div>
                                  <p className='typeAndRate'><span className='type'>{serie.show.type}</span>
                                    <span>{serie.show.rating.average ? `⭐${serie.show.rating.average}` : '⭐ 0,0'}</span>
                                  </p>
                                  {/* <p dangerouslySetInnerHTML={{ __html: serie.show.summary }} /> */}
                                  <p>{serie.show.status}</p>
                                  <div className='d-flex justify-content-around'>
                                    <p>{serie.show.language}</p>
                                    {serie.show.webChannel ? <p>({serie.show.webChannel.name})</p> : null}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                        )
                      }
                    </div>
                    )
                  : <p>Sin resultados</p>
              }
            </section>
            )
          : <Home />
      }
    </>
  )
}

export default ViewSeries
