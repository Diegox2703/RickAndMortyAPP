import styles from './CharacterImg.module.css'

export default function CharacterImg({ image }) {
  return (
    <section className={styles.character_img_section}>
      <img src={image} className={styles.character_img} alt="character_img" />
    </section>
  )
}
