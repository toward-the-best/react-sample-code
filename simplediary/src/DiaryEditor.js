import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
    const [states, setState] = useState(
        {
            author: "",
            contents: "",
            emotion: 1
        }
    );

    const inputRef = useRef();
    const contentsRef = useRef();

    const onChangeHandler = (e) => {
        setState({
            ...states,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        if (states.author < 1) {
            inputRef.current.focus();
            return;
        }

        if (states.contents < 5) {
            contentsRef.current.focus();
            return;
        }
        onCreate(states.author, states.contents, states.emotion);
        setState({
            author: "",
            contents: "",
            emotion: 1
        });
        console.log(states);
        alert("저장완료");
    };

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input ref={inputRef} name="author" value={states.author} onChange={onChangeHandler}></input>
        </div>
        <div>
            <textarea ref={contentsRef} name="contents" value={states.contents} onChange={onChangeHandler}></textarea>
        </div>
        <div>
            오늘의 감정 점수 :
            <select name="emotion" value={states.emotion} onChange={onChangeHandler}>
                <option valeu="1">1</option>
                <option valeu="2">2</option>
                <option valeu="3">3</option>
                <option valeu="4">4</option>
                <option valeu="5">5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기장 저장</button>
        </div>
    </div>
};

export default DiaryEditor;