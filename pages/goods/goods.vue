<template>
	<view>
	<view class="goods">
	  <goodsList :goodsList="goodsList"></goodsList>
	</view>
	<view v-if="flag" class="isFlag"><text>--------------我是有底线的----------------</text></view>	
	</view>
</template>

<script>
	import goodsList from "../../components/goodsList.vue"
	import { getGoodsList } from "../../util/home.js"
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				goodsList: [],
				page: 1,
				flag: false
			}
		},
		onLoad() {
			this.loadGoodsList()
		},
		methods: {
			async loadGoodsList(callBack) {
				const res = await getGoodsList('new',this.page)
				this.goodsList = [...this.goodsList,...res.data.data.list]
				if(res.data.data.list=0) {
					this.flag = true
				}
				callBack && callBack()
			}
		},
		// 下拉加载
		onReachBottom() {
			console.log('触底了！')
			this.page++
			this.loadGoodsList()
		},
		// 上拉刷新
		onPullDownRefresh() {
			console.log('刷新了')
			this.goodsList=[]
			this.page = 1
			this.flag = false
			this.loadGoodsList( () => {
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style>
</style>
