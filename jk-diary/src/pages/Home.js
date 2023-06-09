import { useContext, useEffect, useState } from "react";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const Home = () => {
    const diaryList = useContext(DiaryStateContext);

    //console.log(diaryList);

    const [data, setData] = useState([]);
    const [curDate, setCurdDate] = useState(new Date())
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;


    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0
            ).getTime();

            setData(diaryList.filter((it) => {
                return firstDay <= it.date && it.date <= lastDay
            }));
        }
    }, [diaryList, curDate]);

    useEffect(() => { console.log(data) }, [data]);

    const increaseMont = () => {
        setCurdDate(new Date(curDate.setMonth(curDate.getMonth() + 1)));
    }
    const decreaseMont = () => {
        setCurdDate(new Date(curDate.setMonth(curDate.getMonth() - 1)));
    }
    return (
        <div>
            <MyHeader headText={headText}
                leftChild={<MyButton text={"<"} onClick={() => { decreaseMont(); }} />}
                rightChild={<MyButton text={">"} onClick={() => { increaseMont(); }} />}
            />
            <DiaryList diaryList={data} />
        </div>
    );
}

export default Home;