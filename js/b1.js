const bbb= {
	aaa(){
		console.log('执行完成');
//		var p = new Promise(function(resolve, reject){
//	    //做一些异步操作
	//	    setTimeout(function(){
	//	        console.log('执行完成');
	//	        resolve('随便什么数据');
	//	    }, 2000);
	//	    });
	},
	bb(){
		const greet=document.createElement("div");
		greet.textContent="HI MY FIRST WEBPACK122";
		document.querySelector("#root").appendChild(greet)
	}
	
}
export default bbb

