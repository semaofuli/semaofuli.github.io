window.onload=function(){
		let hours = new Date().getHours();//拿到当前小时
		if(String(hours) === '22' || String(hours) === '0'){
				if (isMobile()) {
				alert("mobile");
			} else {
				alert("pc");
			}
			//return true
		
		}else{
			alert("否")
			//return false
		}
}
		function isMobile() {
					let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
					return flag;
				}
