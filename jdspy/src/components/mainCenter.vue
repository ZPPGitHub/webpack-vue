<template>
	<div id = "maincenter">
		<div class = "side-left">
			<div class = "side-bar">
				<div class = "tarde-sele" style = "display:block">
					<div class = "tarde-top">
						<h3>商品精选</h3>
						<span></span>
					</div>
					<div class = "tarde-content">
						<ul class = "tarde-con">
							<li v-for = "tar in teJS">
								<div class = "p-img">
									<a :href = "tar.hre" :title = "tar.pName">
										<img width = "190" height = "190" :src = "tar.pImg">
									</a>
								</div>
								<div class = "p-name">
									<a :href = "tar.hre" :title = "tar.pName">
										<i>{{ tar.pName }}</i>
									</a>
								</div>
								<div class = "p-price">
									<strong>{{ tar.pRice }}</strong>
									<span v-if = "tar.pzp !== ''">{{ tar.pzp }}</span>
								</div>
								<div class = "p-review">已有<a href = "">{{ tar.pEview }}</a>人评价</div>
							</li>
						</ul>
					</div>
				</div>
				<div class = "tarde-sele" style = "display:block">
					<div class = "tarde-top">
						<h3>达人选购</h3>
					</div>
					<div class = "tarde-content">
						<ul class = "tarde-con">
							<li v-for = "ktdr in taDR">
								<div class = "p-img">
									<a :href = "ktdr.hre" :title = "ktdr.pName">
										<img width = "190" height = "190" :src = "ktdr.pImg">
									</a>
								</div>
								<div class = "p-price">
									<p>{{ ktdr.pRice }}</p>
								</div>
								<div class = "p-name">
									<a :href = "ktdr.hre" :title = "ktdr.pName">
										<i>{{ ktdr.pName }}</i>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class = "tarde-sele" v-if = "taSJ.length">
					<div class = "tarde-top">
						<h3>商家精选</h3>
						<span></span>
					</div>
					<div class = "tarde-content">
						<ul class = "tarde-con"></ul>
					</div>
				</div>
			</div>
		</div>
		<div class = "side-right">
			<div class = "filter-m">
				<div class = "f-line f-lin">
					<div class = "f-sort">
						<a class = "curr" href = "">综合排序<i></i></a>
						<a href = "">销量<i></i></a>
						<a href = "">价格<i></i></a>
						<a href = "">评论数<i></i></a>
						<a href = "">上架时间<i></i></a>
					</div>
					<div class = "f-pager">
						<span class = "f-texts">
							<b>1</b>
							<em>/</em>
							<i>171</i>
						</span>
						<a class = "f-prev disabl" href = "javascript:;"> < </a>
						<a class = "f-next" href = ""> > </a>
					</div>
				</div>
				<div class = "f-line clearfic">
					<div class = "f-store">
						<p>配送至</p>
						<div class = "f_stoped" :class = "{'ui-area-hover' : uihover}" @mouseleave = "ulRea">
							<div class = "ul-area" @mouseenter = "lArea">
								<div title = "浙江杭州市下沙区" class = "ul-area-text">{{ psdq }}<i></i></div>
							</div>
							<div class = "ui-wrap" v-if = "uihover === true">
								<div class = "ui-wrap-tp">
									<a @click = "wartp(1)" :class = "{'ui-wrap-xz' : wraxz === 1}" :title = "wap" href = "javascript:;">{{ wap }}<i></i></a>
									<a @click = "wartp(2)" :class = "{'ui-wrap-xz' : wraxz === 2}" :title = "wop" href = "javascript:;">{{ wop }}<i></i></a>
									<a @click = "wartp(3)" v-if = "wop !== '请选择'" :class = "{'ui-wrap-xz' : wraxz === 3}" :title = "wep" href = "javascript:;">{{ wep }}<i></i></a>
								</div>
								<div class = "ui-wrap-bt">
									<div class = "ui-wrap-s" v-if = "wraxz === 1">
										<ul>
											<li v-for = "(ura,index) in uwrap" :class = "{'ui-wrap-hs' : uap === index}" @click = uwap(index,$event)><a href = "javascript:void(0)">{{ ura }}</a></li>
										</ul>
									</div>
									<div class = "ui-wrap-s" v-if = "wraxz === 2">
										<ul>
											<li v-for = "(axs,index) in wraxs" :class = "{'ui-wrap-hs' : raxs === index}" @click = wrax(index,$event)><a href = "javascript:void(0)">{{ axs }}</a></li>
										</ul>
									</div>
									<div class = "ui-wrap-s" v-if = "wraxz === 3">
										<ul>
											<li v-for = "(iax,index) in irax" :class = "{'ui-wrap-hs' : iaxs === index}" @click = waxp(index,$event)><a href = "javascript:void(0)">{{ iax }}</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class = "f-feature">
						<ul>
							<li><a href = ""><i></i>京东物流</a></li>
							<li><a href = ""><i></i>自营211</a></li>
							<li><a href = ""><i></i>货到付款</a></li>
							<li><a class = "secked" href = ""><i></i>仅显示有货</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class = "page-content">
				<ul class = "sp-content">
					<li v-for = "spar in zysp" class = "sp-cont">
						<div class = "sp-conted">
							<div class = "sp-img">
								<a :href = "spar.ref">
									<img width = "220" height = "220" :src = "spar.spImg" :title = "spar.titl"/>
								</a>
							</div>
							<div class = "sp-scroll">
								<div class = "sp-min">
									<ul>
										<li class = "sp-item">
											<a href = "javascript:;" :title = "spar.spTetitl">
												<img width = "25" height = "25" :src = "spar.spImg"/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class = "sp-price">
								<strong class = "sp_price">
									<em>¥</em>
									<i>{{ spar.spRice }}</i>
								</strong>
							</div>
							<div class = "sp-name">
								<a :href = "spar.ref" :title = "spar.titl">
									<em> {{spar.spName}} </em>
								</a>
								<span class = "sp-names">
									<a title = "1.5匹" href = "" class = "attr">{{ spar.spps }}</a>
									<a title = "3级" href = "" class = "attr">{{ spar.spdj }}</a>
									<a title = "远程控制" href = "" class = "attr">{{ spar.spmd }}</a>
								</span>
							</div>
							<div class = "sp-commit">
								<span class = "buy-score" title = "京东综合评估得出指数">
									选购指数
									<em>{{ spar.spMmit }}</em>
								</span>
								<strong>已有<a href = "">{{ spar.sppj }}</a>人评价</strong>
							</div>
							<div class = "sp-focus">
								<a class = "p-focus" href = ""><i></i>关注</a>
							</div>
							<div class = "sp-shop">
								<span>
									<a :title = "spar.spShop" href = "">{{ spar.spShop }}</a>
									<em class = "im-02" title = "联系供应商进行咨询"></em>
								</span>
							</div>
							<div class = "sp-icons">
								<i v-if = "spar.spConzy !== ''" class = "sp-icons-icon sp-icons-1" title = "京东自营,品质保障">{{ spar.spConzy }}</i>
								<i v-if = "spar.spConpz !== ''" class = "sp-icons-icon sp-icons-1" title = "品质优选,只为品质生活" style = "background:#aa09ed">{{ spar.spConpz }}</i>
								<i v-if = "spar.spConz !== ''" class = "sp-icons-icon sp-icons-2" title = "购买本商品送赠品">{{ spar.spConz }}</i>
							</div>
							<div class = "sp-stock"></div>
						</div>
					</li>
				</ul>
			</div>
			<div class = "page-break">
				<div class = "p-page">
					<ul class = "pa-page">
						<li class = "pn-prev previous-page"><a class = "disableds" href = "">
							<i><</i>
							<em>上一页</em>
						</a></li>
						<li class = "first-page"><a class = "currss" href = "">1</a></li>
						<li class = "pn-prev" style = "display:none"><span>...</span></li>
						<li><a href = "">2</a></li>
						<li><a href = "">3</a></li>
						<li class = "pn-prev" style = "display:none"><span>...</span></li>
						<li><a href = "">4</a></li>
						<li><a href = "">5</a></li>
						<li><a href = "">6</a></li>
						<li class = "pn-prev" style = "display:none"><span>...</span></li>
						<li><a href = "">7</a></li>
						<li><a href = "">8</a></li>
						<li class = "pn-prev" style = "display:block"><span>...</span></li>
						<li><a href = "">171</a></li>
						<li class = "pn-prev next-page"><a href = "">
							<em>下一页</em>
							<i>></i>
						</a></li>
					</ul>
					<div class = "p-jump">
						<em>共<b>171</b>页&nbsp;&nbsp;到第</em>
						<input class = "input-txts" maxlength = "4" value = "2" onkeyup = "this.value = this.value.replace(/[^0-9]/g,'');" onkeydown = "javascript:if(event.keCode == 13){page_jump();return false}">
						<em>页</em>
						<a class = "btntn" href = "javascript:page_jump();">确定</a>
					</div>
				</div>
			</div>
			<div class = "clr"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mainCenter',
	props : {
		teJS : Array,
		taDR : Array,
		taSJ : Array,
		zysp : Array
	},
	data () {
		return {
			uwrap : ['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'],
			wraxs : ['宁波市','衢州市','丽水市','台州市','杭州市','温州市','嘉兴市','湖州市','绍兴市','金华市'],
			irax : ['上城区','下城区','拱墅区','西湖区','江干区','下沙区','余杭区','萧山区','滨江区','临安区','富阳区','桐庐县','建德市','淳安县'],
			uap : 14,
			raxs : 4,
			iaxs : 4,
			wraxz : 1,
			uihover : false,
			wap : '浙江',
			wop : '杭州市',
			wep : '江干区'
		}
	},
	methods : {
		lArea : function(){
			this.uihover = true
		},
		ulRea : function(){
			this.uihover = false
		},
		wartp : function(l){
			this.wraxz = l
		},
		uwap : function(i,event){
			this.uap = i
			this.wap = event.currentTarget.innerText
			this.wop = '请选择'
			this.wep = '请选择'
			this.wraxz = 2
			this.$emit('shcs',this.wap)		//子组件传值给父组件
		},
		wrax : function(j,event){
			this.raxs = j
			this.wop = event.currentTarget.innerText
			this.wraxz = 3
		},
		waxp : function(k,event){
			this.iaxs = k
			this.wep = event.currentTarget.innerText
			this.uihover = false
		}
	},
	computed : {
		psdq : function(){
			var psdq = this.wap + this.wop + this.wep
			return psdq
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#maincenter{margin-bottom:10px;float:left;width:100%}
.side-left{position:relative;width:210px;float:left;}
.side-bar{background:#fff}
.tarde-sele{display:none;border:1px solid #ddd;margin-bottom:10px;position:relative}
.tarde-top{line-height:36px;padding-left:10px;margin-bottom:10px;overflow:hidden}
.tarde-top h3{font-size:14px}
.tarde-top span{position:absolute;right:10px;top:10px;width:24px;height:12px;overflow:hidden;
background:url("../assets/截图0120.png") no-repeat -1px -2px;opacity:0.2}
.p-img,.p-name,.p-price,.p-review,.tarde-con{overflow:hidden}
.tarde-con li{padding:0 9px;margin-bottom:20px}
.p-img{width:100%;padding:0;margin-bottom:10px;text-align:center;position:relative}
.p-name{height:36px;line-height:18px;margin-bottom:10px;overflow:hidden;display:block;
word-break:break-all;word-wrap:break-word}
.p-price{height:16px;line-height:16px;margin-bottom:4px;overflow:hidden}
.p-price strong{float:left;margin-right:6px;color:#e4393c;font-weight:700;font-size:14px;
font-family:verdana}
.p-price p{float:left;margin-right:6px;color:#e4393c;font-size:13px;font-family:verdana}
.p-price span{float:left;height:16px;line-height:16px;padding:0 3px;margin-right:3px;overflow:hidden;
color:#fff;background:#e23a3a;cursor:default;border-radius:2px}
.p-review a{color:#005aa0}
.side-right{margin-left:220px;padding-bottom:30px}
.filter-m{position:relative;z-index:4;border-top:1px #DDD solid;margin-bottom:5px}
.f-line{padding:6px 8px;border-bottom:1px solid #E7E3E7;background:#F9F9F9;}
.f-lin{height:25px;background:#F1F1F1}
.clearfic{height:26px}
.f-sort{float:left;margin-right:24px}
.f-sort a{float:left;padding:0 10px;height:23px;border:1px #CCC solid;line-height:23px;color:#333;
margin-right:-1px;background:#FFF}
.f-sort a:hover{border-color:#e4393c;position:relative;z-index:2;color:#e4393c}
.filter-m .f-sort .curr{border-color:#e4393c;color:#fff;position:relative;z-index:2;
background:#e4393c}
.f-pager{float:right}
.f-texts{line-height:23px;margin-right:10px;font-family:verdana}
.f-texts b,.f-texts em,.f-texts i{font-weight:400;font-style:normal}
.f-texts b{font-weight:700;color:#e4393c}
.f-prev,.f-next{display:inline-block;width:46px;height:23px;border:1px #DDD solid;background:#fff;
line-height:23px;text-align:center;font-size:16px;color:#AAA;font-family:"\5b8b\4f53"}
.disabl{padding:0;background:#F1F1F1;color:#CCC;cursor:default;margin-right:-4px}
.f-store{float:left;padding-left:5px}
.f-store p{float:left;line-height:25px;margin-right:5px;color:#999}
.f_stoped{float:left;position:relative;z-index:3;height:26px;margin-right:10px}
.ul-area{float:left;position:relative;top:0;height:23px;background:#fff;border:1px solid #CECBCE;
padding:0 24px 0 4px;line-height:23px;overflow:hidden}
.ui-area-hover .ul-area{z-index:1;height:25px;border-bottom:0}
.ul-area i,.ui-wrap-tp a i{display:block;position:absolute;top:0px;right:8px;width:17px;height:17px;
background:url("../assets/截图0d0.png") no-repeat 1px 5px}
.f-feature{float:left;position:relative;width:auto;height:25px;overflow:hidden}
.f-feature li{float:left;height:25px;line-height:25px}
.f-feature li a{position:relative;display:inline-block;padding-left:18px;color:#333;padding-right:5px}
.f-feature li i{display:inline-block;width:12px;height:12px;border:1px solid #ccc;position:absolute;
left:0;top:6px;background:url(../assets/write_ok.gif) no-repeat 99px 99px;background-color:#fff;}
.f-feature .secked i{background-position:-1px 0px;border-color:#e4393c;}
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
.page-content{margin-bottom:20px;height:auto;position:relative;float:left}
.sp-content{width:1000px;margin-right:-10px;height:auto;float:left}
.sp-cont{width:240px;height:466px;float:left;position:relative;margin-top:10px;margin-right:10px;}
.sp-cont .sp-conted{padding-top:12px;padding-bottom:12px}
.sp-conted{width:220px;position:absolute;left:0;top:0;background:#fff;border:1px #fff solid;
padding:38px 9px 10px;transition:border-color .1s ease}
.sp-conted:hover{border-color:#e9e9e9;box-shadow:0 0 2px 2px #f8f8f8}
.sp-img{height:220px;padding:0;position:relative;overflow:hidden;margin-bottom:5px}
.sp-img img,.sp-item img{border:0}
.sp-img a{display:block;position:relative;overflow:hidden}
.sp-scroll{position:relative;padding:0;margin-bottom:10px;}
.sp-min{height:29px;overflow:hidden}
.sp-item{float:left;width:34px;height:29px;text-align:left}
.sp-item a{cursor:default;display:inline-block;border:1px #ddd solid;padding:1px;height:25px}
.sp-item:hover a{border-color:#e4393c;border-width:2px;padding:0;}
.sp-item a.curr{padding:0;border-width:2px;border-color:#e4393c}
.sp-price{position:relative;line-height:22px;height:22px;overflow:hidden;width:100%;margin:0 0 8px}
.sp_price{float:left;margin-right:10px;color:#e4393c;font-size:20px;font-weight:400;
font-family:Verdana}
.sp_price em{font-size:16px}
.sp-name{height:40px;margin-bottom:8px;overflow:hidden;word-break:break-all;word-wrap:break-word}
.sp-name em{display:block;height:20px;line-height:20px;overflow:hidden;transition:height .08s ease}
.sp-names{display:block;width:228px;height:19px;margin-top:1px;margin-right:-8px;overflow:hidden}
.sp-names .attr{float:left;height:19px;line-height:19px;padding:0 4px;margin-right:7px;
background:#f4f4f4;color:#999;font-weight:400}
.sp-commit{width:100%;height:18px;margin-top:-3px;margin-bottom:9px;overflow:hidden}
.buy-score{float:right;padding-right:11px;color:#a7a7a7}
.sp-commit strong{color:#a7a7a7;font-weight:400}
.buy-score em{margin-left:5px;color:#646fb0;font-family:verdana;font-weight:700}
.sp-commit strong a{color:#646fb0;font-family:verdana;font-weight:700}
.sp-focus{position:absolute;left:172px;top:236px;visibility:hidden;opacity:0;transition:top .3s ease,opacity .1s ease .1s}
.p-focus{position:relative;display:inline-block;height:25px;line-height:25px;color:#fff;border:medium none;background:rgba(0,0,0,.7);padding:0 8px 0 25px}
.p-focus i{position:absolute;display:block;left:4px;top:3px;width:18px;height:18px;
background:url("../assets/截图1200.png") no-repeat 9999px 9999px;transition:transform .2s ease-in-out}
.sp-shop{line-height:18px;height:18px;overflow:hidden;margin-top:-3px;margin-bottom:9px}
.sp-shop span{display:inline-block;position:relative;height:18px}
.sp-shop span a{color:#999}
.sp-shop span em{position:absolute;right:-21px;top:1px;display:block;cursor:pointer;width:16px;
height:16px;background:url("../assets/截图102.png") no-repeat -3px -3px}
.sp-icons{overflow:hidden;height:16px;margin-bottom:12px}
.sp-icons-icon{float:left;padding:0 3px;margin-right:3px;overflow:hidden;text-align:center;
font-family:"Helvetica Neue","Hiragino Sans GB",SimSun,serif;cursor:default;border-radius:2px}
.sp-icons-1{height:16px;line-height:16px;background:#e23a3a;color:#FFF;}
.sp-icons-2{height:14px;line-height:14px;border:1px solid #e23a3a;color:#e23a3a}
.page-break{margin-bottom:10px;height:38px;float:right}
.p-page{float:right}
.pa-page{float:left}
.pa-page li{float:left}
.pa-page a{color:#333;border:1px #ddd solid;background-color:#f7f7f7;background-repeat:repeat-x}
.pn-prev a i{font-size:16px;padding:0 5px;font-family:"\5b8b\4f53";color:#aaa}
.pa-page a,.pn-prev span{float:left;height:36px;line-height:36px;padding:0 14px;font-size:14px;
margin-right:5px;}
.pn-prev span{color:#ccc}
.page-break .pa-page .disableds{background:#fff;cursor:default}
.page-break .pa-page .disableds i,.page-break .pa-page .disableds em{color:#ccc}
.page-break .pa-page .currss{border:0;padding:1px 15px;background:0 0;color:#e4393c;cursor:default}
.p-jump{float:left;margin-left:20px}
.p-jump input{float:left;width:30px;height:30px;margin:0 3px;line-height:30px;font-size:14px;
text-align:center;border:1px #CCC solid;padding:3px}
.p-jump em{float:left;line-height:38px;font-size:14px}
.p-jump .btntn{float:left;height:27px;margin-left:10px;font-size:14px;line-height:27px;cursor:pointer;
border-radius:2px;background:#F7F7F7;text-align:center;border:1px #DDD solid;padding:4px 13px 5px;
color:#666;background-color:#f7f7f7;}
</style>