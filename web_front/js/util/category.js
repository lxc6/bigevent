// 把所有文章分类的操作写在此处
// 类别管理
let category = {
    get: () => $.get(APILIST.category_get),
    add: (name, slug) => $.post(APILIST.category_add, {
        name,
        slug
    }),
    del: id => $.post(APILIST.category_del, {
        id
    }),
    edit: (id, name, slug) => $.post(APILIST.category_edit, {
        id,
        name,
        slug
    })


}