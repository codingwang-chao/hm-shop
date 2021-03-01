
<template>
	<view class="goods-list">
		<view class="goods-item" v-for="(item,index) in goodsList" :key=index>
			<image :src="item.show.img" mode=""></image>				
			<view class="itemTitle">
				<text>{{item.title}}</text>					
			</view>
			<view>
				<text>{{item.price}}</text>
				<text>{{item.orgPrice}}</text>
			</view>				
		</view>
	</view>
</template>

<script>
	import { getGoodsList } from "../util/home.js"
	export default{
		props: ["goodsList"],
		data() {
			return {
			
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		.goods-item{
			width: 360rpx;
			margin: 10rpx 0;
			background-color: white;
			image{
				width: 100%;
				border: 1px solid red;
			},
			.itemTitle{
				font-size: 14px;
				overflow: hidden; 
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			// ,
		  //text:nth-child(2) {
			// 	text-decoration: line-through
			// }
		}
	}
</style>
