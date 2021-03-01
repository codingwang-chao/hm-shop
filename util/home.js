import { myRequest } from "./api.js"
import { request } from "./api.js"
import { newsRequest } from "./api.js"

// 请求首页轮播图数据
export const getSwiper = () => {
	return myRequest({
		url:"/home/multidata",
	})
}

// 请求商品数据
export const getGoodsList = (type,page) => {
	return myRequest({
		url: '/home/data',
		data: {
			type,
			page
		}
	})
}

// 请求社区图片数据
export const getPics = () => {
	return request({
		url: '/home/floordata'
	})
}

// 请求文章数据
export const getNewsList = data => {
	return newsRequest({
		url:'/app/v1_1/articles',
		data
	})
}