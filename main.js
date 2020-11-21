import Vue from 'vue'
import App from './App'
import {myRequest} from 'util/api.js'

//将 myRequest 挂载到全局
Vue.prototype.$myRequest = myRequest
// 定义一个时间过滤器
Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0) //调整格式
	const day = nDate.getDay().toString().padStart(2,0)
	return year+'-'+month+'-'+day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
