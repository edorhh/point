import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import loginSlice from "../../../store/slices/login";

const Admin = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(loginSlice.actions.logout());
        router.push("/");
    };

    return (
        <>
            <div>어드민페이지</div>
            <button onClick={logOut}>로그아웃</button>
        </>
    );
};

export default Admin;
