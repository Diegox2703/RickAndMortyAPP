import pageLogo from '../../assets/images/page_logo.png'
import styles from './Logo.module.css'

export default function Logo({ size }) {
  return (
    <div className={`${styles.page_logo_container} ${styles[size]}`}>
      <img src={pageLogo} alt="page_logo" className={styles.page_logo}/>
    </div>
  )
}
