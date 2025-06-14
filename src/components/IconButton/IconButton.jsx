import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IconButton.module.css'

export default function IconButton({ variant = 'primary', size = 'md', icon, onClickFn, show }) {
  return (
    <button className={`${styles.btn} ${styles[variant]} ${styles[size]} ${styles[show]}`} onClick={onClickFn}>
      <FontAwesomeIcon className={`${styles.icon} ${styles[size]}`} icon={icon}/>
    </button>
  )
}
