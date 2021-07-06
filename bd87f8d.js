(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{482:function(t,e,r){"use strict";r(94),r(24);var o={props:["product"],data:function(){return{quantity:0,wishlisted:!1}},created:function(){var t=this,e=this.$store.getters["cart/cartProducts"],r=this.$store.getters["wishlist/wishlist"];if(this.product){var o=e.find((function(e){return e.id==t.product.id}));o&&(this.quantity=o.quantity);var c=r.find((function(e){return e.id==t.product.id}));c&&(this.wishlisted=c.wishlisted)}},computed:{sale:function(){return this.product.sale_price?Math.ceil(this.product.sale_price/this.product.regular_price*100):null},productName:function(){var t=this.product.name;return t.length>30?t.substr(0,30)+"...":t},shortDescription:function(){var desc=this.product.short_description;return desc.length>40?desc.substr(0,40)+"...":desc},locale:function(){return this.$store.getters["locale/locale"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}},methods:{addToCart:function(){this.quantity++;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};console.log("quantity >>>>>>>> ",this.quantity),this.$store.dispatch("cart/addOrUpdateCartProduct",t),console.log(this.$store.getters["cart/cartProducts"]),console.log("total >> ",this.$store.getters["cart/totalQuantity"]),this.$store.getters["auth/isAuthenticated"]&&1==this.quantity?this.$store.dispatch("cart/saveCartProduct",t):this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/updateCartProduct",t)},removeFromCart:function(){this.quantity--;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};0==this.quantity?(this.$store.dispatch("cart/removeCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/deleteCartProduct",t.id)):(this.$store.dispatch("cart/addOrUpdateCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/updateCartProduct",t)),console.log(this.$store.getters["cart/cartProducts"]),console.log("total >> ",this.$store.getters["cart/totalQuantity"])},deleteProduct:function(){console.log("delete"),this.quantity=0;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};console.log("delete product >> ",t),this.$store.dispatch("cart/removeCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/deleteCartProduct",t.id)},singleProduct:function(t){console.log("one product >>> ",t),this.$store.commit("setSingleProduct",t)},addToWishlist:function(){this.wishlisted=!this.wishlisted;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,regularPrice:this.product.regular_price,salePrice:this.product.sale_price,stockStatus:+this.product.stock_status,vendorId:this.product.vendor_id,wishlisted:this.wishlisted};1==this.wishlisted?(this.$store.dispatch("wishlist/addToWishlist",t),console.log("wishlist ",this.$store.getters["wishlist/wishlist"]),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("wishlist/saveToWishlist",this.product.id)):(this.$store.dispatch("wishlist/removeFromWishlist",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("wishlist/deleteFromWishlist",this.product.id))}}},c=r(39),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product&&!t.product.deleted_at?r("div",{staticClass:"product"},[r("div",{staticClass:"product-container"},[t.product.vendor_details?r("div",{staticClass:"vendor-img"},[r("img",{attrs:{src:t.product.vendor_details.image_url,alt:""}})]):t._e(),t._v(" "),t.sale?r("div",{staticClass:"sale"},[r("span",[t._v(t._s(100-t.sale)+"%")])]):t._e(),t._v(" "),r("div",{staticClass:"card"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/store/product/"+t.product.id+"/"+t.product.name}},[r("div",{staticClass:"card-hover"},[r("div",{staticClass:"product-img"},[r("img",{staticClass:"card-img-top",attrs:{src:t.product.image_url,alt:"..."}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"info"},[r("div",{staticClass:"rate"},[r("span",[t._v(t._s(t.product.total_rates))]),t._v(" "),r("img",{attrs:{src:"/images/icons/svg/vendor-star.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"price"},[t.product.sale_price?r("span",{staticClass:"discount"},[t._v(t._s(t.currSymbol)+t._s(t.product.regular_price))]):t._e(),t._v(" "),r("span",{staticClass:"original"},[t._v(t._s(t.currSymbol)+t._s(t.product.sale_price?t.product.sale_price:t.product.regular_price))])])]),t._v(" "),r("h6",[t._v(t._s(t.productName))]),t._v(" "),r("p",[t._v(t._s(t.shortDescription))])])])]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"row no-gutters actions-container"},[r("div",{staticClass:"col-6 wishlist-btn",class:{"hide-btn":t.quantity},on:{click:t.addToWishlist}},[t.wishlisted?t._e():r("img",{attrs:{src:"/images/icons/svg/heart-empty.svg",alt:""}}),t._v(" "),t.wishlisted?r("img",{attrs:{src:"/images/icons/svg/heart-filled.svg",alt:""}}):t._e(),t._v(" "),r("span",[t._v(t._s(t.$t("single_product.wishlist_button")))])]),t._v(" "),+t.product.stock_status?[r("div",{staticClass:"col-6 add-cart-btn",class:{"hide-btn":t.quantity>0},on:{click:t.addToCart}},[r("img",{attrs:{src:"/images/icons/svg/shopping-bag.svg",alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("single_product.add_button")))])]),t._v(" "),r("div",{staticClass:"col-12 control",class:{hide:0==t.quantity}},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-10"},[r("div",{staticClass:"quantity"},[r("span",{staticClass:"minus",on:{click:t.removeFromCart}},[t._v("-")]),t._v(" "),r("span",{staticClass:"count"},[t._v(t._s(t.quantity))]),t._v(" "),r("span",{staticClass:"plus",on:{click:t.addToCart}},[t._v("+")])])]),t._v(" "),r("div",{staticClass:"col-2",on:{click:t.deleteProduct}},[t._m(1)])])])]:r("div",{staticClass:"col-6"},[t._m(0)])],2)])],1)])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"out-stock"},[e("span",[this._v("OUT OF STOCK")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"remove"},[e("img",{attrs:{src:"/images/icons/svg/icon-remove.svg",alt:""}})])}],!1,null,null,null);e.a=component.exports},495:function(t,e,r){"use strict";var o=r(39),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-skeleton-loader"},[e("v-sheet",[e("v-skeleton-loader",{attrs:{type:"image,table-heading,list-item-two-line, actions"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports},525:function(t,e,r){"use strict";r.r(e);r(6),r(59),r(64),r(15),r(94),r(61),r(18),r(24),r(22),r(25),r(54),r(60),r(58);var o=r(21),c=r(16),n=r.n(c),d=r(482),l=r(495),v={props:["products"],components:{appSingleProduct:d.a,appProductLoader:l.a},data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:5,breakpoints:{991:{slidesPerView:2}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},h=r(39),_=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-product"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"swiper arrow-secondary"},[t.products&&t.products.length>0?r("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(t){return r("div",{key:t.id,staticClass:"swiper-slide"},[r("app-single-product",{attrs:{product:t}})],1)})),0):r("div",{staticClass:"swiper-wrapper"},t._l(10,(function(t){return r("div",{key:t,staticClass:"swiper-slide"},[r("app-product-loader")],1)})),0),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})])])])}),[],!1,null,null,null).exports;function m(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,n=!0,d=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return n=t.done,t},e:function(t){d=!0,c=t},f:function(){try{n||null==r.return||r.return()}finally{if(d)throw c}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var C={name:"SingleProduct",components:{appSingleProduct:d.a,appRelatedProducts:_,appProductLoader:l.a},data:function(){return{loading:{getMoreReviews:!1},hideShowMoreReviews:!1,quantity:1,wishlisted:!1,inCart:!1,product:null,vendorProducts:[],relatedProducts:[],vendor:{},rate:0,comment:"",reviews:[],swiperOption:{slidesPerView:3,breakpoints:{991:{slidesPerView:3}}},swiperThumbnailOption:{slidesPerView:7,spaceBetween:10,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{sale:function(){return this.product.sale_price?Math.ceil(this.product.sale_price/this.product.regular_price*100):null},locale:function(){return this.$store.getters["locale/locale"]},currSymbol:function(){return this.$store.getters["currency/symbol"]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.a.get("/my/product/"+t.$route.params.productId);case 3:return r=e.sent,t.product=r.data.data.product,t.relatedProducts=r.data.data.relatedByCategory,t.vendorProducts=r.data.data.relatedByVendor,t.reviews=r.data.data.rates,console.log("product >> ",t.product),console.log("related products >> ",t.relatedProducts),console.log("vendor products >> ",t.vendorProducts),console.log("reviews >> ",t.reviews),e.next=14,n.a.get("/my/vendor/"+t.product.vendor_id);case 14:o=e.sent,console.log("vendor data >> ",o.data.data),t.vendor=o.data.data,e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("error >> ",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()},mounted:function(){console.log("swiper >>> ",this.mainSwiper,this.thumbnailSwiper)},watch:{product:function(){var t=this;console.log("watch >>>>>>>>>>>>>>>>");var e=this.$store.getters["cart/cartProducts"],r=this.$store.getters["wishlist/wishlist"];if(console.log("wishlist in single >> ",r),this.product){console.log("single product >> ",this.product);var o=e.find((function(e){return e.id==t.product.id}));o&&(this.quantity=o.quantity,this.inCart=!0);var c=r.find((function(e){return e.id==t.product.id}));c&&(this.wishlisted=c.wishlisted)}},currSymbol:function(t,e){console.log("symbol >> ",t,e),this.$fetch()}},methods:{getMoreReviews:function(t,e){var r=this;this.loading.getMoreReviews=!0,n.a.get("my/product/".concat(this.$route.params.productId,"/rating/skip/").concat(t,"/take/").concat(e)).then((function(t){r.loading.getMoreReviews=!1;var e,o=m(t.data.data);try{for(o.s();!(e=o.n()).done;){var i=e.value;r.reviews.push(i)}}catch(t){o.e(t)}finally{o.f()}t.data.data.length<5&&(r.hideShowMoreReviews=!0)})).catch((function(){r.loading.getMoreReviews=!1}))},addToCart:function(){this.quantity++;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};this.inCart&&(console.log("quantity >>>>>>>> ",this.quantity),this.$store.dispatch("cart/addOrUpdateCartProduct",t),console.log(this.$store.getters["cart/cartProducts"]),console.log("total >> ",this.$store.getters["cart/totalQuantity"]),this.$store.getters["auth/isAuthenticated"]&&this.inCart&&this.$store.dispatch("cart/updateCartProduct",t))},saveToCart:function(){this.inCart=!0;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};console.log("quantity >>>>>>>> ",this.quantity),this.$store.dispatch("cart/addOrUpdateCartProduct",t),console.log(this.$store.getters["cart/cartProducts"]),console.log("total >> ",this.$store.getters["cart/totalQuantity"]),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/saveCartProduct",t)},removeFromCart:function(){if(1!=this.quantity){this.quantity--;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};this.inCart&&(this.$store.dispatch("cart/addOrUpdateCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/updateCartProduct",t)),console.log(this.$store.getters["cart/cartProducts"]),console.log("total >> ",this.$store.getters["cart/totalQuantity"])}},deleteProduct:function(){console.log("delete"),this.inCart=!1,this.quantity=1;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,quantity:this.quantity,price:this.product.sale_price?this.product.sale_price:this.product.regular_price,vendorId:this.product.vendor_id};console.log("delete product >> ",t),this.$store.dispatch("cart/removeCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/deleteCartProduct",t.id)},addToWishlist:function(){this.wishlisted=!this.wishlisted;var t={id:this.product.id,name:this.product.name,imageUrl:this.product.image_url,regularPrice:this.product.regular_price,salePrice:this.product.sale_price,stockStatus:+this.product.stock_status,vendorId:this.product.vendor_id,wishlisted:this.wishlisted};1==this.wishlisted?(this.$store.dispatch("wishlist/addToWishlist",t),console.log("wishlist ",this.$store.getters["wishlist/wishlist"]),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("wishlist/saveToWishlist",this.product.id)):(this.$store.dispatch("wishlist/removeFromWishlist",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("wishlist/deleteFromWishlist",this.product.id))},setRating:function(t){console.log(t),this.rate=t},saveComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,d,l,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("comment"),!t.$store.getters["auth/isAuthenticated"]){e.next=16;break}return r=t.$store.getters["auth/userId"],e.next=5,n.a.get("/users/"+r);case 5:o=e.sent,c=(new Date).toISOString().substring(0,10),d=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),console.log("user >> ",o.data.data),l={rate:t.rate,created_at:c+" "+d,comment:t.comment,user:{first_name:o.data.data.first_name,last_name:o.data.data.last_name,image_url:o.data.data.user_details?o.data.data.user_details.image_url:"https://orbitermag.com/wp-content/uploads/2017/03/default-user-image-300x300.png"}},t.reviews.unshift(l),console.log("reviews >> ",t.reviews),v={rate:t.rate,user_id:r,object_id:t.$route.params.productId,object_name:"product",comment:t.comment},n.a.post("/rates",v).then((function(e){console.log(e),t.rate=0,t.comment=""})).catch((function(t){console.log(t)})),e.next=17;break;case 16:t.$bvModal.show("popup-login");case 17:case"end":return e.stop()}}),e)})))()}}},f=Object(h.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"product-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("subnav.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/"}},[t._v(t._s(t.$t("subnav.service")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/store/8/0/"}},[t._v(t._s(t.$t("subnav.store")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$route.params.productName))])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[t.product?r("div",{staticClass:"product-info"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"product-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:t.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.product.gallery,(function(img,t){return r("div",{key:t,staticClass:"swiper-slide"},[r("div",{staticClass:"product-img text-center"},[r("img",{attrs:{src:img,alt:""}})])])})),0)])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"info"},[r("h5",[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"rate"},[r("client-only",[r("star-rating",{attrs:{rating:+t.product.total_rates,increment:.5,"read-only":!0,"active-color":"#FFD506","show-rating":!1,"star-size":20,padding:.9}})],1)],1),t._v(" "),r("div",{staticClass:"price"},[r("p",{staticClass:"original"},[t._v(t._s(t.currSymbol)+t._s(t.product.sale_price?t.product.sale_price:t.product.regular_price))]),t._v(" "),t.product.sale_price?r("p",{staticClass:"sale"},[t._v(t._s(t.currSymbol)+t._s(t.product.regular_price))]):t._e(),t._v(" "),t.product.sale_price?r("p",{staticClass:"percent"},[t._v(t._s(100-Math.ceil(this.product.sale_price/this.product.regular_price*100))+"%")]):t._e()]),t._v(" "),r("div",{staticClass:"quantity"},[r("p",[t._v(t._s(t.$t("single_product.quantity")))]),t._v(" "),r("div",{staticClass:"control"},[r("span",{on:{click:t.removeFromCart}},[r("img",{attrs:{src:"/images/icons/svg/minus-black.svg",alt:""}})]),t._v(" "),r("span",[t._v(t._s(t.quantity))]),t._v(" "),r("span",{on:{click:t.addToCart}},[r("img",{attrs:{src:"/images/icons/svg/plus-black.svg",alt:""}})])])]),t._v(" "),r("div",{staticClass:"row no-gutters actions flex-nowrap"},[r("div",{staticClass:"col-6 wishlist-btn",on:{click:t.addToWishlist}},[t.wishlisted?t._e():r("img",{attrs:{src:"/images/icons/svg/heart-empty.svg",alt:""}}),t._v(" "),t.wishlisted?r("img",{attrs:{src:"/images/icons/svg/heart-filled.svg",alt:""}}):t._e(),t._v(" "),r("span",[t._v("WISHLIST")])]),t._v(" "),t.inCart?t._e():r("div",{staticClass:"col-6 add-cart-btn",on:{click:t.saveToCart}},[r("img",{attrs:{src:"/images/icons/svg/shopping-bag.svg",alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("single_product.add_button")))])]),t._v(" "),t.inCart?r("div",{staticClass:"col-6 remove-btn",on:{click:t.deleteProduct}},[r("img",{attrs:{src:"/images/icons/svg/icon-remove.svg",alt:""}}),t._v(" "),r("span",[t._v("REMOVE")])]):t._e()])])]),t._v(" "),r("div",{staticClass:"col-12 slider-thumbnails"},[r("div",{staticClass:"product-thumbnails"},[r("div",{staticClass:"slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:thumbnailSwiper",value:t.swiperThumbnailOption,expression:"swiperThumbnailOption",arg:"thumbnailSwiper"}],staticClass:"swiper arrow-secondary"},[t.product.gallery&&t.product.gallery.length>0?r("div",{staticClass:"swiper-wrapper"},t._l(t.product.gallery,(function(img,t){return r("div",{key:t,staticClass:"swiper-slide"},[r("div",{staticClass:"thumbnail"},[r("img",{attrs:{src:img,alt:""}})])])})),0):t._e(),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})])])])])])])]):t._e(),t._v(" "),r("div",{staticClass:"desc-reviews"},[r("div",[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"Desription"}},[t.product?r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.product.description))])]):t._e()]),t._v(" "),r("b-tab",{attrs:{title:"Reviews",active:""}},[r("div",{staticClass:"reviews"},[r("div",{staticClass:"add-review"},[r("h4",[t._v(t._s(t.$t("review.add_review")))]),t._v(" "),r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-3"},[r("h6",[t._v(t._s(t.$t("review.your_review")))])]),t._v(" "),r("div",{staticClass:"col-9"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{id:"review",rows:"4"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-3 d-flex align-items-center"},[r("h6",[t._v(t._s(t.$t("review.rating")))])]),t._v(" "),r("div",{staticClass:"col-9"},[r("client-only",[r("star-rating",{attrs:{rating:+t.rate,increment:.5,"active-color":"#FFD506","show-rating":!1,"star-size":20,padding:.9},on:{"rating-selected":t.setRating}})],1)],1)]),t._v(" "),r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-3"}),t._v(" "),r("div",{staticClass:"col-9"},[r("button",{staticClass:"btn",on:{click:t.saveComment}},[t._v("Submit")])])])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"prev-reviews"},[r("h4",[t._v(t._s(t.$t("review.previous_review")))]),t._v(" "),t.reviews&&t.reviews.length>0?t._l(t.reviews,(function(e){return r("div",{key:e.id,staticClass:"row no-gutters review"},[r("div",{staticClass:"col-3"},[r("client-only",[r("star-rating",{attrs:{rating:+e.rate,increment:.5,"read-only":!0,"active-color":"#FFD506","show-rating":!1,"star-size":20,padding:.9}})],1),t._v(" "),r("h6",[t._v(t._s(e.user.first_name)+" "+t._s(e.user.last_name))]),t._v(" "),r("span",{staticClass:"time"},[t._v(t._s(t._f("moment")(e.created_at,"from","now")))])],1),t._v(" "),r("div",{staticClass:"col-9"},[r("div",{staticClass:"comment"},[r("p",[t._v(t._s(e.comment))])])])])})):t._e(),t._v(" "),t.hideShowMoreReviews?t._e():r("div",{staticClass:"more"},[r("p",{on:{click:function(e){return t.getMoreReviews(t.reviews.length,5)}}},[t.loading.getMoreReviews?r("b-spinner",{staticClass:"spinner-primary",attrs:{small:""}}):t._e(),t._v(" See more reviews")],1)])],2)])])],1)],1)]),t._v(" "),r("div",{staticClass:"related-products"},[r("div",{staticClass:"head"},[r("h2",[t._v(t._s(t.$t("single_product.related_product")))]),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("single_product.more")))])],1),t._v(" "),r("div",{staticClass:"products"},[r("app-related-products",{attrs:{products:t.relatedProducts}})],1)])]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"vendor-profile"},[t.vendor?r("div",{staticClass:"info"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/store/vendor/"+t.vendor.id}},[t.vendor.details?r("img",{staticClass:"profile-img",attrs:{src:t.vendor.details.image_url,alt:""}}):t._e()]),t._v(" "),r("div",{staticClass:"name"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/store/vendor/"+t.vendor.id}},[r("h5",[t._v(t._s(t.vendor.first_name)+" "+t._s(t.vendor.last_name))]),t._v(" "),r("span",[t._v(t._s(t.vendor.productsCount)+" Product")])])],1),t._v(" "),r("div",{staticClass:"rate"},[t.vendor.details?r("span",[t._v(t._s(t.vendor.details.total_rates))]):t._e(),t._v(" "),r("img",{attrs:{src:"/images/icons/svg/vendor-star.svg",alt:""}})])],1):t._e(),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"contacts"},[t.vendor.phone?r("div",{staticClass:"row no-gutters"},[t._m(0),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.vendor.phone))])])]):t._e(),t._v(" "),t.vendor.details&&t.vendor.details.email?r("div",{staticClass:"row no-gutters"},[t._m(1),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.vendor.details.email))])])]):t._e(),t._v(" "),t.vendor.details&&t.vendor.details.address?r("div",{staticClass:"row no-gutters"},[t._m(2),t._v(" "),r("div",{staticClass:"col-1"}),t._v(" "),r("div",{staticClass:"col-10"},[r("p",[t._v(t._s(t.vendor.details.address))])])]):t._e()])]),t._v(" "),r("div",{staticClass:"vendor-products"},[r("h3",[t._v(t._s(t.$t("single_product.vendor_product")))]),t._v(" "),t.vendorProducts&&t.vendorProducts.length>0?t._l(t.vendorProducts,(function(t){return r("app-single-product",{key:t.id,attrs:{product:t}})})):t._l(2,(function(t){return r("app-product-loader",{key:t})})),t._v(" "),r("div",{staticClass:"see-more"},[r("nuxt-link",{staticClass:"btn",attrs:{to:"/"}},[t._v(t._s(t.$t("single_product.more")))])],1)],2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{attrs:{src:"/images/icons/svg/phone.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{staticClass:"mail",attrs:{src:"/images/icons/svg/mail.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-1"},[e("img",{attrs:{src:"/images/icons/svg/location.svg",alt:""}})])}],!1,null,null,null);e.default=f.exports}}]);