<template>
	<view class="contact">
		<view class="logo">
		  <image src="../../static/01.jpg" mode=""></image>				
		</view>
		<view class="message">
			<view class="phone" @click="callPhone">
				<text>联系电话: 13874708717 (点击拨打电话)</text>
			</view>
			<view class="address">
				<text>湖南省雨花区长沙总部基地</text>
			</view>
		</view>
		<view class="map">
		  <map :latitude="latitude" :longitude="longitude" :markers="mark"></map>				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:113.030319,
				longitude:28.074276,
				mark:[
					{
						latitude:113.030319,
						longitude:28.074276,
						iconPath:"../../static/01.jpg",
						width: 40 ,
						height: 40
					}
				]
			}
		},
		methods:{
			callPhone() {
				uni.makePhoneCall({
				    phoneNumber: '13874708717' 
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.logo{
			image{
				width: 750rpx;
				height: 320rpx;
			}
		},
		.message{
			margin: 10rpx 20rpx;
			.phone{
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 1rpx solid #eee;
			},
			.address{
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 1rpx solid #eee;
				margin-bottom: 90rpx;
			}
		},
		.map{
			map{
				width: 750rpx;
				height: 700rpx;			
			}
		}
	}
</style>
