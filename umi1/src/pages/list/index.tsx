import { Link } from "umi";
export default function ListPage(props:any){
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
            <p className="mark">列表页</p>
            <div className="box">
                <div className="text">
                    <p>中国空间站的第一个外籍人员，可能来自欧洲！但为何不是俄罗斯？</p>
                    <p>个人存取现金超5万元要登记？央行权威回应：不影响居民正常现金存取款业务</p>
                </div>
            </div>
        </div>
    );
}