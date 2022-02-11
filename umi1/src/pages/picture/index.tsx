import { useState } from "react";
import style from "./pic.less";

// 箭头函数形式的组件
export default () => {
    const [msg,setMsg] = useState("欢迎使用图片库");
    return (
        <div className="pic-container">
            <div className="box">
                <h4>{msg}</h4>
                <div className={style.pic_area}>
                    <div className="pic">
                        {/* 导入svg */}
                        <img src={require("./images/i1.svg")} alt="" />
                    </div>
                    <div className="text"></div>
                </div>
            </div>
        </div>
    );
}