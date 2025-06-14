import styles from './UserSection.module.css'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../../../components/IconButton/IconButton'

export default function UserSection() {
  return (
    <div className={styles.user_section}>
      <IconButton icon={faHeart} size='sm' variant='secondary'/>
      <IconButton icon={faUser} size='sm' variant='secondary'/>
    </div>
  )
}
