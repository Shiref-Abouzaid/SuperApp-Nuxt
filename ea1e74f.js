(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{521:function(t,e,r){"use strict";r.r(e);r(24),r(58);var c=r(21),l=r(16),n=r.n(l),o={props:["specialities"],data:function(){return{swiperOption:{slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{locale:function(){return this.$store.getters["locale/locale"]}}},v=r(39),d={components:{appMainCategories:Object(v.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cat-slider"},[r("div",{staticClass:"main-medical"},[r("div",{staticClass:"cat-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:t.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{exact:"",to:"/"+t.locale+"/services/medical-services"}},[t._v("All")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/doctors"}},[t._v("Doctors")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/clinics"}},[t._v("Clinics")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/spas"}},[t._v("SPA")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/hospitals"}},[t._v("Hospitals")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/pharmacies"}},[t._v("Pharmacies")])],1)]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/laboratories"}},[t._v("Laboratories")])],1)])]),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/store-cat-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/store-cat-arrow.svg",alt:""}})])])])]),t._v(" "),r("div",{staticClass:"doctors-specialities"},[t.specialities&&t.specialities.length>0?r("div",{staticClass:"cat-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:subSwiper",value:t.swiperOption,expression:"swiperOption",arg:"subSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{staticClass:"active",attrs:{exact:"",to:"/"+t.locale+"/services/medical-services/doctors"}},[t._v("All")])],1)]),t._v(" "),t._l(t.specialities,(function(e){return r("div",{key:e.id,staticClass:"swiper-slide"},[r("div",{staticClass:"mini-cat"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/doctors/"+e.id+"/"+e.name}},[t._v(t._s(e.name))])],1)])}))],2),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/doctor-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/doctor-arrow.svg",alt:""}})])])]):t._e()])])}),[],!1,null,null,null).exports},data:function(){return{specialities:[]}},mounted:function(){console.log(this.$route.name)},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("/my/doctors");case 2:r=e.sent,t.specialities=r.data.data.specialties,console.log("specialities >> ",t.specialities);case 5:case"end":return e.stop()}}),e)})))()}},m=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"doctors-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("subnav.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/"}},[t._v(t._s(t.$t("subnav.service")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{name:"locale-services-medical-services"}}},[t._v(t._s(t.$t("subnav.medical")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("subnav.doctor")))])])]),t._v(" "),r("app-main-categories",{attrs:{specialities:t.specialities}}),t._v(" "),r("nuxt-child")],1)])}),[],!1,null,null,null);e.default=m.exports}}]);