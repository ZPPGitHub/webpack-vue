var oregion = document.querySelector(".region")
var oregions = document.querySelector(".regions")
var oa = oregions.querySelectorAll("a")
var areaDq = document.querySelector(".area-dq")
var oBJS = document.querySelectorAll(".BJS")

var MYJd = document.querySelector(".MY-jd")
var opurchase = document.querySelector(".purchase")
var ocustomer = document.querySelector(".customer")
var ositeNavi = document.querySelector(".siteNavi")
var inponeJd = document.querySelector(".inpone-jd")
var navseList = document.querySelector(".navse-list")

var oshopping = document.querySelector(".shopping")
var shoppingMy = document.querySelector(".shopping-my")
var ogwc = document.querySelector(".gwc")
var odorpdown = document.querySelector(".dorpdown")
var odd = document.querySelector(".dd")
var odt = document.querySelector(".dt")
var ddInner = document.querySelector(".dd-inner")
var ddLayer = document.querySelector(".dd-layer")
var oli = ddInner.querySelectorAll("li")
var ali = ddLayer.querySelectorAll("li")
var okuang = document.querySelector(".kuang")
var otext = document.querySelector(".text")
var olisi = document.querySelector(".lisi")
var osearch = document.querySelector(".search")

var shoppingCenter = document.querySelector(".shopping-center")
var shoppingHead = document.querySelector(".shopping-head")
var shoppingFoot = document.querySelector(".shopping-foot")
var asideRight = document.querySelector(".aside-right")
var oclose = document.querySelector(".close")
//var oaside = document.getElementsByTagName("aside")
var jbmTop = document.querySelector(".jbm-top")
var odic = document.querySelectorAll(".dic")
var jbmGwc = document.querySelector(".jbm-gwc")
var jbmBottom = document.querySelector(".jbm-bottom")
var JTrigger = document.querySelectorAll(".J-trigger")
var tabText = document.querySelectorAll(".tab-text")
var now = 0;
var searchArr = ["海尔冰箱","西门子冰箱","格力空调"];

okuang.onclick = function(){	//搜索框
	if(searchArr.length){
		olisi.style.display = "block"
	}else{
		olisi.style.display = "none"
	};
	if(otext.value){
		searchArr.push(otext.value)
		if(searchArr.length === 10){
			searchArr.shift();
		};
	};
		MapSearchArr();
}
osearch.onmouseleave= function(){
	olisi.style.display = "none"
}
function MapSearchArr(){
	var HTML = "";
	for(var i=0;i<searchArr.length;i++){
		HTML += '<li>'+'<div class = "lisi-item">'+searchArr[i]+'</div>'+'<div class = "lisi-count">搜索历史</div>'+'</li>'
	}
	olisi.innerHTML = HTML
}

oregion.onmouseover = function(){
	oregions.style.display = "block"
}
oregion.onmouseout = function(){
	oregions.style.display = "none"
}

for(var i = 0;i<oa.length;i++){
	oa[i].onclick = function(){
		for(var i = 0;i<oa.length;i++){
			oa[i].className = ""
		}
		this.className = "city-li"
		var zhi = this.innerHTML
		areaDq.innerHTML = zhi
		areaDq.title = zhi
	}
}

for(var i=0;i<oBJS.length;i++){
	oBJS[0].onmouseover = function(){
		MYJd.style.display = "block"
	}
	oBJS[0].onmouseout = function(){
		MYJd.style.display = "none"
	}
	oBJS[1].onmouseover = function(){
		opurchase.style.display = "block"
	}
	oBJS[1].onmouseout = function(){
		opurchase.style.display = "none"
	}
	oBJS[2].onmouseover = function(){
		ocustomer.style.display = "block"
	}
	oBJS[2].onmouseout = function(){
		ocustomer.style.display = "none"
	}
	oBJS[3].onmouseover = function(){
		ositeNavi.style.display = "block"
	}
	oBJS[3].onmouseout = function(){
		ositeNavi.style.display = "none"
	}
}
navseList.onmouseover = function(){
	inponeJd.style.display = "block"
}
navseList.onmouseout = function(){
	inponeJd.style.display = "none"
}
oshopping.onmouseover = function(){
	shoppingMy.style.display = "block"
	ogwc.classList.add("gwc-list")
}
oshopping.onmouseout = function(){
	shoppingMy.style.display = "none"
	ogwc.classList.remove("gwc-list")
}
odorpdown.onmouseover = function(){
	odd.style.display = "block"
}
odorpdown.onmouseout = function(){
	odd.style.display = "none"
}

odt.onmouseover = function(){
	for(var i=0;i<oli.length;i++){
		oli[i].className = ""
		ali[i].style.display = "none"
	}
}

for(var i=0;i<oli.length;i++){
	oli[i].index = i;
	oli[i].onmouseover = function(){
		for(var i=0;i<oli.length;i++){
			oli[i].className = "";
			ali[i].style.display = "none"
		}
		this.className = "dd-list";
		ali[this.index].style.display = "block"
	}
}

for(var i = 0;i<JTrigger.length;i++){
	JTrigger[i].index = i
	JTrigger[i].onmouseover = function(){
		tabText[this.index].classList.add("tab-hover")
		odic[this.index].classList.add("iconfont-color")
	}
	JTrigger[i].onmouseout = function(){
		tabText[this.index].classList.remove("tab-hover")
		odic[this.index].classList.remove("iconfont-color")
	}
}

clearInterval(timer)
var timer = setInterval(function(){
	shoppingCenter.style.height =
	document.documentElement.clientHeight-shoppingHead.offsetHeight-shoppingFoot.offsetHeight+"px"
},0)

JTrigger[2].onclick = function(){
	asideRight.classList.add("aside-open")
}
oclose.onclick = function(){
	asideRight.classList.remove("aside-open")
}