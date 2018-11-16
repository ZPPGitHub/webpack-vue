<template>
	<ul class = "clearfix jd-zzfws">
		<li @mouseenter = chooer(index) @mouseleave = choer v-for = "(zzb,index) in zzfwbz" class = "service-hover" :key = "index">
			<div class = "yb-service" :class = "{'poliu':choovise[index] !== ''&&choovise[index] !== undefined}">
				<img width = "16" height = "16" :src = "zzb.zImg"/>
				<span class = "name">{{ zzb.zName }}</span>
				<span class = "price">{{ zzb.zPrice }}</span>
				<i></i>
			</div>
			<div class = "more-service" v-if = "chvice === index">
				<ul class = "clearfix">
					<li v-for = "(vice,index) in zzb.morevice" class = "titlecs" :title = "vice.titl" @click = choser(vice) :key = "index">
						<span class = 'nn' :class = "{'polui':vice === choovise[chvice]}">
							<i class = "sprit-checkbox"></i>
							<em v-if = "vice.discounts !== ''" class = "tips">{{ vice.discounts }}</em>
							<span class = "name">{{ vice.cName }}</span>
							<span class = "price">{{ vice.cPrice }}</span>
						</span>
						<a class = "detail-mare" href = "">详情<i class = "s-arrpw">>></i></a>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'jdTcxx',
	props : {
		zzfwbz : Array
	},
	data () {
		return {
			chvice : '',
			choovise : []
		}
	},
	mounted : function(){
		for(var i = 0;i<this.zzfwbz.length;i++){
			this.choovise[i] = ''
		}
	},
	methods : {
		chooer : function(nu){
			this.chvice = nu
		},
		choer : function(){
			this.chvice = ''
		},
		choser : function(nui){
			this.zzfwbz[this.chvice].zName = nui.cName
			this.zzfwbz[this.chvice].zPrice = nui.cPrice
			if(this.choovise[this.chvice] === nui){
				this.choovise[this.chvice] = ''
			}else{
				this.choovise[this.chvice] = nui
			}
			this.chvice = ''
			this.$emit('owhfidwe',this.choovise)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jd-zzfws{float:left}
.jd-zzfws li{float:left;position:relative}
.yb-service{padding:4px 5px 4px 6px;margin:0 7px 2px 0;line-height:21px;cursor:pointer;
border:1px #ccc solid;position:relative}
.yb-service img{display:inline-block;width:16px;height:16px;margin-right:4px}
.yb-service .name{display:inline-block;margin-right:4px;vertical-align:middle;max-width:60px;
height:20px;overflow:hidden}
.yb-service .price{margin-right:5px;vertical-align:middle}
.yb-service i{display:inline-block;width:15px;vertical-align:middle;height:10px;
background:url("../assets/arr-close.png") no-repeat 1px 3px}
.more-service{position:absolute;top:31px;background:#fff;border:1px #ddd solid;width:240px;z-index:1;
padding:10px 0 5px 10px;overflow:hidden}
.more-service li{width:100%;margin-bottom:10px;height:16px;cursor:pointer}
.more-service li:hover{color:#E3393c}
.more-service li:hover a{display:inline-block}
.more-service li a:hover{color:#E3393c}
.titlecs .sprit-checkbox{display:inline-block;vertical-align:-3px;margin-right:6px;width:14px;
height:14px;background:url("../assets/__spritecs.png") no-repeat;background-position:-16px 0px}
.titlecs .tips{display:inline-block;padding:0 4px;margin-right:6px;background:#f19c9d;color:#fff}
.more-service .name{display:inline-block;max-width:60px;height:16px;vertical-align:-3px;
overflow:hidden}
.more-service .price{margin-right:0;margin-left:6px}
.more-service .detail-mare{display:none;margin-left:10px;color:#5e69ad}
.s-arrpw{font-family:simsun}
.poliu{border-color:#e4393c}
.polui{color:#e4393c}
.polui .sprit-checkbox{background-position:0 -16px}
.service-hover:hover .yb-service{border:1px #e3393c solid}
.service-hover:hover .yb-service{z-index:5;border-bottom-color:#fff}
</style>