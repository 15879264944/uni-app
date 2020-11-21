<template>
	<view class="news">
		<view class="news_item" @click="goDetail" v-for="item in newsList" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间:{{item.add_time}}</text>
					<text>浏览:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[
					{id:1,title:'happy的第一天',add_time:'2020.05.20  13:14:52',click:2,img_url:'https://img.meishanren.com/forum/201204/05/102355mk2qzku2rq992icm.jpg'},
					{id:2,title:'happy的第二天',add_time:'2020.05.20  13:14:52',click:3,img_url:'http://img.c-c.com/Timg/2015/07/07/16/wxbapx1614220342.jpg'},
					{id:3,title:'happy的第三天',add_time:'2020.05.20  13:14:52',click:4,img_url:'http://5b0988e595225.cdn.sohucs.com/images/20180415/4908684fad2b4e37b38683f0bec9d29b.jpeg'},
					{id:4,title:'happy的第四天',add_time:'2020.05.20  13:14:52',click:5,img_url:'http://pic.yupoo.com/56gee-sohu/C5zsFem0/fqJuh.jpg'},
					{id:5,title:'happy的第五天',add_time:'2020.05.20  13:14:52',click:55,img_url:'https://bbs-fd.zol-img.com.cn/t_s800x5000/g5/M00/0B/04/ChMkJ1nCBD-IG9P9AAVSwZB56dgAAgoHAFMuT4ABVLZ062.jpg'},
					{id:6,title:'happy的第六天',add_time:'2020.05.20  13:14:52',click:520,img_url:'http://img5.cache.netease.com/photo/0001/2014-07-21/A1M0E3QL4T8F0001.jpg'},
					{id:7,title:'happy的第七天',add_time:'2020.05.20  13:14:52',click:600,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t1.jpg'},
					{id:8,title:'happy的第八天',add_time:'2020.05.20  13:14:52',click:250,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t6.jpg'},
					{id:9,title:'happy的第九天',add_time:'2020.05.20  13:14:52',click:150,img_url:'https://img.meishanren.com/forum/201204/05/102355mk2qzku2rq992icm.jpg'},
					{id:10,title:'happy的第十天',add_time:'2020.05.20  13:14:52',click:1314,img_url:'http://img5.cache.netease.com/photo/0001/2014-07-21/A1M0E3QL4T8F0001.jpg'},
				]
			}
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:'/wxList.php',
				})
				console.log(res)
				this.newList = res.data.message
			},
			goDetail(){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail'
				})
			}
		},
		onLoad(){
			//this.getNews()
		}
	}
</script>

<style lang="scss">
.news{
	.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			min-width:200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column; // y轴浮动
			justify-content: space-between; // 俩端对齐
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
}
</style>
