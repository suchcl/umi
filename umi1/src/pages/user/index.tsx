export default (props:any) => {
    return <div style={{padding: '20px'}}>
        <h4>大个人中心就是大</h4>
        {/* 具有子路由的公共组件中，路由跳转时既可以使用绝对路径，即全路由，也可以使用相对路由 */}
        <a href="/user/profile">个人档案</a>
        <br />
        <a href="/user/ucenter">小的里面的个人中心</a>
        <br />
        {/* 这里可以使用相对路径 */}
        <a href="account">账号安全</a>
        {props.children}
        </div>
}