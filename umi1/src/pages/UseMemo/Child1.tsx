import { FC, memo } from "react";
import "./memo.less";


const Child1 = (props: any) => {
    const { onClick } = props;
    console.log("子组件Child1执行了");
    return (
        <div className="child1">
            <p>子组件Child1上的n:{props.value}</p>
            <p>子组件Child1上的age: {props.age}</p>
            <button onClick={onClick}>n+1</button>
        </div>
    )
}

export default memo(Child1);