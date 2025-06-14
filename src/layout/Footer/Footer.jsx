import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'
import Logo from '../../components/Logo/Logo'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Logo size={'lg'}/>
      <div className={styles.social_media_container}>
        <a className={styles.social_media_btn} href="https://www.linkedin.com/in/diego-sarmiento-290401359/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className={styles.social_media_btn} href="https://github.com/Diegox2703" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </div>
    </div>
  )
}