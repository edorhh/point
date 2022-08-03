import { useEffect, useState } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { useRouter } from 'next/router'
import api from "../../utils/api";
import loginSlice from "../../store/slices/login";

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const managerAuth = useSelector(state => state.login.manager_auth);
    const [userInfo, setUserInfo] = useState({ manager_id: '', manager_view_pass: '' });

    useEffect(() => {
        if(isLoggedIn) {
            if (managerAuth === 'ROLE_ADMIN2') router.push('/common/passwordexpired/main');
            else if (managerAuth === 'ROLE_ADMIN1') router.push('/pointmng/store/main');
            else if (managerAuth === 'ROLE_ADMIN') router.push('/pointmng/admin/main');
        }
    }, [isLoggedIn, managerAuth, router]);

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const managerLogin = () => {
        const dataItem = {
            username: userInfo.manager_id,
            password: userInfo.manager_view_pass,
        };
    
        api.post("/login", dataItem).then((req) => {
            dispatch(loginSlice.actions.login(req.data.user_info));
        }).catch((e) => {
            console.error('error',e);
        });
    };

    return (
        <>
            <div className="login">
	            <header>
                    <h1 className="docTitle">읽은 만큼 할인받자! 독서포인트서비스</h1>
                    <p>도서관 책을 이용하고 포인트로 적립받아 서점에서 할인 받는 서비스입니다</p>
                </header>
	            <section>
                    <div className="container">
                        <div className="main_img">
                            <span className="coin"></span>
                        </div>
                        <h2>LOGIN</h2>
                        <form id="loginForm">
                            <label htmlFor="manager_id">아이디</label>
                            <input type="text" id="manager_id" className="login_managerID" name="manager_id" onChange={onChange} placeholder="ID" />
                            <label htmlFor="manager_view_pass">비밀번호</label>
                            <input type="password" id="manager_view_pass" name="manager_view_pass" onChange={onChange} placeholder="Password" />
                            <input type="hidden" id="manager_pass" name="manager_pass" />
                        </form>
                        <input className="btnLogin" type="button" value="로그인" onClick={managerLogin} />
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <p className="copyright">COPYRIGHT(C) 2022 CHAEUM CNI Inc., ALL RIGHTS RESERVED.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
