<template>
  <div id="app" v-if = "isRouterAlive">
    <div class = "sec">
      <div class = "spqjd">
        <div class = "sec-qjd">
          <a v-for = "sec in jdSps.listed" :style = "sec" class = "sptj" :href = "sec.hre"></a>
        </div>
      </div>
      <div class = "dpfl">
        <div class = "sec-fl">
          <ul class = "s-fl">
            <li @mouseenter = "qbflxs(index)" @mouseleave = "qbflyc" v-for = "(ite,index) in jdSps.list" class = "menu">
              <a class = "fl-h" href = "">{{ ite.opl }}<span v-if = "ite.opi.length" class = "arrow"></span></a>
              <div v-if = "ite.opi.length" v-show = "show" class = "menu-fl">
                <dl v-for = "ites in ite.opi">
                  <dt><a href = "">{{ ites.sp }}</a></dt>
                  <dd>
                    <ul>
                      <li v-for = "itesd in ites.pishu"><a href = "">{{ itesd }}</a></li>
                    </ul>
                  </dd>
                </dl>
                <div class = "sec-dp">
                  <a href = "">查看所有商品</a>
                </div>
              </div>
            </li>
          </ul>
          <div class = "ss-fl">
            <input v-model = "ssmc" type = "text" class = "ss-text" placeholder = "一级能耗" size = "60" maxlength = "60"/>
            <input type = "button" class = "ss-sub">
          </div>
        </div>
      </div>
    </div>
    <div class = "lj-dp">
      <div class = "cen">
        <ul class = "lj-lef clearfix">
          <li :class = "{'sep':index%2 !== 0,'lj-pm':index === listesd.length-1}" @mouseenter = sbyr(index) @mouseleave =sbyc  v-for = "(ies,index) in listesd">
            <span v-if = "index%2 !== 0"> > </span>
            <a v-if = "index%2 === 0" href = "">{{ ies.jdlj }}</a>
            <div v-if = "ies.jdtjlj.length" class = "lef-hove">
              <div :class = "{'aux-hove':index === 0,'content':index === 1,'contes':index === 1&&showed === false}" v-for = "(its,index) in ies.jdtjlj">
                <a v-if = "index === 0" href = "">{{ its.sp }}</a>
                <span v-if = "index === 0"></span>
                <ul v-if = "index === 1" class = "hove-con">
                  <li v-for = "iop in its.tjsp">
                    <div class = "p-img">
                      <a href = "">
                        <img width = "65" height = "65" :alt = "iop.pname" :src = "iop.pimg"/>
                      </a>
                    </div>
                    <div class = "p-name">
                      <a href = "">{{iop.pname}}</a>
                    </div>
                    <div class = "p-price">
                      <strong>{{iop.pprice}}</strong>
                    </div>
                  </li>
                </ul>
                <ul v-if = "index === 1" class = "hove-tent">
                  <li v-for = "iop in its.qtpp"><a href = "">{{iop}}</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class = "li-righ clearfix">
          <div v-if = "sfzy === true" class = "ziying">
            <em>
              <span>JD</span>自营
            </em>
          </div>
          <ul class = "li-qjd" @mouseenter = "sbyrs" @mouseleave = "sbycs">
            <li v-for = "(pie,index) in jdSps.pmie" :class = "{'jd-dm':index === 0,'jd-kf':index === 1,'jd-gz':index === 2,'jdpsj':index === 3,'psjd' : index === 3&& jdkf === true}">
              <i v-if = "index === 1 || index === 2" :class = "{'sprite-im':index === 1}"></i>
              <a v-if = "index !== 3" href = "">{{pie.jdqj}}</a>
              <div v-if = "pie.dperm !== ''" class = "jd-dpsjd">
                <div class = "pop-kf">
                  <div>客服</div>
                  <div title = "联系客服" class = "lxkf">
                    <i class = "sprite-im"></i> 联系客服
                  </div>
                </div>
                <div class = "pop-sjxd">
                  <div class = "sj-ewm">
                    <img width = "118" height = "118" :src = "pie.dperm"/>
                  </div>
                  <p>手机下单</p>
                </div>
                <div class = "pop-gg">
                  <a class = "btn-def" href = "">
                    <i></i>
                    <span>进店逛逛</span>
                  </a>
                  <span class = "spetor"></span>
                  <a class = "btn-def" href = "">
                    <i></i>
                    <span>关注店铺</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class = "clr"></div>
      </div>
    </div>
    <section>
      <div class = "sectoes clearfix">
        <jdSpfdxg></jdSpfdxg>
        <div class = "dprn">
          <div class = "dpsp-pm">
            <p class = "pm-name">{{ jdfLSP.pmName }}</p>
            <p :title = "jdspyTb.tit+jdspyTb.tita" class = "pm-sm" >{{ jdspyTb.tit }}<a href = "">{{ jdspyTb.tita }}</a></p>
            <jdMsdjs/>
            <div class = "jdj-cx">
              <div class = "jdj clearfix">
                <div class = "sum-zz">京 东 价</div>
                <div class = "sum-yw">
                  <span v-for = "(ice,index) in jdfLSP.spice" :class = "{'jdj-b':index === 0,'jdjing':index === 1}">
                    <span v-if = "ice.hb !== ''">{{ ice.hb }}</span>
                    <span>{{ ice.jdj }}</span>
                  </span>
                  <a href = "">降价通知</a>
                </div>
              </div>
              <div class = "jdpj">
                <div v-for = "(ps,index) in jdfLSP.pjzs" :class = "{'comment':index === 0,'buy-rate':index === 1}" :key = "index">
                  <p>{{ ps.bt }}</p>
                  <a href = "">{{ ps.zs }}</a>
                </div>
              </div>
              <div class = "jdcx clearfix">
                <div class = "sum-zz">促&nbsp;&nbsp;销</div>
                <div class = "sum-yw clearfix">
                  <div class = "cx-zp">
                    <div v-for = "(jdc,index) in jdfLSP.jdcx" class = "J-pro-jifs">
                      <div v-if = "jdc.jdzp !== ''" v-for = "jc in jdc.jdzp" class = "J-gifzp clearfix">
                        <span class = "zp">
                          <em>{{ jc.cxlx }}</em>
                        </span>
                        <div class = "prom-list"">
                          <div class = "prom-list-item">
                            <a title = "空调首年安心享" href = ""><img width = "25" height = "25" :src = "jc.anx" style = "display:block"/></a>
                            <em class = "cxcs">{{ jc.zssl }}</em>
                          </div>
                          <div style = "color:#999">(赠完即止)</div>
                        </div>
                      </div>
                      <div v-if = "jdc.jdms !== ''" v-for = "jd in jdc.jdms" class = "J-pro-m">
                        <em class = "hl_bg">{{ jd.cxlx }}</em>
                        <em class = "prom-mz">{{ jd.anx }}</em>
                        <a href = "">详情 <i class = "s-arrpw">>></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "dpsp-zz">
            <div class = "summar-zzyw clearfix" v-if = "jdSps.zzyw !== ''">
              <div class = "sum-zz">增值业务</div>
              <div class = "sum-yw">
                <ul class = "sum-yw-y clearfix">
                  <li v-for = "zw in jdSps.zzyw">
                    <a @mouseenter = aaa(1) @mouseleave = bbb class = "mouseove" href = "">
                      <i v-if = "zw.bq === true"></i>
                      <span>{{ zw.zznr }}</span>
                    </a>
                    <div class = "tips"  v-if = "zw.bqsm !== '' && tps === 1">
                      <div class = "quest-arrow"></div>
                      <div class = "quest-content">
                        <p class = "quest-dd">{{ zw.bqsm }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class = "summar-stok">
              <div class = "sum-zz">配 送 至</div>
              <div class = "sum-yw clearfix">
                <jdPsdz></jdPsdz>
                <div class = "stok-prom">{{ jdfLSP.sfyh }}</div>
                <div class = "promise-ico">
                  <p>支持</p>
                  <ul class = "promise8">
                    <li v-for = "(pp,index) in ppp">
                      <i v-if = "index%2 !== 0">|</i>
                      <a v-if = "index%2 === 0" href = "">{{ pp }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class = "summar-suply">
              <div class = "sum-zz">&nbsp;&nbsp;</div>
              <div class = "sum-yw">
                <p>由 <span>{{ jdSps.fhf }}</span> 发货, <a href = "">{{ jdSps.sdm }}</a> 提供售后服务, 18:00前发单,预计<b>{{ pssj }}</b>送达</p>
              </div>
            </div>
            <div class = "summar-weight clearfix">
              <div class = "sum-zz">重&nbsp;&nbsp;量</div>
              <div class = "sum-yw">{{ jdSps.hpzl }}</div>
            </div>
            <div class = "choose-stts clearfix">
              <div class = "sum-zz">选择匹数</div>
              <div class = "sum-yw">
                <ul class = "clearfix">
                  <li @click = chots(oost,index) v-for = "(oost,index) in jdSps.ktps" :class = "{'selected':choosts === index}" :title = "oost.pName" :data-fl = "oost.daFl">
                    <a href = "#none">
                      <img width = "40" height = "40" :src = "oost.pImg">
                      <i>{{ oost.pName }}</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class = "choose-service  clearfix" v-if = "zzbz !== ''">
              <div class = "sum-zz">增值保障</div>
              <div class = "sum-yw  clearfix">
                <jdTcxx :zzfwbz = 'zzbz'  @owhfidwe = 'poiuy'></jdTcxx>
                <div class = "service-tips" @mouseenter = aaa(2) @mouseleave = bbb>
                  <a href = ""><i class = "service-quest"></i></a>
                  <div class = "tips" v-if = "tps === 2">
                    <div class = "quest-arrow"></div>
                    <div class = "quest-content">
                      <p class = "quest-dd">增值保障是指凡在京东购买商品或服务的消费者，在保障期间内遇到无论是正常使用中的问题还是意外事故，即可享受增值保障服务。保障内容包括：延长保修、只换不修、意外保护、服务保障。覆盖家电、手机数码、电脑办公、汽车用品、服饰家居等商品。</p>
                      <p class = "quest-p">增值保障服务，只能提供增值税普通电子发票，如有疑问，请与在线客服联系</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "choose-JDservice clearfix" v-if = "Jdfws !== ''">
              <div class = "sum-zz">京东服务</div>
              <div class = "sum-yw  clearfix">
                 <jdTcxx :zzfwbz = 'Jdfws'  @owhfidwe = 'poiuy'></jdTcxx>
                <div class = "service-tips" @mouseenter = aaa(3) @mouseleave = bbb>
                  <a href = ""><i class = "service-quest"></i></a>
                  <div class = "tips" v-if = "tps === 3">
                    <div class = "quest-arrow"></div>
                    <div class = "quest-content">
                      <p class = "quest-dd">京东服务+，为用户打造统一、标准化的服务体验，将服务产品化，形成覆盖零售领域全链条服务、具备专业知识的新一代服务生态平台。服务产品内容包括：安装服务、清洗保养、检测维修、企悦服务等，覆盖家电、手机数码、电脑办公、居家生活、服饰等商品。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "choose-JDbaitiao clearfix">
              <div class = "sum-zz">白条分期</div>
              <div class = "sum-yw">
                <ul class = "clearfix">
                  <li v-for = "(Jdbt,index) in Jdbtfq" class = "service-hover" @mouseenter = "Jdseri(index)" @mouseleave = "Jdserie" :key = "index" :class = "{'disabled':lkjh.length,'selected':Jdserts === Jdbt&&Jdserts !== ''}" @click = Jdser(Jdbt)>
                    <a class = "xuxian" href = "javascript:;">{{ Jdbt.fjq }}</a>
                    <div class = "baitiao-tips" v-if = "Jdetsi === index">
                      <p>{{ Jdbt.fqsm }}</p>
                    </div>
                  </li>
                  <li class = "service-tips">
                    <a href = "javascript:;"><i @mouseenter = aaa(4) @mouseleave = bbb class = "service-youhui mouseove"></i></a>
                    <div class = "tips" v-if = "tps === 4">
                      <div class = "quest-arrow"></div>
                      <div class = "quest-content">
                        <p class = "quest-dd">【白条支付】首单享立减优惠</p>
                      </div>
                    </div>
                  </li>
                  <li class = "service-tips">
                    <a href = "javascript:;"><i @mouseenter = aaa(5) @mouseleave = bbb class = "service-siyi mouseove"></i></a>
                    <div class = "tips" v-if = "tps === 5">
                      <div class = "quest-arrow"></div>
                      <div class = "quest-content">
                        <p class = "quest-dd">1、实际分期金额及手续费以白条剩余额度及收银台优惠为准<br/>2、什么是白条分期?<br/>白条是一种"先消费,后付款"的支付方式,使用白条可以享受先用后付,以及最长36期的分期还款.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class = "choose-btns clearfix">
              <div class = "choose-amount">
                <input v-model = 'messages' class = "text" type = "text" placeholder = "1">
                <a @click = upreduce class = "btn-reduce" :class = "{'disabled':messages === 1}" href = "javascript:;">-</a>
                <a @click = daunadd class = "btn-add" href = "javascript:;">+</a>
              </div>
              <a style = "display:none" class = "btn-spec1 btn-lg" href = "JavaScript:;">选择号码和套餐</a>
              <a class = "btn-spec1 btn-lg" href = "JavaScript:;">加入购物车</a>
              <a v-if = "Jdserts !== ''" class = "btn-spec2 dbt btn-lg" href = "JavaScript:;">打白条</a>
              <a style = "display:none" class = "btn-spec2 btn-lg" href = "JavaScript:;">使用金采</a>
              <a v-if = "jdSps.sfyh === '无货'" class = "btn-spec3 btn-lg" href = "JavaScript:;">到货通知</a>
            </div>
            <div class = "local-tips">
              <div class = "sum-zz">本地活动</div>
              <div class = "sum-yw">
                <ul class = "clearfix">
                  <li>· <a href = "">企采低至4折 >></a></li>
                  <li>· <a href = "">新家装主义 >></a></li>
                </ul>
              </div>
            </div>
            <div class = "summary-tips">
              <div class = "sum-zz">温馨提示</div>
              <div class = "sum-yw">
                <ul class = "clearfix">
                  <li>· 支持7天无理由退货(安装后不支持)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <jdTjlb :jDzts = "jdSps.dztj" :jMds = "jdSps.sdm" :jQjdt = "jdSps.ktqjd"></jdTjlb>
      </div>
      <jdSppj :tBmis = "jdSps.tabMin" :kTps = "jdSps.ktpjs"></jdSppj>
    </section>
  </div>
</template>

<script>
import jdSpfdxg from './components/jdSpfdxg'
import jdMsdjs from './components/jdMsdjs'
import jdTcxx from './components/jdTcxx'
import jdPsdz from './components/jdPsdz'
import jdTjlb from './components/jdTjlb'
import jdSppj from './components/jdSppj'

export default {
  name: 'App',
  /*provide (){
     return {
       reload:this.reload
     }
  },*/
  components: {
    jdSpfdxg,
    jdMsdjs,
    jdTcxx,
    jdPsdz,
    jdTjlb,
    jdSppj
  },
  data : function(){
    return {
      isRouterAlive : true,
      show : false,     //导航栏目  全部分类的隐藏和显示
      ssmc : "",        //导航栏目  搜索框的内容
      listesd : '',     //当前页路径
      showed : true,    //当前页路径的推荐商品显示和隐藏
      sfzy : true,      //是否为京东自营商品
      jdkf : false,     //控制联系客服及二维码的显示和隐藏
      tps : '',         //商品详情区域 说明的显示和隐藏
      jdspyTb : [],     //商品详情区域 主要商品名及商品说明
      ppp : '',         //商品详情 配送区域 免费服务项目
      choosts : 0,      //商品匹数分类
      choostes : '',
      zzbz : [],        //商品详情区域  增值保障内容
      Jdfws : [],       //商品详情区域  京东服务内容
      Jdbtfq : [],      //商品详情区域  白条分期内容
      lkjh : [],        //控制打白条按钮的显示和隐藏
      Jdserts : '',     //选择了白条分期内容
      Jdetsi : '',      //控制白条分期内容的框
      messages : 1,     //控制购买商品的数量
      jdSps : [],       //axios获取的页面主体
      jdfLSP : []       //axios获取的商品信息
    }
  },
  mounted : function(){
    var _this = this
    this.$http.get('/static/asspdys.json')
    .then(function(response){
      _this.jdSps = response.data;
      var lll = response.data.listesd
      for(var i=0;i<lll.length;i++){
        if(i%2 !== 0){
          lll.splice(i,0,{jdlj : "",jdtjlj : ""})
        }
      }
      _this.listesd = lll
      var kkk = response.data.ppp
      for(var i=0;i<kkk.length;i++){
        if(i%2 !== 0){
          kkk.splice(i,0,'')
        }
      }
      _this.ppp = kkk
      console.log(_this.jdSps)
    })
    this.chotesed(this.choostes)
  },
  methods : {
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    },
    qbflxs : function(i){
      if(i === 1){
        this.show = true
      }
    },
    qbflyc : function(){
      this.show = false
    },
    sbyr : function(p){
      if(p === 6){
        this.showed = false
      }
    },
    sbyc : function(){
      this.showed = true
    },
    sbyrs : function(){
      this.jdkf = true
    },
    sbycs : function(){
      this.jdkf = false
    },
    chots : function(gnir,nm){
      var _this = this
      this.choostes = gnir.daFl
      this.choosts = nm
      /*this.$nextTick(function(){      //延时执行回调渲染
        _this.chotesed(_this.choostes)
      })*/
      this.chotesed(this.choostes)  //直接渲染
      this.reload()
    },
    chotesed : function(tpoies){
      var _this = this
      this.$http.get('/static/ktpzxzs'+ tpoies +'.json')
        .then(function(response){
        _this.jdfLSP = response.data;
        _this.jdspyTb = response.data.pmSm
        _this.zzbz = response.data.zzbz
        _this.Jdfws = response.data.Jdfws
        _this.Jdbtfq = response.data.Jdbtfq
        window.scrollTo(0,0)        //返回页面顶端
      })
    },
    poiuy : function(lkjh){
      if(lkjh.join('') === ''){
        this.lkjh = ''
      }else{
        this.lkjh = lkjh
        this.Jdserts = ''
      }
    },
    addzero : function(num){
      if(num < 10){
        return '0' + num
      }else{
        return num
      }
    },
    Jdser : function(numes){
      if(this.Jdserts === numes || this.lkjh.length){
        this.Jdserts = ''
      }else{
        this.Jdserts = numes
      }
    },
    Jdseri : function(nium){
      this.Jdetsi = nium
    },
    Jdserie : function(){
      this.Jdetsi = ''
    },
    upreduce : function(){
      this.messages --
      if(this.messages <= 1){
        this.messages = 1
      }
    },
    daunadd : function(){
      this.messages ++
    },
    aaa : function(i){
      this.tps = i
    },
    bbb : function(){
      this.tps = ''
    }
  },
  computed : {
    pssj : function(){
      var riqi = new Date()
      return '明天(' + (this.addzero(riqi.getMonth()+1)) + '月' + (this.addzero(riqi.getDate()+1)) + '日)'
    }
  }
}
</script>

<style>
*{margin:0;padding:0}
ul{list-style:none}
a{color:#666;text-decoration:none}
i,em{font-style:normal}
img{border:0;vertical-align:middle}
body{font:12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\5b8b\4f53",sans-serif;color:#666;
-webkit-font-smoothing:antialiased}
section,.cen{width:1210px;margin:0 auto}
.clr{display:block;overflow:hidden;clear:both;height:0;line-height:0;font-size:0}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.p-price strong{color:#e4393c;font-size:14px;font-family:Verdana}
.current{background:#e4393c;color:#fff;cursor:default}
.hove-con,.p-img,.p-name,.p-price{overflow:hidden}
.p-img{padding-bottom:5px}

.sec{position:relative}
.spqjd{position:relative;height:110px;overflow:hidden}
.sec-qjd{position:absolute;width:1920px;height:110px;text-align:center;left:50%;margin-left:-960px;
overflow:hidden;background:url("./assets/5b72b2deN881f14d5.jpg") no-repeat}
.sptj{position:absolute;height:100px;top:4px}
.dpfl{width:100%;background:#004DA0}
.sec-fl{position:relative;margin:0 auto;height:40px;font-size:14px;color:#333;width:990px}
.sec-fl .s-fl{width:100%;height:40px;}
.menu{float:left;line-height:24px;height:24px;padding:8px 0;border-radius:12px}
.menu a{font-weight:bold;color:#fff;position:relative;display:block;padding:0 15px;border-radius:12px}
.menu:hover .fl-h{background:#000}
.sec-fl .menu .arrow{display:inline-block;vertical-align:middle;margin-left:10px;width:0;height:0;
border-left:5px dashed transparent;border-right:5px dashed transparent;border-top:5px #666 solid}
.menu-fl{position:absolute;left:0;top:39px;right:0;z-index:99;padding:20px 40px;
border:1px #bebab0 solid;background:rgba(247,242,234,0.9)}
.menu-fl dl{height:172px;float:left}
.menu-fl dt{margin-bottom:13px;height:54px;line-height:54px;border-bottom:1px #c9c9c9 dashed;padding:0 20px}
.menu-fl dt a{font-size:14px;font-weight:bold;color:#333;line-height:24px;display:inline-block;
height:24px;padding:0 10px;margin-left:-10px;border-radius:12px;min-width:74px}
.menu-fl dt a:hover{border:1px #e4393c solid;color:#e4393c}
.menu-fl dd{padding:0 20px}
.menu-fl dd li{font-size:12px;height:26px;line-height:26px}
.menu-fl dd li a{color:#666}
.menu-fl dd li a:hover,.lj-lef a:hover,.li-qjd a:hover{color:#e4393c}
.sec-dp{padding-left:20px;clear:both}
.sec-dp a{font-weight:bold;color:#000;line-height:24px;display:inline-block;border:1px #666 solid;
height:24px;padding:0 10px;border-radius:12px;}
.ss-fl{position:absolute;top:8px;right:0}
.ss-text{padding:0 0 0 10px;width:130px;line-height:22px;height:22px;background-color:#fff;color:#c9c9c9;
vertical-align:top;outline:none;border:1px #e1e1e1 solid;border-top-left-radius:11px;border-bottom-left-radius:11px}
.ss-sub{margin-left:-5px;padding:0 10px;border:0;height:24px;width:46px;cursor:pointer;border-top-right-radius:11px;
border-bottom-right-radius:11px;background:#333 url("./assets/567cb046Ncc8f504a.png") no-repeat center}
.lj-dp{background:#f2f2f2;clear:both;position:relative}
.lj-dp .lj-lef{float:left;padding:13px 0 9px;position:relative}
.lj-dp .lj-lef li,.li-qjd li{float:left}
.lj-dp .lj-lef .lj-pm{width:120px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.lj-dp .lj-lef .sep{font-family:simsun;padding:0 10px}
.lef-hove{position:relative;top:-2px}
.aux-hove{border-bottom:none;padding-bottom:1px;height:20px;line-height:20px;background:#fff;
border:1px #ccc solid;padding:0;float:left;cursor:pointer;position:relative;z-index:40}
.aux-hove a{padding:0 5px}
.lef-hove:hover .aux-hove{border-bottom-color:#fff}
.aux-hove span{margin-left:0;display:inline-block;vertical-align:middle;width:13px;height:7px;
margin:0 10px 0 5px;background:url("./assets/arr-close.png") no-repeat}
.lef-hove .contes{display:block}
.content{position:absolute;background:#fff;right:auto;left:0;border:1px #ccc solid;top:20px;z-index:20;
width:660px;padding:10px 0;display:none}
.hove-con{margin:10px 0;border-bottom:1px #dfdfdf dotted;padding:0 10px 10px 10px}
.hove-con li{width:206px;height:65px;margin-left:5px;position:relative}
.hove-con li .p-img{float:left;margin-right:5px;padding-bottom:5px}
.hove-con li .p-name{max-height:3em;min-height:36px;line-height:1.5em;margin-bottom:5px}
.hove-tent li{display:inline-block;width:110px;padding-left:15px;margin-top:5px;overflow:hidden;
white-space:nowrap;text-overflow:ellipsis}
.li-righ{float:right;position:relative;padding:13px 0 0}
.ziying{float:left;margin-right:10px;position:relative;cursor:pointer}
.ziying em{display:inline-block;height:14px;padding:1px;line-height:14px;font-family:arial,simsun;
color:#fff;background:#e4393c;margin-left:6px;cursor:pointer}
.ziying em span{display:inline-block;padding:0 1px;background:#fff;color:#e4393c;font-weight:700;
margin-right:2px}
.li-qjd{position:relative;float:right}
.jd-dm{margin-right:10px}
.jd-kf,.jd-gz{cursor:pointer;margin-right:10px;white-space:nowrap}
.sprite-im,.jd-gz i{display:inline-block;width:16px;vertical-align:text-top;height:16px;
margin-right:2px;background:url("./assets/__sprite.png") no-repeat}
.sprite-im{background-position:-34px -16px}
.jd-gz i{background-position:-34px 0px}
.li-righ .li-qjd .psjd .jd-dpsjd{display:block}
.li-qjd .jd-dpsjd{clear:both;right:0;width:215px;border:1px #ccc solid;background:#fff;top:27px;
position:absolute;z-index:666;display:none}
.pop-kf{border-top:1px #e6e6e6 dotted;margin:0 15px;padding:10px 0}
.pop-sjxd{border-top:1px dotted #e6e6e6;margin:0 15px;padding:14px 0 10px;text-align:center}
.sj-ewm img{border:1px #cecece solid}
.pop-sjxd p{padding-top:3px}
.pop-gg{background:#f6f6f6;text-align:center}
.pop-gg .btn-def{display:inline-block;vertical-align:middle;height:34px;line-height:34px}
.pop-gg .btn-def:first-of-type{margin-right:5px}
.pop-gg .btn-def i{display:inline-block;vertical-align:-2px;margin-right:5px;width:16px;height:16px;
background:url("./assets/__sprite.png") no-repeat}
.pop-gg .btn-def:first-of-type i{background-position:-16px -18px}
.pop-gg .btn-def:last-of-type i{background-position:-34px 0}
.spetor{display:inline-block;margin:0 8px;background:#d1d1d1;width:1px;height:14px;vertical-align:middle}
.sectoes{position:relative;margin-top:10px;margin-bottom:10px}
.dprn{width:590px;float:left;margin-left:30px;min-height:479px;margin-right:24px;}
.dpsp-pm{padding:10px 0 5px 0}
.dpsp-pm .pm-name{font-size:16px;font-weight:700;line-height:28px;margin-bottom:5px}
.dpsp-pm .pm-sm{width:590px;max-height:3em;white-space:normal;overflow:hidden;color:#e4393c;
margin-bottom:5px;line-height:1.5em;text-overflow:ellipsis}
.dpsp-pm .pm-sm a{text-decoration:underline;color:#5e69ad}
.jdj-cx{position:relative;padding:10px 0 5px 0;background:#f3f3f3}
.sum-zz{float:left;padding-left:10px;font-family:simsun;color:#999}
.sum-yw{margin-left:70px}
.jdj{position:relative;margin-bottom:5px}
.jdj .sum-zz{line-height:22px}
.jdj .jdj-b{margin-left:10px;color:#e4393c;font-family:"microsoft yahei";margin-right:10px;vertical-align:middle}
.jdj .jdj-b span:first-of-type{font-size:16px}
.jdj .jdj-b span:last-of-type{font-size:22px}
.jdjing span{text-decoration:line-through}
.jdj a{color:#005aa0}
.jdpj{position:absolute;right:10px;top:8px;color:#999}
.comment,.buy-rate{border-left:1px #e6e6e6 solid;text-align:center;padding:0 10px;line-height:15px;float:left}
.comment a,.buy-rate a{font:14px verdana;color:#005ea7}
.jdcx{clear:both;padding:5px 0 5px}
.jdcx .sum-zz{line-height:30px}
.jdcx .sum-yw{position:relative;overflow:hidden}
.cx-zp{position:relative;line-height:30px;min-height:35px;vertical-align:middle}
.J-gifzp{padding-left:40px}
.cx-zp .zp{float:left;width:40px;display:inline;margin-left:-40px}
.cx-zp .zp em,.hl_bg{display:inline-block;color:#df3033;border:1px #df3033 solid;padding:2px 3px;
margin-right:5px;line-height:16px}
.prom-list-item{padding:0 5px;float:left;height:30px;white-space:nowrap}
.prom-list-item a{float:left;width:25px;height:25px;margin-right:3px}
.cxcs{color:#e4393c}
.prom-mz{line-height:18px}
.s-arrpw{font-family:simsun}
.dpsp-zz{position:relative;padding-bottom:5px}
.summar-zzyw,.choose-JDbaitiao{margin-bottom:6px;line-height:32px}
.summar-zzyw .sum-yw .sum-yw-y li{float:left;margin-right:10px;position:relative}
.sum-yw-y .tips{width:190px;padding:1px;position:absolute;z-index:66;background:#fff}
.summar-zzyw .sum-yw .sum-yw-y .tips .quest-arrow{left:10px;top:-4px}
.summar-zzyw .sum-yw .sum-yw-y .tips .quest-content p{line-height:18px}
.summar-zzyw .sum-yw ul li a{display:inline-block;line-height:18px}
.summar-zzyw .sum-yw ul li a i{display:inline-block;width:16px;height:16px;vertical-align:-3px;
background:url("./assets/__spriteas.png") no-repeat -32px 0px}
.summar-zzyw .sum-yw ul li a span{position:relative;display:inline-block;border:1px #ced2e6 solid;
line-height:16px;border-radius:8px;padding:0 5px 0 18px;color:#5e69ad;margin-left:-18px;z-index:-1}
.summar-stok .stok-prom{float:left;margin:0 10px 0 6px;color:#999;height:24px;font-weight:bold}
.summar-stok .promise-ico{float:left;height:24px}
.summar-stok .promise-ico p{margin-right:5px;float:left}
.summar-stok .promise8,.summar-stok .promise8 li{float:left}
.summar-stok .promise8 a{color:#646FB0;margin-bottom:5px;padding:0 10px}
.summar-suply{line-height:32px}
.summar-suply span,.summar-suply a{color:#e4393c}
.summar-suply b{color:#999}
.summar-weight{margin-bottom:3px;line-height:32px}
.choose-stts{line-height:40px;margin-bottom:3px;border-top:1px #dfdfdf dotted;padding-top:15px}
.dpsp-zz .choose-stts .sum-yw li{background-color:#F7F7F7}
.choose-stts .sum-yw a:hover,.choose-JDbaitiao .sum-yw a:hover{border:1px #e3393c solid}
.choose-stts .sum-yw li,.choose-JDbaitiao .sum-yw li{float:left;background-color:#FFF;
margin-right:7px;margin-bottom:4px;position:relative}
.choose-stts .sum-yw li a{display:block;border:1px #ccc solid;white-space:nowrap}
.choose-stts .sum-yw .selected a{border:1px #e3393c solid}
.choose-stts .sum-yw li a i{margin:0 8px;font-style:normal}
.choose-service,.choose-JDservice{margin-bottom:7px;line-height:18px}
.choose-service .sum-zz,.choose-JDservice .sum-zz{line-height:30px}
.service-tips{float:left;position:relative}
.service-tips a .service-quest{display:inline-block;vertical-align:-10px;width:16px;height:16px;
background:url("./assets/__spritecs.png") no-repeat}
.service-tips .tips{position:absolute;width:270px;left:-215px;top:35px;z-index:2}
.tips .quest-arrow{width:11px;height:6px;position:absolute;overflow:hidden;left:218px;
background:url("./assets/__spritecs.png") no-repeat -14px -16px;top:-5px}
.tips .quest-content{padding:10px;background:#fff;border:1px #cecbce solid;box-shadow:0 0 2px 2px #eee}
.service-tips .tips .quest-content .quest-dd{line-height:170%}
.service-tips .tips .quest-content .quest-p{border-top:1px #999 dotted;margin-top:7px;padding-top:7px}
.choose-JDbaitiao .service-hover a{display:block;border:1px #ccc solid;padding:0 13px;
text-align:center;white-space:nowrap}
.choose-JDbaitiao .service-hover .baitiao-tips{position:absolute;width:250px;padding:5px 10px;
background:#fefff7;border:1px #ccc solid;z-index:6;top:32px;left:0}
.dpsp-zz .choose-JDbaitiao .disabled a{border:1px #ccc dashed;color:#999}
.dpsp-zz .choose-JDbaitiao .selected a{border:1px #e3393c solid;color:#666}
.choose-JDbaitiao .service-tips .service-youhui,.choose-JDbaitiao .service-tips .service-siyi{display:inline-block;
vertical-align:-5px;width:16px;height:16px;overflow:hidden}
.choose-JDbaitiao .service-tips .service-youhui{background:url("./assets/hui.png") no-repeat}
.choose-JDbaitiao .service-tips .service-siyi{background:url("./assets/__spritecs.png") no-repeat}
.choose-JDbaitiao .service-tips .tips{left:0}
.choose-JDbaitiao .service-tips .tips .quest-arrow{left:8px}
.choose-btns{margin-bottom:20px;padding:15px 10px 0 10px;border-top:1px #dfdfdf dotted}
.choose-amount{float:left;position:relative;width:58px;height:44px;overflow:hidden;border:1px #ccc solid;margin-right:10px}
.choose-amount input{display:block;position:absolute;width:43px;height:42px;line-height:42px;top:1px;
left:0;border:0;text-align:center}
.choose-amount a{display:block;position:absolute;width:15px;height:22px;line-height:22px;right:-1px;
text-align:center;overflow:hidden;background:#f1f1f1;border:1px #ccc solid}
.choose-amount .btn-reduce{bottom:-1px}
.choose-amount .disabled{color:#ccc;cursor:not-allowed}
.choose-amount .btn-add{top:-1px}
.choose-btns .btn-lg{height:46px;line-height:46px;padding:0 26px;font-size:18px;font-family:"microsoft yahei";margin-right:10px;float:left}
.choose-btns .btn-spec1{background:#df3033}
.choose-btns .btn-spec2{background:#85c360}
.choose-btns .btn-spec1,.choose-btns .btn-spec2{font-weight:700;color:#fff}
.choose-btns .btn-spec3{background:#fff;border:1px #e4393c solid;color:#e4393c}
.local-tips,.summary-tips{margin-bottom:5px}
.local-tips li,.summary-tips li{float:left;margin-right:15px;font-family:simsun;color:#999}
.local-tips li a{color:#005aa0}
</style>
