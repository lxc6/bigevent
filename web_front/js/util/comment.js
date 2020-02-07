// 评论模块
let comment = {
    /**
     * 
     * @param {*} name 
     * @param {*} content 
     * @param {*} article_id 
     */
    // 添加评论
    add: function (name, content, article_id) {
        return $.post(APILIST.comment_add, {
            'name': name,
            'content': content,
            'article_id': article_id
        })
    },
    // 获取
    get: function (article_id) {
        return $.get(APILIST.comment_get, {
            'article_id': article_id,
        })
    }
}