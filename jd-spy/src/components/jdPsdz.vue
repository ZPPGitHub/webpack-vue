<template>
	<div class = "f_stoped" @mouseenter = psdz @mouseleave = F_clear :class = "{'ui-area-hover':showeds === true}">
		<div class = "ul-area">
			<div :title = "ulAreaText" class = "ul-area-text">{{ ulAreaText }}<i></i></div>
		</div>
		<div class = "ui-wrap" v-show = "showeds">
			<div class = "ui-wrap-tp">
				<a @click = uirap(index) v-for = "(uiTp,index) in uiWrapTp" :class = "{'ui-wrap-xz': uiap === index}" :title = "uiTp" href = "javascript:;">{{ uiTp.Wrao }}<i></i></a>
			</div>
			<div class = "ui-wrap-bt">
				<div class = "ui-wrap-s" v-if = "uiap === 0">
					<ul>
						<li :class = "{'ui-wrap-hs' : uiWrapTp[0].Wrao === pzs}" v-for = "(pzs,index) in pszs">
							<a @click = uis(pzs) href = "javascript:void(0)">{{ pzs }}</a>
						</li>
					</ul>
				</div>
				<div class = "ui-wrap-s" v-if = "uiap === 1">
					<ul>
						<li :class = "{'ui-wrap-hs' : uiWrapTp[1].Wrao === pdq}" v-for = "pdq in pszdq">
							<a @click = uias(pdq) href = "javascript:void(0)">{{ pdq }}</a>
						</li>
					</ul>
				</div>
				<div class = "ui-wrap-s" v-if = "uiap === 2">
					<ul>
						<li :class = "{'ui-wrap-hs' : uiWrapTp[2].Wrao === pszx}" v-for = "pszx in pszqx">
							<a @click = uiWps(pszx) href = "javascript:void(0)">{{ pszx }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jdPsdz',
	data () {
		return {
			ulAreaText : '浙江杭州市下沙区',
			showeds : false,
			uiWrapTp : [{Wrao : "浙江"},{Wrao : "杭州市"},{Wrao : "下沙区"}],
			uiap : 0,
			pszs : ['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'],
			pszdq : ['宁波市','衢州市','丽水市','台州市','杭州市','温州市','嘉兴市','湖州市','绍兴市','金华市'],
			pszqx : ['上城区','下城区','拱墅区','西湖区','江干区','下沙区','余杭区','萧山区','滨江区','临安区','富阳区','桐庐县','建德市','淳安县']
		}
	},
	methods : {
		psdz : function(){
			this.showeds = true
		},
		F_clear : function(){
			this.showeds = false
		},
		uirap : function(o){
			this.uiap = o
		},
		uis : function(ite){
			this.uiWrapTp[0].Wrao = ite
			this.uiap = 1
		},
		uias : function(ita){
			this.uiWrapTp[1].Wrao = ita
			this.uiap = 2
		},
		uiWps : function(its){
			this.uiWrapTp[2].Wrao = its
			this.ulAreaText = this.uiWrapTp[0].Wrao + this.uiWrapTp[1].Wrao + this.uiWrapTp[2].Wrao
			this.showeds = false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f_stoped{float:left;position:relative;z-index:3;height:26px;margin-top:-3px}
.ul-area{float:left;position:relative;top:0;height:23px;background:#fff;border:1px solid #CECBCE;
padding:0 24px 0 4px;line-height:23px;overflow:hidden}
.ui-area-hover .ul-area{z-index:1;height:25px;border-bottom:0}
.ul-area i,.ui-wrap-tp a i{display:block;position:absolute;top:0px;right:3px;width:17px;height:17px;
background:url("../assets/arr-close.png") no-repeat 3px 8px}
.ui-wrap{position:absolute;left:0;top:25px;float:left;border:1px #CECBCE solid;width:460px;
padding:12px 12px 15px;background:#fff;box-shadow:0 0 5px #ddd}
.ui-wrap-s a:hover{color:#e4393c}
.ui-wrap-tp{width:423px;cursor:default;height:25px;border-bottom:2px #e4393c solid;overflow:visible}
.ui-wrap-tp a{position:relative;float:left;height:23px;line-height:23px;padding:0 25px 1px 6px;
margin-right:4px;border:1px #ddd solid;border-bottom:0;color:#005AA0;text-align:center;
cursor:pointer;overflow:hidden;max-width:36px}
.ui-wrap-tp .ui-wrap-xz{height:25px;background-color:#fff;border:2px #e4393c solid;border-bottom:0;
padding:0 25px 0 6px;line-height:22px}
.ui-wrap-s ul{padding-top:10px;overflow:hidden;width:100%;margin-bottom:-5px}
.ui-wrap-s ul li{float:left;width:80px;padding:0 16px 1px 0;line-height:18px}
.ui-wrap-s li a{float:left;padding:2px 4px 2px 0;color:#005aa0}
.ui-wrap-s .ui-wrap-hs a{color:#e4393c}
</style>