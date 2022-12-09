import { FC, MutableRefObject, useRef } from "react";
import ChildInput from "./ChildInput";

const ParentCRef: FC = () => {
    const childRef: MutableRefObject<any> = useRef({});

    const handleFocus = () => {
        const node = childRef.current;
        console.log(node.getValue());
        console.log(node.getName());
        // alert(node.getValue());
    }
    return (
        <>
            <ChildInput label="名称" cRef={childRef} />
            <button onClick={handleFocus}>focus</button>
        </>
    )
}

export default ParentCRef;