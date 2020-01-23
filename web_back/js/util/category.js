// 把所有文章分类的操作写在此处
// 类别管理
var category = {
    get: function () {
        return $.get(APILIST.category_get)
    },
    add: function (name, slug) {
        return $.post(APILIST.category_add, {
            'name': name,
            'slug': slug
        })
    },
    del: function (id) {
        return $.post(APILIST.category_del, {
            'id': id
        })
    }
}