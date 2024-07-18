import { ReactNode } from 'react';
import style from './bold.module.css';

const Bold = ({
  children,
  className
}: {
  children: ReactNode | String;
  className?: String;
}) => {
  return ( 
    <p 
      className={[
        style.bold, 
        className
      ].join(' ')}
    >
      {children}
    </p>
  )
}

export default Bold