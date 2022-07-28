import { Route, Routes, Outlet } from 'react-router-dom'
import App from './App'
import ViewSeries from './components/ViewSeries'
import Serie from './components/Serie'

const Paths = () => {
  return (
    <section>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/movies' element={<Outlet />}> {/* <--Elemento padre */}
          <Route>
            <Route index element={<ViewSeries />} /> {/* <- Elemento principal */}
            <Route path=':movieId' element={<Serie />} />
          </Route>
        </Route>
      </Routes>
    </section>
  )
}

export default Paths
