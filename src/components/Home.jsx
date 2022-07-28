import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Home = () => {
  // endpoints
  const URL = 'https://api.tvmaze.com'
  const scheduleQuery = `${URL}/schedule?date=2022-08-01`
  // const seriesQuery = `${URL}/shows`

  // using Custom Hook 'useFetch'
  const { series: schedule } = useFetch(scheduleQuery, '')
  // const { series } = useFetch(seriesQuery, '')
  console.log(schedule)

  return (
    <>
      <section className='home-section'>
        {
          schedule.map(item => (
            <div className='' key={item.id}>
              <Link to={`/movies/${item.show.id}`}>
                <div className='home-card card text-bg-dark'>
                  <img src={item.show.image.medium} alt={item.show.name} />
                  <div className='card-img-overlay d-flex'>
                    {item.show.genres?.map(genre => (<p className='text-truncate genre'>{genre}</p>))}
                  </div>
                  <h5 className='card-title text-center text-truncate'>{item.show.name}</h5>
                </div>
              </Link>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Home
