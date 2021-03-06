// 配置文件
//把项目的所有接口都放到此处

// 所有接口基地址
const BASEURL = 'http://192.168.0.104:8000';
// const BASEURL = 'http://39.99.130.177:8000';
// 接口信息
const APILIST = {

    // ------类别管理接口
    // 获取
    category_get: BASEURL + '/category', //获取分类

    //------- 文章操作接口
    // 获取
    article_get: BASEURL + '/search',
    // 热门排行
    article_rank: BASEURL + '/rank',
    // 最新资讯
    article_latest: BASEURL + '/lastest',
    // 最新评论  接口有问题 做不了
    article_comment: BASEURL + '/get_latest_comment',

    // -----文章
    // 详情
    article_detail: BASEURL + '/article',
    // 评论
    comment_add: BASEURL + '/post_comment',
    comment_get: BASEURL + '/get_comments',

}