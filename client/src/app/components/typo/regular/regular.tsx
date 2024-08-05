import { ReactNode } from 'react';
import style from './regular.module.css';

const Regular = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return ( 
    <p 
      className={[
        style.regular, 
        className
      ].join(' ')}
    >
      {children}
    </p>
  )
}

export default Regular