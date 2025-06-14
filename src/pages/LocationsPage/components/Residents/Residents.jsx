import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CharacterPreview from '../../../../components/CharacterPreview/CharacterPreview'
import IconButton from '../../../../components/IconButton/IconButton'
import { getFirstItems } from '../../../../utils/getFirstItems.js'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../../../redux/features/modalSlice.js'
import styles from './Residents.module.css'

export default function Residents({ residentsData }) {
  const residents = getFirstItems(residentsData, 7)
  const dispatch = useDispatch()

  return (
    <section className={styles.residents_section}>
        <span className={styles.resident_label}>Residents</span>
        <div className={styles.residents_container}>
          <div className={styles.residents}>
            {
              residents?.map((resident, index) => (
                <CharacterPreview key={index} characterData={resident} id={crypto.randomUUID()}/>
              ))
            }
          </div>
          {
            residents.length > 6
            &&
            <IconButton size='lg' icon={faChevronRight} onClickFn={() => dispatch(toggleModal(residentsData))}/>
          }
        </div>
    </section>
  )
}
