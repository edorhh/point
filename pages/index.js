import { useSelector } from "react-redux";
import { useRouter } from 'next/router'

export default function MainPage() {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const managerAuth = useSelector(state => state.login.manager_auth);
    const router = useRouter();
    router.push(`${!isLoggedIn ? "/login" : (managerAuth === 'ROLE_ADMIN' ? "/board": "/about")}`);

    return <></>;
}
