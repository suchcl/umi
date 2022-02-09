import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <a href="#/list/">列表页</a>
      <br />
      <a href="#/detail">详情页</a>
    </div>
  );
}
