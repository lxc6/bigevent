// 把所有文章分类的操作写在此处
// 类别管理
let article = {
    // 传参 page  获取页数
    get: function (page, type, status) {
        return $.get(APILIST.article_get, {
            'page': page,
            'type': type,
            'state': status,

        })
    },
    // 根据id获取详情
    getId: function (id) {
        return $.get(APILIST.article_get, {
            'id': id

        })
    },
    del: function (id) {
        return $.get(APILIST.article_del, {
            'id': id
        })
    },
    add: function (fd) {
        return $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd,
            processData: false, //不允许处理数据
            contentType: false, //不需要设置请求头

        })
    },
    // 编辑
    edit: function (fd) {
        return $.ajax({
            url: APILIST.article_edit,
            type: 'post',
            data: fd,
            processData: false, //不允许处理数据
            contentType: false, //不需要设置请求头

        })
    },
}