import Button from '../../buttons/default-button'
import Bold from '../../typo/bold/bold'
import Medium from '../../typo/medium/medium'
import style from './default-modal.module.css'


export default ({
  title, 
  body,
  confirmText='확인',
  cancelText='취소',
  confirmHandler,
  cancelHandler
} : {
  title: String
  body: String,
  confirmText: String,
  cancelText: String,
  confirmHandler: Function,
  cancelHandler: Function
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
            <Bold className={'text-lg'}>
              {title}
            </Bold>
          </div>
          <div 
            className={style.body}
          >
            <Medium className={'text-base'}>
              {body}
            </Medium>
          </div>
          <div
            className={style.footer}
          >
            <Button   
              color={'grey'} 
              size={'xs'}
              onClick={() => cancelHandler()}
              className={'my-3 mr-3'}
            >{cancelText}
            </Button>
            <Button 
              color={'black'}
              size={'xs'}
              onClick={() => confirmHandler()}  
              className={'my-3 mr-4'}
            >{confirmText}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

