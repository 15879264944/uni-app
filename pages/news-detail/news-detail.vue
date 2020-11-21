<template>
	<view class="news_detail">
		<text class="tit">{{detail.title}}</text>
		<view class="info">
			<text>发表时间:{{detail.add_time}}</text>
			<text>浏览:{{detail.click}}</text>
		</view>
		<view class="comtent">
			{{detail.zhaiyao}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{
					title:"当代最美大学生",
					add_time:'2020.05.20  13:14:52',
					click:2,
					zhaiyao:'轻轻地掠过晨光熹微的四月天里，摇动着城畔那一树的嫩绿。拂晓的阳光欢欢喜喜地落下，碰到了一片片睡意朦胧的绿叶，叮叮咚咚地撒了一地。斑斑驳驳的缝隙间，霎时热闹了起来。'}
			}
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					url:'/api/getnew/'+this.id
				})
				console.log(res)
				this.detail = res.data.message[0]
			}
		},
		// onLoad(options){
		// 	console.log(options)
		// 	this.id = options.id
		// 	this.getNewsDetail()
		// }
	}
</script>

<style lang="scss">
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.tit{
		text-align: center;
		width: 710rpx;
		display: block;
		margin:20rpx 0;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
