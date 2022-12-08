import { FC, useRef, useState } from "react";

const GlobalLike: FC = () => {
    const like = useRef(0);
    const [num,setNum] = useState(0);
    const handleAlertClick = () => {
        setTimeout(() => {
            alert(`你点击了${like.current}`);
        }, 3000);
    }
    return (
        <>
            <button onClick={() => {
                setNum(num + 1);
                like.current = num + 1;
            }}>{num}赞</button>
            <button onClick={handleAlertClick}>Alert</button>
        </>
    )
}

export default GlobalLike;