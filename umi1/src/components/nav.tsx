import {Link} from "umi";
import styles from "./nav.less";
export default () => {
    return (
        <ul className={styles.nav}>
            <li>
                <Link to="/list">列表页</Link>
            </li>
            <li>
                <Link to="/rerender">重新渲染</Link>
            </li>
            <li>
                <Link to="/useMemo">useMemo</Link>
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
            <li>
                <Link to="/upload">附件上传</Link>
            </li>
            <li>
                <Link to="/ts">TS相关</Link>
            </li>
            <li>
                <Link to="/qrcode">二维码</Link>
            </li>
        </ul>
    )
}