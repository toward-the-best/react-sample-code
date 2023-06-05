import { useParams } from "react-router-dom";

const Diary = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>
                Diary
            </h1>
            <p>
                이곳은 {id} Diary 입니다.
            </p>
        </div>
    );
}

export default Diary;