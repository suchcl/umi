import { useState } from "react";
import { Link,history } from "umi"
// 以CSS Modules的方式导入
import style from "./detail.less";
// 非CSS Modules的方式导入样式
import "./detail-base.less";
export default function DetailPage(){
    const [ids,setIds] = useState(12);
    const [img,setImg] = useState("https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2Fcdbf6c81800a19d8840f74d2e1525f82a71e460f.jpeg%3Ftoken%3D47061aced24ae4d7afbe1e218fb4dd4f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1644685200&t=13b4467f9933a1f5be4098882e5d774b");
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
    return <div className={style.detail}>
        <div className={style.wrap}>
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
        {/* CSS Modules模式的样式引用 */}
        <div className={style.box}>
            <div className={style.pic}>
                {/* 图片需要使用require导入，可以是相对路径 */}
                <img src={require("./images/i1.jpg")} alt="" />
            </div>
            <div className={style.pic}>
                <img src={require("./images/i3.jpg")} alt="" />
            </div>
            <div className={style.pic}>
                {/* 图片可以使用接口下发的地址作为src的属性值 */}
                <img src={img} alt="" />
            </div>
            <div className={style.pic}>
                {/* 图片路径，可以是相对路径，也可以是绝对路径，使用绝对路径的时候可以使用别名@，@指向src目录 */}
                <img src={require("@/pages/detail/images/i2.jpg")} alt="" />
            </div>

            <div className={style.text}>
                <h4>CSS Modules</h4>
                <p>好消息：一则数据传来，美国白忙活了，华为赢了</p>
                <p>电动汽车“充电宝”？高速一蔚来车尾外挂箱体引猜测，民警：12分</p>
            </div>
        </div>
        {/* 非CSS Modules模式的样式引用 */}
        <div className="box">
            <div className="text">
                <h4>非CSS Modules</h4>
                <p>上海微电子正式官宣！交付国内首台高端封装光刻机，倪光南说对了</p>
                <p>立陶宛外长吃瘪！出访澳大利亚时，在台湾问题上，被澳方当面上课</p>
            </div>
        </div>
    </div>
}