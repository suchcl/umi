const router: any = [
    {
        path: "/",
        component: "@/pages/index"
    },
    {
        path: "/list/",
        component: "@/pages/list/index"
    },
    {
        path: "/detail",
        component: "@/pages/detail/index"
    },
    {
        path: "/user",
        component: "@/pages/user/index",
        routes:[
            {
                path:"profile", // 这里的path配置，不要带/，访问路径为： /user/profile
                component: "@/pages/user/profile/index"
            },
            {
                path: "ucenter",
                component: "@/pages/user/ucenter/index"
            },
            {
                path: "account",
                component: "@/pages/user/account/index"
            }
        ]
    }
  ]
  
export default router;