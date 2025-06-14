import { useGetCharacterPreview } from '../../hooks/useCharacterPreview.js'
import IsPreviewLoading from '../IsPreviewLoading/IsPreviewLoading.jsx'
import styles from './CharacterPreview.module.css'

export default function CharacterPreview({ characterData, id }) {
  const { data, isLoading } = useGetCharacterPreview(characterData, id)

  if (isLoading) return <IsPreviewLoading/>

  return (
    <div className={styles.character_preview}>
        <img className={styles.character_img} src={data?.image} alt="character-preview" />
    </div>
  )
}
