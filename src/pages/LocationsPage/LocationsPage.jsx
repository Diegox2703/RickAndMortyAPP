import { faArrowDown, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import IsLoading from '../../components/IsLoading/IsLoading'
import StatusMessage from '../../components/StatusMessage/StatusMessage'
import Location from './components/Location/Location'
import { useGetLocations } from './hooks/useLocations'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import styles from './LocationsPage.module.css'

export default function LocationsPage() {
  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetLocations()

  if (isLoading) return <IsLoading/>

  if (isError) return <StatusMessage icon={faCircleExclamation} message={'Error al obtener ubicaciones'}/>

  return (
    <>
      <div className={styles.locations_container}>
        {
          data?.pages.map(page => (
            page?.results.map(location => (
              <Location key={ location.id } locationData={location}/>
            ))
          ))
        }
      </div>
      {
        hasNextPage &&
        <div className={styles.more_content_btn}>
          <IconTextButton icon={faArrowDown} size={'md'} isDisabled={isFetchingNextPage} onClickFn={fetchNextPage}>
            Mas ubicaciones
          </IconTextButton>
        </div>
      }
    </>
  )
}
