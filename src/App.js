import React, { useState, useMemo } from 'react';
import './App.css';
import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);
  const isLimitReached = useMemo(() => {
    return todoList.length >= 10;
  }, [todoList]);

  const handleInsert = (value) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newList;
    });
  };

  const handleComplete = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };

  const handleRemove = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div className="App">
      <h1>To Do📝</h1>
      <InsertForm onInsert={handleInsert} disabled={isLimitReached} />
      <ListView todoList={todoList} onComplete={handleComplete} onRemove={handleRemove} />
      {isLimitReached && (
        <div
          style={{
            padding: '8px 16px',
            border: '1px solid #FA466A',
            backgroundColor: '#feecf0',
            color: '#FA466A',
            marginTop: 16,
          }}
        >
          ※ todo는 10개까지만 입력이 가능합니다. <br />할 일을 완료하고 추가해주세요.
        </div>
      )}
    </div>
  );
}

export default App;
