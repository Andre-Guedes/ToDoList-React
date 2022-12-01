import ToDoList from "./ToDoList";
import useFetch from "./useFetch";

const App = () => {
  let url = 'http://localhost:8000/tarefas'
  const { data: tarefas, loading, error, id} = useFetch(url)

  return (
    <div>
      {error && <div>{ error }</div>}
      {loading && <div>Aguarde, carregando...</div>}
      {tarefas ? <ToDoList tarefas={tarefas} /> : null}
      {/* {tarefas && <ToDoList tarefas={tarefas} />} */}
    </div>
  )
}

export default App;
