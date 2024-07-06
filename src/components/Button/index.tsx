import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface BotaoProps {
  children: ReactNode;
}

const Botao: React.FC<BotaoProps> = ({ children }) => {
  return (
    <button className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;
