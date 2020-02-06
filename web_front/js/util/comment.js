// 
var comment = {
    /**
     * 
     * @param {*} name 
     * @param {*} content 
     * @param {*} article_id 
     */
    add: function (name, content, article_id) {
        return $.post(APILIST.comment_add, {
            'name': name,
            'content': content,
            'article_id': article_id
        })
    },
    get: function (article_id) {
        return $.get(APILIST.comment_get, {
            'article_id': article_id,
        })
    }
}