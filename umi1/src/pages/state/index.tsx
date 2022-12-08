import { useEffect, useRef } from "react";

const State = () => {
    const refBtn = useRef(null);

    useEffect(() => {
        refBtn.current.addEventListener("click", () => {
            console.log("ref按钮被点击了");
        })
    },[]);

    return (
        <>
            <div>useRef</div>
            <button ref={refBtn}>ref按钮</button>
        </>
    )
}

export default State;