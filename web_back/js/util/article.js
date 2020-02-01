// 把所有文章分类的操作写在此处
// 类别管理
var article = {
    // 传参 page  获取页数
    get: function (page) {
        return $.get(APILIST.article_get, {
            'page': page
        })
    },
    // add: function (name, slug) {
    //     return $.post(APILIST.category_add, {
    //         'name': name,
    //         'slug': slug
    //     })
    // },
    // del: function (id) {
    //     return $.post(APILIST.category_del, {
    //         'id': id
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