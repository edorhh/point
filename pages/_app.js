import { store, persistor } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function PointApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Header />
                    <section className="content">
                        <div className="container">
                            <Component {...pageProps} />
                        </div>
                    </section>
                    <Footer />
                </PersistGate>
            </Provider>
        </>
    );
}

export default PointApp;
