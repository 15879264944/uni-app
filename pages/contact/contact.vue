<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话:158-7926-4944 (点击拨打)</view>
			<view>校区地址:江西省南昌市新建区嘉言路699号江西工业贸易职业技术学院</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:115.787100, //经度
				latitude:28.653050,  //纬度
				markers:[ //里面存放一个数组
					{
						longitude: 115.787100,
						latitude: 28.653050,
						iconPath: '../../static/happy.png',
						width:30,
						height:30,
					}
				],
				scale:15, //缩放
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({  //拨打电话
					phoneNumber:"15879264944"
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	image{
		width: 750rpx;
		height: 320rpx;
		.img{
			width: 100%;
			height: 100%;
		}
	}
	.info{
		padding:10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 70rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
