<template>
  <div id="app">
    <JDhead></JDhead>
    <div id = "classify">
      <div class = "midden">
        <div class = "dorpdown BJS" @mouseleave = "lbyc">
          <div class = "dt" @mouseenter = "lbxs">
            <a href = "">全部商品分类</a>
          </div>
          <div class = "dd">
            <div class = "dd-inner" v-show = "DDshows">
              <ul>
                <li>
                  <h3><a href = "">家用电器</a></h3>
                </li>
                <li>
                  <h3><a href = "">手机</a>/<a href = "">运营商</a>/<a href = "">数码</a></h3>
                </li>
                <li>
                  <h3><a href = "">电脑</a>/<a href = "">办公</a></h3>
                </li>
                <li>
                  <h3><a href = "">家居</a>/<a href = "">家具</a>/<a href = "">家装</a>/<a href = "">厨具</a></h3>
                </li>
                <li>
                  <h3><a href = "">男装</a>/<a href = "">女装</a>/<a href = "">童装</a>/<a href = "">内衣</a></h3>
                </li>
                <li>
                  <h3><a href = "">美妆</a>/<a href = "">个护清洁</a>/<a href = "">宠物</a></h3>
                </li>
                <li>
                  <h3><a href = "">女鞋</a>/<a href = "">箱包</a>/<a href = "">钟表</a>/<a href = "">珠宝</a></h3>
                </li>
                <li>
                  <h3><a href = "">男鞋</a>/<a href = "">运动</a>/<a href = "">户外</a></h3>
                </li>
                <li>
                  <h3><a href = "">房产</a>/<a href = "">汽车</a>/<a href = "">汽车用品</a></h3>
                </li>
                <li>
                  <h3><a href = "">母婴</a>/<a href = "">玩具乐器</a></h3>
                </li>
                <li>
                  <h3><a href = "">食品</a>/<a href = "">酒类</a>/<a href = "">生鲜</a>/<a href = "">特产</a></h3>
                </li>
                <li>
                  <h3><a href = "">艺术</a>/<a href = "">礼品鲜花</a>/<a href = "">农资绿植</a></h3>
                </li>
                <li>
                  <h3><a href = "">医药保健</a>/<a href = "">计生情趣</a></h3>
                </li>
                <li>
                  <h3><a href = "">图书</a>/<a href = "">音像</a>/<a href = "">电子书</a></h3>
                </li>
                <li>
                  <h3><a href = "">机票</a>/<a href = "">酒店</a>/<a href = "">旅游</a>/<a href = "">生活</a></h3>
                </li>
                <li>
                  <h3><a href = "">理财</a>/<a href = "">众筹</a>/<a href = "">白条</a>/<a href = "">保险</a></h3>
                </li>
                <li>
                  <h3><a href = "">安装</a>/<a href = "">维修</a>/<a href = "">清洗保养</a></h3>
                </li>
              </ul>
            </div>
            <div class = "dd-layer" v-show = "DDshowes">
              <ul>
                <li><h1>对应第一栏</h1></li>
                <li><h1>对应第二栏</h1></li>
                <li><h1>对应第三栏</h1></li>
                <li><h1>对应第四栏</h1></li>
                <li><h1>对应第五栏</h1></li>
                <li><h1>对应第六栏</h1></li>
                <li><h1>对应第七栏</h1></li>
                <li><h1>对应第八栏</h1></li>
                <li><h1>对应第九栏</h1></li>
                <li><h1>对应第十栏</h1></li>
                <li><h1>对应第十一栏</h1></li>
                <li><h1>对应第十二栏</h1></li>
                <li><h1>对应第十三栏</h1></li>
                <li><h1>对应第十四栏</h1></li>
                <li><h1>对应第十五栏</h1></li>
                <li><h1>对应第十六栏</h1></li>
                <li><h1>对应第十七栏</h1></li>
              </ul>
            </div>
          </div>
        </div>
        <div class = "ata">
          <ul>
            <li><a href = "">服装城</a></li>
            <li><a href = "">美妆馆</a></li>
            <li><a href = "">超市</a></li>
            <li><a href = "">生鲜</a></li>
          </ul>
          <div class = "separat"></div>
          <ul>
            <li><a href = "">全球购</a></li>
            <li><a href = "">闪购</a></li>
            <li><a href = "">拍卖</a></li>
          </ul>
          <div class = "separat"></div>
          <ul>
            <li><a href = "">金融</a></li>
          </ul>
        </div>
        <div class = "clr"></div>
      </div>
    </div>
    <div class = "midden">
      <div class = "R_ecommend">
        <div class = "hotsale">
          <div class = "hotsale-left">热卖推荐</div>
          <ul class = "hotsales">
            <li v-for = "hotles in hotAsrr">
              <div class = "dtt">
                <a href = ""><img width = "100" height = "100" :alt = "hotles.title" :src = "hotles.img"/></a>
              </div>
              <div class = "describe">
                <p class = "describe-sm"><a href = "">{{ hotles.title }}</a></p>
                <p class = "describe-jg">{{ hotles.price }}</p>
                <a class = "btns" href = "">立即抢购</a>
              </div>
            </li>
          </ul>
          <div class = "clr"></div>
        </div>
        <div class = "hot-news">
          <div class = "hotsale-right">促销活动</div>
          <ul>
            <li v-for = "hNew in hotNews">• <a href = "">{{ hNew }}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class = "midden" id = "middent">
      <div class = "path">
        <div class = "main-nav-item one-leve">
          <a class = "main-link" href = "">家用电器</a>
          <i class = "main-arrow">></i>
        </div>
        <div class = "main-nav-item" @mouseleave = "lared">
          <div class = "large" @mouseenter = "lar(1)" :class = "{'large-bjs' : largs === 1}">
            <span class = "currty">大 家 电</span>
            <i class = "large-curr"></i>
          </div>
          <div class = "large-none" v-if = "largeN === 1">
            <ul>
              <li><a href = "">厨卫大电</a></li>
              <li><a href = "">大 家 电</a></li>
              <li><a href = "">厨房小电</a></li>
              <li><a href = "">生活电器</a></li>
              <li><a href = "">个护健康</a></li>
              <li><a href = "">商用电器</a></li>
              <li><a href = "">家电服务</a></li>
            </ul>
          </div>
          <i class = "main-arrow">></i>
        </div>
        <div class = "main-nav-item" @mouseleave = "lared">
          <div class = "large" @mouseenter = "lar(2)" :class = "{'large-bjs' : largs === 2}">
            <span class = "currty">空调</span>
            <i class = "large-curr"></i>
          </div>
          <div class = "large-none" v-if = "largeN === 2">
            <ul>
              <li><a href = "">平板电视</a></li>
              <li><a href = "">空调</a></li>
              <li><a href = "">中央空调</a></li>
              <li><a href = "">冰箱</a></li>
              <li><a href = "">洗衣机</a></li>
              <li><a href = "">家庭影院</a></li>
              <li><a href = "">DVD/电视盒子</a></li>
              <li><a href = "">迷你音响</a></li>
              <li><a href = "">冷柜/冰吧</a></li>
              <li><a href = "">家电配件</a></li>
              <li><a href = "">功放</a></li>
              <li><a href = "">回音壁/Soundbar</a></li>
              <li><a href = "">Hi-Fi专区</a></li>
              <li><a href = "">电视盒子</a></li>
              <li><a href = "">酒柜</a></li>
              <li><a href = "">移动空调</a></li>
              <li><a href = "">KTV音响</a></li>
              <li><a href = "">烘干机</a></li>
            </ul>
          </div>
          <i class = "main-arrow">></i>
        </div>
      </div>
    </div>
    <div class = "midden" id = "midented">
      <div class = "KT-screen">
        <div class = "KT-path">
          <h3><span>空调</span> 商品筛选</h3>
          <div class = "se-ext">共 <span>10315</span>个商品</div>
        </div>
        <div class = "KT-brand" :class = "{'entend' : brayc === 1,'entender' : bente === 1}">
          <div class = "brand-left">品牌:</div>
          <div class = "brand-center">
            <ul class = "sl-a" v-if = "brayc === 1 || bente === 1">
              <li v-for = "(dal,index) in datial" :data-initial = "dal.datitial" :class = "{'curr' : cur === index}" @mouseenter = "changase(index)">{{ dal.dial }}</li>
            </ul>
            <div class = "clr"></div>
            <div class = "sl-b" @click = "chagae(1,$event)">
              <ul class = "v-fixed" :class = "{'v-fixe' : brayc === 1 || bente === 1}">
                <li :class = "{'fixed-gl' : fied.show === true && slKey.length}" @click = "fixgl(fied,$event)" v-for = "(fied,index) in fixed" :data-initial = "fied.dl">
                  <a :title = "fied.titl" :href = "fied.hre">
                    <i></i>
                    <img v-if = "fied.srce !== ''" width = "102" height = "36" :src = "fied.srce"/>
                    <span>{{ fied.titl }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class = "sl-c" v-if = "slKey.length && bente === 1">
              <span class = "sl-key">已选条件 : </span>
              <ul class = "sl-ckey">
                <li v-for = "sKey in slKey">
                  <a :title = "sKey"><i></i>{{ sKey }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 1">
              <a class = "btnl btn-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl btn-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(1,$event)" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(1)" href = "javascript:" class = "dx"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand s-icon" :class = "{'entender' : bente === 2}">
          <div class = "brand-left">空调类别:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(2,$event)">
              <ul class = "j-list">
                <li><a href = ""><i></i>壁挂式空调<img src = "./assets/5abb78b1N22484026.jpg"/></a></li>
                <li><a href = ""><i></i>立柜式空调<img src = "./assets/5abb78b5Nad2a2aec.jpg"/></a></li>
                <li><a href = ""><i></i>移动空调<img src = "./assets/5abb78baN3da315c4.jpg"/></a></li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 2">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(2,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(2)" style = "visibility:hidden" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand s-icon" :class = "{'entender' : bente === 3}">
          <div class = "brand-left">适用场景:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(3,$event)">
              <ul class = "j-list">
                <li><a href = ""><i></i>客厅<img src = "./assets/5ac1d55fN817208b2.jpg"/></a></li>
                <li><a href = ""><i></i>主卧<img src = "./assets/5ac1d568N0e8394aa.jpg"/></a></li>
                <li><a href = ""><i></i>次卧<img src = "./assets/5ac1d56bN8f768429.jpg"/></a></li>
                <li><a href = ""><i></i>书房/儿童房<img src = "./assets/5ac1d574N73c0a68c.jpg"/></a></li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 3">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(3,$event)" style = "visibility:hidden" href = "javascript:" class = "sq gd">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(3)" style = "visibility:hidden" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" :class = "{'entender' : bente === 4}">
          <div class = "brand-left">商品匹数:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(4,$event)">
              <ul class = "j-list">
                <li :class = "{'xzk-a' : ps.show === true && slKey.length}" @click = "fixgl(ps,$event)" v-for = "ps in ktps">
                  <a href = ""><i></i>{{ ps.pishu }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 4">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(4,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(4)" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 5}">
          <div class = "brand-left">品牌类型:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(5,$event)">
              <ul class = "j-list">
                <li><a href = ""><i></i>合资品牌</a></li>
                <li><a href = ""><i></i>国产品牌</a></li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 5">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(5,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(5)" style = "visibility:hidden" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 6}">
          <div class = "brand-left">价格:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(6,$event)" :class = "{'slbb' : brayc === 6 || bente === 6}">
              <ul class = "j-list">
                <li :class = "{'xzk-a' : kj.show === true && slKey.length}" @click = "fixgl(kj,$event)" v-for = "kj in ktjg">
                  <a href = ""><i></i>{{ kj.jiage }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 6">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(6,$event)" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(6)" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 7}">
          <div class = "brand-left">能效等级:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(7,$event)">
              <ul class = "j-list">
                <li><a href = ""><i></i>1级</a></li>
                <li><a href = ""><i></i>2级</a></li>
                <li><a href = ""><i></i>3级</a></li>
                <li><a href = ""><i></i>其它</a></li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 7">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(7,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(7)" style = "visibility:hidden" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 8}">
          <div class = "brand-left">产品特色:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(8,$event)">
              <ul class = "j-list">
                <li v-for = "ktts in ktcpts" :class = "{'xzk-a' : ktts.show === true && slKey.length}" @click = "fixgl(ktts,$event)">
                  <a href = ""><i></i>{{ ktts.tese }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 8">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(8,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(8)" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 9}">
          <div class = "brand-left">变频/定频:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(9,$event)">
              <ul class = "j-list">
                <li><a href = ""><i></i>变频</a></li>
                <li><a href = ""><i></i>定频</a></li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 9">
              <a class = "btnl boton-qd disabled" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(9,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(9)" style = "visibility:hidden" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 10}">
          <div class = "brand-left">使用面积:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(10,$event)">
              <ul class = "j-list">
                <li v-for = "ktmj in kpsymj" :class = "{'xzk-a' : ktmj.show === true && slKey.length}" @click = "fixgl(ktmj,$event)">
                  <a href = ""><i></i>{{ ktmj.symj }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 10">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(10,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(10)" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 11}">
          <div class = "brand-left">冷暖类型:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(11,$event)">
              <ul class = "j-list">
                <li><a href = ""><i></i>冷暖空调</a></li>
                <li><a href = ""><i></i>单冷空调</a></li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 11">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(11,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(11)" style = "visibility:hidden" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 12}">
          <div class = "brand-left">大家说:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(12,$event)" :class = "{'slbb' : brayc === 12 || bente === 12}">
              <ul class = "j-list">
                <li v-for = "kjs in ktdjs" :class = "{'xzk-a' : kjs.show === true && slKey.length}" @click = "fixgl(kjs,$event)">
                  <a href = ""><i></i>{{ kjs.pjs }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 12">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(12,$event)" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(12)" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "KT-brand" v-show = "hidden" :class = "{'entender' : bente === 13}">
          <div class = "brand-left">选购指数:</div>
          <div class = "brand-center">
            <div class = "sl-aa" @click = "chagae(13,$event)">
              <ul class = "j-list">
                <li v-for = "ktzs in ktxgzs" :class = "{'xzk-a' : ktzs.show === true && slKey.length}" @click = "fixgl(ktzs,$event)">
                  <a href = ""><i></i>{{ ktzs.ktxg }}</a>
                </li>
              </ul>
            </div>
            <div class = "sl-d" v-if = "bente === 13">
              <a class = "btnl boton-qd" :class = "{'disabled' : !slKey.length}" href = "javascript:;">确定</a>
              <a @click = "qxan" class = "btnl boton-qx" href = "javascript:;">取消</a>
            </div>
          </div>
          <div class = "brand-right">
            <a @click = "brandyc(13,$event)" style = "visibility:hidden" href = "javascript:" class = "sq">更多<i class = "large-curr"></i></a>
            <a @click = "bradx(13)" href = "javascript:" class = "dx gb"><i>+</i>多选</a>
          </div>
        </div>
        <div class = "s-more">
          <span @click = "wrapxs" class = "sp-wrap">更多选项(价格、能效、产品特色 等)<i class = "large-curr"></i></span>
        </div>
      </div>
    </div>
    <mainCenter :teJS = "tarJS" :taDR = "tarDR" :taSJ = "tarSJ" :zysp = "zys" @shcs = "shcsmr"></mainCenter>
  </div>
</template>

<script>
import JDhead from './components/JDhead'
import mainCenter from './components/mainCenter'

export default {
  name: 'App',
  components: {
    JDhead,
    mainCenter
  },
  data () {
    return {
      DDshows : false,
      DDshowes : false,
      largeN : 0,
      largs : "",
      hidden : false,
      datial : [{datitial : "0",dial : "所有品牌"},{datitial : "a",dial : "A"},{datitial : "b",dial : "B"},{datitial : "c",dial : "C"},{datitial : "d",dial : "D"},{datitial : "e",dial : "E"},{datitial : "f",dial : "F"},{datitial : "g",dial : "G"},{datitial : "h",dial : "H"},{datitial : "i",dial : "I"},{datitial : "j",dial : "J"},{datitial : "k",dial : "K"},{datitial : "l",dial : "L"},{datitial : "m",dial : "M"},{datitial : "n",dial : "N"},{datitial : "o",dial : "O"},{datitial : "q",dial : "Q"},{datitial : "r",dial : "R"},{datitial : "s",dial : "S"},{datitial : "t",dial : "T"},{datitial : "u",dial : "U"},{datitial : "w",dial : "W"},{datitial : "x",dial : "X"},{datitial : "y",dial : "Y"},{datitial : "z",dial : "Z"},{datitial : "other",dial : "其他"}],
      cur : 0,
      fixed : [{titl : "格力(GREE)",dl : "g",hre : "#",srce : "/static/imges/jd.png",show : false},{titl : "美的(Midea)",dl : "m",hre : "#",srce : "/static/imges/360.png",show : false},{titl : "奥克斯(AUX)",dl : "a",hre : "#",srce : "/static/imges/360game.png",show : false},{titl : "海尔(Haier)",dl : "h",hre : "#",srce : "/static/imges/fenghuan.png",show : false},{titl : "TCL",dl : "t",hre : "#",srce : "/static/imges/renren.png",show : false},{titl : "志高(CHIGO)",dl : "z",hre : "#",srce : "/static/imges/souhu.png",show : false},{titl : "海信(Hisense)",dl : "h",hre : "#",srce : "/static/imges/taobao.png",show : false},{titl : "三菱电机(Mitsubishi Electric)",dl : "s",hre : "#",srce : "/static/imges/wangyi.png",show : false},{titl : "科龙(KELON)",dl : "k",hre : "#",srce : "/static/imges/xinlan.png",show : false},{titl : "长虹(CHANGHONG)",dl : "c",hre : "#",srce : "/static/imges/youku.png",show : false},{titl : "扬子",dl : "y",hre : "#",srce : "/static/imges/360.png",show : false},{titl : "松下(Panasonic)",dl : "s",hre : "#",srce : "/static/imges/youku.png",show : false},{titl : "富士通(Fujitsu)",dl : "f",hre : "#",srce : "/static/imges/xinlan.png",show : false},{titl : "大金(DAIKIN)",dl : "d",hre : "#",srce : "/static/imges/wangyi.png",show : false},{titl : "格兰仕(Galanz)",dl : "g",hre : "#",srce : "/static/imges/taobao.png",show : false},{titl : "统帅(Leader)",dl : "t",hre : "#",srce : "/static/imges/souhu.png",show : false},{titl : "康佳(KONKA)",dl : "k",hre : "#",srce : "/static/imges/renren.png",show : false},{titl : "创维(Skyworth)",dl : "c",hre : "#",srce : "/static/imges/fenghuan.png",show : false},{titl : "JHS",dl : "j",hre : "#",srce : "",show : false},{titl : "TER",dl : "t",hre : "#",srce : "",show : false},{titl : "小米(MI)",dl : "x",hre : "#",srce : "",show : false},{titl : "MBO",dl : "m",hre : "#",srce : "",show : false},{titl : "MIH",dl : "m",hre : "#",srce : "",show : false},{titl : "申花(SHENHUA)",dl : "s",hre : "#",srce : "",show : false},{titl : "欧旺(OUWON)",dl : "o",hre : "#",srce : "",show : false},{titl : "JENSANY",dl : "j",hre : "#",srce : "",show : false},{titl : "日立(HITACHI)",dl : "r",hre : "#",srce : "",show : false},{titl : "乐京(LEJN)",dl : "l",hre : "#",srce : "",show : false},{titl : "卡萨帝(Casarte)",dl : "k",hre : "#",srce : "",show : false},{titl : "CMV",dl : "c",hre : "#",srce : "",show : false},{titl : "韩电(KEG)",dl : "h",hre : "#",srce : "",show : false},{titl : "智米(SMARTMI)",dl : "z",hre : "#",srce : "",show : false},{titl : "新科(Shinco)",dl : "x",hre : "#",srce : "",show : false},{titl : "红麒",dl : "h",hre : "#",srce : "",show : false},{titl : "中松",dl : "z",hre : "#",srce : "",show : false},{titl : "宾豪(BINHAO)",dl : "b",hre : "#",srce : "",show : false},{titl : "先科(SAST)",dl : "x",hre : "#",srce : "",show : false},{titl : "CHEBLO",dl : "c",hre : "#",srce : "",show : false},{titl : "荣事达(Royalstar)",dl : "r",hre : "#",srce : "",show : false},{titl : "雪菲特",dl : "x",hre : "#",srce : "",show : false},{titl : "AEA",dl : "a",hre : "#",srce : "",show : false},{titl : "CLOOS",dl : "c",hre : "#",srce : "",show : false},{titl : "天林(TianLin)",dl : "t",hre : "#",srce : "",show : false},{titl : "美博(MBO)",dl : "m",hre : "#",srce : "",show : false},{titl : "UXH",dl : "u",hre : "#",srce : "",show : false},{titl : "容为(RONV)",dl : "r",hre : "#",srce : "",show : false},{titl : "夏天乐",dl : "x",hre : "#",srce : "",show : false},{titl : "金立",dl : "j",hre : "#",srce : "",show : false},{titl : "新飞(Frestec)",dl : "x",hre : "#",srce : "",show : false},{titl : "亿发",dl : "y",hre : "#",srce : "",show : false},{titl : "七星(SEVEN STARS)",dl : "q",hre : "#",srce : "",show : false},{titl : "LG",dl : "l",hre : "#",srce : "",show : false},{titl : "畅欣",dl : "c",hre : "#",srce : "",show : false},{titl : "菱博士(Lingboshi)",dl : "l",hre : "#",srce : "",show : false},{titl : "沃牧",dl : "w",hre : "#",srce : "",show : false},{titl : "库思特",dl : "k",hre : "#",srce : "",show : false},{titl : "金杨子",dl : "j",hre : "#",srce : "",show : false},{titl : "玉平",dl : "y",hre : "#",srce : "",show : false},{titl : "CIH",dl : "c",hre : "#",srce : "",show : false},{titl : "MITSEIN",dl : "m",hre : "#",srce : "",show : false},{titl : "NINGPU",dl : "n",hre : "#",srce : "",show : false},{titl : "帝智(DIZHI)",dl : "d",hre : "#",srce : "",show : false},{titl : "SK",dl : "s",hre : "#",srce : "",show : false},{titl : "美歌空调(Meico)",dl : "m",hre : "#",srce : "",show : false},{titl : "DAEWOO",dl : "d",hre : "#",srce : "",show : false},{titl : "贝耐",dl : "b",hre : "#",srce : "",show : false},{titl : "祥兆(xiangzhao)",dl : "x",hre : "#",srce : "",show : false},{titl : "留美",dl : "l",hre : "#",srce : "",show : false},{titl : "大宇(DAEWOO)",dl : "d",hre : "#",srce : "",show : false},{titl : "FZM",dl : "f",hre : "#",srce : "",show : false},{titl : "冰鹭(BINGLU)",dl : "b",hre : "#",srce : "",show : false},{titl : "智诺(ZHINUO)",dl : "z",hre : "#",srce : "",show : false},{titl : "骆驼(CAMEL)",dl : "l",hre : "#",srce : "",show : false},{titl : "旭帝",dl : "x",hre : "#",srce : "",show : false},{titl : "现代(HYUNDAI)",dl : "x",hre : "#",srce : "",show : false},{titl : "森景安邦(SENJINGANBANG)",dl : "s",hre : "#",srce : "",show : false},{titl : "GML",dl : "g",hre : "#",srce : "",show : false},{titl : "小艾",dl : "x",hre : "#",srce : "",show : false},{titl : "华美瑞(Huameirui)",dl : "h",hre : "#",srce : "",show : false},{titl : "TER",dl : "t",hre : "#",srce : "",show : false},{titl : "歌菱(GELING)",dl : "g",hre : "#",srce : "",show : false},{titl : "吉福星",dl : "j",hre : "#",srce : "",show : false},{titl : "YZGAOK",dl : "y",hre : "#",srce : "",show : false},{titl : "三星(SAMSUNG)",dl : "s",hre : "#",srce : "",show : false},{titl : "勒烁",dl : "l",hre : "#",srce : "",show : false},{titl : "美菱(MeiLing)",dl : "m",hre : "#",srce : "",show : false},{titl : "acz",dl : "a",hre : "#",srce : "",show : false},{titl : "奥特斯(Altus)",dl : "a",hre : "#",srce : "",show : false},{titl : "BGE",dl : "b",hre : "#",srce : "",show : false},{titl : "扬佳(YZJM)",dl : "y",hre : "#",srce : "",show : false},{titl : "韩玛",dl : "h",hre : "#",srce : "",show : false},{titl : "纽圣(NUSINER)",dl : "n",hre : "#",srce : "",show : false},{titl : "日彩(ricai)",dl : "r",hre : "#",srce : "",show : false},{titl : "湿美(MSSHIMEI)",dl : "s",hre : "#",srce : "",show : false},{titl : "奔雅(benya)",dl : "b",hre : "#",srce : "",show : false},{titl : "泰威特(Tywit)",dl : "t",hre : "#",srce : "",show : false},{titl : "中金(ZHONGJIN)",dl : "z",hre : "#",srce : "",show : false},{titl : "inyan",dl : "i",hre : "#",srce : "",show : false},{titl : "冬夏",dl : "d",hre : "#",srce : "",show : false},{titl : "eshare",dl : "e",hre : "#",srce : "",show : false},{titl : "东洋(TOYO)",dl : "d",hre : "#",srce : "",show : false},{titl : "YOSTAR",dl : "y",hre : "#",srce : "",show : false},{titl : "宜嘉居(Yijiaju)",dl : "y",hre : "#",srce : "",show : false},{titl : "新迎燕(X YING YAN)",dl : "x",hre : "#",srce : "",show : false},{titl : "先锋(SINGFUN)",dl : "x",hre : "#",srce : "",show : false},{titl : "夏立(SHINELEAF)",dl : "x",hre : "#",srce : "",show : false},{titl : "山水(SANSUI)",dl : "s",hre : "#",srce : "",show : false},{titl : "艾尔斯派(AIRSPA)",dl : "a",hre : "#",srce : "",show : false},{titl : "HYZ",dl : "h",hre : "#",srce : "",show : false},{titl : "YUETU",dl : "y",hre : "#",srce : "",show : false},{titl : "斯凯沃夫(skywolf)",dl : "s",hre : "#",srce : "",show : false},{titl : "汇浦(HUIPU)",dl : "h",hre : "#",srce : "",show : false},{titl : "立冰省电空调(Libing)",dl : "l",hre : "#",srce : "",show : false},{titl : "GASY",dl : "g",hre : "#",srce : "",show : false},{titl : "欧品(oping)",dl : "o",hre : "#",srce : "",show : false},{titl : "思谜卡(SIMIKA)",dl : "s",hre : "#",srce : "",show : false},{titl : "乐活时光",dl : "l",hre : "#",srce : "",show : false},{titl : "曼诺施",dl : "m",hre : "#",srce : "",show : false},{titl : "微狼(WEIWOLF)",dl : "w",hre : "#",srce : "",show : false},{titl : "德雷西(DELEIXI)",dl : "d",hre : "#",srce : "",show : false},{titl : "日翼",dl : "r",hre : "#",srce : "",show : false},{titl : "GLA",dl : "g",hre : "#",srce : "",show : false},{titl : "登牌",dl : "d",hre : "#",srce : "",show : false},{titl : "登比(DENBIG)",dl : "d",hre : "#",srce : "",show : false},{titl : "三菱重工(MITSUBISHI)",dl : "s",hre : "#",srce : "",show : false},{titl : "Rockcellan",dl : "r",hre : "#",srce : "",show : false},{titl : "富达",dl : "f",hre : "#",srce : "",show : false}],
      ktps : [{pishu : "1匹",show : false},{pishu : "1.5匹",show : false},{pishu : "2匹",show : false},{pishu : "2.5匹",show : false},{pishu : "3匹",show : false},{pishu : "5匹及以上",show : false}],
      ktjg : [{jiage : "0-2000",show : false},{jiage : "2001-2999",show : false},{jiage : "3000-3999",show : false},{jiage : "4000-4999",show : false},{jiage : "5000-5999",show : false},{jiage : "6000-7999",show : false},{jiage : "8000-9999",show : false},{jiage : "10000-11999",show : false},{jiage : "12000以上",show : false}],
      ktcpts : [{tese : "圆柱式空调",show : false},{tese : "全直流变频",show : false},{tese : "静音空调",show : false},{tese : "远程控制",show : false},{tese : "可移动",show : false},{tese : "柔风技术",show : false},{tese : "无风感",show : false},{tese : "防直吹",show : false},{tese : "自动清洁",show : false}],
      kpsymj : [{symj : "10m²以下",show : false},{symj : "10-15m²以下",show : false},{symj : "15-20m²以下",show : false},{symj : "20-30m²以下",show : false},{symj : "30-40m²以下",show : false},{symj : "40m²以下",show : false}],
      ktdjs : [{pjs : "制冷效果好",show : false},{pjs : "服务很好",show : false},{pjs : "制冷速度快",show : false},{pjs : "声音小",show : false},{pjs : "外机噪音小",show : false},{pjs : "制冷制热快",show : false},{pjs : "机器漂亮",show : false},{pjs : "变频省电",show : false},{pjs : "空调质量好",show : false},{pjs : "志高的空调",show : false},{pjs : "制热效果好",show : false},{pjs : "制冷比较快",show : false},{pjs : "送货快",show : false},{pjs : "安装速度",show : false},{pjs : "一般",show : false}],
      ktxgzs : [{ktxg : "10.0-9.0",show : false},{ktxg : "8.9-8.0",show : false},{ktxg : "7.9-7.0",show : false},{ktxg : "6.9-6.0",show : false},{ktxg : "5.9-4.0",show : false},{ktxg : "3.9-0",show : false}],
      brayc : '',
      bente :  '',
      slKey : [],
      hotAsrr : [],
      hotNews : [],
      pssh : '',
      tarJS : [],
      tarDR : [],
      tarSJ : [],
      zys : []
    };
  },
  mounted () {
    var _this = this
    this.$http.get('/static/lasted.json')
    .then(function(response){
      _this.hotAsrr = response.data.list;
      _this.hotNews = response.data.lasted;
    }),
    this.$http.get('/static/tarde-JS.json')   //get方法获取
    .then(function(response){
      _this.tarJS = response.data.list
    }),
    this.$http.get('/static/tarde-DR.json')   //get方法获取
    .then(function(response){
      _this.tarDR = response.data.list
    }),
    this.$http.get('/static/tarde-SJ.json')   //get方法获取
    .then(function(response){
      _this.tarSJ = response.data.list
    }),
    this.$http.get('/static/zyspnr.json')   //get方法获取
    .then(function(response){
      _this.zys = response.data.list
    })
  },
  methods : {
    shcsmr : function(pssh){
      this.pssh = pssh          //接收子组件传过来的值
    },
    lbxs : function(){
      this.DDshows = true;
      var _this = this
      var ddInner = document.querySelector(".dd-inner")
      var ddLayer = document.querySelector(".dd-layer")
      var oli = ddInner.querySelectorAll("li")
      var ali = ddLayer.querySelectorAll("li")
      for (var i=0,len=oli.length;i<len;i++){
        oli[i].className = ""
        ali[i].style.display = "none"
        _this.DDshowes = false
        oli[i].index = i
        oli[i].onmouseenter = function(){
          for (var i=0,len=oli.length;i<len;i++){
            oli[i].className = "";
            ali[i].style.display = "none";
          }
          this.className = "dd-list";
          _this.DDshowes = true
          ali[this.index].style.display = "block";
        }
      }
    },
    lbyc : function(){
      this.DDshows = false;
      this.DDshowes = false
    },
    lar : function(m){
      this.largeN = m
      this.largs = m
    },
    lared : function(){
      this.largeN = 0
      this.largs = ""
    },
    wrapxs : function(e){
      if(this.hidden === false){
        this.hidden = true
        e.target.innerHTML = "收起"+'<i class = "large-curr"></i>'
      }else{
        this.hidden = false
        e.target.innerHTML = "更多选项(价格、能效、产品特色 等)"+'<i class = "large-curr"></i>'
      }
    },
    brandyc : function(t,event){  //更多按钮
      this.cur = 0
      if(this.brayc !== '' && this.brayc === t){
        this.brayc = ''
        event.currentTarget.innerHTML = "更多"+'<i class = "large-curr"></i>'
      }else{
        event.currentTarget.innerHTML = "收起"+'<i class = "large-curr"></i>'
        this.brayc = t
      }
    },
    changase : function(w){   //自定义属性的选择
      this.cur = w
    },
    bradx : function(q){    //多选按钮
      this.bente = q
      this.slKey = []
      for(var i=0,len=this.fixed.length;i<len;i++){this.fixed[i].show = false}
      for(var i=0,len=this.ktps.length;i<len;i++){this.ktps[i].show = false}
      for(var i=0,len=this.ktxgzs.length;i<len;i++){this.ktxgzs[i].show = false}
      for(var i=0,len=this.ktdjs.length;i<len;i++){this.ktdjs[i].show = false}
      for(var i=0,len=this.kpsymj.length;i<len;i++){this.kpsymj[i].show = false}
      for(var i=0,len=this.ktjg.length;i<len;i++){this.ktjg[i].show = false}
    },
    chagae : function(v,event){   //取消默认事件  点击事件
      if(v === this.bente){
        if(event.target.tagName === 'A' || event.target.tagName === 'SPAN' || event.target.tagName === 'I'){
          event.preventDefault()
        }
      }
    },
    fixgl : function(fie,event){
      if(this.bente !== ''){
        var sKey = event.currentTarget.innerText  //得到点击标签之后的内容
        if(fie.show === false){   //如果当前这个show为false的话
          this.slKey.push(sKey)   //就把当前获取的值push到数组里面
          fie.show = true     //并且把当前show变成true
          console.log(this.slKey.length)
        }else{
          fie.show = false      //把当前show变成false
          var indax = this.slKey.indexOf(sKey)  //先在数组里面找到当前值的位置
          this.slKey.splice(indax,1)    //然后删除起始值为indax 长度为1的值
        }
      }
    },
    qxan : function(){
      this.brayc = ''
      this.bente = ''
      this.slKey = []
    }
  }
}
</script>

<style>
*{margin:0;padding:0}
body{font:12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\5b8b\4f53",sans-serif;color:#666;
-webkit-font-smoothing:antialiased}
ul{list-style:none}
a{text-decoration:none;color:#666}
em,i{font-style:normal}
#classify{margin-top:10px;margin-bottom:15px;height:33px;border-bottom:2px solid #f30213}
.midden{width:1210px;margin:0 auto;}
.dorpdown{position:absolute;width:190px;line-height:33px;background:#f30213;z-index:45;float:left}
.dorpdown .dt{padding:0 10px;font-size:14px;position:relative;bottom:0;}
.dorpdown .dt a{display:block;height:33px;background:#f30213;color:#fff;text-align:center}
.dd{background:#fff;box-shadow:-1px 3px 12px -1px rgba(0,0,0,.3);margin-top:2px;}
.dd-inner{padding:10px 0 11px;}
.dd-inner li{height:27px}
.dd-inner li h3{height:28px;padding:0 16px;line-height:28px;font-size:12px;font-weight:400;}
.dd-inner li a{color:#333;padding:0 4px}
.dd-list{background:rgba(39,2,2,.1)}
.dd-layer{width:1020px;position:absolute;left:190px;top:35px;min-height:478px;border:1px solid #f7f7f7;background:#f7f7f7;box-shadow:2px 0 5px -1px rgba(0,0,0,.3)}
.dd-layer li{display:none}
.dd-layer h1{position:absolute;left:50%;top:50%}
.ata{padding-left:190px;float:left;position:relative}
.ata ul,.ata ul li,.ata .separat{float:left;}
.ata a{float:left;height:33px;padding:0 22px;text-align:center;font-size:14px;color:#333;
line-height:33px;font-weight:700}
.separat{width:1px;height:14px;background:#eee;margin:10px 0;overflow:hidden}
.R_ecommend{position:relative;height:152px;padding:0 210px 0 80px;margin-bottom:15px;
background:#f1f1f1}
.hotsale{width:100%;height:137px;padding-top:15px}
.hotsale,.hotsales li,.dtt,.describe,.hot-news{float:left}
.hotsale-left,.hotsale-right{position:absolute;display:inline-block;width:30px;height:60px;
text-align:center;background:url("./assets/截图00.png") no-repeat -34px -15px;font-size:14px;
line-height:18px;padding:20px 10px 0px 5px;color:#f60}
.hotsale-left{left:20px;top:0}
.hotsales{width:100%;height:122px;overflow:hidden}
.hotsales li{width:264px;height:100px;overflow:hidden;padding:11px;background:#fff;margin-right:13px;
margin-bottom:15px}
.dtt{float:left;width:100px;height:100px;margin-right:10px}
.describe{width:154px}
.describe-sm{height:40px;line-height:20px;overflow:hidden;padding-top:5px;word-break:break-all}
.describe-jg{height:20px;line-height:20px;overflow:hidden;padding-top:5px;font-weight:700;
color:#e4393c;font-size:14px}
.btns{display:inline-block;height:14px;line-height:14px;border-radius:2px;background:#f7f7f7;
margin-top:3px;padding:4px 13px 5px;border:1px solid #ddd}
.hot-news{position:absolute;top:0;right:0;width:175px;height:152px;padding-left:50px}
.hotsale-right{left:0;top:0}
.hot-news ul{height:135px;overflow:hidden;padding-top:15px;padding-right:10px}
.hot-news ul li{width:165px;height:22px;overflow:hidden;line-height:22px;margin-bottom:5px;
text-overflow:ellipsis;white-space:nowrap}
.path{position:relative;margin-bottom:10px;height:24px;line-height:24px}
.path .main-arrow{font-family:simsun;font-style:normal}
.large-curr{display:inline-block;width:20px;height:20px;vertical-align:top;transition:transform .2s ease-in-out;background:url("./assets/imgssss/图片10.png") no-repeat -25px -18px}
.main-nav-item{float:left;margin-right:8px;cursor:pointer}
.one-leve .main-link{font-size:18px;font-weight:700}
.main-link,.large{float:left;margin-right:5px}
.large{position:relative;height:22px;padding:0 4px 0 8px;border:1px solid #ddd;line-height:22px;
vertical-align:top;}
.large-bjs{border-color:#e4393c #e4393c #fff #e4393c;z-index:8}
.currty{display:inline-block;vertical-align:top}
.large-none{position:absolute;width:350px;padding:10px 0 10px 8px;top:23px;background:#fff;
border:1px solid #c81623;z-index:5}
.large-none li{float:left;width:65px;height:24px;overflow:hidden;line-height:24px;margin-right:5px;
text-overflow:ellipsis;white-space:nowrap}
.KT-screen{border-top:1px solid #DDD;background:#FFF;margin-bottom:10px}
.describe-sm a:hover,.large-none a:hover,.v-fixed a:hover,.sl-aa a:hover{color:#e4393c}
.main-nav-item:hover .large-none,.KT-screen .sq:hover .large-curr,.KT-screen .dx:hover,.v-fixed .fixed-gl a,.sl-aa a:hover i,.s-more:hover{border-color:#e4393c}
.KT-path{border-bottom:1px solid #DDD;background:#F1F1F1;height:34px;line-height:34px;overflow:hidden}
.KT-path h3{float:left;padding-left:10px}
.KT-path h3 span{color:#c81623}
.se-ext{float:left;padding-left:20px}
.KT-brand{position:relative;line-height:34px;border-bottom:1px dashed #eee}
.KT-screen .entend{margin-top:-1px;border:2px solid #AAA;background:#f9f9f9}
#midented .KT-screen .entender{margin-top:-1px;border:2px solid #edd28b;background:#fffdee}
.brand-left{float:left;width:100px;padding-left:10px}
.brand-center{margin-left:110px;padding-right:130px;padding-left:10px;overflow:hidden;background:#fff}
.sl-a{float:left;padding-top:6px;margin-bottom:10px;overflow:hidden}
.sl-a li{float:left;height:20px;line-height:20px;border:1px solid #fff;cursor:default;padding:0 7px;
text-align:center;color:#005aa0}
.entend .curr,.entender .curr{border-color:#e4393c;color:#e4393c}
.v-fixed{padding-top:10px;margin-bottom:10px;height:99px;overflow:hidden}
.sl-b .v-fixe{overflow-y:auto;overflow-x:hidden;height:196px;padding-top:1px;}
.v-fixed li{float:left;width:116px;height:48px;padding:0;border:1px solid #DDD;margin:-1px -1px 0 0;
background:#FFF;text-align:center}
.v-fixed li a{display:block;border:1px solid #fff;height:46px;width:114px;overflow:hidden;
text-overflow:ellipsis;white-space:nowrap;color:#005aa0;line-height:48px}
.v-fixed img{padding:5px 6px;vertical-align:top;border:0}
.v-fixed li:hover img{display:none}
.v-fixed li:hover a{border-color:#e4393c;color:#e4393c}
.v-fixed li:hover{position:relative;border-color:#e4393c;box-shadow:2px 2px 3px rgba(0,0,0,.12)}
.v-fixed .fixed-gl{position:relative;border-color:#e4393c;box-shadow:2px 2px 3px rgba(0,0,0,.12)}
.v-fixed .fixed-gl a{border-color:#e4393c;}
.fixed-gl a i{display:block;position:absolute;right:-1px;bottom:-1px;width:10px;height:10px;
background:url("./assets/write_ok.gif") -1px -1px}
.sl-c{overflow:hidden}
.sl-key{float:left;margin-right:5px}
.sl-ckey{float:left;height:34px;margin-bottom:10px;overflow:hidden;padding-top:4px}
.sl-ckey li{float:left;margin-bottom:4px;height:26px;line-height:26px;margin-right:10px;}
.sl-ckey li a{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
position:relative;padding-left:18px}
.sl-d{text-align:center;padding-top:5px;padding-bottom:5px}
.sl-d .disabled{background:#fff;cursor:default;color:#ccc;border:1px solid #ddd;padding:4px 13px 5px;
opacity:.2}
.btnl{display:inline-block;height:14px;line-height:14px;border-radius:2px;cursor:pointer;border:0;
color:#fff;padding:5px 15px 6px;}
.boton-qd,.btn-qd{background:#E74649}
.boton-qx,.btn-qx{background:#f7f7f7;color:#666}
.brand-right{position:absolute;top:6px;right:8px;width:120px;height:auto;line-height:22px;
overflow:hidden}
.sq{float:left;margin-right:20px;width:50px;height:22px;background:#fff;color:#333;position:relative;
visibility:visible}
.sq i{position:absolute;top:0;right:0;border:1px #DDD solid}
.dx{float:left;height:20px;line-height:20px;border:1px solid #ddd;padding:0 3px 0 18px;
position:relative;background:#F8F8F8;color:#333}
.dx i{position:absolute;display:block;left:3px;top:0;width:13px;height:20px;font-size:17px;color:#999;
font-style:normal}
.sl-aa{overflow:hidden;padding-top:4px}
.s-icon .sl-aa ul{height:36px}
.s-icon{line-height:40px}
.sl-aa ul{float:left;overflow:hidden;position:relative;height:30px}
.brand-center .slbb ul{height:auto}
.s-icon .sl-aa ul li{height:32px;line-height:32px}
.j-list li{float:left;margin-right:16px;height:26px;line-height:26px;margin-bottom:4px}
.KT-screen .s-icon ul li{margin-right:30px;}
.KT-screen .s-icon .sl-aa a{position:relative;padding-right:36px;}
.sl-aa ul a{float:left;white-space:nowrap}
.sl-aa ul li{margin-right:51px;}
.sl-aa img{position:absolute;right:0;top:50%;width:30px;height:30px;margin-top:-15px;border:0}
.entender .j-list i,.sl-ckey li a i{display:inline-block;width:12px;height:12px;border:1px solid #ccc;
position:absolute;left:0;top:6px;background:url("./assets/write_ok.gif") no-repeat 99px 99px;
background-color:#fff}
.entender .xzk-a a i,.sl-ckey li a i{background-position:-1px 0px;border-color:#e4393c}
.entender .j-list li a{position:relative;padding-left:18px}
.s-more{text-align:center;position:relative;top:-1px;border-top:1px solid #ddd;transition:border-color .15s ease-in-out}
.s-more span{position:relative;display:inline-block;margin-top:-1px;height:28px;line-height:28px;
padding:0 40px 0 20px;border-width:1px;border-style:solid;border-color:#fff #DDD #ddd;background:#fff;
cursor:pointer;color:#333;transition:border-color .15s ease-in-out}
.s-more span i{position:absolute;right:16px;top:4px;}
.s-more:hover span{border-color:#fff #e4393c #e4393c;color:#e4393c}
.clr{display:block;overflow:hidden;clear:both;height:0;line-height:0;font-size:0}
</style>
