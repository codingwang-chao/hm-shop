<template>
	<view class="container">
		<view class="article" v-for="(item,index) in articleList" :key='index'>
			<view class="title">
				<text>{{item.title}}</text>
			</view>
			<view class="myflex">
				<view class="imgs" v-for="(img,index) in item.cover.images" :key='index'>
					<image :src="img" mode=""></image>
				</view>	
			</view>
			<view class="message">
				<text>{{item.aut_name}}</text>
				<text>{{item.comm_count}}评论	</text>
				<text>时间</text>
			</view>
		</view>	
	</view>
</template>

<script>
	import { getNewsList } from '../../util/home.js'
	export default {
		data() {
			return {
				timestamp:null,
				articleList:[]
			}
		},
		onLoad() {
			this.loadNewsList()
		},
		methods: {
			async loadNewsList(callBack) {
				const res = await getNewsList({
					channel_id: 13, // 频道 ID
					timestamp: this.timestamp || Date.now(), 
					        // 时间戳，请求新的推荐数据传当前的时间戳
					        //timestamp 相当于页码，请求最新数据使用当前最新时间戳，下一页数据使用上一次返回的数据
					with_top: 1 // 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
				})
				console.log(res)
				this.articleList = [...this.articleList,...res.data.data.results]
				console.log(this.articleList)
				this.timestamp = res.data.pre_timestamp
				callBack && callBack()
			}
		},
		onReachBottom() {
			this.loadNewsList()
		},
		async onPullDownRefresh() {
			const res = await getNewsList({
					channel_id: 13, // 频道 ID
					timestamp: Date.now(), 
					        // 时间戳，请求新的推荐数据传当前的时间戳
					        //timestamp 相当于页码，请求最新数据使用当前最新时间戳，下一页数据使用上一次返回的数据
					with_top: 1 // 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
		  })
			// this.articleList = this.articleList.unshift(...res.data.data.results)
			this.articleList = res.data.data.results
			uni.stopPullDownRefresh()
	  }
	}
</script>

<style lang="scss">
	.container{
		.article{
			margin: 10rpx 5rpx;
			border-bottom: 2rpx solid gray;
			:nth-last-child{
				border: none;
			}
			.title{
				font-size: 16px;
				margin: 10px 5px;
			}
			.message{
				margin: 8px 2px;
				text:nth-child(2){
					margin: 0 10px;
				}
			}
			.myflex{
				display: flex;
				flex-wrap: wrap;				
			}
			.imgs{
				image{
					height: 73px;
					width: 112px;	
					margin: 0 3px;
				}
			}
		}	
	}
</style>
