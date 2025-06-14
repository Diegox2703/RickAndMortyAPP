import { formattedDate } from '../../../../utils/formattedDate.js'
import styles from './CharacterInfo.module.css'

export default function CharacterInfo({ created, name, status, gender, origin, species }) {
  return (
    <section className={styles.character_info_section}>
      <section className={styles.character_name_section}>
        <span className={styles.createdAt}>{ formattedDate(created) }</span>
        <h1 className={styles.character_name}> {name} </h1>
        <div className={styles.character_status_container}>
          <span className={`${styles.status} ${styles[status]}`}></span>
          <p className={styles.character_status}>{ status }</p>
        </div>
      </section>
      <section className={styles.character_description_section}>
        <div className={styles.character_description}>
          <span className={styles.character_label}>Gender</span>
          <p className={styles.value}>{ gender }</p>
        </div>
        <div className={styles.character_description}>
          <span className={styles.character_label}>Origin</span>
          <p className={styles.value}>{ origin }</p>
        </div>
        <div className={styles.character_description}>
          <span className={styles.character_label}>Species</span>
          <p className={styles.value}>{ species }</p>
        </div>
      </section>
    </section>
  )
}
