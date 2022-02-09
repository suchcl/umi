import { useState } from "react";
import { Link,history } from "umi"
export default function DetailPage(){
    const [ids,setIds] = useState(12);
    const toList = (id:any):void => {
        history.push({
            pathname: "/list",
            query: {
                id
            }
        });
    }

    function toList2(id:any){
        console.log("我的ID是: ", id);
        history.push({
            pathname: "/list",
            state:{
                id
            }
        });
    }
    return <div className="detail">
        <h4>详情页</h4>
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                {/* Link组件页可以携带参数，直接拼接即可，会在浏览器地址栏显示 */}
                <Link to="/list?from=detail">列表页</Link>
            </li>
        </ul>
        <button onClick={() => {
            toList(ids)
        }}>通过点击,编程式导航跳转到列表页</button>
        <button onClick={() => {toList2(ids)}}>字符串类型的:跳转列表</button>
    </div>
}