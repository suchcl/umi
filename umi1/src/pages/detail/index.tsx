import { Link } from "umi"
export default function DetailPage(){
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
    </div>
}