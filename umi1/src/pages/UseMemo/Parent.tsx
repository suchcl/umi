import { FC, memo, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
    const [n, setN] = useState(0);
    const [age, setAge] = useState(5);
    const [m, setM] = useState(10);
    const [num, setNum] = useState(20);
    console.log("执行最外层盒子");

    // const Nadd1 = () => {
    //     setN(n+1);
    // }

    // const MAdd1 = () => {
    //     setM(m+1);
    // }

    const addN = () => {
        setN(n + 1);
    }

    const addM = () => {
        setM(m + 1);
    }
    return (
        <>
            <h3>最外层盒子</h3>
            <Child1 value={n} age={age} onClick={addN} />
            <Child2 value={m} num={num} onClick={addM} />
            {/* <button onClick={Nadd1}>n+1</button> */}
            {/* <button>age+1</button> */}
            {/* <button onClick={MAdd1}>m+1</button> */}
            {/* <button>num+1</button> */}
        </>
    )
}

export default memo(Parent);