// 评论模块
let comment = {
    /**
     * 
     * @param {评论用户} name 
     * @param {评论内容} content 
     * @param {评论id} article_id 
     */
    // 添加评论
    add: (name, content, article_id) => $.post(APILIST.comment_add, {
        name,
        content,
        article_id
    }),
    // 获取
    get: article_id => $.get(APILIST.comment_get, {
        article_id,
    })

}