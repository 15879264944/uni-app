<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goodslist="goodslist"></goods-list>
		<view class="isOver" v-if="flag">
			--------已经到底了--------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../componments/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				goodslist:[
					{id:1,title:'华为荣耀 8x  4g旗舰，拍照手机',img_url:'http://image.it168.com/n/640x480/8/8540/8540865.jpg',sell_prick:1599,market_prick:1899,stock_quantity:60},
					{id:2,title:'华为mate 30 Pro 5G 性能怪兽',img_url:'http://image.it168.com/n/0x0/8/8545/8545641.jpg',sell_prick:4599,market_prick:4999,stock_quantity:50},
					{id:3,title:'MeiZu 游戏手机',img_url:'http://images.51bi.com/opt/siteimg/pb/20140518/8030cb9fb3dc2535c0ba56957216bfa2.jpeg',sell_prick:2099,market_prick:2399,stock_quantity:30},
					{id:4,title:'红米note7 pp小可爱游戏用',img_url:'http://img.yinhang123.net/161017/dahjyyeqglc.jpg',sell_prick:999,market_prick:1599,stock_quantity:1},
					{id:5,title:'vivo x27 pp小可爱拍照用',img_url:'http://img.178hui.com/upload/2015/0413/13461518064.jpg',sell_prick:1999,market_prick:2599,stock_quantity:1},
					{id:6,title:'1加6 pp学习用',img_url:'http://image.it168.com/n/280x210/6/6273/6273991.jpg',sell_prick:1499,market_prick:2399,stock_quantity:0},
					{id:7,title:'诺基亚 x100  pp炫耀用',img_url:'http://image.it168.com/n/640x480/2/2122/2122904.jpg',sell_prick:9999,market_prick:13999,stock_quantity:6}
				],
				pageindex:1,
				flag:true
			}
		},
		components:{"goods-list":goodsList},
		methods: {
			//获取商品列表
			//async getGoodsList(callBack){
				//const res = await this.$myRequest({
					//url:'/api/getgoods?pageindex='+this.pageindex,
				//})
				//console.log(res)
				//this.goodslist= [...this.goodslist,...res.data.message]
				//callBack && callBack() //有参数就调用，没有参数就不会去调用
			//},
			//跳转到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:"/pages/goods-detail/goods-detail?id="+id
				})
			}
		},
		onLoad(){
			//this.getGoodsList()
		},
		onReachBottom(){ //实现触底加载更多
		if(this.goodslist.length<this.pageindex*10) return this.flag = true
			console.log("触底了")
			this.pageindex++
			//this.getGoodsList()
		},
		onPullDownRefresh(){ //监听是否触发下拉刷新
			console.log("下拉刷新了")
			this.pageindex = 1,
			//this.goodslist=[]
			this.flag = false
			setTimeout(()=>{
				//this.getGoodsList(()=>{
					//uni.stopPullDownRefresh() //关闭下拉刷新
				//}),
				uni.stopPullDownRefresh() //关闭下拉刷新
			},1000)
		}
	}
</script>

<style lang="scss">
.goods_list{
	background-color: #eee;
	.isOver{
		width: 100%;
		height: 50px;
		line-break: 50px;
		font-size: 28rpx;
		text-align: center;
	}
}
</style>
