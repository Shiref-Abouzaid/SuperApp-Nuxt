(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{487:function(t,e,r){"use strict";var c={props:["car"],data:function(){return{}},computed:{locale:function(){return this.$store.getters["locale/locale"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}}},n=r(39),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.car?r("div",{staticClass:"car"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/car-rental/"+t.car.id+"/"+t.car.title}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-hover"},[r("div",{staticClass:"card-img"},[r("img",{staticClass:"card-img-top",attrs:{src:t.car.image_url,alt:"..."}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-head"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.car.title))])]),t._v(" "),r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.currSymbol)+t._s(t.car.rental_price_per_period)+" / "+t._s(t.car.rental_period))])])])]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col add-cart-btn"},[r("span",[t._v(t._s(t.$t("real_state.details_btn")))])])])])])])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},528:function(t,e,r){"use strict";r.r(e);r(15);var c=r(34),n=(r(58),r(21)),l=r(16),o=r.n(l),v={data:function(){return{swiperOption:{slidesPerView:"auto",spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},d=r(39),w={components:{appMainCategories:Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cat-slider"},[r("div",{staticClass:"main-medical"},[r("div",{staticClass:"cat-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:t.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/eg-en/services/car-rental"}},[t._v("All")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/test"}},[t._v("Doctors")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/test"}},[t._v("Clinics")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/test"}},[t._v("SPA")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/test"}},[t._v("Hospitals")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/test"}},[t._v("Pharmacies")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/test"}},[t._v("Laboratories")])],1)])]),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/store-cat-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/store-cat-arrow.svg",alt:""}})])])])]),t._v(" "),r("div",{staticClass:"doctors-specialities"},[r("div",{staticClass:"cat-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:subSwiper",value:t.swiperOption,expression:"swiperOption",arg:"subSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{exact:"",to:"/eg-en/services/car-rental/model"}},[t._v("All")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/test"}},[t._v("Kia")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/test"}},[t._v("Kia")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/test"}},[t._v("Kia")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/test"}},[t._v("Kia")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/test"}},[t._v("Kia")])],1)])]),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/doctor-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/doctor-arrow.svg",alt:""}})])])])])])}),[],!1,null,null,null).exports,appSingleCar:r(487).a},data:function(){return{cars:[],allowToGetMore:!0,noMore:!1,loading:{seeMore:!1}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/my/car-rental/filtered/skip/0/take/6",{model_ids:t.$route.params.modelId});case 3:r=e.sent,t.cars=r.data.data.cars,console.log("car data >> ",r.data.data.cars),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error >> ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{handleScroll:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=window.scrollY,n=document.body.scrollHeight,l=window.innerHeight,!(Math.floor(r-(n-l))<1&&Math.floor(r-(n-l))>-10)){t.next=20;break}if(!e.allowToGetMore||e.noMore){t.next=20;break}return e.allowToGetMore=!1,t.prev=6,e.loading.seeMore=!0,t.next=10,o.a.post("/my/car-rental/filtered/skip/".concat(e.cars.length,"/take/6"),{model_ids:e.$route.params.modelId});case 10:v=t.sent,e.cars=[].concat(Object(c.a)(e.cars),Object(c.a)(v.data.data.cars)),e.loading.seeMore=!1,e.allowToGetMore=!0,v.data.data.cars.length<1&&(e.noMore=!0),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(6),console.log(t.t0.response);case 20:case"end":return t.stop()}}),t,null,[[6,17]])})))()}},created:function(){window.addEventListener("scroll",this.handleScroll)},watch:{$route:function(){this.$fetch(),this.allowToGetMore=!0}}},C=Object(d.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row"},this._l(this.cars,(function(t){return e("div",{key:t.id,staticClass:"col-sm-4"},[e("app-single-car",{attrs:{car:t}})],1)})),0),this._v(" "),this.loading.seeMore?e("div",{staticClass:"text-center mt-4"},[e("b-spinner",{staticClass:"spinner-primary",attrs:{variant:"default",large:"",type:"grow"}})],1):this._e()])}),[],!1,null,null,null);e.default=C.exports}}]);