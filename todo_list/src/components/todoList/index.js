import { TodoListStyle, AddTask, TodoTask, TaskButton } from "./style";

function TodoList({ assignments, setAssignments, setConcluded, concluded }) {
  function completeTask(assignment) {
    let newAssignments = [];
    assignments.map((i) => {
      if (assignment !== i) {
        newAssignments.push(i);
      }
    });
    setAssignments(newAssignments);
    setConcluded([...concluded, assignment]);
  }

  function addTask(task) {
    if (task.keyCode === 13) {
      let taskDesc = task.target.value;
      task.target.value = "";
      setAssignments([...assignments, taskDesc]);
    }
  }
  function excludeTask(task) {
    let newAssignments = [];
    assignments.map((i) => {
      if (task !== i) {
        newAssignments.push(i);
      }
    });
    setAssignments(newAssignments);
  }

  return (
    <TodoListStyle>
      <h2>To-do</h2>
      {assignments.map((assignment) => {
        return (
          <TodoTask>
            <>{assignment}</>
            <TaskButton onClick={() => completeTask(assignment)}>✔️</TaskButton>
            <TaskButton onClick={() => excludeTask(assignment)}>🗑️</TaskButton>
          </TodoTask>
        );
      })}
      <AddTask
        onKeyDown={(e) => addTask(e)}
        placeholder="Adicionar tarefa"
      ></AddTask>
    </TodoListStyle>
  );
}

export default TodoList;
