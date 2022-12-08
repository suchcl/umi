import { useRef,MutableRefObject } from "react";

const FocusInput = () => {
    const inputRef:MutableRefObject<any> = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>聚焦input</button>
        </div>
    )
}

export default FocusInput;