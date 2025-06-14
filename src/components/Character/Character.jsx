import { useGetCharacterPreview } from '../../hooks/useCharacterPreview'
import styles from './Character.module.css'

export default function Character({ characterData, id }) {
  const { data } = useGetCharacterPreview(characterData, id)

  return (
    <article className={styles.character}>
        <img className={styles.character_img} src={data?.image} alt="character_img" />
        <h2 className={styles.character_name}>{ data?.name }</h2>
    </article>
  )
}