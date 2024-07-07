import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface BotaoProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Botao: React.FC<BotaoProps> = ({ children, type = "button" }) => {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;
