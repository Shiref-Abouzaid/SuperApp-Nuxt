(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(459))&&n.__esModule?n:{default:n};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===c(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===c(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return M.default}}),t.helpers=void 0;var n=z(r(458)),o=z(r(461)),c=z(r(462)),l=z(r(463)),d=z(r(464)),f=z(r(465)),v=z(r(466)),m=z(r(467)),_=z(r(468)),h=z(r(469)),y=z(r(470)),w=z(r(471)),x=z(r(472)),P=z(r(473)),O=z(r(474)),C=z(r(475)),j=z(r(476)),$=z(r(477)),S=z(r(478)),A=z(r(479)),M=z(r(480)),k=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(456));function z(e){return e&&e.__esModule?e:{default:e}}t.helpers=k},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},459:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(460).withParams:r(355).withParams;t.default=n}).call(this,r(117))},460:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(48))},461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("numeric",/^[0-9]*$/);t.default=n},463:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},465:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(c)}));t.default=o;var c=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},466:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},473:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},474:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},479:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},481:function(e,t,r){"use strict";var n={props:["gallery"],data:function(){return{swiperOption:{slidesPerView:1},swiperThumbnailOption:{slidesPerView:7,spaceBetween:15,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted:function(){this.mainSwiper.controller.control=this.thumbnailSwiper,this.thumbnailSwiper.controller.control=this.mainSwiper,console.log("swiper main >>> ",this.mainSwiper.controller.control),console.log("swiper thumbnail >>> ",this.thumbnailSwiper.controller.control)}},o=r(39),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slider-thumbnails"},[r("div",{staticClass:"product-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:e.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},e._l(e.gallery,(function(img,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("div",{staticClass:"product-img"},[r("img",{attrs:{src:img,alt:""}})])])})),0)])]),e._v(" "),r("div",{staticClass:"thumbnails"},[r("div",{staticClass:"product-thumbnails"},[r("div",{staticClass:"slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:thumbnailSwiper",value:e.swiperThumbnailOption,expression:"swiperThumbnailOption",arg:"thumbnailSwiper"}],staticClass:"swiper arrow-secondary"},[r("div",{staticClass:"swiper-wrapper"},e._l(e.gallery,(function(img,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("div",{staticClass:"thumbnail"},[r("img",{attrs:{src:img,alt:""}})])])})),0),e._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})]),e._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})])])])])])])}),[],!1,null,null,null);t.a=component.exports},571:function(e,t,r){"use strict";r.r(t);r(40),r(58);var n=r(21),o=r(16),c=r.n(o),l=r(95),d=r.n(l),f=r(481),v=r(457),m={components:{appSliderThumbnails:f.a},data:function(){return{auction:{},currentPrice:"",endDate:null,error:!1,price:"",auctions:[],auctionees:[],deal:"",deals:[],winnedUser:null,auctionOwner:{},days:0,hours:0,minutes:0,seconds:0}},validations:{price:{required:v.required,decimal:v.decimal,exact:function(e){return""==e||e>=this.auction.increment_value}},deal:{required:v.required,numeric:v.numeric}},computed:{isAuthenticated:function(){return this.$store.getters["auth/isAuthenticated"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new d.a("CD123456",{encrypted:!1,cluster:"eu",forceTLS:!1,httpHost:"synchronizer.tbdm.net",statsHost:"http://synchronizer.tbdm.net/stats",wsHost:"synchronizer.tbdm.net",wsPort:6001,authEndpoint:"http://developers.api.tbdm.net/v-1872020/eg-en/auction/broadcasting/auth",auth:{headers:{Authorization:e.$store.getters["auth/token"]}}}),console.log("auction route param id >> ",e.$route.params.auctionId),(n=r.subscribe("presence-auction."+e.$route.params.auctionId)).bind("App\\Events\\BidCreated",(function(t){console.log("got data >>>>> ",t),e.auctions.push(t.auctionee),t.userId!=e.$store.getters["auth/userId"]&&(console.log("price for other members >> ",t.auctionee.paid_price),e.currentPrice+=+t.auctionee.paid_price)})),n.bind("App\\Events\\DealOffered",(function(t){console.log("get deal >> ",t),e.deals.push(t.makeDeal)})),n.bind("App\\Events\\DealAccepted",(function(e){console.log("deal Accepted >> ",e)})),console.log("pusher instance >> ",r),t.prev=1,t.next=4,c.a.get("/my/auctions/"+e.$route.params.auctionId);case 4:o=t.sent,e.auction=o.data.data,console.log("auction >>>> ",e.auction),e.endDate=e.auction.ends_at,console.log("ends at fetch >> ",e.endDate),e.currentPrice=e.auction.total_paids?e.auction.total_paids:e.auction.open_price,e.auctionees=e.auction.auctionee,e.deals=e.auction.makeDeal,e.winnedUser=e.auction.winnedUser,e.auctionOwner=e.auction.seller,console.log("owner >> ",e.auctionOwner),l=new Date(e.endDate).getTime(),f=setInterval((function(){var t=(new Date).getTime(),time=l-t;e.days=Math.floor(time/864e5),e.hours=Math.floor(time%864e5/36e5),e.minutes=Math.floor(time%36e5/6e4),e.seconds=Math.floor(time%6e4/1e3),time<=0&&(e.days=0,e.hours=0,e.minutes=0,e.seconds=0,clearInterval(e.interval))}),1e3),e.interval=f,t.next=23;break;case 20:t.prev=20,t.t0=t.catch(1),console.log("error >> ",t.t0);case 23:case"end":return t.stop()}}),t,null,[[1,20]])})))()},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("in fetch");case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{makeBid:function(){if(console.log("bid now!",this.price),!this.$v.price.$invalid)try{var e=this.$store.getters["auth/userId"];this.currentPrice+=+this.price;var t=this.price;this.price="",this.$v.price.$reset();var r={auction_id:this.$route.params.auctionId,paid_price:t,user_id:e};c.a.post("/my/auctions/"+this.$route.params.auctionId+"/bids",r,{headers:{Authorization:e}})}catch(e){console.log("bid error >> ",e)}},makeDeal:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("deal now! ",e.deal),t.prev=1,r=e.$store.getters["auth/userId"],n=e.deal,e.deal="",e.$v.deal.$reset(),o={auction_id:e.$route.params.auctionId,price:n,user_id:r},t.next=9,c.a.post("/my/auctions/"+e.$route.params.auctionId+"/deals",o,{headers:{Authorization:r}});case 9:t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log("error deal >> ",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()},onYes:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("deal! ",e),r.prev=1,n=t.$store.getters["auth/userId"],o={status:"accepted"},r.next=6,c.a.post("/my/auctions/deals/"+e.id+"/reply",o,{headers:{Authorization:n}});case 6:l=r.sent,t.winnedUser=e,clearInterval(t.interval),t.days=t.hours=t.minutes=t.seconds=0,console.log("deal accepted >> ",l),t.deals=[],r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),console.log("error >> ",r.t0);case 17:case"end":return r.stop()}}),r,null,[[1,14]])})))()},onNo:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("deal!",e),r.prev=1,n=t.$store.getters["auth/userId"],o={status:"rejected"},r.next=6,c.a.post("/my/auctions/deals/"+e.id+"/reply",o,{headers:{Authorization:n}});case 6:l=r.sent,console.log("deal rejected >> ",l),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.log("error >> ",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()}},destroyed:function(){console.log("destroyed >> ",this.interval),clearInterval(this.interval)}},_=r(39),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.auction?r("section",{staticClass:"auction-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("subnav.home")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("subnav.vip")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(e._s(e.$t("subnav.auc_name")))])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[r("app-slider-thumbnails",{attrs:{gallery:e.auction.gallary}}),e._v(" "),r("div",{staticClass:"about"},[r("h3",[e._v(e._s(e.$t("vip.about_action")))]),e._v(" "),r("p",[e._v(e._s(e.auction.description))])])],1),e._v(" "),r("div",{staticClass:"col-sm-4"},[e.days||e.hours||e.minutes||e.seconds?r("div",{staticClass:"details"},[r("h3",[e._v(e._s(e.$t("vip.auction_details")))]),e._v(" "),r("div",{staticClass:"time"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-3"},[r("div",{staticClass:"num"},[r("span",[e._v(e._s(e.days))])]),e._v(" "),r("p",[e._v(e._s(e.$t("vip.day")))])]),e._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"num"},[r("span",[e._v(e._s(e.hours))])]),e._v(" "),r("p",[e._v(e._s(e.$t("vip.hr"))+".")])]),e._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"num"},[r("span",[e._v(e._s(e.minutes))])]),e._v(" "),r("p",[e._v(e._s(e.$t("vip.mins")))])]),e._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"num"},[r("span",[e._v(e._s(e.seconds))])]),e._v(" "),r("p",[e._v(e._s(e.$t("vip.sec"))+".")])])])]),e._v(" "),r("div",{staticClass:"current-bid"},[r("span",{staticClass:"text"},[e._v(e._s(e.$t("vip.current_bid"))+": ")]),e._v(" "),r("span",{staticClass:"price"},[e._v(e._s(e.currSymbol)+e._s(e.currentPrice))])])]):r("div",{staticClass:"ended"},[r("h3",[e._v(e._s(e.$t("vip.auction_details")))]),e._v(" "),r("h5",{staticClass:"text-center"},[e._v("This auction has been ended")]),e._v(" "),e.winnedUser?r("p",{staticClass:"text-center"},[e._v("Owned by "),r("span",{staticClass:"name"},[e._v(e._s(e.winnedUser.user.first_name)+" "+e._s(e.winnedUser.user.last_name))])]):e._e(),e._v(" "),e.winnedUser?r("p",{staticClass:"text-center"},[e._v("with "),r("span",{staticClass:"price"},[e._v(e._s(e.currSymbol)+" "+e._s(e.winnedUser.price))])]):e._e()]),e._v(" "),e.isAuthenticated&&e.$store.getters["auth/userId"]!=e.auctionOwner.id&&(e.days||e.hours||e.minutes||e.seconds)?r("div",{staticClass:"offer"},[r("div",{staticClass:"head"},[r("h3",[e._v(e._s(e.$t("vip.pace_an")))]),e._v(" "),r("img",{attrs:{src:"/images/icons/svg/question.svg",alt:""}})]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.makeBid(t)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"form-control \n                                form-control-lg",class:{invalid:e.$v.price.$error},attrs:{type:"text",placeholder:"Place Offer",id:"offer"},domProps:{value:e.price},on:{input:[function(t){t.target.composing||(e.price=t.target.value)},function(t){return e.$v.price.$touch()}]}}),e._v(" "),r("small",{staticClass:"form-text text-muted"},[r("span",[e._v("offer Bid "+e._s(e.currSymbol)+e._s(e.auction.increment_value)+" or more")])])]),e._v(" "),r("div",{staticClass:"submit-btn"},[r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v(e._s(e.$t("vip.submit")))])])])]):e._e(),e._v(" "),e.isAuthenticated&&e.$store.getters["auth/userId"]!=e.auctionOwner.id&&(e.days||e.hours||e.minutes||e.seconds)?r("div",{staticClass:"deal"},[r("div",{staticClass:"head"},[r("h3",[e._v(e._s(e.$t("vip.make_deal")))]),e._v(" "),r("img",{attrs:{src:"/images/icons/svg/question.svg",alt:""}})]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.makeDeal(t)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deal,expression:"deal"}],staticClass:"form-control form-control-lg",class:{invalid:e.$v.deal.$error},attrs:{type:"text",placeholder:"Place Offer",id:"deal"},domProps:{value:e.deal},on:{input:[function(t){t.target.composing||(e.deal=t.target.value)},function(t){return e.$v.deal.$touch()}]}})]),e._v(" "),r("div",{staticClass:"submit-btn"},[r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v(e._s(e.$t("vip.submit")))])])])]):e._e(),e._v(" "),e.$store.getters["auth/userId"]==e.auctionOwner.id&&e.deals&&e.deals.length>0?r("div",{staticClass:"auction-deals"},[r("h3",[e._v(e._s(e.$t("vip.deal")))]),e._v(" "),e._l(e.deals,(function(t){return r("div",{key:t.id,staticClass:"auction-deal"},[r("h6",[e._v(e._s(t.user.first_name)+" wanna make a deal with "+e._s(t.price))]),e._v(" "),r("div",{staticClass:"actions"},[r("button",{staticClass:"btn no",on:{click:function(r){return e.onNo(t)}}},[e._v("No")]),e._v(" "),r("button",{staticClass:"btn yes",on:{click:function(r){return e.onYes(t)}}},[e._v("Yes")])])])}))],2):e._e(),e._v(" "),r("div",{staticClass:"auction-data"},[r("b-tabs",[r("b-tab",{attrs:{title:"Auction",active:""}},[r("div",{staticClass:"auction-realtime"},e._l(e.auctions,(function(t,n){return r("div",{key:n,staticClass:"bid"},[r("span",{staticClass:"name"},[e._v(e._s(t.user.first_name))]),e._v(" "),r("span",{staticClass:"price"},[e._v(e._s(e.currSymbol)+e._s(t.paid_price))])])})),0)]),e._v(" "),r("b-tab",{attrs:{title:"Auction Log"}},[r("div",{staticClass:"auction-log"},e._l(e.auctionees,(function(t,n){return r("div",{key:n,staticClass:"bid"},[r("span",{staticClass:"name"},[e._v(e._s(t.user.first_name))]),e._v(" "),r("span",{staticClass:"price"},[e._v(e._s(e.currSymbol)+e._s(t.paid_price))])])})),0)])],1)],1)])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);