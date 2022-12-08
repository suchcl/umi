import { FC, useState } from "react";

const LinkeButton: FC = () => {
    const [like, setLike] = useState(0);
    const handleAlertClick = () => {
        setTimeout(() => {
            alert(`你点击了${like}`);
        }, 3000);
    }
    return (
        <>
            <button onClick={() => setLike(like + 1)}>{like}赞</button>
            <button onClick={handleAlertClick}>Alert</button>
        </>
    )
}

export default LinkeButton;