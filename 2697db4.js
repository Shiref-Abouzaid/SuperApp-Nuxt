(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{481:function(t,e,r){"use strict";var l={props:["gallery"],data:function(){return{swiperOption:{slidesPerView:1},swiperThumbnailOption:{slidesPerView:7,spaceBetween:15,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted:function(){this.mainSwiper.controller.control=this.thumbnailSwiper,this.thumbnailSwiper.controller.control=this.mainSwiper,console.log("swiper main >>> ",this.mainSwiper.controller.control),console.log("swiper thumbnail >>> ",this.thumbnailSwiper.controller.control)}},c=r(39),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-thumbnails"},[r("div",{staticClass:"product-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:t.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.gallery,(function(img,t){return r("div",{key:t,staticClass:"swiper-slide"},[r("div",{staticClass:"product-img"},[r("img",{attrs:{src:img,alt:""}})])])})),0)])]),t._v(" "),r("div",{staticClass:"thumbnails"},[r("div",{staticClass:"product-thumbnails"},[r("div",{staticClass:"slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:thumbnailSwiper",value:t.swiperThumbnailOption,expression:"swiperThumbnailOption",arg:"thumbnailSwiper"}],staticClass:"swiper arrow-secondary"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.gallery,(function(img,t){return r("div",{key:t,staticClass:"swiper-slide"},[r("div",{staticClass:"thumbnail"},[r("img",{attrs:{src:img,alt:""}})])])})),0),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})])])])])])])}),[],!1,null,null,null);e.a=component.exports},606:function(t,e,r){"use strict";r.r(e);r(58);var l=r(21),c=r(16),n=r.n(c),o={components:{appSliderThumbnails:r(481).a},data:function(){return{item:{}}},computed:{locale:function(){return this.$store.getters["locale/locale"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("/my/car-rental/show/"+t.$route.params.carId);case 2:r=e.sent,t.item=r.data.data,console.log("realestae >> ",t.item);case 5:case"end":return e.stop()}}),e)})))()},watch:{currSymbol:function(t,e){console.log("symbol >> ",t,e),this.$fetch()}}},v=r(39),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"car-rental-landing-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("subnav.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/"}},[t._v(t._s(t.$t("subnav.service")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{name:"locale-services-car-rental-main"}}},[t._v(t._s(t.$t("subnav.rental")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$route.params.carName))])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("app-slider-thumbnails",{attrs:{gallery:t.item.gallery}}),t._v(" "),r("div",{staticClass:"details"},[r("div",{staticClass:"head"},[r("h3",[t._v(t._s(t.item.title))]),t._v(" "),r("span",[t._v(t._s(t.currSymbol)+t._s(t.item.rental_price_per_period)+" / "+t._s(t.item.rental_period))])]),t._v(" "),r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.item.description))])])]),t._v(" "),r("div",{staticClass:"features"},[r("h3",[t._v(" "+t._s(t.$t("carRental.carFeatures")))]),t._v(" "),t.item.car_model?r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("carRental.carModel")))])]),t._v(" "),r("div",{staticClass:"col-8"},[r("span",[t._v(t._s(t.item.car_model.model_name))])])]):t._e(),t._v(" "),t.item.body_type?r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("p",{staticClass:"title"},[t._v(t._s(t.$t("carRental.bodyType")))])]),t._v(" "),r("div",{staticClass:"col-8"},[r("span",[t._v(t._s(t.item.body_type))])])]):t._e(),t._v(" "),t.item.rental_period?r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("p",{staticClass:"title"},[t._v(t._s(t.$t("carRental.rentalPeriod")))])]),t._v(" "),r("div",{staticClass:"col-8"},[r("span",[t._v(t._s(t.item.rental_period))])])]):t._e(),t._v(" "),t.item.manufacturer_year?r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("p",{staticClass:"title"},[t._v(t._s(t.$t("carRental.manufacturerYear")))])]),t._v(" "),r("div",{staticClass:"col-8"},[r("span",[t._v(t._s(t.item.manufacturer_year))])])]):t._e(),t._v(" "),t.item.color?r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("p",{staticClass:"title"},[t._v(t._s(t.$t("carRental.color")))])]),t._v(" "),r("div",{staticClass:"col-8"},[r("span",[t._v(t._s(t.item.color))])])]):t._e(),t._v(" "),t.item.color?r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("carRental.driverAvailability")))])]),t._v(" "),r("div",{staticClass:"col-8"},[r("span",[t._v(t._s(t.item.has_driver?"Yes":"No"))])])]):t._e()])],1),t._v(" "),t.item.user?r("div",{staticClass:"col-4"},[r("div",{staticClass:"vendor-profile"},[r("div",{staticClass:"info"},[r("img",{attrs:{src:"/images/placeholder.jpg",alt:""}}),t._v(" "),t.item.user?r("div",{staticClass:"name"},[r("h5",[t._v(t._s(t.item.user.first_name)+" "+t._s(t.item.user.last_name))])]):t._e()]),t._v(" "),r("hr"),t._v(" "),t.item.user?r("div",{staticClass:"contacts"},[t.item.user.phone?r("div",{staticClass:"row no-gutters"},[t._m(0),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.item.user.phone))])])]):t._e(),t._v(" "),t.item.user.email?r("div",{staticClass:"row no-gutters"},[t._m(1),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.item.user.email))])])]):t._e(),t._v(" "),t.item.user.address?r("div",{staticClass:"row no-gutters"},[t._m(2),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.item.user.address))])])]):t._e()]):t._e()])]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{attrs:{src:"/images/icons/svg/phone.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{staticClass:"mail",attrs:{src:"/images/icons/svg/mail.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{attrs:{src:"/images/icons/svg/location.svg",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);