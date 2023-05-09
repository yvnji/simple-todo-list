import React from 'react';
// import './ListView.css';
import styled from 'styled-components';

const ListView = ({ todoList, onComplete, onRemove }) => {
  return (
    <List>
      <ol>
        {todoList.map((item, index) => {
          return (
            <li key={item.key} className={item.isCompleted ? 'completed' : ''}>
              <span>{item.value}</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof onComplete === 'function') {
                    onComplete(index);
                  }
                }}
              >
                완료
              </button>
              <button
                className="remove"
                type="button"
                onClick={() => {
                  if (typeof onRemove === 'function') {
                    onRemove(index);
                  }
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ol>
    </List>
  );
};

export default ListView;

const List = styled.div`
  display: block;
  position: relative;
  min-height: 288px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 12px;

  & ol {
    margin: 0;
    padding-left: 2em;
  }

  & li {
    clear: both;
    margin-bottom: 8px;
    height: auto;

    & span {
      float: left;
      font-size: 16px;
      position: relative;
      width: 308px;
      /* margin-right: 60px; */

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        transition: width 0.2s ease-in-out;
        width: 0%;
        height: 3px;
        background-color: #2f71aa;
      }
    }

    &.completed span::after {
      width: 100%;
    }

    & button {
      float: right;
      margin-left: 4px;
      cursor: pointer;
      border: none;
      color: #ffffff;
      background-color: #5ccc78;
      padding: 4px 8px 5px;
      border-radius: 4px;
      transition: 0.4s;

      &:hover {
        background-color: #3fb65d;
      }

      &.remove {
        background-color: #fc5475;

        &:hover {
          background-color: #e24060;
        }
      }
    }
  }
`;
