(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{505:function(t,e,o){},509:function(t,e,o){"use strict";o(505)},589:function(t,e,o){"use strict";o.r(e);var c={name:"chat",layout:"withoutNavbar",data:function(){return{slectedCover:!0,isAdmin:!0,users:[{name:"Todd",id:1,image:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg"},{name:"Diane",id:2,image:"https://variety.com/wp-content/uploads/2020/06/bojack.jpg?w=681&h=383&crop=1"},{name:"Cat",id:3,image:"https://4.bp.blogspot.com/-tQRNAwgFw8c/XDJJOho0QQI/AAAAAAAAZSg/SFU5aFdugeMYFWMpyo7fb0kfvOOV3E1bgCLcBGAs/s1600/bojack.jpg"},{name:"Dog",id:4,image:"https://media.npr.org/assets/img/2015/03/20/bojac_s1_029_h_sq-76687651cffd981036a1ee25758fbd28f743c43f-s800-c85.jpg"}],gallery:["https://pyxis.nymag.com/v1/imgs/897/4aa/e1547854e6a546b9c11a13317ca19bf6f4-08-bojack-409.rsquare.w700.jpg","https://images.squarespace-cdn.com/content/58cd7ccd46c3c40813a3412d/1505452320177-HK9EOKHE4DZXC7KKHXL1/Bojack+Horseman+Season+4+Courtney+Portnoy.png?content-type=image%2Fpng","https://pbs.twimg.com/profile_images/997077562533740544/feamgA9P_400x400.jpg","https://i.pinimg.com/originals/4e/17/af/4e17af7beb6cb1175407246980af8a6f.png","https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2016-07/1280_bojackhorseman_s1_netflix.jpg?itok=J3Uhe8n2","https://data.whicdn.com/images/327256690/original.jpg","https://pbs.twimg.com/profile_images/997077562533740544/feamgA9P_400x400.jpg","https://pyxis.nymag.com/v1/imgs/897/4aa/e1547854e6a546b9c11a13317ca19bf6f4-08-bojack-409.rsquare.w700.jpg"]}},methods:{onTagState:function(t){console.log(t)}}},l=(o(509),o(39)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"social-chat"},[o("b-container",[o("b-row",{staticClass:"mt-3"},[o("b-col",{staticClass:"pr-sm-2 mb-sm-5",attrs:{sm:"3"}},[o("div",{staticClass:"chats-persons chat-box  h-100"},[o("div",{staticClass:"chat-header"},[o("b-row",[o("b-col",{attrs:{cols:"5"}},[o("div",{staticClass:"title"},[t._v("\n                                 "+t._s(t.$t("chat.chats"))+"\n                                ")])]),t._v(" "),o("b-col",{attrs:{cols:"7"}},[o("div",{staticClass:"create-group",on:{click:function(e){return t.$bvModal.show("creatGroup")}}},[o("img",{attrs:{src:"/images/icons/svg/social-creat-group.svg",alt:"icnon"}}),t._v(" "),o("span",{staticClass:"bold"},[t._v("    "+t._s(t.$t("chat.create_room")))])])])],1)],1),t._v(" "),o("div",{staticClass:"users-select room-chat-select"},[o("div",{staticClass:"mt-2"},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-admin-rooms",modifiers:{"collapse-admin-rooms":!0}}],staticClass:"bg-secondary-opacity-1 d-flex admin-rooms color-secondary w-100 no-shadow",attrs:{variant:"default"}},[o("span",[t._v(" "+t._s(t.$t("chat.admin")))]),t._v(" "),o("b-img",{staticClass:"icon",attrs:{src:"/images/icons/svg/social-arrow-bottom.svg",alt:"icon"}})],1),t._v(" "),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-admin-rooms"}},[o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select active"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("b-button",{staticClass:"no-shadow bg-primary-opacity-1 color-primary text-center p-2 w-100",attrs:{variant:"default"}},[t._v("\n                                    "+t._s(t.$t("chat.more"))+"\n                                ")])],1)],1),t._v(" "),o("div",{staticClass:"mt-2"},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-users-rooms",modifiers:{"collapse-users-rooms":!0}}],staticClass:"bg-secondary-opacity-1 d-flex admin-rooms color-secondary w-100 no-shadow",attrs:{variant:"default"}},[o("span",[t._v("    "+t._s(t.$t("chat.user_room")))]),t._v(" "),o("b-img",{staticClass:"icon",attrs:{src:"/images/icons/svg/social-arrow-bottom.svg",alt:"icon"}})],1),t._v(" "),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-users-rooms"}},[o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select active"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("div",{staticClass:"single-chat-room-select"},[t._v("\n                                        Buy and sell room\n                                    ")])]),t._v(" "),o("b-button",{staticClass:"no-shadow bg-primary-opacity-1 color-primary text-center p-2 w-100",attrs:{variant:"default"}},[t._v("\n                                   "+t._s(t.$t("chat.more"))+"\n                                ")])],1)],1)])])]),t._v(" "),o("b-col",{attrs:{sm:"6"}},[o("div",{staticClass:"chat-box chat-messages-box mb-sm-5"},[o("div",{staticClass:"chat-header"},[o("b-row",[o("b-col",{staticClass:"p-0",attrs:{cols:"10"}},[o("div",{staticClass:"title pt-2"},[t._v("\n                                    Buy & Sell \n                                ")])]),t._v(" "),o("b-col",{staticClass:"tabs-container",attrs:{cols:"2"}},[o("div",{staticClass:"icon-container",on:{click:function(e){return t.$bvModal.show("roomSetting")}}},[o("b-img",{attrs:{src:"/images/icons/svg/social-room-setting.svg",alt:"icon"}})],1)])],1)],1),t._v(" "),o("b-row",{staticClass:"flex-nowrap overflow-hidden"},[o("b-col",{staticClass:"scroll-container",attrs:{cols:"12"}},[o("div",{staticClass:"scrollable-box-messages"},[o("div",{staticClass:"date"},[o("span",[t._v("April 4, 2020")])]),t._v(" "),o("div",{staticClass:"recived-message message-container "},[o("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("Hello Friend")])])]),t._v(" "),o("div",{staticClass:"sent-message message-container "},[o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("Hello Bocjak how are you?")]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:33 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"recived-message message-container "},[o("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("There Is No Other Side, You Turn Yourself Around. That’s What It’s All About, Sometimes Life’s A sad And Then You Keep Living.")]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:34 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"sent-message message-container "},[o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("Life’s a sad and then you die, right?")]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:35 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"sent-message message-container "},[o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("Sometimes life’s a sad ba and then you keep living")]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:36 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"recived-message message-container "},[o("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("They agree that it’s a nice night and decide to just look up at the sky. It was the perfect way to end the series")]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:37 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"recived-message message-container "},[o("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[t._v("It Gets Easier")]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:38 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"recived-message message-container "},[o("div",{staticClass:"profile-image",style:"background-image:url('https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg"}),t._v(" "),o("div",{staticClass:"message"},[o("img",{staticClass:"w-100",attrs:{src:"https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg",alt:"sent photo."}}),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:38 am\n                                        ")])])]),t._v(" "),o("div",{staticClass:"sent-message message-container "},[o("div",{staticClass:"message"},[o("p",{staticClass:"m-0"},[o("img",{staticClass:"w-100",attrs:{src:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg",alt:"sent photo."}})]),t._v(" "),o("div",{staticClass:"time"},[t._v("\n                                            10:39 am\n                                        ")])])])]),t._v(" "),o("div",{staticClass:"input-box"},[o("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[o("b-input-group-text",[o("input",{attrs:{type:"file",hidden:"",id:"sendImg"}}),t._v(" "),o("label",{staticClass:"m-0",attrs:{for:"sendImg"}},[o("b-img",{attrs:{src:"/images/icons/svg/social-image-gery.svg",alt:"icon"}})],1)])]},proxy:!0}])},[t._v(" "),o("b-form-input",{attrs:{placeholder:"Type your message…"}}),t._v(" "),o("b-input-group-append",[o("b-button",{attrs:{variant:"default"}},[t._v("Send")])],1)],1)],1)])],1)],1)]),t._v(" "),o("b-col",{staticClass:"pl-sm-2",attrs:{sm:"3"}},[o("div",{staticClass:"chat-box chat-messages-box mb-5"},[o("div",{staticClass:"chat-header pl-0"},[o("div",{staticClass:"title pt-2"},[t._v("\n                          "+t._s(t.$t("chat.active_user"))+"\n                        ")])]),t._v(" "),o("div",{staticClass:"active-users"},[o("div",{staticClass:"user d-flex"},[o("div",{staticClass:"profile-image"},[o("img",{attrs:{src:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg",alt:"profile image"}})]),t._v(" "),o("div",{staticClass:"name"},[t._v("Ahmed")])]),t._v(" "),o("div",{staticClass:"user d-flex"},[o("div",{staticClass:"profile-image"},[o("img",{attrs:{src:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg",alt:"profile image"}})]),t._v(" "),o("div",{staticClass:"name"},[t._v("Ahmed")])]),t._v(" "),o("div",{staticClass:"user d-flex"},[o("div",{staticClass:"profile-image"},[o("img",{attrs:{src:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg",alt:"profile image"}})]),t._v(" "),o("div",{staticClass:"name"},[t._v("Ahmed")])]),t._v(" "),t._l(10,(function(s){return o("div",{key:s,staticClass:"user d-flex"},[o("div",{staticClass:"profile-image"},[o("img",{attrs:{src:"https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg",alt:"profile image"}})]),t._v(" "),o("div",{staticClass:"name"},[t._v("Todd")])])}))],2)])])],1)],1),t._v(" "),o("b-modal",{attrs:{"content-class":"create-group-popup create-rooms-popup",id:"creatGroup",size:"lg",centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[o("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("chat.create_room")))])]},proxy:!0},{key:"modal-header-close",fn:function(){return[o("b-img",{staticClass:"close-icon",attrs:{src:"/images/icons/svg/social-close-btn.svg",alt:"icon"}})]},proxy:!0},{key:"modal-footer",fn:function(){return[o("b-button",{staticClass:"b-block text-center p-2 w-100 create-room-btn no-shadow mt-5 mb-0 mr-0 ml-0",attrs:{disabled:!t.slectedCover,variant:"default"}},[t._v("\n              "+t._s(t.$t("chat.public_room"))+"\n            ")])]},proxy:!0}])},[t._v(" "),t._v(" "),o("div",{staticClass:"form-container"},[o("b-form",[o("div",[o("label",{attrs:{for:"room-name"}},[t._v(t._s(t.$t("chat.name")))]),t._v(" "),o("b-form-input",{staticClass:"text-input",attrs:{id:"room-name",type:"text",placeholder:t.$t("chat.name")}})],1),t._v(" "),o("div",{staticClass:"friends"},[o("div",{staticClass:"lable mb-2"},[t._v(t._s(t.$t("chat.cover")))]),t._v(" "),t.slectedCover?o("div",{staticClass:"selected-cover mb-3"},[o("b-img",{attrs:{src:"https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2016/04/tinder-social-fail.png?w=780&h=408&crop=1",alt:"cover"}})],1):t._e(),t._v(" "),o("label",{staticClass:"w-100 bg-primary-opacity-1 p-2 color-primary d-flex text-center upload-photo",attrs:{for:"room-cover"}},[o("b-img",{attrs:{src:"/images/icons/svg/social-photo-cloud.svg",alt:"icon"}}),t._v(" "),t.slectedCover?t._e():o("span",[t._v(t._s(t.$t("chat.upload_photo")))]),t._v(" "),t.slectedCover?o("span",[t._v(t._s(t.$t("chat.change_photo")))]):t._e()],1),t._v(" "),o("input",{attrs:{id:"room-cover",hidden:"",type:"file"}}),t._v(" "),t.slectedCover?o("b-button",{staticClass:"remove font-weight-bold mt-4 bg-red-opacity-1 no-shadow color-red w-100 p-2",attrs:{variant:"default"}},[t._v("\n                     "+t._s(t.$t("chat.remove_photo"))+"\n                    ")]):t._e()],1)])],1)]),t._v(" "),o("b-modal",{attrs:{"content-class":"create-group-popup create-rooms-popup",id:"roomSetting",size:"lg",centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[o("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("chat.setting")))])]},proxy:!0},{key:"modal-header-close",fn:function(){return[o("b-img",{staticClass:"close-icon",attrs:{src:"/images/icons/svg/social-close-btn.svg",alt:"icon"}})]},proxy:!0},{key:"modal-footer",fn:function(){return[o("b-button",{staticClass:"b-block text-center p-2 w-100 delete-room-btn no-shadow mt-5 mb-0 mr-0 ml-0",attrs:{variant:"default"}},[t._v("\n                 "+t._s(t.$t("chat.delete_room"))+"\n            ")])]},proxy:!0}])},[t._v(" "),t._v(" "),o("div",{staticClass:"form-container"},[o("b-form",[o("div",[o("label",{attrs:{for:"room-name"}},[t._v(t._s(t.$t("chat.name")))]),t._v(" "),o("b-form-input",{staticClass:"text-input",attrs:{id:"room-name",type:"text",placeholder:t.$t("chat.name")}})],1),t._v(" "),o("div",{staticClass:"friends"},[o("div",{staticClass:"lable mb-2"},[t._v(t._s(t.$t("chat.cover")))]),t._v(" "),t.slectedCover?o("div",{staticClass:"selected-cover mb-3"},[o("b-img",{attrs:{src:"https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2016/04/tinder-social-fail.png?w=780&h=408&crop=1",alt:"cover"}})],1):t._e(),t._v(" "),o("label",{staticClass:"w-100 bg-primary-opacity-1 p-2 color-primary d-flex text-center upload-photo",attrs:{for:"room-cover"}},[o("b-img",{attrs:{src:"/images/icons/svg/social-photo-cloud.svg",alt:"icon"}}),t._v(" "),t.slectedCover?t._e():o("span",[t._v(t._s(t.$t("chat.upload_photo")))]),t._v(" "),t.slectedCover?o("span",[t._v(t._s(t.$t("chat.change_photo")))]):t._e()],1),t._v(" "),o("input",{attrs:{id:"room-cover",hidden:"",type:"file"}}),t._v(" "),t.slectedCover?o("b-button",{staticClass:"remove font-weight-bold mt-4 bg-red-opacity-1 no-shadow color-red w-100 p-2",attrs:{variant:"default"}},[t._v("\n                          "+t._s(t.$t("chat.remove_photo"))+"\n                    ")]):t._e()],1)])],1)])],1)}),[],!1,null,"17a19112",null);e.default=component.exports}}]);