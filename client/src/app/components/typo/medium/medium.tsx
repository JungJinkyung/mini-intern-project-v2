import { ReactNode } from 'react';
import style from './medium.module.css';

const Medium = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return ( 
    <p 
      className={[
        style.medium, 
        className
      ].join(' ')}
    >
      {children}
    </p>
  )
}

export default Medium