import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../utils/apiConfig';
import loginSlice from '../../store/slices/login';
import { useRouter } from 'next/router';

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const [userInfo, setUserInfo] = useState({
        manager_id: '',
        manager_view_pass: '',
    });

    useEffect(() => {
        if (isLoggedIn) router.push('/board');
    }, [isLoggedIn, router]);

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const managerLogin = () => {
        const dataItem = {
            username: userInfo.manager_id,
            password: userInfo.manager_view_pass,
        };

        api.post('/login', dataItem).then((req) => {
            dispatch(loginSlice.actions.login(req.data.user_info));
        }).catch((e) => { 
            console.error('error', e); 
        });
    };

    return (
        <>
            <div className="login">
                <section>
                    <div className="container">
                        <div className="main_img"></div>
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
            </div>
        </>
    );
}
