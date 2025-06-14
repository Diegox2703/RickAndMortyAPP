import { useGetCharacters } from './hooks/useCharacters.js'
import Character from './components/Character/Character'
import IsLoading from '../../components/IsLoading/IsLoading.jsx'
import StatusMessage from '../../components/StatusMessage/StatusMessage.jsx'
import { faArrowDown, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import IconTextButton from '../../components/IconTextButton/IconTextButton.jsx'
import styles from './CharactersPage.module.css'

export default function CharactersPage() {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetCharacters()

  if (isLoading) return <IsLoading/>

  if (isError) return <StatusMessage icon={faCircleExclamation} message={'Error al obtener personajes'}/>

  return (
    <>
      <div className={styles.characters_container}>
        { 
          data?.pages.map(page => (
            page?.results.map(character => (
              <Character key={character.id} characterData={character}/>
            ))
          ))
        }
      </div>
      {
        hasNextPage &&
        <div className={styles.more_content_btn}>
          <IconTextButton icon={faArrowDown} size={'lg'} isDisabled={isFetchingNextPage} onClickFn={fetchNextPage}>
            Mas personajes
          </IconTextButton>
        </div>
      }
    </>
  )
}
