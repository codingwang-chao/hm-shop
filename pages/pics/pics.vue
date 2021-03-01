<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view v-for="(item,index) in picsList" :key="index" 
				@click="isActive(index,item.image_src)"
			  :class = " index === currentIndex ? 'active' : '' "
			>
				<text>{{item.name}}</text>
			</view>
		</scroll-view>
		
		<scroll-view scroll-y="true" class="right">
			<image :src="myImage" @click="previewImage(myImage)"></image>
		</scroll-view>
		
	</view>
</template>

<script>
	import { getPics } from '../../util/home.js'
	export default {
		data() {
			return {
				picsList:[],
				currentIndex: 0,
				myImage: null
			}
		},
		onLoad() {
			this.getLoadPics()
		},
		methods:{
			async getLoadPics() {
				const res = await getPics()
				console.log(res)
				this.picsList = [ ...res.data.message[0].product_list,
													...res.data.message[1].product_list,
													...res.data.message[2].product_list
												]
				console.log(this.picsList)
				this.isActive(0,this.picsList[0].image_src)
			},
			isActive(index,image) {
				this.currentIndex = index
				this.myImage = image
			},
			previewImage(img) {
				console.log(img)
				uni.previewImage({
					current: img,
					// urls必须为数组类型
					urls: [img]
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		margin: 0;
		padding: 0;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 230rpx;
			height: 100%;
			view{
			  height: 60px;
			  width: 220rpx;
				line-height: 60px;
				text-align: center;
				border-right: 1px solid #eee;
				border-bottom: 1px solid #eee;
			}
			.active{
				background-color: red;
				color: white;
			}
		},
		.right{
			image{
				width: 510rpx;
				height: 530rpx;
				margin:10rpx 10rpx
			}
		}
	}
</style>
