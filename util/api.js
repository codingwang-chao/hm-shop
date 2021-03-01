const BASEURL1 = 'http://152.136.185.210:8000/api/w6'
const BASEURL2 = 'https://api-hmugo-web.itheima.net/api/public/v1'
const BASEURL3 = 'http://ttapi.research.itcast.cn'
export const myRequest = (option) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASEURL1 + option.url,
			data: option.data || {},
			method: option.method || "get",
			success: res => {
				resolve(res)
			},
			fail: res => {
				reject(res)
			}
		})
	})
}

export const request = (opthion) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASEURL2+opthion.url,
			data: opthion.data || {},
			method: opthion.method || 'GET',
			success: res => {
				resolve(res)
			},
			fail: err => {
					return uni.showToast({
						title:'数据获取失败！'
					})
				reject(err)
			}
		})
	})
}

export const newsRequest = (opthion) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASEURL3+opthion.url,
			data: opthion.data || {},
			method: opthion.method || 'GET',
			success: res => {
				resolve(res)
			},
			fail: err => {
					return uni.showToast({
						title:'数据获取失败失败了呜呜呜呜呜！'
					})
				reject(err)
			}
		})
	})
}