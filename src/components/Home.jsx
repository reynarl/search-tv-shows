
const Home = ({ schedule }) => {
  return (
    <>
      {
        schedule.map(item => (
          item.show.name
        ))
      }
    </>
  )
}

export default Home
