const bbb= {
	aaa(){
		alert("sef")
	},
	bb(){
		const greet=document.createElement("div");
		greet.textContent="HI MY FIRST WEBPACK2";
		document.querySelector("#root").appendChild(greet)
	}
	
}
export default bbb
