(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{638:function(e,t,o){"use strict";o.r(t);o(6),o(59),o(64),o(61),o(18),o(24),o(22),o(25),o(54),o(60),o(40);var r=o(34),n=(o(58),o(21)),l=o(16),c=o.n(l);function d(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,n=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw n}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var f={layout:"withoutNavbar",data:function(){return{coverImg:"https://ilike2like.com/wp-content/uploads/2019/10/ilike2like_com_facebook_cover_sea_05.jpg",profileURL:"https://pbs.twimg.com/profile_images/884959376871706626/c459hnjB.jpg",savedCoverImage:"",savedProfileImage:"",firstName:"",lastName:"",bio:"",editMode:!1,myprofile:!1,location:"",education:"",job:"",imagesFiles:[],userGallery:[]}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/my/social/profile/"+e.$store.getters["auth/userId"]);case 3:o=t.sent,console.log("user data >> ",o.data.data),r=o.data.data,e.coverImg=r.details.user_details.cover_image_url||"/images/background-placeholder.png",e.profileURL=r.details.user_details.image_url||"/images/placeholder.jpg",e.firstName=r.details.first_name,e.lastName=r.details.last_name,e.bio=r.details.user_details.description,e.education=r.details.user_details.education,e.job=r.details.user_details.job_title,e.location=r.details.user_details.address,e.userGallery=r.gallery.reverse(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log("error >> ",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()},methods:{saveProfile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.editMode=!e.editMode,e.editMode){t.next=14;break}return o={education:e.education,job_title:e.job,description:e.bio,address:e.location,cover_image:e.savedCoverImage,image:e.savedProfileImage},console.log("user obj >> ",o),t.prev=4,t.next=7,c.a.put("my/social/profile/"+e.$store.getters["auth/userId"],o);case 7:r=t.sent,console.log("profile saved",r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.log("error >> ",t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()},onCoverPicked:function(e){var t=this;console.log("picked");var o=e.target.files[0];if(o){var r=new FileReader;r.addEventListener("load",(function(){t.coverImg=r.result,t.savedCoverImage=r.result,console.log("base 64 >> ",t.coverImg)})),r.readAsDataURL(o),this.editMode=!this.editMode}else this.coverImg=""},onImagePicked:function(e){var t=this;console.log("picked");var o=e.target.files[0];if(o){var r=new FileReader;r.addEventListener("load",(function(){t.profileURL=r.result,t.savedProfileImage=r.result,console.log("base 64 >> ",t.profileURL)})),r.readAsDataURL(o),this.editMode=!this.editMode}else console.log("cancelled"),this.profileURL=""},onImagesPicked:function(e){var t=this;console.log("picked",e);var o=e.target.files;if(o){var r,n=d(o);try{var l=function(){var e=r.value,o=new FileReader;o.addEventListener("load",(function(){t.imagesFiles.push(o.result)})),o.readAsDataURL(e)};for(n.s();!(r=n.n()).done;)l()}catch(e){n.e(e)}finally{n.f()}console.log("images files >> ",this.imagesFiles)}else this.imagesFiles=[]},publishImages:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(Object(n.a)(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("image publishing"),(o=e.userGallery).unshift.apply(o,Object(r.a)(e.imagesFiles)),n=Object(r.a)(e.imagesFiles),e.imagesFiles=[],t.prev=4,t.next=7,c.a.post("/my/social/user/"+e.$store.getters["auth/userId"]+"/add/gallery-items",{gallery:n});case 7:t.sent,console.log("published >> ",n),n=[],t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),console.log("error >> ",t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,12]])}))),10);case 1:case"end":return t.stop()}}),t)})))()},cancelImages:function(){var e=this;setTimeout((function(){e.imagesFiles=[]}),10),console.log("image cancelled")}}},m=o(39),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"social-my-profile"},[o("div",{staticClass:"social-profile-section"},[o("b-container",[o("div",{staticClass:"social-my-profile mt-sm-4"},[o("div",{staticClass:"social-main"},[o("div",{staticClass:"cover",style:"background-image:url('"+e.coverImg+"')"},[o("div",{staticClass:"edit-profile-cover"},[o("label",{staticClass:"mb-0",attrs:{for:"edit-cover-photo"}},[o("b-img",{attrs:{src:"/images/icons/svg/social-edit-cover.svg",alt:"icon"}}),e._v(" "),o("span",[e._v(e._s(e.$t("chat.edit_cover")))])],1),e._v(" "),o("input",{attrs:{type:"file",id:"edit-cover-photo",hidden:""},on:{change:function(t){return e.onCoverPicked(t)}}})]),e._v(" "),o("div",{staticClass:"profile-image",style:"background-image:url('"+e.profileURL+"')"},[o("input",{attrs:{type:"file",id:"edit-profile",hidden:""},on:{change:function(t){return e.onImagePicked(t)}}}),e._v(" "),o("label",{staticClass:"edit-profile-image mb-0",attrs:{for:"edit-profile"}},[o("span",[e._v(e._s(e.$t("chat.edit")))])])])]),e._v(" "),o("b-row",{staticClass:"social-name-bio m-0"},[o("b-col",{staticClass:"info pl-1 pr-1",attrs:{sm:"9"}},[o("h1",{staticClass:"title"},[e._v(e._s(e.firstName)+" "+e._s(e.lastName))]),e._v(" "),o("b-form-textarea",{ref:"bio",staticClass:"bio",class:{"no-info":!e.bio&&!e.editMode},attrs:{disabled:!e.editMode,rows:"3",placeholder:e.$t("chat.your_bio")},model:{value:e.bio,callback:function(t){e.bio=t},expression:"bio"}}),e._v(" "),o("div",{on:{click:function(t){return e.$refs.bio.focus()}}},[e.bio||e.editMode?e._e():o("b-button",{staticClass:"edit-my-profile no-shadow p-0",attrs:{variant:"default"},on:{click:function(t){e.editMode=!0}}},[e._v(e._s(e.$t("chat.bio")))])],1)],1),e._v(" "),o("b-col",{staticClass:"edit-info-container",attrs:{sm:"3"}},[o("b-button",{staticClass:"edit-info",class:{editmodebtn:e.editMode},attrs:{variant:"default"},on:{click:e.saveProfile}},[o("span",{staticClass:"show",class:{hide:e.editMode}},[o("b-img",{attrs:{src:"/images/icons/svg/social-edit-primary.svg",alt:"icon"}}),e._v(" "),o("span",[e._v(e._s(e.$t("chat.edit_profile")))])],1),e._v(" "),o("span",{staticClass:"show",class:{hide:!e.editMode}},[o("span",[e._v(e._s(e.$t("chat.save_button")))])])])],1)],1),e._v(" "),o("div",{staticClass:"social-myprofile-about mt-3"},[o("h2",[e._v(e._s(e.$t("chat.about")))]),e._v(" "),o("b-row",[o("b-col",{attrs:{sm:"7"}},[o("div",{staticClass:"info"},[o("b-img",{attrs:{src:"/images/icons/svg/social-education.svg",alt:"icon"}}),e._v(" "),o("b-input",{ref:"education",staticClass:"info-input",class:{"no-info":!e.education&&!e.editMode},attrs:{placeholder:e.$t("chat.educat"),disabled:!e.editMode,type:"text"},model:{value:e.education,callback:function(t){e.education=t},expression:"education"}}),e._v(" "),o("div",{staticClass:"d-inline-block",on:{click:function(t){return e.$refs.education.focus()}}},[e.education||e.editMode?e._e():o("b-button",{staticClass:"edit-my-profile no-shadow p-0",attrs:{variant:"default"},on:{click:function(t){e.editMode=!0}}},[e._v(e._s(e.$t("chat.education")))])],1)],1),e._v(" "),o("div",{staticClass:"info"},[o("b-img",{attrs:{src:"/images/icons/svg/social-job.svg",alt:"icon"}}),e._v(" "),o("b-input",{ref:"job",staticClass:"info-input",class:{"no-info":!e.job&&!e.editMode},attrs:{placeholder:e.$t("chat.jop"),disabled:!e.editMode,type:"text"},model:{value:e.job,callback:function(t){e.job=t},expression:"job"}}),e._v(" "),o("div",{staticClass:"d-inline-block",on:{click:function(t){return e.$refs.job.focus()}}},[e.job||e.editMode?e._e():o("b-button",{staticClass:"edit-my-profile no-shadow p-0",attrs:{variant:"default"},on:{click:function(t){e.editMode=!0}}},[e._v(e._s(e.$t("chat.jop")))])],1)],1),e._v(" "),o("div",{staticClass:"info"},[o("b-img",{attrs:{src:"/images/icons/svg/social-location.svg",alt:"icon"}}),e._v(" "),o("b-input",{ref:"address",staticClass:"info-input",class:{"no-info":!e.location&&!e.editMode},attrs:{placeholder:e.$t("chat.addres"),disabled:!e.editMode,type:"text"},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),e._v(" "),o("div",{staticClass:"d-inline-block",on:{click:function(t){return e.$refs.address.focus()}}},[e.job||e.editMode?e._e():o("b-button",{staticClass:"edit-my-profile no-shadow p-0",attrs:{variant:"default"},on:{click:function(t){e.editMode=!0}}},[e._v(e._s(e.$t("chat.addres")))])],1)],1)])],1)],1),e._v(" "),o("div",{staticClass:"social-myprofile-gallery mb-3 mt-3"},[o("h2",[e._v(e._s(e.firstName)+" "+e._s(e.lastName)+"'s Gallery")]),e._v(" "),o("b-row",[o("b-col",{attrs:{sm:"4"}},[o("label",{staticClass:"add-photo",attrs:{for:"addphoto"}},[e.imagesFiles&&e.imagesFiles.length>0?o("div",{staticClass:"images"},[o("div",{staticClass:"row"},e._l(e.imagesFiles,(function(img){return o("div",{key:img,staticClass:"col-sm-4"},[o("div",{staticClass:"image"},[o("img",{staticClass:"gallery-user-img",attrs:{src:img,alt:""}}),e._v(" "),o("img",{staticClass:"icon",attrs:{src:"/images/icons/svg/icon-remove-gallery.svg",alt:""}})])])})),0),e._v(" "),o("div",{staticClass:"actions"},[o("button",{staticClass:"btn publish",on:{click:e.publishImages}},[e._v("Publish")]),e._v(" "),o("button",{staticClass:"btn cancel",on:{click:e.cancelImages}},[e._v("Cancel")])])]):o("div",{staticClass:"select-photos"},[o("span",[e._v("+ "+e._s(e.$t("chat.add_photo")))])])]),e._v(" "),o("input",{attrs:{disabled:e.imagesFiles&&e.imagesFiles.length>0,multiple:"",type:"file",id:"addphoto",hidden:""},on:{change:function(t){return e.onImagesPicked(t)}}})]),e._v(" "),e._l(e.userGallery,(function(img,t){return o("b-col",{key:t,attrs:{sm:"4"}},[o("b-img",{staticClass:"gallery-img",attrs:{src:img,alt:"img"}}),e._v(" "),o("div",{staticClass:"gallery-img-container",style:"background-image:url('"+img+"')"},[o("div",{staticClass:"remove-photo-btn",class:{show:e.editMode}},[o("b-button",{attrs:{variant:"default"}},[o("b-img",{attrs:{src:"/images/icons/svg/social-remove.svg"}}),e._v(" "),o("span",[e._v(e._s(e.$t("chat.remove")))])],1)],1)])],1)}))],2)],1)],1)])])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);