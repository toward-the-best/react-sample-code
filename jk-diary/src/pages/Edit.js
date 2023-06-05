import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParam, setSearchParam] = useSearchParams();
    const id = searchParam.get("id");
    console.log(" id : ", id);
    return (
        <div>
            <h1>
                Edit
            </h1>
            <p>
                이곳은 Edit 입니다.
            </p>
            <button onClick={() => setSearchParam({ who: "jk" })}>클릭</button>
            <button onClick={() => navigate("/home")}>Home으로 가기</button>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    );
}

export default Edit;