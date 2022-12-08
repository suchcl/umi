import { FC } from "react";

let like:number = 0;
const GlobalLike: FC = () => {
    const handleAlertClick = () => {
        setTimeout(() => {
            alert(`你点击了${like}`);
        }, 3000);
    }
    return (
        <>
            <button onClick={() => { like = like + 1 }}>{like}赞</button>
            <button onClick={handleAlertClick}>Alert</button>
        </>
    )
}

export default GlobalLike;