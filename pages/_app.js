import { store, persistor } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from "../components/common/Layout";
import Login from "../components/login/Login";
import Loading from "../components/common/Loading";

function PointApp({ Component, pageProps, router }) {
    const isLoginPage = (router.pathname === "/login");
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={<Loading isDisplay={true}/>} persistor={persistor}>
                    {!isLoginPage ? <Layout content={<Component {...pageProps} />} /> : <Login />}
                </PersistGate>
            </Provider>
        </>
    );
}

// export default wrapper.withRedux(PointApp);
export default PointApp;
