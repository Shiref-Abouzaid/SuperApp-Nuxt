(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{484:function(t,e,r){"use strict";var c={props:["realestate"],computed:{locale:function(){return this.$store.getters["locale/locale"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}}},l=r(39),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.realestate?r("div",{staticClass:"realestate"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/realestate/"+t.realestate.id+"/"+t.realestate.property_title}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-hover"},[r("div",{staticClass:"card-img"},[r("img",{staticClass:"card-img-top",attrs:{src:t.realestate.property_image,alt:"..."}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-head"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.realestate.property_title))]),t._v(" "),r("span",{staticClass:"price"},[t._v(t._s(t.currSymbol)+t._s(t.realestate.price))])]),t._v(" "),r("div",{staticClass:"desc"},[r("div",{staticClass:"features"},[t.realestate.number_of_bedrooms?r("div",{staticClass:"feature"},[r("img",{attrs:{src:"/images/icons/svg/realestate-bedroom-black.svg",alt:""}}),t._v(" "),r("div",{staticClass:"text"},[r("span",{staticClass:"name"},[t._v(t._s(t.$t("product.bedroom"))+":")]),t._v(" "),r("span",{staticClass:"count"},[t._v(t._s(t.realestate.number_of_bedrooms))]),t._v(" "),t.realestate.has_maid_service?r("span",{staticClass:"plus"},[t._v("+ Maid")]):t._e()])]):t._e(),t._v(" "),t.realestate.number_of_bathrooms?r("div",{staticClass:"feature"},[r("img",{attrs:{src:"/images/icons/svg/realestate-bathroom-black.svg",alt:""}}),t._v(" "),r("div",{staticClass:"text"},[r("span",{staticClass:"name"},[t._v(t._s(t.$t("product.bathroom"))+":")]),t._v(" "),r("span",{staticClass:"count"},[t._v(t._s(t.realestate.number_of_bathrooms))])])]):t._e()])])])]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col add-cart-btn"},[r("span",[t._v(t._s(t.$t("medical_service.details_button")))])])])])])])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},543:function(t,e,r){"use strict";r.r(e);r(58);var c=r(21),l=r(16),n=r.n(l),o={components:{appSingleRealestate:r(484).a},data:function(){return{realestates:[]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={category_id:t.$route.query.categoryId,estate_type:t.$route.query.type,estate_furnishing:t.$route.query.furnishing,estate_finishing:t.$route.query.finishing,has_garden:"false"==t.$route.query.garden?0:1,has_maid_service:"false"==t.$route.query.maidService?0:1,has_security:"false"==t.$route.query.security?0:1,has_coverd_parking:"false"==t.$route.query.parking?0:1},console.log("in search >> ",r,t.$route.query.garden,"false"==t.$route.query.garden),e.next=5,n.a.post("/realestate/search",r);case 5:c=e.sent,console.log("realestaes cat .> ",c.data.data),t.realestates=c.data.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error >> ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},watch:{"$route.query":"$fetch"}},d=r(39),component=Object(d.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"realestates"},[e("div",{staticClass:"row"},this._l(this.realestates,(function(t){return e("div",{key:t.id,staticClass:"col-sm-4"},[e("app-single-realestate",{attrs:{realestate:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);