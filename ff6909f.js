(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{593:function(t,e,c){"use strict";c.r(e);var o={name:"chat",layout:"withoutNavbar",data:function(){return{isOnline:!0,isFriend:!1,firendRequestSent:!1,showpopover:!1,mediaisOpen:!1,informationIsOpen:!1,popupImageSrc:"",value:[],users:[{name:"Diane",id:2,image:"https://variety.com/wp-content/uploads/2020/06/bojack.jpg?w=681&h=383&crop=1"},{name:"Cat",id:3,image:"https://4.bp.blogspot.com/-tQRNAwgFw8c/XDJJOho0QQI/AAAAAAAAZSg/SFU5aFdugeMYFWMpyo7fb0kfvOOV3E1bgCLcBGAs/s1600/bojack.jpg"},{name:"Dog",id:4,image:"https://media.npr.org/assets/img/2015/03/20/bojac_s1_029_h_sq-76687651cffd981036a1ee25758fbd28f743c43f-s800-c85.jpg"}],gallery:["https://pyxis.nymag.com/v1/imgs/897/4aa/e1547854e6a546b9c11a13317ca19bf6f4-08-bojack-409.rsquare.w700.jpg","https://images.squarespace-cdn.com/content/58cd7ccd46c3c40813a3412d/1505452320177-HK9EOKHE4DZXC7KKHXL1/Bojack+Horseman+Season+4+Courtney+Portnoy.png?content-type=image%2Fpng","https://pbs.twimg.com/profile_images/997077562533740544/feamgA9P_400x400.jpg","https://i.pinimg.com/originals/4e/17/af/4e17af7beb6cb1175407246980af8a6f.png","https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2016-07/1280_bojackhorseman_s1_netflix.jpg?itok=J3Uhe8n2","https://data.whicdn.com/images/327256690/original.jpg","https://pbs.twimg.com/profile_images/997077562533740544/feamgA9P_400x400.jpg","https://pyxis.nymag.com/v1/imgs/897/4aa/e1547854e6a546b9c11a13317ca19bf6f4-08-bojack-409.rsquare.w700.jpg"]}},methods:{onTagState:function(t){console.log(t)},hidePopOver:function(){this.showpopover=!1}}},r=c(39),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"social-chat"},[c("b-container",[c("b-row",{staticClass:"mt-3"},[c("b-col",{staticClass:"pr-sm-2 mb-sm-5",attrs:{sm:"3"}},[c("div",{staticClass:"chats-persons chat-box  h-100"},[c("div",{staticClass:"chat-header"},[c("b-row",[c("b-col",{attrs:{cols:"5"}},[c("div",{staticClass:"title"},[t._v("\n                                  "+t._s(t.$t("chat.chats"))+"\n                                ")])]),t._v(" "),c("b-col",{attrs:{cols:"7"}},[c("div",{staticClass:"create-group",on:{click:function(e){return t.$bvModal.show("creatGroup")}}},[c("img",{attrs:{src:"/images/icons/svg/social-creat-group.svg",alt:"icnon"}}),t._v(" "),c("span",{staticClass:"bold"},[t._v(t._s(t.$t("chat.create_group")))])])])],1)],1),t._v(" "),c("div",{staticClass:"users-select"},[c("nuxt-link",{attrs:{to:"/"}},[c("div",{staticClass:"user active group"},[c("b-row",[c("b-col",{attrs:{cols:"2"}},[c("div",{staticClass:"user-profile-picture"},[c("img",{attrs:{src:"https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg",alt:""}})]),t._v(" "),c("div",{staticClass:"user-profile-picture"},[c("img",{attrs:{src:"https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg",alt:""}})])]),t._v(" "),c("b-col",{attrs:{cols:"10"}},[c("div",{staticClass:"user-info"},[c("div",{staticClass:"name"},[t._v("El Magal")]),t._v(" "),c("div",{staticClass:"message"},[t._v("There Is No Other Side, You Turn Yourself Around. That’s What It’s All About")])])])],1)],1)]),t._v(" "),c("nuxt-link",{attrs:{to:"/"}},[c("div",{staticClass:"user"},[c("b-row",[c("b-col",{attrs:{cols:"2"}},[c("img",{staticClass:"user-img",attrs:{src:"/images/placeholder.jpg",alt:""}})]),t._v(" "),c("b-col",{attrs:{cols:"10"}},[c("div",{staticClass:"user-info"},[c("div",{staticClass:"name"},[t._v("Bojack")]),t._v(" "),c("div",{staticClass:"message"},[t._v("There Is No Other Side, You Turn Yourself Around. That’s What It’s All About")])])])],1)],1)]),t._v(" "),c("nuxt-link",{attrs:{to:"/"}},[c("div",{staticClass:"user notification"},[c("b-row",[c("b-col",{attrs:{cols:"2"}},[c("img",{staticClass:"user-img",attrs:{src:"/images/placeholder.jpg",alt:""}})]),t._v(" "),c("b-col",{attrs:{cols:"10"}},[c("div",{staticClass:"user-info"},[c("div",{staticClass:"name"},[t._v("Dian")]),t._v(" "),c("div",{staticClass:"message"},[t._v("Ok")])])])],1)],1)]),t._v(" "),c("nuxt-link",{attrs:{to:"/"}},[c("div",{staticClass:"user notification"},[c("b-row",[c("b-col",{attrs:{cols:"2"}},[c("img",{staticClass:"user-img",attrs:{src:"/images/placeholder.jpg",alt:""}})]),t._v(" "),c("b-col",{attrs:{cols:"10"}},[c("div",{staticClass:"user-info"},[c("div",{staticClass:"name"},[t._v("Cat")]),t._v(" "),c("div",{staticClass:"message"},[t._v("What is the Fish")])])])],1)],1)])],1)])]),t._v(" "),c("b-col",{staticClass:"pl-sm-2",attrs:{sm:"9"}},[c("div",{staticClass:"chat-box chat-messages-box mb-sm-5"},[c("div",{staticClass:"chat-header"},[c("b-row",[c("b-col",{attrs:{cols:"8"}},[c("b-row",{attrs:{"align-v":"center"}},[c("b-col",{attrs:{cols:"2"}},[c("div",{staticClass:"header-profile-picture group"},[c("b-img",{attrs:{src:"https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg",alt:"group-picture"}})],1),t._v(" "),c("div",{staticClass:"header-profile-picture group"},[c("b-img",{attrs:{src:"https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg",alt:"group-picture"}})],1)]),t._v(" "),c("b-col",{staticClass:"name-status pl-0",attrs:{cols:"10"}},[c("div",[c("div",{staticClass:"user-name"},[t._v("\n                                                El Magal \n                                            ")]),t._v(" "),c("div",{staticClass:"status text-secondary"},[c("span",[t._v("You, Magdi, Ahmed, Sarah")])])])])],1)],1),t._v(" "),c("b-col",{attrs:{cols:"4"}},[c("b-row",{staticClass:"h-100 tabs-container"},[c("div",{staticClass:"icon-container ml-auto",class:{active:t.mediaisOpen},on:{click:function(e){t.mediaisOpen=!t.mediaisOpen,t.informationIsOpen=!1}}},[t.mediaisOpen?c("b-img",{attrs:{src:"/images/icons/svg/social-image-active.svg",alt:"icon"}}):t._e(),t._v(" "),t.mediaisOpen?t._e():c("b-img",{attrs:{src:"/images/icons/svg/social-image.svg",alt:"icon"}})],1),t._v(" "),c("div",{staticClass:"icon-container",on:{click:function(e){t.informationIsOpen=!t.informationIsOpen,t.mediaisOpen=!1}}},[c("b-img",{attrs:{src:"/images/icons/svg/social-information.svg",alt:"icon"}})],1)])],1)],1)],1),t._v(" "),c("b-row",{staticClass:"flex-nowrap overflow-hidden"},[c("b-col",{staticClass:"scroll-container",attrs:{cols:t.mediaisOpen||t.informationIsOpen?8:12}},[c("div",{staticClass:"scrollable-box-messages"},[c("div",{staticClass:"date"},[c("span",[t._v("April 4, 2020")])]),t._v(" "),c("div",{staticClass:"recived-message message-container "},[c("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("Hello Friend")])])]),t._v(" "),c("div",{staticClass:"sent-message message-container "},[c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("Hello Bocjak how are you?")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:33 am\n                                        ")])])]),t._v(" "),c("div",{staticClass:"recived-message message-container "},[c("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("There Is No Other Side, You Turn Yourself Around. That’s What It’s All About, Sometimes Life’s A sad And Then You Keep Living.")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:34 am\n                                        ")])])]),t._v(" "),c("div",{staticClass:"sent-message message-container "},[c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("Life’s a sad and then you die, right?")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:35 am\n                                        ")])])]),t._v(" "),t._l(7,(function(e){return c("div",{key:e,staticClass:"sent-message message-container "},[c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("Sometimes life’s a sad ba and then you keep living")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:36 am\n                                        ")])])])})),t._v(" "),c("div",{staticClass:"recived-message message-container "},[c("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("They agree that it’s a nice night and decide to just look up at the sky. It was the perfect way to end the series")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:37 am\n                                        ")])])]),t._v(" "),c("div",{staticClass:"recived-message message-container "},[c("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("It Gets Easier")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:38 am\n                                        ")])])]),t._v(" "),c("div",{staticClass:"sent-message message-container "},[c("div",{staticClass:"message"},[c("p",{staticClass:"m-0"},[t._v("Sometimes life’s a sad and then you keep living")]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n                                            10:39 am\n                                        ")])])])],2),t._v(" "),c("div",{staticClass:"input-box"},[c("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[c("b-input-group-text",[c("input",{attrs:{type:"file",hidden:"",id:"sendImg"}}),t._v(" "),c("label",{staticClass:"m-0",attrs:{for:"sendImg"}},[c("b-img",{attrs:{src:"/images/icons/svg/social-image-gery.svg",alt:"icon"}})],1)])]},proxy:!0}])},[t._v(" "),c("b-form-input",{attrs:{placeholder:"Type your message…"}}),t._v(" "),c("b-input-group-append",[c("b-button",{attrs:{variant:"default"}},[t._v("Send")])],1)],1)],1)]),t._v(" "),t.mediaisOpen?c("b-col",{staticClass:"chat-media",attrs:{sm:"4"}},[c("div",[c("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("chat.cat_media")))]),t._v(" "),c("b-row",t._l(t.gallery,(function(img){return c("b-col",{key:img,staticClass:"p-0 text-center",attrs:{cols:"6"}},[c("b-img",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{src:img,alt:"img"},on:{click:function(e){t.popupImageSrc=img}}})],1)})),1)],1),t._v(" "),c("b-modal",{attrs:{"no-fade":"",id:"modal-1",size:"lg",centered:"","hide-header-close":"","hide-footer":"","hide-header":""}},[c("b-img",{staticClass:"w-100",attrs:{src:t.popupImageSrc,alt:"img"}})],1)],1):t._e(),t._v(" "),t.informationIsOpen?c("b-col",{staticClass:"group-information",attrs:{sm:"4"}},[c("div",[c("label",{staticClass:"title",attrs:{for:"changeGropupName"}},[t._v(t._s(t.$t("chat.group_name")))]),t._v(" "),c("b-form-input",{staticClass:"text-input",attrs:{placeholder:"Group Name",value:"El Magal",id:"changeGropupName",type:"text"}}),t._v(" "),c("b-button",{staticClass:"change-group-name w-100 text-center",attrs:{variant:"default"}},[t._v(t._s(t.$t("chat.change_btn")))])],1),t._v(" "),c("div",[c("label",{staticClass:"title",attrs:{for:"changeGropupName"}},[t._v(t._s(t.$t("chat.group_name")))]),t._v(" "),c("b-button",{staticClass:"add-member w-100 text-center",attrs:{variant:"default"}},[t._v("+ "+t._s(t.$t("chat.add_member")))]),t._v(" "),c("div",{staticClass:"user d-flex",attrs:{"align-v":"center"}},[c("div",{staticClass:"profile-image"},[c("b-img",{attrs:{src:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg",alt:"profile image"}})],1),t._v(" "),c("div",{staticClass:"name"},[t._v("You")])]),t._v(" "),t._l(t.users,(function(e,o){return c("div",{key:o+"img",staticClass:"user d-flex",attrs:{"align-v":"center"}},[c("div",{staticClass:"profile-image"},[c("b-img",{attrs:{src:e.image,alt:"profile image"}})],1),t._v(" "),c("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),c("div",{staticClass:"remove"},[c("b-img",{attrs:{src:"/images/icons/svg/social-remove-item.svg",alt:"remove"}})],1)])}))],2)]):t._e()],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);