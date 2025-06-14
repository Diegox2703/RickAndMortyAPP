import EpisodeInfo from '../EpisodeInfo/EpisodeInfo'
import Characters from '../Characters/Characters'
import styles from './Episode.module.css'

export default function Episode({ episodeData }) {
  return (
    <article className={styles.episode}>
        <EpisodeInfo
          created={ episodeData.created }
          episode={ episodeData.episode }
          name={ episodeData.name }
          air_date={ episodeData.air_date }
        />
        <Characters charactersData={episodeData.characters}/>
    </article>
  )
}
