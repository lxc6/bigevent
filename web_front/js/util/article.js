// 把所有文章分类的操作写在此处
// 类别管理
var article = {
    // 获取文章的列表数据
    show: function (type, page) {
        return $.get(APILIST.article_get, {
            'type': type, //编号
            'page': page //当前第几页
        })
    },
    // 获取主页焦点图 
    getFocusFive: function () {
        // 只要五条数据 只获取5条即可
        return $.get(APILIST.article_get, {
            'perpage': 5,
        })
    },
    // 热门排行 type类别编号 
    rank: function (type) {
        return $.get(APILIST.article_rank, {
            'type': type
        })
    },

    // 最新资讯
    latest: function () {
        return $.get(APILIST.article_latest)
    },
    // 最新评论
    // comment: function () {
    //     return $.get(APILIST.article_comment)
    // },
    // 文章详情
    detail: function (id) {
        return $.get(APILIST.article_detail, {
            'id': id
        })
    }

}