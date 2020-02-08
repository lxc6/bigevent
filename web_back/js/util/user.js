// 引入模块  集中管理
let user = {
    // 用户登录  优化
    login: (user_name, password) => $.post(APILIST.user_login, {
        user_name,
        password
    }),
    // 登出
    logout: () => $.post(APILIST.user_logout),
    // 获取
    getInfo: () => $.get(APILIST.user_getuser)

}