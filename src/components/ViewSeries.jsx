import { Link } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import Home from './Home'

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
                    <ul>
                      {
                        series.map(serie => (
                          <li key={serie.show.id}>
                            <Link to={`/movies/${serie.show.id}`}>
                              <div>
                                {serie.show.image
                                  ? <img src={serie.show.image.medium} alt={serie.show.name} />
                                  : console.log('PONER OTRA IMAGEN')}
                                <p className='title'>{serie.show.name}</p>
                                <div>
                                  <p>{serie.show.type} <span>{serie.show.rating.average}</span></p>
                                  {/* <p dangerouslySetInnerHTML={{ __html: serie.show.summary }} /> */}
                                  <p>{serie.show.status}</p>
                                  <p>{serie.show.language}</p>
                                  {serie.show.webChannel ? <p>({serie.show.webChannel.name})</p> : null}
                                </div>
                              </div>
                            </Link>
                          </li>
                        )
                        )
                      }
                    </ul>
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
