import styles from './LocationInfo.module.css'
import { formattedDate } from '../../../../utils/formattedDate.js'

export default function LocationInfo({ created, name, type, dimension }) {
  return (
    <section className={styles.location_info_section}>
        <span className={styles.createdAt}>{ formattedDate(created) }</span>
        <h1 className={styles.location_name}>{ name }</h1>
        <div className={styles.location_description}>
            <span className={styles.location_label}>Type</span>
            <p className={styles.value}>{ type }</p>
        </div>
        <div className={styles.location_description}>
            <span className={styles.location_label}>Dimension</span>
            <p className={styles.value}>{ dimension }</p>
        </div>
    </section>
  )
}
