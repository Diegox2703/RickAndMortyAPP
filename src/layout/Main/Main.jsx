import { Route, Routes } from 'react-router-dom'
import CharactersPage from '../../pages/CharactersPage/CharactersPage'
import LocationsPage from '../../pages/LocationsPage/LocationsPage'
import EpisodesPage from '../../pages/EpisodesPage/EpisodesPage'
import styles from './Main.module.css'
import StatusMessage from '../../components/StatusMessage/StatusMessage'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'


export default function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<CharactersPage/>}/>
        <Route path='locations' element={<LocationsPage/>}/>
        <Route path='episodes' element={<EpisodesPage/>}/>
        <Route path='*' element={<StatusMessage icon={faRectangleXmark} message={'Pagina no encontrada'}/>}/>
      </Routes>
    </main>
  )
}
