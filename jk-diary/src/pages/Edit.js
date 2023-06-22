import { useNavigate, useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEdit";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";


const Edit = () => {
    const [originData, setOriginData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const diaryList = useContext(DiaryStateContext);
    console.log(id);
    console.log(diaryList);

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        console.log(titleElement);
        titleElement.innerText = `감정 일기장 - ${ id }번 일기 수정`;
    }, []);

    useEffect(() => {
        if(diaryList.length >= 1) {
            const targetDiary = diaryList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );

            if(targetDiary) {
                setOriginData(targetDiary);
            } else {
                navigate("/", { replace: true })
            }
        }

    }, [id, diaryList])
    return <div>
        {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
}

export default Edit;