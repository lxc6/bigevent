// 把所有文章分类的操作写在此处
// 类别管理
var article = {
    // 传参 page  获取页数
    get: function (page, type, status) {
        return $.get(APILIST.article_get, {
            'page': page,
            'type': type,
            'state': status,

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

    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, {
    //         'id': id,
    //         'name': name,
    //         'slug': slug
    //     })

    // }
}