(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{481:function(t,e,r){"use strict";var n={props:["gallery"],data:function(){return{swiperOption:{slidesPerView:1},swiperThumbnailOption:{slidesPerView:7,spaceBetween:15,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted:function(){this.mainSwiper.controller.control=this.thumbnailSwiper,this.thumbnailSwiper.controller.control=this.mainSwiper,console.log("swiper main >>> ",this.mainSwiper.controller.control),console.log("swiper thumbnail >>> ",this.thumbnailSwiper.controller.control)}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-thumbnails"},[r("div",{staticClass:"product-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:t.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.gallery,(function(img,t){return r("div",{key:t,staticClass:"swiper-slide"},[r("div",{staticClass:"product-img"},[r("img",{attrs:{src:img,alt:""}})])])})),0)])]),t._v(" "),r("div",{staticClass:"thumbnails"},[r("div",{staticClass:"product-thumbnails"},[r("div",{staticClass:"slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:thumbnailSwiper",value:t.swiperThumbnailOption,expression:"swiperThumbnailOption",arg:"thumbnailSwiper"}],staticClass:"swiper arrow-secondary"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.gallery,(function(img,t){return r("div",{key:t,staticClass:"swiper-slide"},[r("div",{staticClass:"thumbnail"},[r("img",{attrs:{src:img,alt:""}})])])})),0),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})])])])])])])}),[],!1,null,null,null);e.a=component.exports},535:function(t,e,r){"use strict";r.r(e);r(58);var n=r(21),o=r(16),c=r.n(o),l={components:{appSliderThumbnails:r(481).a},data:function(){return{rate:0,comment:"",reviews:[],company:{}}},computed:{locale:function(){return this.$store.getters["locale/locale"]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("my/index/catalogue/"+t.$route.params.companyId);case 2:r=e.sent,t.company=r.data.data.catalogue,t.reviews=r.data.data.rates,console.log("company >> ",r.data.data);case 6:case"end":return e.stop()}}),e)})))()},methods:{setRating:function(t){console.log(t),this.rate=t},saveComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("comment"),!t.$store.getters["auth/isAuthenticated"]){e.next=16;break}return r=t.$store.getters["auth/userId"],e.next=5,c.a.get("/users/"+r);case 5:n=e.sent,o=(new Date).toISOString().substring(0,10),l=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),console.log("user >> ",n.data.data),v={rate:t.rate,created_at:o+" "+l,comment:t.comment,user:{first_name:n.data.data.first_name,last_name:n.data.data.last_name,image_url:n.data.data.user_details?n.data.data.user_details.image_url:"https://orbitermag.com/wp-content/uploads/2017/03/default-user-image-300x300.png"}},t.reviews.unshift(v),console.log("reviews >> ",t.reviews),m={rate:t.rate,user_id:r,object_id:t.$route.params.companyId,object_name:"catalogue",comment:t.comment},c.a.post("/rates",m).then((function(e){console.log(e),t.rate=0,t.comment=""})).catch((function(t){console.log(t)})),e.next=17;break;case 16:t.$bvModal.show("popup-login");case 17:case"end":return e.stop()}}),e)})))()}}},v=r(39),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"company-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("subnav.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"+t.local+"/companies-categories/"}},[t._v(t._s(t.$t("menu.companies_index")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$route.params.companyName))])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[r("app-slider-thumbnails",{attrs:{gallery:t.company.gallery}}),t._v(" "),r("div",{staticClass:"details"},[r("div",{staticClass:"head"},[r("h3",[t._v(t._s(t.$t("companies_index.about")+" "+t.company.title))])]),t._v(" "),r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.company.description))])])]),t._v(" "),r("div",{staticClass:"reviews"},[r("div",{staticClass:"add-review"},[r("h4",[t._v(t._s(t.$t("review.add_review")))]),t._v(" "),r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-3"},[r("h6",[t._v(t._s(t.$t("review.your_review")))])]),t._v(" "),r("div",{staticClass:"col-9"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{id:"review",rows:"4"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-3 d-flex align-items-center"},[r("h6",[t._v(t._s(t.$t("review.rating")))])]),t._v(" "),r("div",{staticClass:"col-9"},[r("client-only",[r("star-rating",{attrs:{rating:t.rate,increment:.5,"active-color":"#FFD506","show-rating":!1,"star-size":20,padding:.9},on:{"rating-selected":t.setRating}})],1)],1)]),t._v(" "),r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-3"}),t._v(" "),r("div",{staticClass:"col-9"},[r("button",{staticClass:"btn",on:{click:t.saveComment}},[t._v(t._s(t.$t("vip.submit")))])])])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"prev-reviews"},[r("h4",[t._v(t._s(t.$t("review.previous_review")))]),t._v(" "),t.reviews&&t.reviews.length>0?t._l(t.reviews,(function(e){return r("div",{key:e.id,staticClass:"row no-gutters review"},[r("div",{staticClass:"col-3"},[r("client-only",[r("star-rating",{attrs:{rating:e.rate,increment:.5,"read-only":!0,"active-color":"#FFD506","show-rating":!1,"star-size":20,padding:.9}})],1),t._v(" "),r("h6",[t._v(t._s(e.user.first_name)+" "+t._s(e.user.last_name))]),t._v(" "),r("span",{staticClass:"time"},[t._v(t._s(t._f("moment")(e.created_at,"from","now")))])],1),t._v(" "),r("div",{staticClass:"col-9"},[r("div",{staticClass:"comment"},[r("p",[t._v(t._s(e.comment))])])])])})):t._e()],2)])],1),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"vendor-profile"},[r("div",{staticClass:"info"},[r("img",{attrs:{src:t.company.image_url,alt:""}}),t._v(" "),r("div",{staticClass:"name"},[r("h5",[t._v(t._s(t.company.title))])]),t._v(" "),r("div",{staticClass:"rate"},[r("span",[t._v(t._s(t.company.total_rates))]),t._v(" "),r("img",{attrs:{src:"/images/icons/svg/vendor-star.svg",alt:""}})])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"contacts"},[t.company.phone?r("div",{staticClass:"row no-gutters"},[t._m(0),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.company.phone))])])]):t._e(),t._v(" "),t.company.email?r("div",{staticClass:"row no-gutters"},[t._m(1),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.company.email))])])]):t._e(),t._v(" "),t.company.address?r("div",{staticClass:"row no-gutters"},[t._m(2),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.company.address))])])]):t._e()])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{attrs:{src:"/images/icons/svg/phone.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{staticClass:"mail",attrs:{src:"/images/icons/svg/mail.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{attrs:{src:"/images/icons/svg/location.svg",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);