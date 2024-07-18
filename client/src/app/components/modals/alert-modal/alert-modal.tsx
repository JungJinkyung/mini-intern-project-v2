import Button from '../../buttons/default-button'
import Bold from '../../typo/bold/bold'
import Medium from '../../typo/medium/medium'
import style from './alert-modal.module.css'


export default ({
  title, 
  body,
  confirmText='확인',
  setModalOpened
} : {
  title: String
  body: String,
  confirmText: String,
  setModalOpened: Function
}) => {
  return (
    <>
      <div 
        className={style.dimmed}
      >
        <div 
          className={style.container}
        >
          <div
            className={style.header}
          >
            <Bold className={'text-2xl'}>
              {title}
            </Bold>
          </div>
          <div 
            className={style.body}
          >
            <Medium className={'text-xl'}>
              {body}
            </Medium>
          </div>
          <div
            className={style.footer}
          >
            <Button 
              color='grey' 
              size='xs'
              onClick={() => {
                setModalOpened(false)
              }}
            >{confirmText}</Button>
          </div>
        </div>
      </div>
    </>
  )
}