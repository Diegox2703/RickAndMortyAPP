import Episode from './components/Episode/Episode'
import { useGetEpisodes } from './hooks/useEpisodes'
import IsLoading from '../../components/IsLoading/IsLoading'
import StatusMessage from '../../components/StatusMessage/StatusMessage'
import { faArrowDown, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import styles from './EpisodesPage.module.css'

export default function EpisodesPage() {
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetEpisodes()

  if (isLoading) return <IsLoading/>

  if (isError) return <StatusMessage icon={faCircleExclamation} message={'Error al obtener episodios'}/>

  return (
    <>
      <div className={styles.episodes_container}>
        {
          data?.pages.map(page => (
            page?.results.map(episode => (
              <Episode key={ episode.id } episodeData={episode}/>
            ))
          ))
        }
      </div>
      {
        hasNextPage &&
        <div className={styles.more_content_btn}>
          <IconTextButton icon={faArrowDown} size={'lg'} isDisabled={isFetchingNextPage} onClickFn={fetchNextPage}>
            Mas episodios
          </IconTextButton>
        </div>
      }
    </>
  )
}
