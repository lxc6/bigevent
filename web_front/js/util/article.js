// 把所有文章分类的操作写在此处
// 类别管理
var article = {
    // 获取主页焦点图 
    getFocusFive: function () {
        // 只要五条数据 只获取5条即可
        return $.get(APILIST.article_get, {
            'perpage': 5,
        })
    },
    // 热门排行
    rank: function () {
        return $.get(APILIST.article_rank)
    }
    // 根据id获取详情
    // getId: function (id) {
    //     return $.get(APILIST.article_get, {
    //         'id': id

    //     })
    // }

}