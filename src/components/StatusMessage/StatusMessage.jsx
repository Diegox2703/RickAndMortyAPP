import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './StatusMessage.module.css'

export default function StatusMessage({ icon, message }) {
  return (
    <div className={styles.status_message_container}>
      <FontAwesomeIcon className={styles.status_icon} icon={ icon }/>
      <h1 className={styles.status_message}>{ message }</h1>
    </div>
  )
}
