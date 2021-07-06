(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{487:function(t,e,r){"use strict";var c={props:["car"],data:function(){return{}},computed:{locale:function(){return this.$store.getters["locale/locale"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}}},n=r(39),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.car?r("div",{staticClass:"car"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/car-rental/"+t.car.id+"/"+t.car.title}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-hover"},[r("div",{staticClass:"card-img"},[r("img",{staticClass:"card-img-top",attrs:{src:t.car.image_url,alt:"..."}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-head"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.car.title))])]),t._v(" "),r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.currSymbol)+t._s(t.car.rental_price_per_period)+" / "+t._s(t.car.rental_period))])])])]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col add-cart-btn"},[r("span",[t._v(t._s(t.$t("real_state.details_btn")))])])])])])])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},519:function(t,e,r){"use strict";r.r(e);r(58);var c=r(21),n=r(16),l=r.n(n),o={props:["categories","models"],data:function(){return{swiperOption:{slidesPerView:"auto",spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{locale:function(){return this.$store.getters["locale/locale"]}}},d=r(39),v={components:{appMainCategories:Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cat-slider"},[t.categories&&t.categories.length>0?r("div",{staticClass:"main-medical"},[r("div",{staticClass:"cat-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:t.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{exact:"",to:"/"+t.locale+"/services/car-rental/main"}},[t._v("All")])],1)]),t._v(" "),t._l(t.categories,(function(e){return r("div",{key:e.id,staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/car-rental/main/"+e.id+"/"+e.model_name}},[t._v(t._s(e.model_name))])],1)])}))],2),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/store-cat-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/store-cat-arrow.svg",alt:""}})])])])]):t._e(),t._v(" "),(t.$route.params.categoryId||t.$route.params.modelId)&&t.models&&t.models.length>0?r("div",{staticClass:"doctors-specialities"},[r("div",{staticClass:"cat-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:subSwiper",value:t.swiperOption,expression:"swiperOption",arg:"subSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{exact:"",to:"/"+t.locale+"/services/car-rental/main/"+t.$route.params.categoryId+"/"+t.$route.params.categoryName}},[t._v("All")])],1)]),t._v(" "),t._l(t.models,(function(e){return r("div",{key:e.id,staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{to:"/"+t.locale+"/services/car-rental/main/"+t.$route.params.categoryId+"/"+t.$route.params.categoryName+"/model/"+e.id+"/"+e.model_name}},[t._v(t._s(e.model_name))])],1)])}))],2),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/doctor-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/doctor-arrow.svg",alt:""}})])])])]):t._e()])}),[],!1,null,null,null).exports,appSingleCar:r(487).a},data:function(){return{categories:[],models:[]}},computed:{locale:function(){return this.$store.getters["locale/locale"]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/my/car-rental/skip/0/take/6");case 3:if(r=e.sent,console.log("categories >> ",r.data.data),t.categories=r.data.data.categories,!t.$route.params.categoryId){e.next=12;break}return e.next=9,l.a.post("/my/car-rental/filtered/skip/0/take/6",{categories:t.$route.params.categoryId});case 9:c=e.sent,t.models=c.data.data.models,console.log("models fetch >> ",c.data.data);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("error >> ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},watch:{"$route.params.categoryId":function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log("changed .......",t,e),!r.$route.params.categoryId){c.next=13;break}return c.prev=2,c.next=5,l.a.post("/my/car-rental/filtered/skip/0/take/6",{categories:r.$route.params.categoryId});case 5:n=c.sent,r.models=n.data.data.models,console.log("models >> ",n.data.data),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(2),console.log("models error >> ",c.t0);case 13:case"end":return c.stop()}}),c,null,[[2,10]])})))()}}},m=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"car-rental-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("subnav.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/"}},[t._v(t._s(t.$t("subnav.service")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("subnav.rental")))])])]),t._v(" "),r("app-main-categories",{attrs:{categories:t.categories,models:t.models}}),t._v(" "),r("div",{staticClass:"cars"},[r("div",{staticClass:"head"},[r("h3",[t._v(t._s(t.$t("carRental.popularCars")))]),t._v(" "),r("div",{staticClass:"add-btn"},[r("button",{staticClass:"btn",on:{click:function(e){return t.$router.push("/"+t.locale+"/services/car-rental/add")}}},[t._v("+ "+t._s(t.$t("carRental.addCar")))])])]),t._v(" "),r("nuxt-child")],1)],1)])}),[],!1,null,null,null);e.default=m.exports}}]);