<template>
	<div class = 'active-banner'>
		<div class = 'active-type'>
			<i class = 'jdms'></i>
			<strong>京东秒杀</strong>
		</div>
		<div class = 'active-mess'>
			距离结束
			<span>{{ mscss }}</span>:<span>{{ mscsf }}</span>:<span>{{ mscsm }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jdMsdjs',
	data () {
		return {
			miaosha : 1537869060,
			date : Math.floor(new Date().getTime()/1000),
			mscss : '',
			mscsf : '',
			mscsm : ''
		}
	},
	mounted : function(){
		var _this = this
		this.timer = setInterval(function(){
			_this.date = Math.floor(new Date().getTime()/1000);
			_this.djs();
		},1000);
		this.getUnix(this.miaosha);
	},
	methods : {
		addprezero : function(num){
			if(num < 10){
				return '0' + num
			}else{
				return num
			}
		},
		djs : function(){
			var _this = this
			if(Number(this.date) >= this.miaosha){
				var aaa = _this.miaosha --
				_this.getUnix(aaa)
			}else{
				this.getUnix(this.miaosha)
			}
		},
		getUnix : function(i){
			var ate = new Date(i*1000)
			this.mscss = this.addprezero(ate.getHours())
			this.mscsf = this.addprezero(ate.getMinutes())
			this.mscsm = this.addprezero(ate.getSeconds())
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active-banner{height:32px;line-height:32px;padding:0 10px;font-family:"Microsoft YaHei";
overflow:hidden;zoom:1;background:url("../assets/seckilling.png") no-repeat #e84540}
.active-banner .active-type{float:left}
.active-banner .active-type .jdms{display:inline-block;width:20px;height:20px;vertical-align:-4px;
margin-right:5px;background:url("../assets/__spriteg.png") no-repeat -20px 0px}
.active-banner .active-type strong{font-size:16px;font-weight:400;color:#fff}
.active-banner .active-mess{float:right;font-size:12px;color:#fbe2e2}
.active-banner .active-mess span{width:22px;font-size:14px;color:#fff;background:#443b3b;margin:0 4px;
line-height:24px;border-radius:2px;display:inline-block;text-align:center}
</style>