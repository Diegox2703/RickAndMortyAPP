import NavBar from '../../components/NavBar/NavBar'
import IconButton from '../../components/IconButton/IconButton'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideBar } from '../../redux/features/sideBarSlice'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import Logo from '../../components/Logo/Logo'
import styles from './SideBar.module.css'

export default function SideBar() {
  const isOpen = useSelector(state => state.sideBar.isOpen)
  const dispatch = useDispatch()

  useDisableScroll(isOpen)

  if (!isOpen) return

  return (
    <div className={styles.side_bar}>
        <IconButton variant='secondary' icon={faClose} onClickFn={() => dispatch(toggleSideBar())}/>
        <NavBar direction={'column'}/>
        <div className={styles.logo_container}>
          <Logo/>
        </div>
    </div>
  )
}
