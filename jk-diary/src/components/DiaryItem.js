import Mybutton from "./MyButton"
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotion, content, date }) => {
    const navigate = useNavigate();
    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    const strDate = new Date(parseInt(date)).toLocaleString();
    return (
        <div className="DiaryItem">
            <div
                className={[ "emotion_img_wrapper", `emotion_img_wrapper_${ emotion }` ].join(" ")}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${ emotion }.png`} />
            </div>
            <div className="info_wrapper" onClick={() => navigate(`/dirary/${ id }`)}>
                <div className="diaryDate">
                    {strDate}
                </div>
                <div className="diary_content_preview">
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className="btn_wrapper">
                <Mybutton text="수정하기" onClick={() => navigate(`/edit/${ id }`)} />
            </div>

        </div >
    )
}

export default DiaryItem;