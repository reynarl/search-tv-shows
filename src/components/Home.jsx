import useFetch from '../hooks/useFetch'

const Home = () => {
  // endpoints
  const URL = 'https://api.tvmaze.com'
  const scheduleQuery = `${URL}/schedule?date=2022-07-27`
  // const seriesQuery = `${URL}/shows`

  // using Custom Hook 'useFetch'
  const { series: schedule } = useFetch(scheduleQuery, '')
  // const { series } = useFetch(seriesQuery, '')

  return (
    <>
      <ul>
        {
          schedule.map(item => (
            <li key={item.id}>
              <img src={item.show.image.medium} alt='' />
              <p>{item.show.name}</p>
              <p>{item.name} <span>Season {item.season}</span></p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Home
