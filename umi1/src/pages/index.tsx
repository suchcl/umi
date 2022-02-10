import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ul className="nav">
        <li>
          <Link to="/list">列表页</Link>
        </li>
        <li>
          <Link to="/detail">详情页</Link>
        </li>
      </ul>
      
      <div className="user-center">
        <a href="/user">大个人中心</a>
        <br />
        <div className="text">
          <p className='t1'>我国警告见效了？当立外长的面，澳外长向华示好：坚持一中原则</p>
          <p className='t2'>杜月笙虽是青帮老大，却有一个闻名于世的儿子，一生为祖国奋斗</p>
          <p className='t3'>百万订单“考验”父子情，冰墩墩工厂老板：儿子哭着要，莫法</p>
        </div>
      </div>
    </div>
  );
}
