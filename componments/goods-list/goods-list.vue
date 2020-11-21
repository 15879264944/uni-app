<template>
	<view class="goods_list">
		<view class="goods_item" @click="navigator(item.id)" v-for="item in goodslist" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{item.sell_prick}}</text>
				<text>￥{{item.market_prick}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["goodslist"],
		methods: {
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
.goods_list{
			padding: 0 15rpx;
			display:flex;
			flex-wrap: wrap;//换行
			justify-content: space-between;//倆端对齐
			.goods_item{
				background-color: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;//设置内边距，防止盒子被撑大
				image{
					width: 80%;
					height: 150px;
					display: block;
					margin: 0 auto;
				}
				.price{
					color: $shop-color;
					font-size: 36rpx;
					margin:20rpx 0 5rpx 0;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 17rpx;
						text-decoration: line-through; //删除线
					}
				}
				.name{
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
					
			}
		}
</style>
