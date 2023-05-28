import React, { useState, useRef, useEffect } from "react";

const DiaryItem = ({ onEdit, onRemove, author, content, emotion, created_date, id }) => {
    const [isEdit, setIsEdit] = useState(false);

    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(content);

    const localContentInput = useRef();

    const handleRemove = () => {
        if (window.confirm(`${id} 번째 일기를 정말 삭제하겠습니깐?`)) {
            onRemove(id);
        }
    }

    const handleLocalConents = (e) => {
        setLocalContent(
            e.target.value
        );
    }

    const handleQuitEdit = () => {
        setIsEdit(false)
        setLocalContent(content)
    }

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if (window.confirm(`${id} 번째 일기를 수정 하시겠습니까?`)) {
            onEdit(id, localContent);
            toggleIsEdit();
        }

    }

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정 점수 : {emotion}</span>
                <br />
                <span className="date"> {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ? (
                    <>
                        <textarea ref={localContentInput}
                            defaultValue={localContent} onChange={handleLocalConents}></textarea>
                    </>
                ) : (
                    <>
                        {content}
                    </>
                )}

            </div>
            {isEdit ?
                <>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleEdit}>수정 완료</button>
                </>
                :
                <>
                    <button onClick={handleRemove}>삭제 하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>}

        </div>
    );
}

export default React.memo(DiaryItem);

