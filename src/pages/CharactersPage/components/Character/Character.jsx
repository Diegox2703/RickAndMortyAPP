import CharacterImg from '../CharacterImg/CharacterImg'
import CharacterInfo from '../CharacterInfo/CharacterInfo'
import styles from './Character.module.css'

export default function Character({ characterData }) {
  return (
    <article className={styles.character}>
      <CharacterImg image={characterData.image}/>
      <CharacterInfo 
        created={characterData.created}
        name={characterData.name}
        status={characterData.status}
        gender={characterData.gender}
        origin={characterData.origin}
        species={characterData.species}
      />
    </article>
  )
}
