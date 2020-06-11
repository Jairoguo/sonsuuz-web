import http from "@/utils/http";
import URLS from "@/api/api-url";

class Blog {
    getArticleAllList(){
        const url = URLS.BLOG.LIST
        return http.get(url)
    }

    getArticleParamList(params) {
        const url = URLS.BLOG.LIST
        return http.get(url, {params: params})

    }

    getArticle(articleId) {
        const url = URLS.BLOG.READ + articleId
        return http.get(url)
    }

    postArticle(postData) {
        const url = URLS.BLOG.CREATE
        return http.post(url, postData)
    }

    updateArticle(articleId, postData) {
        const url = URLS.BLOG.DELETE + articleId + '/'
        return http.patch(url, postData)
    }

    deleteArticle(articleId) {
        const url = URLS.BLOG.DELETE + articleId + '/'
        return http.delete(url)

    }

    getCategorys() {
        const url = URLS.CATEGORY.LIST
        return http.get(url)

    }

    getCategory(categoryId) {
        const url = URLS.CATEGORY.READ + categoryId + '/'
        return http.get(url)

    }


    createCategory(postData) {
        const url = URLS.CATEGORY.CREATE
        return http.post(url, postData)
    }

    updateCategory(categoryId, postData) {
        const url = URLS.CATEGORY.UPDATE + categoryId + '/'
        return http.post(url, postData)
    }

    deleteCategory(id) {
        const url = URLS.CATEGORY.DELETE + id + '/'

        return http.delete(url)
    }

    createComment(postData) {
        const url = URLS.COMMENT.CREATE
        return http.post(url, postData)

    }

    like(postData) {

        const url = URLS.LIKE.CREATE
        return http.post(url, postData)

    }

    getClollect() {
        const url = URLS.COLLECT.READ
        return http.get(url)
    }

    getCollectCategory() {
        const url = URLS.COLLECTCATEGORY.LIST
        return http.get(url)
    }

    createCollectCategory(postData) {
        const url = URLS.COLLECTCATEGORY.CREATE
        return http.post(url, postData)
    }

    createCollect(postData) {
        const url = URLS.COLLECT.CREATE
        return http.post(url, postData)
    }

}

export default new Blog()
