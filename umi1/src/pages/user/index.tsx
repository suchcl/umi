import { history,Link } from "umi";
export default (props:any) => {
    // 编程式路由跳转
    const changeProfile = () => {
        history.push("/user/profile?key=sun");
    }

    // 完善个人资料，账号安全
    const improvePersonalData = () => {
        history.push({
            pathname: "/user/account",
            query: {
                from: "moon"
            }
        });
    }
    return <div style={{padding: '20px'}}>
        <h4>大个人中心就是大</h4>
        {/* 具有子路由的公共组件中，路由跳转时既可以使用绝对路径，即全路由，也可以使用相对路由 */}
        <a href="/user/profile">个人档案</a>
        <br />
        <a href="/user/ucenter">小的里面的个人中心</a>
        <br />
        {/* 这里可以使用相对路径 */}
        <a href="account">账号安全</a>
        <Link to="account">Link去账号安全</Link>
        {/* 通过props.children来渲染子路由 */}
        <button onClick={changeProfile}>去修改个人档案</button>
        <button onClick={improvePersonalData}>完善个人资料</button>
        <button onClick={() => { history.goBack() }}>返回</button>
        {props.children}
        </div>
}