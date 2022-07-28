import React from 'react'
import imgNotFound from '../assets/not-found.jpg'

const SerieEpisodes = ({ episodes }) => {
  return (
    <section className='serie-episodes'>
      <h2>Temporadas</h2>
      {
        episodes !== 0
          ? (
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                    <strong>See All Seasons</strong>
                  </button>
                </h2>
                <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                  <div className='contain-serie-seasons'>
                    {
                      episodes.map(item => (
                        <div key={item.id} className='accordion-body'>
                          {
                            item.episodeOrder !== null || item.premiereDate !== null
                              ? (
                                <div className='contain-seasons'>
                                  {item.image
                                    ? <img src={item.image.medium} alt={item.name} style={{ width: 200, objectFit: 'contain' }} />
                                    : <img src={imgNotFound} alt='not found' style={{ width: 200, objectFit: 'contain' }} />}
                                  <p><strong>Season {item.number}</strong></p>
                                  <p> {item.episodeOrder ? `Episodes ${item.episodeOrder}` : null}</p>
                                  <p>Emision: {item.premiereDate}</p>
                                </div>
                                )
                              : null
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            )
          : <p>Sin resultados</p>
      }
    </section>
  )
}

export default SerieEpisodes

/* <div className='card-group'>
             {
                episodes.map(item => (
                  <div key={item.id} className='card'>
                    {item.image
                      ? <img src={item.image.medium} alt={item.name} />
                      : console.log('PONER OTRA IMAGEN')}
                    <div className='card-body'>
                      <p>Season {item.number} Episodes {item.episodeOrder}</p>
                      <h5 className='card-title'>{item.name}</h5>
                      <p className='card-text' dangerouslySetInnerHTML={{ __html: item.summary }} />
                    </div>
                    <div className='card-footer'>
                      <small className='text-muted'>Emision: {item.premiereDate}</small>
                    </div>
                  </div>
                ))
              }
            </div> */
