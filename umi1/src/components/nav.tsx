import {Link} from "umi";
export default () => {
    return (
        <ul className="nav">
            <li>
                <Link to="/list">列表页</Link>
            </li>
            <li>
                <Link to="/detail">详情页</Link>
            </li>
            <li>
                <Link to="/performance">性能测试</Link>
            </li>
            <li>
                <Link to="/perfList">性能列表</Link>
            </li>
            <li>
                <Link to="/event">事件机制</Link>
            </li>
        </ul>
    )
}