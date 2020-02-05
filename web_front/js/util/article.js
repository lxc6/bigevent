// 把所有文章分类的操作写在此处
// 类别管理
var article = {
    show: function (type) {

        return $.get(APILIST.article_get, {
            'type': type
        })
    },
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
    },

    // 最新资讯
    latest: function () {
        return $.get(APILIST.article_latest)
    },
    // 最新评论
    // comment: function () {
    //     return $.get(APILIST.article_comment)
    // },

}