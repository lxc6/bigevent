// 配置文件
//把项目的所有接口都放到此处

// 所有接口基地址
const BASEURL = 'http://192.168.0.104:8000';
// var BASEURL = 'http://39.99.130.177:8000';
// 接口信息
const APILIST = {
    // 登录界面
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getuser: BASEURL + '/admin/getuser',

    // 类别管理接口
    // 获取
    category_get: BASEURL + '/admin/category_search', //获取分类
    // 添加
    category_add: BASEURL + '/admin/category_add',
    // 删除
    category_del: BASEURL + '/admin/category_delete',
    // 编辑
    category_edit: BASEURL + '/admin/category_edit',

    // 文章操作接口
    // 获取
    article_get: BASEURL + '/admin/search',
    // 删除
    article_del: BASEURL + '/admin/article_delete',
    // 添加
    article_add: BASEURL + '/admin/article_publish',
    // 编辑
    article_edit: BASEURL + '/admin/article_edit',

}