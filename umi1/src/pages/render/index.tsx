import { memo, useCallback, useMemo, useState } from "react"
import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }

    const users = useMemo(() => {
        const users2 = {
            name: "李四",
            age: 22
        }
        return users2;
    }, []);

    // const anyMethod = () => {

    // }

    const anyMethod = useCallback(() => {},[]);
    return (
        <div className="parent">
            <p>父组件</p>
            <p>父组件Count: {count}</p>
            <button onClick={handleClick}>增加</button>
            <Child user={users} handleClick={anyMethod} />
        </div>
    )
}

export default memo(Parent)