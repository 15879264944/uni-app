//封装从接口获取数据

//const BASH_URL = "https://localhost:8082"
//const BASH_URL = "http://edu.newsight.cn"
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASH_URL+options.url,
			method:options.method || "GET",//传递请求方式，没有参数就默认get
			data:option.data || {}, //传递参数。没有就默认空对象
			success:(res) =>{
				if(res.data.status !== 0){
					return uni.showToast({ //一个提示方法
						title:"获取数据失败"
					})
				}
				resolve(res)  //请求成功把数据给返回过去
			},
			fail:(err)=>{
				uni.showToast({ //一个提示方法
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}
