<template>
	<div id = "headed">
		<div id = "head">
			<div class = "head-cen">
				<div class = "home">
					<p class = "JD-home">
						<i></i>
						<a href = "">京东首页</a>
					</p>
					<div class = "region BJS" @mousemove = "showsed(1)" @mouseout = "showses">
						<div class = "area">
							<i></i>
							<p><span class = "area-dq" :title = "citysed">{{ citysed }}</span></p>
						</div>
						<div class = "regions" v-if = "shows === 1">
							<ul class = "city" @click = "citys">
								<li v-for = "(cit,index) in cityse" :key = "index"><!--for赋值li index索引-->
									<a @click = "change(index)" :class = "{'city-li' : index === mark}" href = "javascript:void(0)">{{ cit }}</a><!--当点击a标签时执行change函数传索引值当点击到某个a标签时让mark值等于当前传入的值-->
								</li><!--:key列表渲染最好加上 class名赋值前检测index值是否与mark值相同-->
							</ul>
							<div class = "Sites">
								<p>Available Sites</p>
								<ul>
									<li><a href = ""><i class = "Global"></i>Global Site</a></li>
									<li><a href = ""><i class = "Poccnn"></i>Cant Poccnn</a></li>
									<li><a href = ""><i class = "Indonesia"></i>Situs Indonesia</a></li>
									<li><a href = ""><i class = "Espana"></i>Sitio de Espana</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class = "navs">
					<ul class = "navs-JD">
						<li class = "navse">
							<div class = "my-JD">
								<a href = "">你好,&nbsp;&nbsp;请登录</a>&nbsp;&nbsp;&nbsp;<a class = "colorse" href = "">免费注册</a>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse">
							<div class = "my-JD">
								<a class = "colors" href = "">我的订单</a>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse BJS" @mouseover = "showsed(2)" @mouseout = "showses">
							<div class = "my-JD JD-navse">
								<a class = "colors" href = "">我的京东</a>&nbsp;<i></i>
							</div>
							<div class = "MY-jd" v-if = "shows === 2">
								<ul class = "my-top">
									<li><a href = "">待处理订单</a></li>
									<li><a href = "">消息</a></li>
									<li><a href = "">返修退换货</a></li>
									<li><a href = "">我的问答</a></li>
									<li><a href = "">降价商品</a></li>
									<li><a href = "">我的关注</a></li>
								</ul>
								<ul>
									<li><a href = "">我的京豆</a></li>
									<li><a href = "">我的优惠券</a></li>
									<li><a href = "">我的白条</a></li>
									<li><a href = "">我的理财</a></li>
								</ul>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse">
							<div class = "my-JD">
								<a class = "colors" href = "">京东会员</a>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse BJS" @mouseover = "showsed(3)" @mouseout = "showses">
							<div class = "my-JD JD-navse">
								<a class = "colors" href = "">企业采购</a>&nbsp;<i></i>
							</div>
							<div class = "purchase" v-if = "shows === 3">
								<ul>
									<li><a href = "">企业购</a></li>
									<li><a href = "">商用场景馆</a></li>
									<li><a href = "">工业品</a></li>
									<li><a href = "">礼品卡</a></li>
								</ul>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse BJS" @mouseover = "showsed(4)" @mouseout = "showses">
							<div class = "my-JD JD-navse">
								<p>客户服务</p><i></i>
							</div>
							<div class = "customer" v-if = "shows === 4">
								<ul class = "client">
									<h4>客户</h4>
									<li><a href ="">帮助中心</a></li>
									<li><a href ="">售后服务</a></li>
									<li><a href ="">在线客服</a></li>
									<li><a href ="">意见建议</a></li>
									<li><a href ="">电话客服</a></li>
									<li><a href ="">客服邮箱</a></li>
									<li><a href ="">金融咨询</a></li>
									<li><a href ="">全球售客服</a></li>
								</ul>
								<ul class = "tenant">
									<h4>商户</h4>
									<li><a href ="">合作招商</a></li>
									<li><a href ="">学习中心</a></li>
									<li><a href ="">商家后台</a></li>
									<li><a href ="">京麦工作台</a></li>
									<li><a href ="">商家帮助</a></li>
									<li><a href ="">规则平台</a></li>
								</ul>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse BJS" @mouseover = "showsed(5)" @mouseout = "showses">
							<div class = "my-JD JD-navse">
								<p>网站导航</p><i></i>
							</div>
							<div class = "siteNavi" v-if = "shows === 5">
								<ul class = "SN-topis">
									<h3>特色主题</h3>
									<li><a href = "">京东试用</a></li>
									<li><a href = "">京东金融</a></li>
									<li><a href = "">全球售</a></li>
									<li><a href = "">国际站</a></li>
									<li><a href = "">京东会员</a></li>
									<li><a href = "">京东预售</a></li>
									<li><a href = "">买什么</a></li>
									<li><a href = "">俄语站</a></li>
									<li><a href = "">装机大师</a></li>
									<li><a href = "">0元测评</a></li>
									<li><a href = "">定期送</a></li>
									<li><a href = "">港澳售</a></li>
									<li><a href = "">优惠券</a></li>
									<li><a href = "">秒杀</a></li>
									<li><a href = "">闪购</a></li>
									<li><a href = "">印尼站</a></li>
									<li><a href = "">京东金融科技</a></li>
									<li><a href = "">In货推荐</a></li>
									<li><a href = "">陪伴计划</a></li>
									<li><a href = "">出海招商</a></li>
								</ul>
								<ul class = "SN-channel">
									<h3>行业频道</h3>
									<li><a href = "">手机</a></li>
									<li><a href = "">智能数码</a></li>
									<li><a href = "">玩3C</a></li>
									<li><a href = "">电脑办公</a></li>
									<li><a href = "">家用电器</a></li>
									<li><a href = "">京东智能</a></li>
									<li><a href = "">服装城</a></li>
									<li><a href = "">京东生鲜</a></li>
									<li><a href = "">家装城</a></li>
									<li><a href = "">母婴</a></li>
									<li><a href = "">食品</a></li>
									<li><a href = "">农资频道</a></li>
									<li><a href = "">整车</a></li>
									<li><a href = "">图书</a></li>
									<li><a href = "">京东元器件</a></li>
								</ul>
								<ul class = "SN-life">
									<h3>生活服务</h3>
									<li><a href = "">京东众筹</a></li>
									<li><a href = "">白条</a></li>
									<li><a href = "">京东金融APP</a></li>
									<li><a href = "">京东小金库</a></li>
									<li><a href = "">理财</a></li>
									<li><a href = "">智能家电</a></li>
									<li><a href = "">话费</a></li>
									<li><a href = "">水电煤</a></li>
									<li><a href = "">彩票</a></li>
									<li><a href = "">旅行</a></li>
									<li><a href = "">机票酒店</a></li>
									<li><a href = "">电影票</a></li>
									<li><a href = "">京东到家</a></li>
									<li><a href = "">游戏</a></li>
								</ul>
								<ul class = "SN-choice">
									<h3>更多精选</h3>
									<li><a href = "">合作招商</a></li>
									<li><a href = "">京东通信</a></li>
									<li><a href = "">京东E卡</a></li>
									<li><a href = "">企业采购</a></li>
									<li><a href = "">服务市场</a></li>
									<li><a href = "">办公生活馆</a></li>
									<li><a href = "">乡村招募</a></li>
									<li><a href = "">校园加盟</a></li>
									<li><a href = "">京友邦</a></li>
									<li><a href = "">京东社区</a></li>
									<li><a href = "">游戏社区</a></li>
									<li><a href = "">知识产权维权</a></li>
								</ul>
							</div>
						</li>
						<li class = "separator"></li>
						<li class = "navse navse-list" @mouseover = "showsed(6)" @mouseout = "showses">
							<div class = "my-JD">
								<a class = "colors" href = "">手机京东</a>
							</div>
							<div class = "inpone-jd" v-if = "shows === 6">
								<span class = "san"></span>
								<ul class = "SJ-JD">
									<li>
										<img src = "./assets/JD-head-dh/SJJD.png"/>
										<div class = "SJ">
											<h4><a href = "">手机京东</a></h4>
											<p>新人专享大礼包</p>
											<div class = "tu">
												<a class = "pg-pone" href = ""></a>
												<a class = "az-pone" href = ""></a>
												<a class = "pb-pone" href = ""></a>
											</div>
										</div>
									</li>
									<li>
										<img src = "./assets/JD-head-dh/JDWX.jpg"/>
										<div class = "SJ">
											<h4><a href = "">关注京东微信</a></h4>
											<p>微信扫一扫关注新粉最高180元惊喜礼包</p>
										</div>
									</li>
									<li>
										<img src = "./assets/JD-head-dh/JDJR.jpg"/>
										<div class = "SJ">
											<h4><a href = "">京东金融客户端</a></h4>
											<p>新人专享大礼包</p>
											<div class = "tu">
												<a class = "pg-pone" href = ""></a>
												<a class = "az-pone" href = ""></a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<span class = "clr"></span>
			</div>
		</div>
		<div id = "logo-search">
			<div class = "logo"><a href = "#"><img src = "./assets/JD-head-dh/jdlogo-201708-@1x.png"></a></div>
			<div class= "search" @mouseleave = "searchYc">
				<div class = "kuang">
					<input @click = "searchXs" v-model = "message" type = "text" class = "text" placeholder = "只修不换"/>
					<button class = "button">搜索</button>
				</div>
				<ul class = "yu">
					<li><a href = "">24H极速装</a></li>
					<li><a href = "">节能空调</a></li>
					<li><a href = "">0元安装</a></li>
					<li><a href = "">智能空调</a></li>
					<li><a href = "">中央空调</a></li>
				</ul>
				<ul class = "lisi" v-if = "searchArr.length && searched === true">
					<li v-for = "lisis in searchArr">
						<div class = "lisi-item">{{ lisis.name }}</div>
						<div class = "lisi-count">约{{ lisis.count }}个商品</div>
					</li>
					<li @click = "closeed" class = "close">关闭</li>
				</ul>
			</div>
			<div class = "shopping" @mouseover = "gwlxs" @mouseout = "gwlyc">
				<div class = "gwc" :class = "{'gwc-list': isGwc}">
					<a href = "">我的购物车<i></i><span>0</span></a>
				</div>
				<div class = "shopping-my" v-show = "showp">
					<div class = "spacer"></div>
					<template v-if = "spsl.length">
						<!--<div class = "qwe"></div>-->
					</template>
					<template v-else-if = "spsl.length === 0">
						<div class = "prompt">
							<i></i>
							<p>购物车中还没有商品,赶紧选购吧!</p>
						</div>
					</template>
				</div>
			</div>
			<span class = "clr"></span>
		</div>
		<div id = "aside">
			<div class = "aside-right" v-clickoutside = "handleClose" :class = "{'aside-open' : asidepen}">
				<div class = "jbm-gwc">
					<h3 class = "shopping-head">
						<a href = "">
							<i class = "shopping-gwc"></i>
							<em>购物车</em>
						</a>
						<span @click = "closeds" class = "closed"></span>
					</h3>
					<div class = "shopping-center" :style = "{height: centerHt+'px'}">
						<div class = "shopping-DL">
							<span>还没有登录 , 登录后商品将被保存</span>
							<a href = "">登录</a>
						</div>
						<template v-if = "shoppings.length !== 0">
							<div class = "shopping-have"></div>
						</template>
						<template v-else-if = "shoppings.length === 0">
							<div class = "shopping-main">
								<i class = "i-shopping"></i>
								<div class = "shopping-empty">
									<p>购物车空空的 , 赶快去挑选心仪的商品吧~</p>
									<a href = "">去首页看看</a>
								</div>
							</div>
						</template>
					</div>
					<div class = "shopping-foot">
						<div class = "shopping-sum">
							<p><strong>{{ sps }}</strong>件商品</p>
							<p>共计 : <strong>¥{{ spzj }}</strong></p>
						</div>
						<a class = "shopping-account" href = "">去购物车结算</a>
					</div>
				</div>
				<ul class = "jbm-top">
					<li v-for = '(item,index) in jbm' @mouseover = "changesd(index)" @mouseout = "changeosd" class = "J-trigger" :class = 'item.jbmBq' @click = "zhixing(index)">
						<i class="tab-tip"></i>
						<i :class = 'item.emTabe'></i>
						<em class = "tab-text" :class = "{'tab-texted' : taBTexted === index}">{{ item.emText }}</em>
						<span class = "tab-sub">0</span>
						<div class = "tabs-tip">
							<span class = "tabs-tip-x"></span>
							<span>成功加入购物车!</span>
							<b></b>
						</div>
					</li>
				</ul>
				<ul class = "jbm-bottom">
					<li v-for = '(iotem,inden) in jbmed' @mouseover = "changeec(inden)" @mouseout = "changeosd" class = "J-trigger">
						<a :href = 'iotem.ljdz'>
							<i :class = 'iotem.emTabe'></i>
							<em class = "tab-text" :class = "{'tab-texted' : taBTextes === inden}">{{ iotem.emText }}</em>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'jdHead',
	components: {
	},
	data : function(){
		return {
			shows : 0,
			citysed : "北京",
			cityse : ['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'],
			mark : 0,
			showp : false,
			message : "",
			isGwc : false,
			spsl : [],
			searched : false,
			searchArr : [{name :'海尔冰箱',count : '1235'},{name :'西门子冰箱',count : '1235'}],
			jbm : [
				{jbmBq:"yh-trig",emTabe : "dic-yh",emText:"京东会员"},
				{jbmBq:"gwc-trig",emTabe : "dic-gwc",emText:"购物车"},
				{jbmBq:"gz-trig",emTabe : "dic-gz",emText:"我的关注"},
				{jbmBq:"xx-trig",emTabe : "dic-xx",emText:"我的消息"},
				{jbmBq:"zx-trig",emTabe : "dic-zx",emText:"咨询JIMI"}
			],
			jbmed : [
				{jbmBq:"",emTabe : "dic-db",emText:"顶部",ljdz:"#"},
				{jbmBq:"",emTabe : "dic-fk",emText:"反馈",ljdz:"#"}
			],
			shoppings : [],
			taBTexted : '',
			taBTextes : '',
			asidepen : false,
			centerHt : ""
		}
    },
    mounted () {
		setInterval(this.cenHt,0)	//这里是执行  让算出来的值从页面开始就执行
	},
	directives : {				//自定义指令
		clickoutside : {
			bind : function(el,binding,vnode){	//bind 只调用一次第一次绑定到元素时调用  执行函数 el表示所绑定的元素  binding 表示这个对象 vnode vue生成的虚拟节点
				function documentHandler (e) {	//
					if(el.contains(e.target)){	//监听 检测所绑定的元素里面是否包含了 点击时e.target出来的元素
						return false;			//如果包含就直接返回false
					}
					if(binding.expression){		//判断当前指令有没有写表达式  也就是 handleClose函数
						binding.value(e);		//执行这个 handleClose函数
					}
				}
				el._vueClickOutside_ = documentHandler;
				document.addEventListener('click',documentHandler);
			},
			unbind : function(el,binding){		//这个是用来移除事件监听的
				document.addEventListener('click',el._vueClickOutside_);
				delete el._vueClickOutside_;
			}
		}
	},
	methods: {
		showsed (a) {
			this.shows = a
		},
		showses () {
			this.shows = 0
		},
		change (i) {
			this.mark = i
		},
		citys (e) {		/*监听ul标签的点击事件  当点击到a标签时获取a标签里面的值赋给citysed*/
			if(e.target.tagName === "A"){
				this.citysed = e.target.innerText
			}
		},
		gwlxs () {
			this.isGwc = true,
			this.showp = true
		},
		gwlyc () {
			this.isGwc = false,
			this.showp = false
		},
		searchXs () {
			this.searched = true
		},
		searchYc () {
			this.searched = false
		},
		closeed () {
			this.searched = false
		},
		changesd (c) {
			this.taBTexted = c
		},
		changeosd () {
			this.taBTexted = '';
			this.taBTextes = ''
		},
		changeec (n) {
			this.taBTextes = n
		},
		zhixing (i) {
			if(i === 1){
				this.asidepen = true
			}
		},
		cenHt () {
			this.centerHt = document.documentElement.clientHeight-40-50	//这里只是给一个方法
		},
		closeds () {
			this.asidepen = false
		},
		handleClose () {
			this.asidepen = false
		}
	},
	computed : {
		sps: function(){
			var sps = 0;
			sps = this.shoppings.length;
			return sps
		},
		spzj: function(){
			var spzj = 0;
			for(var i=0,len = this.shoppings.length;i<len;i++){
				var item = this.shoppings[i]
				spzj += item.price * item.count
			}
			return spzj.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	}
}
</script>

<style scoped>
#head{width:100%;height:30px;line-height:30px;background:#e3e4e5;}
#head .head-cen{width:1210px;margin:0 auto;}
.home{float:left}
.JD-home,.area i,.area p,.navs-JD li,.tu a,.yu li,.prompt i,.prompt p{float:left;}
.JD-home i,.area i{float:left;width:20px;height:20px;margin-top:5px;margin-right:5px}
.JD-home i{background:url("./assets/JD-head-dh/imgssss/图片19.png") no-repeat -19px -16px;}
.area i{background:url("./assets/JD-head-dh/imgssss/图片23.png") no-repeat -25px -26px;}
.region{float:left;width:77px;margin-left:5px;position:relative}
.region:hover{cursor:default;}
.area{position:relative;height:30px}
.regions,.MY-jd,.purchase,.customer,.siteNavi,.inpone-jd{position:absolute;border:1px solid #cbcdcf;
border-top:none;padding:5px 0;z-index:50;background:#fff}
.regions{width:308px;left:-1px;}
.city{height:215px;}
.city li{float:left;width:60px;text-align:center}
.city li a{padding:5px 8px;}
.city a:hover{background:#cbcdcf;color:#ff0000}
.city li .city-li{background:#ff0000;color:#fff}
.Sites{margin:0px 20px;border-top:1px dashed #737373}
.Sites p{margin-top:10px}
.Sites ul{height:65px;margin:5px 0}
.Sites li{float:left;width:134px;height:26px;}
.Sites li i{display:inline-block;width:14px;height:14px;vertical-align:sub;margin-right:10px}
.Global{background:url("./assets/JD-head-dh/截图000.png") no-repeat 0px -1px}
.Poccnn{background:url("./assets/JD-head-dh/截图01.png") no-repeat 0px -1px}
.Indonesia{background:url("./assets/JD-head-dh/截图02.png") no-repeat 0px -1px}
.Espana{background:url("./assets/JD-head-dh/截图03.png") no-repeat 0px -1px}
.navs{float:right}
.colorse{color:#ff0000}
.separator{width:1px;height:12px;background:#737373;margin-top:9px;overflow:hidden}
.navse{margin:0 2px;position:relative}
.my-JD{position:relative;;padding:0 8px;cursor:default}
.JD-navse{width:52px;padding-right:22px}
.JD-navse i{float:right;width:20px;height:20px;background:url("./assets/JD-head-dh/imgssss/图片10.png") no-repeat -25px -17px;position:absolute;top:3px;right:3px}
.BJS:hover{background:#fff}
.colors:hover{color:#ff0000}
.navse .icon{vertical-align:sub;cursor:default;position:absolute;right:2px;top:0px}
.MY-jd{width:278px;left:-1px;}
.MY-jd .my-top{height:85px;padding-bottom:5px;border-bottom:1px dashed #cbcdcf}
.MY-jd li,.purchase li,.customer li{float:left;text-indent:15px}
.Sites a:hover,.MY-jd a:hover,.purchase a:hover,.customer a:hover,.siteNavi a:hover,.yu a:hover{color:#ff0000}
.MY-jd li{width:125px}
.purchase{width:153px;left:-1px;}
.customer{width:168px;left:-1px;}
.customer li{width:75px;}
.customer h4,.siteNavi h3{text-indent:15px;color:#2f2f2f}
.client{height:155px;border-bottom:1px dashed #cbcdcf}
.siteNavi{width:1208px;line-height:23px;right:-70px}
.siteNavi ul,.siteNavi li{float:left}
.siteNavi li{width:90px;text-indent:15px}
.SN-topis,.SN-channel{border-right:1px solid #cbcdcf;margin:10px 0}
.SN-topis{width:369px;}
.SN-channel{width:279px;}
.SN-life{width:279px;margin:10px 0}
.SN-choice{width:278px;border-left:1px solid #cbcdcf;margin:10px 0}
.inpone-jd{width:190px;right:0;background:#cbcdcf;padding:0}
.san{display:inline-block;width:0;height:0;border-left:5px solid transparent;position:absolute;
border-right:5px solid transparent;border-bottom:5px solid #fff;top:-5px;right:30px}
.SJ-JD li img{position:absolute;left:5px;top:14px;width:70px;height:70px;border:1px solid #cbcdcf;padding:2px}
.SJ-JD li{position:relative;border-bottom:1px solid #cbcdcf;background:#fff;
line-height:17px;padding:15px 5px}
.SJ-JD .SJ{margin:0 10px 0 86px;min-height:70px}
.SJ h4 a{font-size:12px;line-height:17px;}
.SJ-JD p{margin:3px 0;line-height:14px;color:#F10214}
.tu{height:25px;overflow:hidden}
.tu a{float:left;width:25px;height:25px;}
.pg-pone{background:url("./assets/JD-head-dh/imgssss/截图03.png") no-repeat}
.az-pone{background:url("./assets/JD-head-dh/imgssss/截图04.png") no-repeat}
.pb-pone{background:url("./assets/JD-head-dh/imgssss/截图05.png") no-repeat}
#logo-search{position:relative;width:1210px;margin:0 auto}
.logo{position:relative;z-index:12;float:left;width:276px;height:50px;margin:15px 0 22px}
.logo a{display:block;margin-top:2px;width:134px;height:42px;background-size:134px 42px;color:#fff;
background:url("./assets/JD-head-dh/jdlogo-201708-@1x.png") no-repeat}
.search{position:relative;float:left;margin:27px 30px 0 95px}
.kuang{width:532px;height:38px;border:2px #ff0000 solid;}
.kuang .text{width:440px;height:24px;line-height:24px;border:0px;outline:0;padding:7px 6px}
.kuang .button{width:80px;height:38px;border:0px;outline:0;position:absolute;right:2px;
background:#ff0000;color:#fff;font-size:16px;cursor:pointer}
.yu{height:20px;line-height:20px;overflow:hidden}
.yu li{margin-right:10px}
.lisi{width:534px;position:absolute;top:41px;border:1px solid #ccc;background:#fff;overflow:hidden;z-index:45}
.lisi li{padding:1px 6px;line-height:22px;cursor:pointer;overflow:hidden}
.lisi-item{float:left;width:190px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}
.lisi-count{overflow:hidden;text-align:right;color:#aaa}
.close{border:1px #efefef solid;text-align:right}
.search .lisi li:hover{background:rgb(255,223,198)}
.search-lisi{float:left;color:#005aa0;width:190px}
.search-count{float:right;color:#aaa}
.search-count a{color:#005aa0}
.shopping{height:36px;position:relative;float:left;text-align:center;margin-top:27px;
line-height:36px;z-index:11}
.gwc{width:91px;height:40px;position:absolute;border:1px solid #DFDFDF;background:#F9F9F9;padding:0 28px 0 20px;}
.gwc i{float:right;width:20px;height:20px;background:url("./assets/JD-head-dh/imgssss/图片15.png") no-repeat -18px -17px;margin-top:8px;margin-right:2px}
.gwc:hover{background:#fff;box-shadow: 0 0 5px rgba(0,0,0,.2)}
.gwc-list{box-shadow:0 0 5px rgba(0,0,0,.2);background:#fff;border:1px solid #ddd;}
.shopping a{color:#ff0000}
.shopping .icon{font-size:30px;vertical-align:middle}
.shopping span{display:inline-block;width:14px;height:15px;border-radius:7px;background:#cc0000;
letter-spacing:-1px;position:absolute;top:7px;left:105px;padding:1px;line-height:14px;color:#fff}
.spacer{position:absolute;right:0;top:-7px;width:139px;height:12px;background:#fff}
.shopping-my{width:308px;position:absolute;top:42px;left:-169px;background:#fff;border:1px solid #ddd;
box-shadow:0 0 5px rgba(0,0,0,.2)}
.prompt{padding:10px 15px;padding-left:30px;height:49px;line-height:49px;color:#999}
.prompt i{float:left;width:56px;height:49px;background:url("./assets/JD-head-dh/imgssss/图片16.png") no-repeat -8px -10px}
#aside .aside-open{right:270px}
.aside-right{position:fixed;top:0;right:0;height:100%;z-index:9999;border-right:6px solid #7a6e6e;transition:right .3s ease-in-out}
.jbm-gwc{width:270px;height:100%;position:absolute;background:#eceaea;left:6px;z-index:2;}
.shopping-head{position:relative;height:40px;line-height:40px;font-size:16px}
.shopping-head a{display:inline-block;height:40px;color:rgba(98,80,80)}
.shopping-gwc{display:inline-block;width:20px;height:18px;margin-right:4px;margin-left:10px;
margin-top:11px;background:url("./assets/JD-head-dh/imgssss/图片14.png") no-repeat -19px -19px;vertical-align:top}
.shopping-head span{display:inline-block;width:12px;height:12px;position:absolute;right:8px;top:16px;
cursor:pointer;background:url("./assets/JD-head-dh/无.png") no-repeat -14px -9px;transition:transform .2s ease-in-out}
.shopping-head span:hover{transform:rotateZ(360deg)}
.shopping-center{position:relative;width:100%;overflow-x:hidden;overflow-y:auto}
.shopping-DL{padding:6px 5px;border:1px solid #edd28b;background:#fff;text-align:center}
.shopping-DL span{display:inline-block;line-height:20px;color:#333}
.shopping-DL a{display:inline-block;height:20px;line-height:20px;padding:0 5px;margin-left:5px;
color:#fff;background:#c81623}
.shopping-main{width:270px;position:absolute;left:0;top:50%;text-align:center;margin-top:-60px}
.i-shopping{display:inline-block;width:113px;height:35px;background:url("./assets/JD-head-dh/jdm-toolbar-face.png") no-repeat}
.shopping-empty{line-height:20px}
.shopping-empty a{color:#c81623}
.shopping-foot{width:100%;height:50px;position:absolute;bottom:0;}
.shopping-sum{height:40px;padding:5px 110px 5px 5px;position:relative;line-height:20px}
.shopping-sum strong{color:#c81623;font-family:verdana}
.shopping-account{position:absolute;top:7px;right:5px;width:110px;height:35px;text-align:center;
color:#fff;font:16px/35px 微软雅黑;background:rgb(200,22,35)}
.jbm-top{width:35px;position:absolute;top:50%;margin-top:-61px;left:-29px}
.jbm-top li,.jbm-bottom li{position:relative;width:35px;height:35px;margin-bottom:1px;cursor:pointer;
border-radius:3px 0 0 3px;background:#7a6e6e}
.dic-yh,.dic-gwc,.dic-gz,.dic-xx,.dic-zx,.dic-db,.dic-fk{position:relative;display:inline-block;width:34px;height:35px;margin-left:1px;z-index:2;background-color:#7a6e6e}
 li:hover .dic-yh,li:hover .dic-gwc,li:hover .dic-gz,li:hover .dic-xx,li:hover .dic-zx,li:hover .dic-db,li:hover .dic-fk{background-color:#c81623;z-index:5}
.dic-yh{background-image:url("./assets/JD-head-dh/imgssss/图片20.png");background-repeat:no-repeat;
background-position:-14px -2px}
.dic-gwc{background-image:url("./assets/JD-head-dh/imgssss/图片14.png");background-repeat:no-repeat;
background-position:-14px -10px}
.dic-gz{background-image:url("./assets/JD-head-dh/imgssss/图片21.png");background-repeat:no-repeat;
background-position:-14px -8px}
.dic-xx{background-image:url("./assets/JD-head-dh/imgssss/图片22.png");background-repeat:no-repeat;
background-position:-14px -8px}
.dic-zx{background-image:url("./assets/JD-head-dh/imgssss/图片18.png");background-repeat:no-repeat;
background-position:-12px -8px}
.dic-db{background-image:url("./assets/JD-head-dh/imgssss/图片9.png");background-repeat:no-repeat;
background-position:-12px -8px}
.dic-fk{background-image:url("./assets/JD-head-dh/imgssss/图片17.png");background-repeat:no-repeat;
background-position:-12px -8px}
.aside-open .gwc-trig .tab-text{display:none}
.tab-tip{position:absolute;top:8px;right:10px;width:6px;height:6px;background:#c81623;z-index:3;
border-radius:6px;}
.gwc-trig .tab-tip,.gz-trig .tab-tip,.xx-trig .tab-tip,.zx-trig .tab-tip{display:none}
.tab-text{display:inline-block;width:62px;height:35px;line-height:35px;color:#fff;text-align:center;z-index:1;position:absolute;left:35px;top:0;background:rgba(122,110,110);font-style:normal;
border-radius:3px 0 0 3px;transition:left 0.3s ease-in-out 0.1s;}
.tab-texted{left:-60px;background-color:#c81623}
.tab-sub{position:absolute;z-index:3;right:2px;top:-5px;height:11px;padding:1px 2px;text-align:center;
border:1px solid#b61d1d;overflow:hidden;color:#fff;min-width:11px;border-radius:10px;display:none;
background:#b61d1d;}
.tabs-tip{position:absolute;top:0;right:35px;height:35px;line-height:35px;white-space:nowrap;
border-radius:5px;background:#c81623;color:#fff;padding:0 10px;padding-left:30px;display:none}
.tabs-tip .tabs-tip-x{width:15px;height:15px;position:absolute;top:10px;left:10px;font-size:13px;
background:url("./assets/JD-head-dh/无标题.png") no-repeat -7px -10px}
.jbm-bottom{position:absolute;bottom:-1px;left:-29px}
.tabs-tip b{width:0;height:0;border:transparent 6px dashed;border-left:6px solid #c81623;
position:absolute;right:-12px;top:12px;z-index:20;}
</style>