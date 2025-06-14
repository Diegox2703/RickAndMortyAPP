import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CharacterPreview from '../../../../components/CharacterPreview/CharacterPreview.jsx'
import IconButton from '../../../../components/IconButton/IconButton.jsx'
import { getFirstItems } from '../../../../utils/getFirstItems.js'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../../../redux/features/modalSlice.js'
import styles from './Characters.module.css'

export default function Characters({ charactersData }) {
  const characters = getFirstItems(charactersData, 7)
  const dispatch = useDispatch()
  
  return (
    <section className={styles.characters_section}>
        <span className={styles.character_label}>Characters</span>
        <div className={styles.characters_container}>
          <div className={styles.characters}>
            {
              characters?.map((character, index) => (
                <CharacterPreview key={index} characterData={character} id={crypto.randomUUID()}/>
              ))
            }
          </div>
          {
            characters.length > 6
            &&
            <IconButton size='lg' icon={faChevronRight} onClickFn={() => dispatch(toggleModal(charactersData))}/>
          }
        </div>
    </section>
  )
}
