const ViewSeries = ({ text, series }) => {
  // const [date, setDate] = useState('')
  // const year = new Date(date)

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
          : <p>Ingresa el nombre de una serie</p>
      }
    </>
  )
}

export default ViewSeries
