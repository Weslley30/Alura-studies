import React, { useState } from "react";
import Botao from "../Button";
import style from './Formulario.module.scss';
import ITarefa from "../../types/tarefa";
import { v4 as uuidV4 } from "uuid";

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}
function Formulario({ setTarefas }: Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidV4()
                }
            ]
        )
        setTarefa("");
        setTempo("00:00");
    }
    return(
<form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="06:00:00"
                    required
                />
            </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
        </form>
    );
}

export default Formulario;




