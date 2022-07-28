
const Home = ({ schedule }) => {
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
