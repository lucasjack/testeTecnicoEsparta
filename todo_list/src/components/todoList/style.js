import styled from "styled-components";

const TodoListStyle = styled.div`
  color: #666;
  min-width: 20vw;
  background-color: #ff9;
  margin-right: 1%;
`;

const AddTask = styled.input`
  border: none;
  outline: none;
  border: 5px solid #dd0;
  border-radius: 5px;
  margin: 5%;
  font-size: 1rem;
`;

const TodoTask = styled.div`
  font-size: 1rem;
  padding: 5%;
  background-color: #ff0;
  border: 5px dashed #dd0;
  margin: 2%;
`;

const TaskButton = styled.button`
  border: none;
  outline: none;
  padding: 1%;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 1%;
`;

export { TodoListStyle, AddTask, TodoTask, TaskButton };
