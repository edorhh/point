import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ content }) {
    return (
        <>
            <Header />
            <section>
                <div className="container">{content}</div>
            </section>
            <Footer />
        </>
    );
}
