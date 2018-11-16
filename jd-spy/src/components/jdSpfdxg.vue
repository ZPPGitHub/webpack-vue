<template>
	<div class = "sect-tp">
		<div @mousemove = coImg @mouseleave = seImg class = "secoe-img" ref = "id">
			<img width = "350" height = "350" :jqimg = 'jdSbs' :src = 'jdLbt'/>
			<div class = "img-zzc" v-show = "showes"></div>
		</div>
		<div class = "quyu-img" v-show = "showes" ref = "ids">
			<img class = "qu-img" :src = "jdSbs"/>
		</div>
		<div class = "secoe-list">
			<div class = "spec-list">
				<ul :class = "{'sp-lst':ydxs === true}">
					<li @mouseover = "changa(index,$event)" v-for = "(lat,index) in jdSdx" :class = "{'img-hover' : cur === index}"><img :alt = "lat.pNames" width = "50" height = "50" :jqimg = "lat.jQmg" :src = "lat.pImgs"/></li>
				</ul>
			</div>
			<a @click = ydycs class = "arrow-prev" href = "javascript:;">
				<i class = "spec-prev"></i>
			</a>
			<a @click = xyyd class = "arrow-next" href = "javascript:;">
				<i class = "spec-next"></i>
			</a>
		</div>
		<div class = "previ-info">
			<div class = "lef-btns">
				<a href = "">
					<i class = "info-gz"></i>
					<em>关注</em>
				</a>
				<a href = "">
					<i class = "info-fx"></i>
					<em>分享</em>
				</a>
				<a href = "">
					<i class = "info-db"></i>
					<em>对比</em>
				</a>
			</div>
			<div class = "righ-btns">
				<a href = "">举报</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jdSpfdxg',
	data () {
		return {
			cur : 0,
			jdSdx : [],
			jdLbt : '',
			jdSbs : '',
			ydxs : false,
			showes : false,
			cover : null,
			secoeImg : null,
			quyuImg : null,
			quImg : null
		}
	},
	mounted : function(){
    	var _this = this
    	this.$http.get('../static/asspdys.json')
    		.then(function(response){
     		_this.jdSdx = response.data.laste
     		_this.jdLbt = response.data.laste[0].pImgs
     		_this.jdSbs = response.data.laste[0].jQmg
    	})
    },
	methods : {
		changa : function(i,event){
			this.jdLbt = event.target.src
			this.jdSbs = event.target.getAttribute("jqimg")
			this.cur = i
		},
		xyyd : function(){
			this.ydxs = true
		},
		ydycs : function(){
			this.ydxs = false
		},
		coImg : function(e){
			this.showes = true
			let secoe = this.$refs.id		//鼠标哪个div里面运动  并以它为父元素
				//$refs方法是vue用来找寻某个div的方法  与之对应的是template里面的ref属性
			this.secoeImg = secoe			//传给data 变成值
			this.cover = secoe.querySelector(".img-zzc")	//获取它的子元素
			let X = e.clientX - this.secoeImg.getBoundingClientRect().left - this.cover.offsetWidth/2
				//鼠标到页边的距离 - 遮罩层到浏览器左边的距离 - 遮罩层宽的一半
				//offsetleft和offsettop是以最近的给了position定位的div为父元素 得到的值也就是到父元素的值   getBoundingClientRect()方法是不管中间有多少个position直接以到body为父元素
			let Y = e.clientY - this.secoeImg.getBoundingClientRect().top - this.cover.offsetHeight/2
			if(X<0){
				X = 0
			}else if(X>this.secoeImg.clientWidth - this.cover.clientWidth){
				X = this.secoeImg.clientWidth - this.cover.clientWidth
			}
			if(Y<0){
				Y = 0
			}else if(Y>this.secoeImg.clientHeight - this.cover.clientHeight){
				Y = this.secoeImg.clientHeight - this.cover.clientHeight
			}
			this.cover.style.left = X + 'px'
			this.cover.style.top = Y + 'px'

			var w = X / this.secoeImg.clientWidth		//获取大图和小图的宽高比例
			var h = Y / this.secoeImg.clientHeight

			let yuImg = this.$refs.ids 
			this.quyuImg = yuImg
			this.quImg = yuImg.querySelector(".qu-img")

			this.quImg.style.left = -this.quImg.clientWidth*w + 'px'
			this.quImg.style.top = -this.quImg.clientHeight*h + 'px'
		},
		seImg : function(){
			this.showes = false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sect-tp{width:352px;float:left;padding-bottom:15px;position:relative}
.secoe-img{position:relative;border:1px #eee solid;margin-bottom:20px}
.img-zzc{position:absolute;width:236px;height:236px;visibility:visible;top:0;left:0;z-index:3;
border:1px #aaa solid;background:#FEDE4F;opacity:.5;cursor:move}
.quyu-img{width:540px;height:540px;position:absolute;left:352px;top:0;border:1px #e4e4e4 solid;z-index:666;
background:url("../assets/loading.gif") no-repeat;overflow:hidden}
.qu-img{position:absolute;top:0;left:0}
.secoe-list{margin-bottom:18px;position:relative}
.spec-list{position:relative;width:290px;height:54px;overflow:hidden;margin:0 auto}
.secoe-list .spec-list .sp-lst{transform:translateX(-232px)}
.spec-list ul{position:absolute;width:522px;height:54px;top:0;left:0;transition:1s}
.spec-list ul li{margin:0 2px;float:left}
.spec-list ul li img{border:2px #fff solid}
.spec-list ul .img-hover img{border:2px #e53e41 solid}
.arrow-prev,.arrow-next{display:block;width:22px;height:32px;float:left;position:absolute;
cursor:pointer;top:50%;margin-top:-16px}
.arrow-prev{left:0}
.arrow-next{right:0}
.spec-prev,.spec-next{display:block;width:22px;height:32px;background:url("../assets/disabled-prev.png") no-repeat}
.spec-next{transform:rotateY(180deg)}
.previ-info{height:20px}
.lef-btns{float:left}
.righ-btns{float:right}
.info-gz,.info-fx,.info-db{display:inline-block;vertical-align:middle;margin-right:5px;
background:url("../assets/prites.png") no-repeat}
.info-gz{width:14px;height:13px;background-position:-44px -40px}
.info-fx{width:15px;height:14px;background-position:-45px -24px}
.info-db{width:15px;height:16px;background-position:-30px -24px}
</style>