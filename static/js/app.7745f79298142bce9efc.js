webpackJsonp([0],[,function(t,e,a){"use strict";var n=a(3);e.a=new n.a},function(t,e,a){function n(t){a(30)}var i=a(0)(a(18),a(47),n,null,null);t.exports=i.exports},,function(t,e,a){"use strict";var n=a(37),i=a.n(n);e.a={install:function(t){t.component("loading",i.a)}}},function(t,e,a){function n(t){a(27)}var i=a(0)(a(12),a(44),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(28)}var i=a(0)(a(16),a(45),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(26)}var i=a(0)(a(17),a(43),n,null,null);t.exports=i.exports},function(t,e,a){var n=a(0)(a(19),a(39),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(29)}var i=a(0)(a(20),a(46),n,null,null);t.exports=i.exports},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(36),i=a.n(n),s=a(35),o=a.n(s),r=a(33),c=a.n(r),u=a(2),l=a.n(u),d=a(1);e.default={components:{MyHeader:i.a,MyFooter:o.a,MDetail:l.a,Bg:c.a},created:function(){var t=this;d.a.$on("toggleLoading",function(e){t.isShowLoading=e}),d.a.$on("getBgUrl",function(e){t.bgurl=e})},data:function(){return{isShowLoading:!1,bgurl:""}},mounted:function(){var t=this.$refs.mainBox;t.style.width="10rem",t.style.height=window.innerHeight+"px",window.addEventListener("resize",function(){setTimeout(function(){t.style.height=window.innerHeight+"px"},300)},!1)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["bgurl"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["dataList","routerLocation"],data:function(){return{isShowSlider:!1,tooptip:"没有数据哦！"}},created:function(){this.showList()},beforeUpdate:function(){console.log(123),this.showList()},methods:{showList:function(){console.log(this.dataList);for(var t in this.dataList)if(this.dataList[t].images||this.dataList[t].avatars)return void(this.isShowSlider=!0)}},filters:{formatSwop:function(t){return t.indexOf(".webp")>=0?t.replace(".webp",".jpg"):t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.$root.showLoading=!1}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){var t=this;this.$http.jsonp("http://api.douban.com/v2/movie/celebrity/"+this.$route.params.id).then(function(e){t.actorData=e.data}).catch(function(t){})},data:function(){return{actorData:null}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(34),i=a.n(n),s=a(1);e.default={components:{MSlideList:i.a},data:function(){return{hotList:null,detailData:null,mHotPort:"./../../static/dd.json",mDetailPort:"http://api.douban.com/v2/movie/subject/"}},beforeRouteEnter:function(t,e,a){a(function(e){e.getData(e.mHotPort,e,"hotList",{start:0,count:10},"get");var a=e.mDetailPort+t.params.id;e.getData(a,e,"detailData")})},beforeRouteUpdate:function(t,e,a){var n=this.mDetailPort+t.params.id;this.getData(n,this,"detailData"),a()},methods:{getData:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"jsonp";e.$http[i](t,{params:n}).then(function(t){e[a]=t.data;var n=t.data;n.images&&s.a.$emit("getBgUrl",n.images.large)}).catch(function(t){})}},mounted:function(){}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={beforeRouteEnter:function(t,e,a){a(function(e){e.diffPortName(t.params)})},methods:{diffPortName:function(t){switch(t.portName){case"inTheaters":this.getData("http://api.douban.com/v2/movie/in_theaters");break;case"comingSoon":this.getData("http://api.douban.com/v2/movie/coming_soon");break;case"top250":this.getData("http://api.douban.com/v2/movie/top250");break;case"usBox":this.getData("http://api.douban.com/v2/movie/us_box");break;default:this.getData("http://api.douban.com/v2/movie/in_theaters"),console.log("HOTHOTHOT")}},getData:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$http.jsonp(t,a).then(function(t){e.dataBox=t.data,console.log(t.data)}).catch(function(t){})}},data:function(){return{dataBox:null}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={created:function(){},mounted:function(){var t=this;setTimeout(function(){t.$refs.smile.setAttribute("class","smile")}),n.a.$emit("getBgUrl","http://img3.doubanio.com/img/celebrity/medium/56339.jpg")},data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a(11),s=a(10),o=a(5),r=a.n(o),c=a(4),u=a(2),l=a.n(u),d=a(7),v=a.n(d),f=a(8),m=a.n(f),p=a(9),_=a.n(p),h=a(6),g=a.n(h),b=a(1);n.a.use(i.a),n.a.use(s.a),n.a.use(c.a);var x=[{path:"/",redirect:"/mnav"},{path:"/detail/:id",component:l.a},{path:"/actor/:id",component:v.a},{path:"/tooltip",component:g.a},{path:"/mlist",component:m.a,name:"mlist"},{path:"/mnav",component:_.a}],w=new i.a({mode:"history",routes:x}),D=new n.a({el:"#app",router:w,template:"<App/>",components:{App:r.a},data:{showLoaidng:1111}});n.a.http.interceptors.push(function(t,e){b.a.$emit("toggleLoading",!0),e(function(t){return 200==t.status||500==t.status&&D.$router.push({path:"/Tooltip"}),b.a.$emit("toggleLoading",!1),t})})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"static/img/disc.9462cc5.png"},function(t,e,a){function n(t){a(31)}var i=a(0)(a(13),a(48),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(22)}var i=a(0)(a(14),a(38),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(25)}var i=a(0)(a(15),a(42),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(24)}var i=a(0)(null,a(41),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(23)}var i=a(0)(null,a(40),n,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-slide-list"},[t.isShowSlider?a("ul",[t._l(t.dataList,function(e){return[e.images||e.avatars?a("router-link",{attrs:{to:t.routerLocation+e.id,tag:"li"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t._f("formatSwop")(e.images?e.images.medium:e.avatars.medium)}})]),t._v(" "),a("p",[t._v(t._s(e.title||e.name))])]):t._e()]})],2):a("div",{staticClass:"no-data",attrs:{"data-box":t.dataList[0]}},[t._v("没有数据哦！")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dataBox?a("div",{staticClass:"m-list-box"},[a("h3",[t._v(t._s(t.dataBox.title))]),t._v(" "),a("ul",{staticClass:"m-list-p"},t._l(t.dataBox.subjects,function(e){return e.subject?a("li",[a("router-link",{attrs:{to:"/detail/"+e.subject.id}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.subject.images.medium}})]),t._v(" "),a("p",[t._v(t._s(e.subject.title))])])],1):a("li",[a("router-link",{attrs:{to:"/detail/"+e.id}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.images.medium}})]),t._v(" "),a("p",[t._v(t._s(e.title))])])],1)}))]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading-box"},[a("div",[a("span",[t._v("J")]),a("span",[t._v("o")]),a("span",[t._v("e")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"header"},[t._v("header")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"footer"},[t._v("footer")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.actorData?a("div",{staticClass:"actor-box"},[a("h3",[t._v("演员信息：")]),t._v(" "),a("section",[a("div",{staticClass:"cover-box"},[a("img",{attrs:{src:t.actorData.avatars.large}})]),t._v(" "),a("ul",{staticClass:"text-info"},[a("li",[a("strong",[t._v("中文姓名：")]),a("span",[t._v(t._s(t.actorData.name))])]),t._v(" "),a("li",[a("strong",[t._v("其他称呼：")]),t._l(t.actorData.aka_en,function(e){return a("span",[t._v(t._s(e))])})],2),t._v(" "),a("li",[a("strong",[t._v("出生地：")]),a("span",[t._v(t._s(t.actorData.born_place))])]),t._v(" "),t._m(0)])]),t._v(" "),a("h3",[t._v("其他作品：")]),t._v(" "),a("section",[a("ul",{staticClass:"m-list-p"},t._l(t.actorData.works,function(e){return a("li",[a("router-link",{attrs:{to:"/detail/"+e.subject.id}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.subject.images.large}})]),t._v(" "),a("p",[t._v(t._s(e.subject.title))])])],1)}))])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("strong",[t._v("简介：")]),a("span",[t._v("...")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"mainBox",staticClass:"main-box"},[a("MyHeader"),t._v(" "),a("div",{staticClass:"main"},[a("transition",{attrs:{name:"fade"}},[a("router-view",{})],1)],1),t._v(" "),a("Bg",{attrs:{bgurl:t.bgurl}}),t._v(" "),a("MyFooter"),t._v(" "),a("loading",{directives:[{name:"show",rawName:"v-show",value:t.isShowLoading,expression:"isShowLoading"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tooltip-box"},[a("div",[t._v("由于第三方数据接口请求次数限制，页面啥也没有啦！一起等等吧！！！")])])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-nav"},[a("div",{ref:"smile"},[a("p",[a("router-link",{attrs:{to:{name:"mlist",params:{portName:"inTheaters"}}}},[t._v("正在热映")]),t._v(" "),a("router-link",{attrs:{to:{name:"mlist",params:{portName:"top250"}}}},[t._v("全球排名")])],1),t._v(" "),a("p",[a("router-link",{attrs:{to:{name:"mlist",params:{portName:"usBox"}}}},[t._v("北美票房")]),t._v(" "),a("router-link",{attrs:{to:{name:"mlist",params:{portName:"comingSoon"}}}},[t._v("即将上映")])],1),t._v(" "),a("div",{staticClass:"mouth"}),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"disc"},[n("div",{staticClass:"disc-img"},[n("img",{attrs:{src:a(32)}})]),t._v(" "),n("div",{staticClass:"disc-line"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.detailData?a("div",{staticClass:"detail-box"},[a("section",{staticClass:"hot-m-list"},[a("h3",[t._v("正在热映")]),t._v(" "),t.hotList?a("MSlideList",{attrs:{dataList:t.hotList.subjects,routerLocation:"/detail/"}}):t._e()],1),t._v(" "),a("section",{staticClass:"hot-m-intro"},[a("h3",[t._v("影片详情：")]),t._v(" "),a("div",{staticClass:"m-cover-text white-bg-box"},[a("div",{staticClass:"cover-img-box"},[a("img",{attrs:{src:t.detailData.images.large}})]),t._v(" "),a("div",{staticClass:"cover-text"},[a("p",[a("strong",[t._v("片名：")]),a("span",[t._v(t._s(t.detailData.title))])]),t._v(" "),a("p",[a("strong",[t._v("地区：")]),t._l(t.detailData.countries,function(e){return a("span",[t._v(t._s(e)+"、")])})],2),t._v(" "),a("p",[a("strong",[t._v("影片类型：")]),t._l(t.detailData.genres,function(e){return a("span",[t._v(t._s(e)+"、")])})],2),t._v(" "),a("p",[a("strong",[t._v("上映年份：")]),a("span",[t._v(t._s(t.detailData.year))])]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"text-info"},[t._v("\r\n\t\t\t\t\t"+t._s(t.detailData.summary?t.detailData.summary:"暂时没有简介哦！")+"\r\n\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"m-actors white-bg-box"},[a("h4",[t._v("主演：")]),t._v(" "),a("MSlideList",{attrs:{dataList:t.detailData.casts,routerLocation:"/actor/"}})],1)])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("故事背景：")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-bg",style:"background-image:url("+t.bgurl+")"},[a("div")])},staticRenderFns:[]}},,,function(t,e){}],[21]);
//# sourceMappingURL=app.7745f79298142bce9efc.js.map