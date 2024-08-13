import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const addBtn = document.querySelector("#addBtn");
    const inputText = document.querySelector("input");
    const newList = document.querySelector("#todo");

    const handleClick = () => {
      const task = inputText.value.trim();

      if (task) {
        const listItem = document.createElement("div");
        listItem.className = "newItem";

        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.className = "line";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.className = "removeBtn";

        taskText.addEventListener("click", () => {
          taskText.classList.toggle("completed");
        });

        deleteBtn.addEventListener("click", () => {
          newList.removeChild(listItem);
        });

        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        newList.appendChild(listItem);

        inputText.value = "";
      }
    };

    addBtn.addEventListener("click", handleClick);

    return () => {
      addBtn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <header className='header'>
        <h1>맛있는 Todo List</h1>
      </header>
      <div className='contents'>
        <div className='inputAdd'>
          <input type="text" placeholder='할 일을 입력하세요..' />
          <button id='addBtn'>추가</button>
        </div>
        <div id='todo'></div>
      </div>
    </>
  );
}

export default App;