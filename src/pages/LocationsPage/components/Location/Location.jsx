import LocationInfo from '../LocationInfo/LocationInfo'
import Residents from '../Residents/Residents'
import styles from './Location.module.css'

export default function Location({ locationData }) {
  return (
    <article className={styles.location}>
        <LocationInfo
          created={ locationData.created }
          dimension={ locationData.dimension }
          name={ locationData.name }
          type={ locationData.type }
        />
        <Residents residentsData={locationData.residents}/>
    </article>
  )
}
