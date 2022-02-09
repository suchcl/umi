import { Link } from "umi";
export default function ListPage(props:any){
    const id = props.location.query.id;
    console.log("id: ", id);
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