// 把所有文章分类的操作写在此处
// 类别管理
let article = {
    // 传参 page  获取页数
    get: (page, type, status) => $.get(APILIST.article_get, {
        page,
        type,
        status,

    }),
    // 根据id获取详情
    getId: id => $.get(APILIST.article_get, {
        id

    }),
    del: id => $.get(APILIST.article_del, {
        id
    }),
    add: fd => $.ajax({
        url: APILIST.article_add,
        type: 'post',
        data: fd,
        processData: false, //不允许处理数据
        contentType: false, //不需要设置请求头
    }),
    // 编辑
    edit: fd => $.ajax({
        url: APILIST.article_edit,
        type: 'post',
        data: fd,
        processData: false, //不允许处理数据
        contentType: false, //不需要设置请求头

    }),
}