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
    // add: function (name, slug) {
    //     return $.post(APILIST.category_add, {
    //         'name': name,
    //         'slug': slug
    //     })
    // },

    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, {
    //         'id': id,
    //         'name': name,
    //         'slug': slug
    //     })

    // }
}