import { FC, memo } from "react";
import style from "./index.less";

interface PageProps { }

const QRCode: FC<PageProps> = () => {
    return (
        <>
            <button>获取AccessToken</button>
        </>
    )
}

export default memo(QRCode);