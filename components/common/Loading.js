import Image from "next/image";
import loadingImg from "/styles/images/loading.gif";
export default function Loading({ isDisplay }) {
    return (
        <div id="loading_div" style={{ display: isDisplay ? "block" : "none" }}>
            <Image alt="요청 대기중" src={loadingImg} />
        </div>
    );
}