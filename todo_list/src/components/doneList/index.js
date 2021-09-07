import { DoneListStyle, DoneTask } from "./style";
import { TaskButton } from "../todoList/style";

function DoneList({ assignments, setAssignments, setConcluded, concluded }) {
  function returnTask(task) {
    let newConcluded = [];
    concluded.map((i) => {
      if (task !== i) {
        newConcluded.push(i);
      }
    });
    setConcluded(newConcluded);
    setAssignments([...assignments, task]);
  }

  function excludeTask(task) {
    let newConcluded = [];
    concluded.map((i) => {
      if (task !== i) {
        newConcluded.push(i);
      }
    });
    setConcluded(newConcluded);
  }

  return (
    <DoneListStyle>
      <h2>Done</h2>
      {concluded.map((conclude) => {
        return (
          <DoneTask>
            <>{conclude}</>
            <TaskButton onClick={() => returnTask(conclude)}>🔙</TaskButton>
            <TaskButton onClick={() => excludeTask(conclude)}>🗑️</TaskButton>
          </DoneTask>
        );
      })}
    </DoneListStyle>
  );
}

export default DoneList;
