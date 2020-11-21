<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{list.sell_prick}}</text>
				<text>￥{{list.market_prick}}</text>
			</view>
			<view class="goods_name">
				{{list.title}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号:{{list.goods_on}}</view>
			<view>库存:{{list.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">
				详细介绍
			</view>
			<view class="content">
				{{list.content}}
			</view>
		</view>
		<view class="goodsnav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id:0,
				swipers:[
					{img:"http://image.it168.com/n/640x480/8/8540/8540865.jpg",id:"1"},
					{img:"http://image.it168.com/n/0x0/8/8545/8545641.jpg",id:"2"},
					{img:"http://img.yinhang123.net/161017/dahjyyeqglc.jpg",id:"3"}
				],
				list:{
					title:'华为mate 30 Pro 5G 性能怪兽',
					sell_prick:3599,
					market_prick:3999,
					stock_quantity:60,
					goods_on:'A562149872',
					content:'青春岁月里的相逢不需要任何约定，偶然的擦肩，一个不经意的回眸都可以结下一段缘分。我们都有过花枝招展的年岁，为某个喜欢的人倾尽所有的激情，对着高山，对着河流，许下滔滔誓言。自以为是情种，走过一段缠绵的历程，而后开始有了厌倦，那时候，发觉过往的山盟水誓，只是一场青春的玩笑。'
				},
				content:{},
				 options: [
					 {
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					buttonGroup: [{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
					]
			}
		},
		methods: {
			async getSwiper(){
				const res = await this.$myRequest({
					url:'/api/getthumimages/'+this.id
				})
				console.log(res)
				this.swipers = res.data.message
			},
			async getDetailInfo(){
				const res = await this.$mount({
					url:'/api/goods/getinfo/'+this.id
				})
				console.log(res)
				this.list =res.data.message[0]
			},
			//获取详细你人
			async getDetailContent(){
				const res = await this.$myRequest({
					url:'/api/goods/getdesc'+this.id
				})
				console.log(res)
				this.content =res.data.message[0].content
			},
			onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
		  buttonClick (e) {
			console.log(e)
			this.options[2].info++
		  }
		
		},
		onLoad(options){
			//console.log(options)
			this.id = options.id
			//this.getSwiper()
			//this.getDetailInfo()
			//this.getDetailContent()
		},
		components: {uniGoodsNav}
	}
</script>

<style lang="scss">
.goods_detail{
	swiper{
		height: 700rpx;
		swiper-item{
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.box1{
		padding: 10px;
		.price{
			font-size: 35rpx;
			line-height: 80rpx;
			color: $shop-color;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.goods_name{
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.line{
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3{
		padding-bottom: 50px;
		.tit{
			font-size: 32rpx;
			padding-left: 10rpx;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content{
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
		}
	}
	.goodsnav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}
</style>
