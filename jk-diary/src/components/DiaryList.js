import { useState } from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem"

const ConrtolMenu = ({ value, onChange, optionList }) => {
    return <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => (
            <option key={idx} value={it.value}>{it.name}</option>
        ))}
    </select>
}

const optionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된 순" }
]

const filerList = [
    { value: "all", name: "모두다" },
    { value: "good", name: "좋은 감정" },
    { value: "bad", name: "나쁜 감정" },
]
const DiaryList = ({ diaryList }) => {

    const navigate = useNavigate();

    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState("all");

    const filterCallback = (item) => {
        if (filter === "good") {
            return parseInt(item.emotion) <= 3;
        } else {
            return parseInt(item.emotion) > 3;
        }
    }

    const getProessedDiaryList = () => {
        const compare = (a, b) => {
            if (sortType === "latest") {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        // 깊은 복사
        const copyList = JSON.parse(JSON.stringify(diaryList));

        const filterdList = filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));
        const sortedList = filterdList.sort(compare);
        return sortedList;
    }

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ConrtolMenu
                        value={sortType}
                        onChange={setSortType}
                        optionList={optionList}
                    />
                    <ConrtolMenu
                        value={filter}
                        onChange={setFilter}
                        optionList={filerList}
                    />
                </div>
                <div className="right_col">
                    <MyButton
                        type={'positive'}
                        text={"새 일기 쓰기"}
                        onClick={() => navigate("./new")}
                    />
                </div>
            </div>
            {getProessedDiaryList().map((it) => (
                <DiaryItem key={it.id} {...it} />
            ))}
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
}
export default DiaryList;