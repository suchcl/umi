import { Link } from "umi";
export default function ListPage(){
    return (
        <div>
            <ul className="nav">
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/detail">详情页</Link>
                </li>
            </ul>
            <p>列表页</p>
        </div>
    );
}