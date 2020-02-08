// 把所有文章分类的操作写在此处
// 类别管理
let article = {
    // 获取文章的列表数据
    show: (type, page) => $.get(APILIST.article_get, {
        type,
        page
    }),
    // 获取主页焦点图 
    getFocusFive: () => $.get(APILIST.article_get, {
        'perpage': 5,
    }),
    // 热门排行 type类别编号 
    rank: type => $.get(APILIST.article_rank, {
        type
    }),

    // 最新资讯
    latest: () => $.get(APILIST.article_latest),
    // 最新评论
    // comment: function () {
    //     return $.get(APILIST.article_comment)
    // },
    // 文章详情
    detail: id => $.get(APILIST.article_detail, {
        id
    })


}