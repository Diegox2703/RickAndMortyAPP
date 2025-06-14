import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.css'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function Button({ variant = 'primary', size = 'md', children, onClickFn, isDisabled }) {
  return (
    <button className={`${styles.btn} ${styles[variant]} ${styles[size]}`} onClick={onClickFn} disabled={isDisabled}>
      {
        isDisabled
        ?
        <FontAwesomeIcon icon={faCircleNotch} spin/>
        :
        children
      }
    </button>
  )
}
