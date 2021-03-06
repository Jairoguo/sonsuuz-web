import http from "@/utils/http";
import URLS from "@/api/api-url";

class Blog {
    getArticleAllList() {
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

    getCategorys(params) {
        const url = URLS.CATEGORY.LIST
        return http.get(url, {params: params})

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


    getComments(articleId) {
        const url = URLS.COMMENT.LIST
        return http.get(url, {params: {blog_id: articleId}})
    }
    createComment(postData) {
        const url = URLS.COMMENT.CREATE
        return http.post(url, postData)

    }

    like(postData) {

        const url = URLS.LIKE.CREATE
        return http.post(url, postData)

    }

    getClollects(params) {
        const url = URLS.COLLECT.LIST
        return http.get(url, {params: params})
    }

    deleteCollect(id) {
        const url = URLS.COLLECT.DELETE + id + '/'
        return http.delete(url)

    }

    getCollectCategorys(params) {
        const url = URLS.COLLECTCATEGORY.LIST
        return http.get(url, {params: params})
    }

    deleteCollectCategory(collectCategoryId) {
        const url = URLS.COLLECTCATEGORY.DELETE + collectCategoryId + '/'
        return http.delete(url)
    }

    updateCollectCategory(collectCategoryId, postData) {
        const url = URLS.COLLECTCATEGORY.DELETE + collectCategoryId + '/'
        return http.patch(url, postData)
    }

    createCollectCategory(postData) {
        const url = URLS.COLLECTCATEGORY.CREATE
        return http.post(url, postData)
    }

    getCollectCategory(collectCategoryId) {
        const url = URLS.COLLECTCATEGORY.READ + collectCategoryId + '/'
        return http.get(url)
    }

    createCollect(postData) {
        const url = URLS.COLLECT.CREATE
        return http.post(url, postData)
    }

    createCategoryFollow(postData) {
        const url = URLS.CATEGORYFOLLOW.CREATE
        return http.post(url, postData)
    }

    getCategoryFollow(CategoryFollowId) {
        const url = URLS.CATEGORYFOLLOW.READ + CategoryFollowId + '/'
        return http.get(url)
    }

    getCategoryFollows(params) {
        const url = URLS.CATEGORYFOLLOW.LIST
        return http.get(url, {params: params})
    }

}

export default new Blog()
