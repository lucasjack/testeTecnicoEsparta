import "./App.css";
import { useState } from "react";
import TodoList from "./components/todoList";
import DoneList from "./components/doneList";
import { ListsContainer } from "./Style";

function App() {
  const [todoAssignment, setTodoAssignment] = useState([]);
  const [doneAssignment, setDoneAssignment] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <ListsContainer>
          <TodoList
            assignments={todoAssignment}
            setAssignments={setTodoAssignment}
            setConcluded={setDoneAssignment}
            concluded={doneAssignment}
          />
          <DoneList
            assignments={todoAssignment}
            setAssignments={setTodoAssignment}
            setConcluded={setDoneAssignment}
            concluded={doneAssignment}
          />
        </ListsContainer>
      </header>
    </div>
  );
}

export default App;
