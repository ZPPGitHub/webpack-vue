<template>
	<div class = "fittings">
		<div class = "tab-min">
			<ul>
				<li @click = Fitt(index) v-for = "(tMin,index) in tBmis" :class = "{'current':curr === index}">{{ tMin }}</li>
			</ul>
		</div>
		<div class = "tab-con clearfix">
			<div class = "master">
				<div class = "p-img">
					<a href = "#"><img width = "100" height = "100" :alt = "pName" :src = "srcs"></a>
				</div>
				<div class = "p-name">
					<a href = "">{{ pName }}</a>
				</div>
				<i class = "puls"></i>
			</div>
			<div class = "suits">
				<div class = "switchble" v-for = "(tpje,index) in kTps" :key = "index" v-if = "curr === index">
					<div class = "btns">
						<a href = "JavaScript:void(0)" class = "prev-btn disabled"></a>
						<a href = "JavaScript:void(0)" class = "next-btn disabled"></a>
					</div>
					<div class = "lh-wrap">
						<ul class = "clearfix">
							<li v-for = "(tpe,index) in tpje.tjpj" :key = "index">
								<div class = "p-img">
									<a :href = "tpe.srces"><img width = "100" height = "100" :src = "tpe.pImgs"></a>
								</div>
								<div class = "p-name">
									<a :href = "tpe.srces" :title = "tpe.pNames">{{ tpe.pNames }}</a>
								</div>
								<div class = "p-price">
									<input type = "checkbox" :value = "tpe.labs" :id = "tpe.labs" v-model = "kters" @click = Pcheck(tpe,index)>
									<label :for = "tpe.labs">
										<strong>￥{{ tpe.pRices }}</strong>
									</label>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class = "infos">
				<div class = "infos-sele">已选择<span>{{ inSele }}</span>个配件</div>
				<div class = "p-price">
					<span>组合价</span>
					<strong>￥{{ Spice }}</strong>
				</div>
				<div class = "btns-lj">
					<a class = "btn-lj" href = "">立即购买</a>
				</div>
				<a class = "infos-xgzx" href = "">配件选购中心</a>
				<i class = "equal"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jdSppj',
	data () {
		return {
			curr : 0,
			pName : '奥克斯 ( AUX ) 正1匹 冷暖 定速 制冷 壁挂式空调挂机(KFR-25GW/NFW+3)',
			srcs : '../static/img-123/hs21d/5ab48c55Na22e95ff.jpg',
			Spices : '1799.00',
			kts : [],
			kters : []
		}
	},
	props : {
		tBmis : Array,
		kTps : Array
	},
	methods : {
		Fitt : function(i){
			this.curr = i
		},
		Pcheck : function(tpes,e){
			if(this.kts.indexOf(tpes) !== -1){
				let iten = this.kts.indexOf(tpes)
				this.kts.splice(iten,1)
			}else{
				this.kts.push(tpes)
			}
		}
	},
	computed : {
		inSele : function(){
			return this.kts.length
		},
		Spice : function(){
			var Spiced = parseFloat(this.Spices);
			for(var i=0,len =this.kts.length;i<len;i++){
				var item = this.kts[i]
				Spiced += parseFloat(item.pRices);
			}
			return Spiced.toFixed(2)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-min{position:relative;background:#f7f7f7;border:1px #eee solid;border-bottom:1px #e4393c solid}
.tab-min ul li{position:relative;display:inline-block;font-family:"microsoft yahei";padding:10px 25px;
font-size:14px;cursor:pointer}
.tab-con{padding:20px 0 10px 0}
.tab-con .master{float:left;width:134px;height:161px;padding:0 5px;position:relative}
.tab-con .master .p-name,.suits .switchble .lh-wrap li .p-name{max-height:3em;min-height:36px;
line-height:1.5em}
.tab-con .master .puls{width:23px;height:23px;overflow:hidden;line-height:23px;position:absolute;
right:8px;top:38px;background:url("../assets/plus.png") no-repeat}
.suits{width:840px;float:left;height:187px;overflow:hidden;position:relative}
.suits .switchble{overflow:hidden;height:161px;position:relative}
.suits .switchble .btns a{width:23px;height:73px;display:block;position:absolute;top:15px;
background:url("../assets/page-btn.png") no-repeat}
.suits .switchble .btns .prev-btn{left:22px;background-position:0 -94px}
.suits .switchble .btns .next-btn{right:15px}
.suits .switchble .btns  .prev-btn.disabled{background-position:-94px -94px;cursor:default}
.suits .switchble .btns  .next-btn.disabled{background-position:-94px 0px;cursor:default}
.suits .switchble .lh-wrap{margin:0 38px 0 68px}
.suits .switchble .lh-wrap li{float:left;width:134px;height:161px;position:relative;padding:0 5px}
.suits .switchble .lh-wrap li .p-price input{vertical-align:middle;margin:3px 3px 3px 4px}
.tab-con .infos{position:relative;float:left;display:inline;width:150px;padding:15px 0 0 50px}
.tab-con .infos .infos-sele,.tab-con .infos .p-price,.tab-con .infos .btns-lj{margin-bottom:10px}
.tab-con .p-name a:hover{color:#e4393c}
.tab-con .infos .p-price strong{font-size:18px}
.tab-con .infos .btn-lj{display:inline-block;text-align:center;height:28px;line-height:28px;
padding:0 22px;background:#df3033;color:#fff}
.infos-xgzx{display:inline-block;padding:4px 10px;border:1px #ccc solid}
.equal{width:23px;height:23px;overflow:hidden;position:absolute;left:0;top:30px;
background:url("../assets/equal.png") no-repeat}
</style>