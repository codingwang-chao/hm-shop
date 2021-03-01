<template>
	<view class="container">
		<view class="home">
			<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in swiperImages" :key="index">
					<image :src="item.image"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav-item" v-for="(item, index) in navs" :key="index" @click="navItemHandel(item.url)">
				<view class="iconfont" :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 热门物品 -->
		<view class="hot-goods">
		  <view class="tit">
					<text>推荐商品</text>
			</view>
			<!-- 商品列表 -->
			<goodsList :goodsList="goodsList"></goodsList>
				<view v-if="flag" class="isFlag"><text>--------------我是有底线的----------------</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSwiper,getGoodsList } from "../../util/home.js"
	import goodsList from '../../components/goodsList.vue'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				navs: [{
					icon:'icon-ziyuan',
					title:'黑马超市',
					url:'/pages/goods/goods'
				},{
					icon:'icon-guanyuwomen',
					title:'联系我们',
					url:'/pages/contact/contact'
				},{
					icon:'icon-tupian',
					title:'社区图片',
					url:'/pages/pics/pics'
				},{
					icon:'icon-shipin',
					title:'学习视频',
					url:'/pages/videos/videos'
				}],
				swiperImages: [],
				goodsList:[],
				page: 1,
				flag: false
			}
		},
		onLoad() {
			this.loadSwiper(),
			this.loadGoods()
		},
		methods: {
			// getSwiper () {
			// 	console.log('这是轮播图')
			// 	uni.request({
			// 		url: 'http://152.136.185.210:8000/api/w6/home/multidata',
			// 		method:'GET',
			// 		success: res => {
			// 			console.log(res)
			// 			this.swiperImages = res.data.data.banner.list
			// 			console.log(res.data.data.banner.list[1])
			// 		}
			// 	})
			// },
			
			// 获取轮播图
			async loadSwiper() {
				const res = await getSwiper()
				this.swiperImages = res.data.data.banner.list
			},
			// 获取商品列表
			async loadGoods() {
				const res = await getGoodsList('new',this.page)
				console.log(res.data.data.list)
				this.goodsList = [...this.goodsList,...res.data.data.list]
				if(res.data.data.list=0) {
					this.flag = true
				}
			},
		  //导航栏点击事件
			navItemHandel(url) {
				uni.navigateTo({
				  url: url
				})
			}
	  },
		onReachBottom() {
			console.log('触底了！')
			this.page++
			this.loadGoods()
		},
	}
</script>

<style lang="scss">
	swiper{
		height: 380rpx;
		width: 750rpx;
		image{
			width: 100%;
		}
	},
	.nav{
		display: flex;
		.nav-item{
			width: 25%;
			text-align: center;
			.iconfont{
				height: 120rpx;
				width: 120rpx;
				border-radius: 50%;
				color: white;
				background-color: red;
				margin:20rpx auto;
				line-height: 120rpx;
				font-size: 50rpx;
			}
		}
	},
	.hot-goods{
		background-color: #eee;
		overflow: hidden;
		margin: 10px 0;
		.tit{
		  font-size: 40rpx;
			color: red;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			letter-spacing: 40rpx;
			margin: 7px 0;
			background-color: #FFFFFF;
			}
		},
	.isFlag{
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}
</style>
