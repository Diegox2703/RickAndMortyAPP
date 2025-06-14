import { NavLink } from 'react-router-dom'
import { toggleSideBar } from '../../redux/features/sideBarSlice'
import { useDispatch } from 'react-redux'
import styles from './NavBar.module.css'

export default function NavBar({ direction, hideOnMobile = false }) {
  const dispatch = useDispatch()

  const handleClass = ({isActive}) => {
    return `${styles.nav_link} ${isActive ? styles.active : ''}`
  }
  
  return (
    <nav className={`${styles.nav_bar} ${hideOnMobile && styles.hide}`}>
      <ul className={`${styles.nav_list} ${styles[direction]}`}>
        <li className={styles.nav_item} {...(!hideOnMobile && { onClick: () => dispatch(toggleSideBar()) })}>
          <NavLink to={'/'} className={handleClass}>Personajes</NavLink>
        </li>
        <li className={styles.nav_item} {...(!hideOnMobile && { onClick: () => dispatch(toggleSideBar()) })}>
          <NavLink to={'/locations'} className={handleClass}>Ubicaciones</NavLink>
        </li>
        <li className={styles.nav_item} {...(!hideOnMobile && { onClick: () => dispatch(toggleSideBar()) })}>
          <NavLink to={'/episodes'} className={handleClass}>Episodios</NavLink>
        </li>
      </ul>
    </nav>
  )
}
