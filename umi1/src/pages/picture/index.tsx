import { useState } from "react";
import {Button,Upload,Popconfirm} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import style from "./pic.less";

// 箭头函数形式的组件
export default () => {
    const [msg,setMsg] = useState("欢迎使用图片库");
    return (
        <div className="pic-container">
            <div className="box">
                <h4>{msg}</h4>
                <div className={style.pic_area}>
                    <div className={style.pic}>
                        {/* 导入svg */}
                        <img src={require("./images/i1.svg")} alt="" />
                    </div>
                    <div className="text"></div>
                </div>
                <div className={style.btn_area}>
                    <Button type="primary">Button</Button>
                    <Upload>
                        <Button>
                            <UploadOutlined />上传
                        </Button>
                    </Upload>
                    {/* 确认按钮，有提示信息 */}
                    <Popconfirm title="确认要删除？" okText="确认" cancelText="取消">
                        <Button>确认</Button>
                    </Popconfirm>
                </div>
            </div>
        </div>
    );
}