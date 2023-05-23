import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [{
//   id: 1,
//   author: "김진권",
//   content: "하하하하",
//   emotion: 5,
//   created_date: new Date().getTime()
// }]


function App() {

  const dataId = useRef(0);

  const [data, setData] = useState([]);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newData = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }

    dataId.current += 1;
    setData([newData, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId} 가 삭제 됩니다 `);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} diarylist={data} onRemove={onRemove} />
    </div>
  );
}

export default App;
