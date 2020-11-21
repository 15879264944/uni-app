<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="(item,i) in swipers" :key="i">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="item in navs" :key="item.id" @click="navItemClick(item.path)">
				<view class="nav_image">
					<image :src="item.img_url"></image>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goodslist="goodslist"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../componments/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers:[ //轮播图，因为接口失效，就自己去找了一些数据
					{img:"https://img.meishanren.com/forum/201204/05/102355mk2qzku2rq992icm.jpg"},
					{img:"https://img.meishanren.com/forum/201204/05/1023025u4414j5dg1j5r81.jpg"}
				],
				 goodslist:[
					{id:1,title:'华为荣耀 8x  4g旗舰，拍照手机',img_url:'http://image.it168.com/n/640x480/8/8540/8540865.jpg',sell_prick:1599,market_prick:1899,stock_quantity:60},
					{id:2,title:'华为mate 30 Pro 5G 性能怪兽',img_url:'http://image.it168.com/n/0x0/8/8545/8545641.jpg',sell_prick:4599,market_prick:4999,stock_quantity:50},
					{id:3,title:'MeiZu 游戏手机',img_url:'http://images.51bi.com/opt/siteimg/pb/20140518/8030cb9fb3dc2535c0ba56957216bfa2.jpeg',sell_prick:2099,market_prick:2399,stock_quantity:30},
					{id:4,title:'红米note7 pp小可爱游戏用',img_url:'http://img.yinhang123.net/161017/dahjyyeqglc.jpg',sell_prick:999,market_prick:1599,stock_quantity:1},
					{id:5,title:'vivo x27 pp小可爱拍照用',img_url:'http://img.178hui.com/upload/2015/0413/13461518064.jpg',sell_prick:1999,market_prick:2599,stock_quantity:1},
				],
				navs:[
					{id:1,img_url:"../../static/icon/shop.png",title:"happy超市",path:"/pages/goods/goods"},
					{id:2,img_url:"../../static/icon/we.png",title:"联系我们",path:"/pages/contact/contact"},
					{id:3,img_url:"../../static/icon/tupian.png",title:"社区图片",path:"/pages/pics/pics"},
					{id:4,img_url:"../../static/icon/shiping.png",title:"学习视频",path:"/pages/videos/videos"},
				]
			}
		},
		onLoad() {
			//this.getSwiper()
			//this.getHotGoods()
		},
		components:{"goods-list":goodsList},
		methods: {
			//获取轮播图的数据 
			async getSwiper(){
				console.log("获取轮播图")
				// uni.request({
				// 	url:"https://localhost:8082/api/getlunbo",
				// 	success:res => {
				// 		console.log(res)
				// 		if(res.data.status !== 0){
				// 			return uni.showToast({ //一个提示方法
				// 				title:"获取数据失败"
				// 			})
				// 		}
				// 		this.swipers = res.data.message //将获取回来的数据保存到 swipers 中
				// 	}
				// })
				// const res = await this.$myRequest({
				// 	url:"/api/getlunbo"
				// })
				// this.swipers = res.data.message
			},
			//获取热门商品列表数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url:"/api/getgoods?pageindex=1"
				})
				console.log(res)
				//this.goodslist = res.data.message
			},
			//导航点击的处理函数
			navItemClick(url){
				//console.log(url)
				uni.navigateTo({ //跳转函数
					url
				})
			},
			//跳转到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:"/pages/goods-detail/goods-detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
.home{
	swiper{
		width: 750rpx;
		height: 380rpx ;
		swiper-item{
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			.nav_image{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60rpx;
				margin: 10rpx auto;
				image{
					width: 50%;
					height: 50%;
					margin-top: 25rpx;
					
				}
			}
			text{
				font-size: 32rpx;
			}
		}
	}
	.hot_goods{
		background: #eee;
		overflow: hidden;
		margin-top:10rpx ;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;//字符间距
			background-color: #fff;
			margin: 7rpx 0;
		}
		
	}
}
</style>
