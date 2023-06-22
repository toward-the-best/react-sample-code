import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Diary = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        console.log(titleElement);
        titleElement.innerText = `감정 일기장 - ${ id }번 일기`;
    }, []);


    useEffect(() => {
        if(diaryList.length > 1) {
            const targetDiary = diaryList.find(it => parseInt(it.id) === parseInt(id));
            console.log("이거 두번??", targetDiary);

            if(targetDiary) {
                // 일기가 존재 할때 
                setData(targetDiary);
            } else {
                // 일기가 없을때
                alert("없는 일기 입니다")
                navigate("/", { replace: true })
            }
        }
    }, [id]);

    if(!data) {
        return <div className="DiaryPage"> 로딩 중입니다. </div>
    } else {
        const curEmotionData = emotionList.find(
            (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
        );
        return (
            <div className="DiaryPage">
                <MyHeader
                    leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
                    headText={`${ getStringDate(new Date(data.date)) } 기록`}
                    rightChild={<MyButton text={"수정하기"} onClick={() => navigate(`/edit/${ data.id }`)} />}
                />
                <article>
                    <section>
                        <h4>오늘의 감정</h4>
                        <div className={["diary_img_wrapper", `diary_img_wrapper_${ data.emotion }`].join(" ")}>
                            <img src={curEmotionData.emotion_img} />
                            <div className="emotion_descript">
                                {curEmotionData.emotion_description}
                            </div>
                        </div>
                    </section>
                    <section>
                        <h4>
                            오늘의 일기
                        </h4>
                        <div className="diary_content_wrapper">
                            <p>
                                {data.content}
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        );
    }

}

export default Diary;