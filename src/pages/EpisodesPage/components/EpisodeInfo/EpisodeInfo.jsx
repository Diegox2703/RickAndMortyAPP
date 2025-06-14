import { formattedDate } from '../../../../utils/formattedDate.js'
import styles from './EpisodeInfo.module.css'

export default function EpisodeInfo({ created, name, air_date, episode }) {
  return (
    <section className={styles.episode_info_section}>
        <span className={styles.createdAt}>{ formattedDate(created) }</span>
        <h1 className={styles.episode_name}>{ name }</h1>
        <div className={styles.episode_description}>
            <span className={styles.episode_label}>Air date</span>
            <p className={styles.value}>{ air_date }</p>
        </div>
        <div className={styles.episode_description}>
            <span className={styles.episode_label}>Episode</span>
            <p className={styles.value}>{ episode }</p>
        </div>
    </section>
  )
}
