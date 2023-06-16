import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';
import React, { useReducer, useRef } from 'react';


const reducer = (state, action) => {
  let newState = [];


  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      const newItem = {
        ...action.data,
      }
      newState = [ newItem, ...state ];
      break;
    case 'REMOVE':
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    case 'EDIT':
      newState = state.map((it) => it.id === action.data.id ? {
        ...action.data
      } : it);
      break;
    default:
      return state;
  }
  return newState;
};


export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1",
    date: 1686315985902
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2",
    date: 1686315985903
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3",
    date: 1686315985904
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4",
    date: 1686315985905
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5",
    date: 1686315985906
  }
]

function App () {
  const [ data, dispatch ] = useReducer(reducer, dummyData);

  const dataId = useRef(6);
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1;
  }
  // REMOVE

  const onRemove = (targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId,
    })
  }
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path='/new' Component={New} />
              <Route path='/edit/:id' Component={Edit} />
              <Route path='/diary/:id' Component={Diary} />
            </Routes>

          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
