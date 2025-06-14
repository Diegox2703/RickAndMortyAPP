import { faClose } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../components/IconButton/IconButton'
import Character from '../../components/Character/Character'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/features/modalSlice.js'
import styles from './Modal.module.css'
import { useDisableScroll } from '../../hooks/useDisableScroll.js'

export default function Modal() {
  const { isOpen, characters } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useDisableScroll(isOpen)
  
  if (!isOpen) return
  
  return (
    <div className={styles.modal_overlay} onClick={() => dispatch(toggleModal())}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <IconButton icon={faClose} onClickFn={() => dispatch(toggleModal())}/>
        </div>
        <div className={styles.modal_body}>
          {
            characters.map((character, index) => (
              <Character key={index} characterData={character} id={crypto.randomUUID()}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
