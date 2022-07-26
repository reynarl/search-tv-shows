import { useRef, useState } from 'react'
// components
import ViewSeries from './components/ViewSeries'
import Home from './components/Home'
import logo from './assets/logotv.png'

function App () {
  const inputSearch = useRef(null)
  const [text, setText] = useState('')
  const [home, setHome] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(inputSearch.current.value)
    e.target.reset()
    setHome(false)
  }

  return (
    <>
      <section className='search d-flex'>
        {/* <img onClick={() => { setHome(true) }} src={logo} alt='logo' /> */}
        <button className='btnStart' onClick={() => { setHome(true) }}>HOME</button>
        <form onSubmit={handleSubmit}>
          <input ref={inputSearch} type='search' placeholder='Search...' />
        </form>
      </section>
      {home ? <Home /> : <ViewSeries text={text} />}
    </>
  )
}

export default App
