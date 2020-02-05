// 引入模块  集中管理
var user = {
    // 用户登录  优化 将dom操作放到html页面 js中 只放ajax功能  即将then()取出  别忘了return
    login: function (name, password) {
        // 语义化
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })
    },
    logout: function () {
        return $.post(APILIST.user_logout)

    },
    getInfo: function () {
        return $.get(APILIST.user_getuser)

    }





}