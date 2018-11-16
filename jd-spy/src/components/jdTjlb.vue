<template>
	<div class = "track">
		<div class = "brand-log">
			<a href = ""><img width = "180" height = "60" :title = "jMds" :src = "jQjdt"></a>
		</div>
		<div class = "track-tit">
			<h3>店长推荐</h3>
			<span></span>
		</div>
		<div class = "track-con">
			<ul ref = "Jdyd">
				<li v-for = "(tjs,index) in jDzts" :key = 'index'>
					<a :href = "tjs.hre" :title = "tjs.titl">
						<img width = "150" height = "150" :alt = "tjs.titl" :src = "tjs.srcs">
						<p class = "con-name">{{ tjs.titl }}</p>
						<p class = "con-price">{{ tjs.price }}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class = "track-more">
			<a href = "JavaScript:;" class = "J-prev" @click = "Jprev"></a>
			<a href = "JavaScript:;" class = "J-next" @click = "Jnext"></a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jdTjlb',
	data () {
		return {
			now : 0
		}
	},
	props : {
		jDzts : Array,
		jMds : String,
		jQjdt : String
	},
	methods : {
		Jprev : function(){
			var Jdyds = this.$refs.Jdyd
			var oli = Jdyds.querySelectorAll('li')
			var step = oli[0].offsetHeight*2
			this.now ++
			if(this.now >= this.jDzts.length/2){
				this.now = 0
			}
			Jdyds.style.top = -this.now*step + 'px'
			console.log(this.jMds,this.jQjdt)
		},
		Jnext : function(){
			var Jdyds = this.$refs.Jdyd
			var oli = Jdyds.querySelectorAll('li')
			var step = oli[0].offsetHeight*2
			this.now --
			if(this.now < 0){
				this.now = this.jDzts.length/2-1
			}
			Jdyds.style.top = -this.now*step + 'px'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.track{width:210px;position:static;float:right;background:#fff;top:-10px;z-index:4}
.track-tit{position:relative;line-height:50px;font-weight:400;text-align:center}
.track-tit h3{position:relative;z-index:2;display:inline-block;background:#fff;padding:0 25px}
.track-tit span{position:absolute;z-index:1;left:0;right:0;top:25px;height:1px;background:#f2f2f2}
.track-con{position:relative;width:150px;height:376px;overflow:hidden;margin:0 auto}
.track-con ul{position:absolute;width:150px;height:1128px;top:0;left:0;transition:1s}
.track-con ul li{position:relative;float:left;padding:10px 0}
.track-con ul li a{position:relative;display:inline-block}
.track-con ul li a .con-name{position:absolute;left:0;right:0;top:126px;line-height:12px;padding:6px;
background:rgba(255,255,255,.9);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.track-con ul li a .con-price{line-height:18px;text-align:center;color:#C81623}
.track-more{padding-top:10px;text-align:center;clear:both}
.track-more a{display:inline-block;width:28px;height:15px;margin:0 10px;overflow:hidden;
background:url("../assets/__sprites.png") no-repeat}
.track-more .J-prev{background-position:-28px 0px}
</style>