  <template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(i,item.id)" :class="active===i?'active':''" v-for="(item,i) in cates" :key="item.id">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.zhaiyao}}</text>
				<text v-if="secondData.length === 0">暂无数据</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[
					{id:1,title:"家具生活"},
					{id:2,title:"摄影设计"},
					{id:3,title:"美女明星"},
					{id:4,title:"空间设计"},
					{id:5,title:"户型装饰"},
					{id:6,title:"广告摄影"},
					{id:7,title:"摄影学习"},
					{id:8,title:"前端学习"},
					{id:9,title:"java学习"},
					{id:10,title:"happy"},
					{id:11,title:"美食分享"},
				],
				active:0, //根据数组索引设置样式
				secondData:[
					{id:0,img_url:'http://img.c-c.com/Timg/2015/07/07/16/wxbapx1614220342.jpg',zhaiyao:'轻轻地掠过晨光熹微的四月天里，摇动着城畔那一树的嫩绿。拂晓的阳光欢欢喜喜地落下，碰到了一片片睡意朦胧的绿叶，叮叮咚咚地撒了一地。斑斑驳驳的缝隙间，霎时热闹了起来。'},
					{id:1,img_url:'https://i03piccdn.sogoucdn.com/482bd8ce4494b7c3',zhaiyao:'秋天虽然不像冬天有洁白的衣服，可是它那桔黄色的衣服也不错呀！而且比冬天的那件白色衣服暖和多了。'},
					{id:2,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t1.jpg',zhaiyao:'路旁边浪似地滚着高高低低的黄土。太阳给埋在黄土里，发着肉红色。可是太阳还烧得怪起劲的，把他们的皮肉烧得变成紫黑色，似乎还闻得到一股焦味儿。'},
					{id:3,img_url:'https://i01piccdn.sogoucdn.com/81ba0bf0db061d3e',zhaiyao:'夏夜特有的像梦幻一样的安溢使得一切生物似乎都愿俄人睡了，虽有金铃子一类的草虫的丝丝的叫声，但声音那样的细弱遥远，也象是在说梦话呢！'},
					{id:4,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t6.jpg',zhaiyao:'秋天不像春天那样百花争艳，芳香怡人；也不像夏天那样有那么多的小生灵在歌唱；也没有冬天那么美丽。可是，它在我心中却是最美的。'},
					{id:5,img_url:'https://i01piccdn.sogoucdn.com/81ba0bf0db061d3e',zhaiyao:'太阳在朝霞的迎接中，露出了红彤彤的面庞，霎时，万道金光透过树梢给水面染上了一层胭脂红。'},
					{id:6,img_url:'http://img5.cache.netease.com/photo/0001/2014-07-21/A1M0E3QL4T8F0001.jpg',zhaiyao:'在等流星的过程中，我也看到了天上有许多的小星星在向我眨着眼睛，密密麻麻的又亮，又美。在我观赏着这美丽的星空时，不经意间，我看到了传说中的‘北斗七星’果然，由七颗闪人的亮星有序地排成了一个勺子，逼真极了。'},
					{id:7,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t1.jpg',zhaiyao:'轻轻地掠过晨光熹微的四月天里，摇动着城畔那一树的嫩绿。拂晓的阳光欢欢喜喜地落下，碰到了一片片睡意朦胧的绿叶，叮叮咚咚地撒了一地。斑斑驳驳的缝隙间，霎时热闹了起来。'},
					{id:8,img_url:'https://i03piccdn.sogoucdn.com/482bd8ce4494b7c3',zhaiyao:'秋天虽然不像冬天有洁白的衣服，可是它那桔黄色的衣服也不错呀！而且比冬天的那件白色衣服暖和多了。'},
					{id:9,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t1.jpg',zhaiyao:'路旁边浪似地滚着高高低低的黄土。太阳给埋在黄土里，发着肉红色。可是太阳还烧得怪起劲的，把他们的皮肉烧得变成紫黑色，似乎还闻得到一股焦味儿。'},
					{id:10,img_url:'https://i01piccdn.sogoucdn.com/81ba0bf0db061d3e',zhaiyao:'夏夜特有的像梦幻一样的安溢使得一切生物似乎都愿俄人睡了，虽有金铃子一类的草虫的丝丝的叫声，但声音那样的细弱遥远，也象是在说梦话呢！'},
					{id:11,img_url:'http://www.wndhw.com/fengjing/zhaopian/images/zp013t6.jpg',zhaiyao:'秋天不像春天那样百花争艳，芳香怡人；也不像夏天那样有那么多的小生灵在歌唱；也没有冬天那么美丽。可是，它在我心中却是最美的。'}
				]
			}
		},
		methods: {
			async getPicsCate(){ //获取 left 的数据
				const res = await this.$myRequest({
					url:"/api/getimagecategory"
				})
				console.log(res)
				this.cates = res.data.message
				this.leftClickHandle(0,this.cates[0].id)
			}, 
			async leftClickHandle(i,id){ 
				console.log(i)
				this.active = i
				//获取 right 的数据
				//const res = await this,$myRequest({
					//url:"api/getimages/"+id
				//})
				//console.log(res)
				//this.secondData = res.data.message
			},
			previewImg(current){  //点击图片放大
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad(){
			//this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page{
	 height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-bottom: 1px solid #eee;
		}
		.active{
			background-color: $shop-color;
			color: #fff;
		}
	}
	.right{
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item{
			image{
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
