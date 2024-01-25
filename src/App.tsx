import React, { useState } from 'react';
import styled from 'styled-components';
import Clock from './assets/Time';
import "./assets/rame.css"

interface TaskItemProps {
  completed: boolean;
}


const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `✔️ ${tasks[index]}`;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <TodoContainer style={{marginTop:"40px",marginBottom:"40px", overflow:'hidden'}}>

      <Clock />
      <Box >
      <AddTaskInput
        type="text"
        placeholder="Note"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
      <Sbtn onClick={addTask}>+</Sbtn>
        </Box>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index} completed={task.startsWith('✔️')}>
            {task}
            <div style={{display:"flex",justifyContent: "center", alignItems: "center"}}>
              <Circle onClick={() => completeTask(index)} ></Circle>
              <SelectBtn onClick={() => deleteTask(index)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <Pathh  d="M2 6H22M10 11V16M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147Z" stroke="#FF4545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></SelectBtn>
            </div>
          </TaskItem>
        ))}
      </TaskList>
    </TodoContainer>
  );
};

export default App

const Box = styled.div`
  display: flex;
width: 373px;
height: 49px;
gap: 10px;
flex-shrink: 0;
margin-top: 40px;
justify-content: center;
`

const Circle = styled.button`
border: 3px solid lightgreen;
background-color: lightgreen;
  width: 24px;
height: 24px;
flex-shrink: 0;
border-radius: 50%;
background-image: url("green.svg");
background-position: -2px,0;
cursor: pointer;
&:hover{
  background-color: darkgreen;
}

`
const Pathh = styled.path`
 stroke :#FF4545;
 &:hover{
  stroke: #3f0000;
  box-shadow: 0 0 40px orange;
  &::shadow{
    background-color: black;
    
  }
 }
  
`
const SelectBtn = styled.button`
  background: white;
  border: none;
  cursor: pointer;
`
const Sbtn =styled.button`
  display: flex;
width: 88px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 11px;
flex-shrink: 0;
align-self: stretch;
border-radius: 5px;
background: #20EEB0;
border: none;
font-size: 28px;
color: white;
cursor: pointer;
margin-top: -7px;
margin-left: 8px;

&:hover{
  color: #ffffff;
  transition: all 0.5 linear;
  background: #83e7e7;
box-shadow: 0 0 10px orange;
text-shadow: 0 40% 15px yellow;

}
&:focus{
  background:#8dd7d7 ;
}
`
const TodoContainer = styled.div`
  max-width: 430px;
  
min-height: 636px;
flex-shrink: 0;
  margin: auto;
  background-color: #fff;

  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 10px;
 
`;
const TaskItem = styled.li<TaskItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;

  ${(props) =>
    props.completed &&
    `
    text-decoration: line-through;
    color: #aaa;
  `}
`;

const AddTaskInput = styled.input`
border-radius: 5px;
background: #EBEFF2;
margin-left: 10px;
outline: none;
height: 20px;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  display: flex;
padding: 12px 189px 13px 14px;
align-items: center;
gap: 10px;
flex: 1 0 0;
align-self: stretch;
&:hover{
  background-color: #a2d6d6;
}
&:focus{
  border: 2px solid orange;
  box-shadow: 0 0 40px orange;
  background-color: #8dd7d7;
  &::placeholder{
    color: black;
    text-shadow:  0 0 30px orange;
  }
}
`;

