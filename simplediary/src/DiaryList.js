
import DiaryItem from "./DiaryItem"

const DiaryList = ({ onEdit, onRemove, diarylist }) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diarylist.length} 개의 일기가 있습니다.</h4>
            <div>
                {diarylist.map((it) => (
                    <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
                ))}
            </div>
        </div >
    );
}

DiaryList.defaultProps = {
    diarylist: [],
};
export default DiaryList;