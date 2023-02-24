import { FC, memo } from "react";

interface PageProps {
    value: number;
    num: number;
}

const Child2 = (props:any) => {
    const {onClick} = props;
    console.log("子组件Child2执行了");

    return (
        <div className="child2">
            <p>子组件Child2上的m: {props.value}</p>
            <p>子组件Child2上的num: {props.num}</p>
            <button onClick={onClick}>m+1</button>
        </div>
    )
}

export default memo(Child2);