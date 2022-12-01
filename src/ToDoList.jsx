import React from "react";

const ToDoList = ({tarefas}) => {

    return (
        <div className="conteiner">
        {tarefas.map((tarefa) => (
            <div className="toDoConteiner" key={tarefa.id}>
                <h3>{ tarefa.nome }</h3>
                <span>{ tarefa.descrição }</span>
                <p>Prazo expira em { tarefa.prazo }</p>
            </div>
        ))}
        </div>
    )
}

export default ToDoList;
