(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{485:function(t,e,r){"use strict";var o={props:["doctor"],data:function(){return{}},computed:{locale:function(){return this.$store.getters["locale/locale"]}}},c=r(39),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.doctor?r("div",{staticClass:"medical-card"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/medical-services/doctor/"+t.doctor.user.id+"/"+t.doctor.user.username}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-hover"},[r("div",{staticClass:"card-img"},[r("img",{staticClass:"card-img-top",attrs:{src:t.doctor.image_url,alt:"..."}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-head"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.doctor.user.first_name)+" "+t._s(t.doctor.user.last_name))])]),t._v(" "),r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.doctor.short_description))]),t._v(" "),r("div",{staticClass:"rate-box"},[r("span",[t._v(t._s(t.doctor.total_rates))]),t._v(" "),r("img",{attrs:{src:"/images/icons/svg/vendor-star.svg",alt:""}})])])])]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col add-cart-btn"},[r("span",[t._v("See Details")])])])])])])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},549:function(t,e,r){"use strict";r.r(e);r(15);var o=r(34),c=(r(58),r(21)),n=r(16),l=r.n(n),d={components:{appSingleDoctor:r(485).a},data:function(){return{doctors:[],allowToGetMore:!0,noMore:!1,loading:{seeMore:!1}}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/my/doctors/speciality/"+t.$route.params.specialityId+"/skip/0/take/6");case 2:r=e.sent,t.doctors=r.data.data,console.log("doctors >> ",t.doctors);case 5:case"end":return e.stop()}}),e)})))()},methods:{handleScroll:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,c,n,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=window.scrollY,c=document.body.scrollHeight,n=window.innerHeight,!(Math.floor(r-(c-n))<1&&Math.floor(r-(c-n))>-10)){t.next=21;break}if(!e.allowToGetMore||e.noMore){t.next=21;break}return e.allowToGetMore=!1,t.prev=6,e.loading.seeMore=!0,t.next=10,l.a.get("my/doctors/speciality/".concat(e.$route.params.specialityId,"/skip/").concat(e.doctors.length,"/take/6"));case 10:d=t.sent,console.log("data >> ",d.data.data),e.doctors=[].concat(Object(o.a)(e.doctors),Object(o.a)(d.data.data)),e.loading.seeMore=!1,e.allowToGetMore=!0,d.data.data.length<1&&(e.noMore=!0),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.log(t.t0.response);case 21:case"end":return t.stop()}}),t,null,[[6,18]])})))()}},created:function(){window.addEventListener("scroll",this.handleScroll)},watch:{"$route.params":function(){this.$fetch()}}},v=r(39),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"specialities-list"},[r("div",{staticClass:"specialities"},[r("div",{staticClass:"head"},[r("h3",[t._v(t._s(t.$route.params.specialityName))])]),t._v(" "),r("div",{staticClass:"doctors"},[t.doctors&&t.doctors.length>0?r("div",{staticClass:"row"},t._l(t.doctors,(function(t){return r("div",{key:t.id,staticClass:"col-sm-4"},[r("app-single-doctor",{attrs:{doctor:t}})],1)})),0):t._e(),t._v(" "),t.loading.seeMore?r("div",{staticClass:"text-center mt-4"},[r("b-spinner",{staticClass:"spinner-primary",attrs:{variant:"default",large:"",type:"grow"}})],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);