window.onload=function(){
		let hours = new Date().getHours();//拿到当前小时
		if(String(hours) === '22' || String(hours) === '0'){
			alert(hours)
			//return true
		
		}else{
			alert("否")
			//return false
		}


        !(function () {

            const userAgent = navigator.userAgent

            // 验证是否为Android或iPhone

            const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)

            const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)

            // 如果是Android或iPhone，则跳转至移动站点

            if (android || iphone) {

                location.href = 'http://baidu.com'

            }

        })()
}
