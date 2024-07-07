import { ReactNode } from 'react';
import style from './Button.module.scss';

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Botao = ({ children, type = "button", onClick }: Props) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
