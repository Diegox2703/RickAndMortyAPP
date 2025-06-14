import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IsPreviewLoading.module.css'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function IsPreviewLoading() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faCircleNotch} spin/>
    </div>
  )
}
