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
      </div>
    </div>
  );
}
