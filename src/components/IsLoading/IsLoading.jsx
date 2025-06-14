import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IsLoading.module.css'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function IsLoading() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faCircleNotch} spin/>
    </div>
  )
}
