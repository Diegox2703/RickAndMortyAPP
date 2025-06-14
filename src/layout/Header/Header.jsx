import { faBars } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../components/IconButton/IconButton'
import Logo from '../../components/Logo/Logo'
import NavBar from '../../components/NavBar/NavBar'
import UserSection from './components/UserSection/UserSection'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../../redux/features/sideBarSlice'

export default function Header() {
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
        <IconButton size='sm' variant='secondary' icon={faBars} show={'show_on_mobile'} onClickFn={() => dispatch(toggleSideBar())}/>
        <Logo/>
        <NavBar hideOnMobile={true}/>
        <UserSection/>
    </header>
  )
}
