webpackJsonp([3],{48:function(t,e,s){s(78);var i=s(20)(s(60),s(70),null,null);t.exports=i.exports},60:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(23);s.n(i);e.default={data:function(){return{emailSubject:"",emailText:"",showMessageMeModal:!1,showSubscribeModal:!1}},methods:{sendEmail:function(){var t={subject:this.emailSubject,text:this.emailText};this.$store.dispatch("sendEmail",t),this.showMessageMeModal=!1,this.emailSubject="",this.emailText=""},toggleModal:function(t){switch(t){case"MESSAGE_ME":this.showMessageMeModal=!0;break;case"SUBSCIBE":this.showSubscribeModal=!0}},closeModal:function(t){switch(t){case"MESSAGE_ME":this.showMessageMeModal=!1;break;case"SUBSCIBE":this.showSubscribeModal=!1}}}}},63:function(t,e,s){e=t.exports=s(21)(),e.push([t.i,".box{display:flex;text-align:left;padding:2%}.imageLeft{flex:1;margin-right:5%}.textRight{flex:5}.imgRound{border-radius:50%}.imgBig{width:20%;height:20%}.modalBtn{margin:10px}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;border-radius:4px;width:80%;position:relative}.close{color:#aaa;position:absolute;right:-3px;top:-6px;font-size:28px;font-weight:700}.closeOffset{right:13px;top:19px}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}",""])},70:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"imageLeft"},[s("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 250 250",xmlns:"http://www.w3.org/2000/svg"}},[s("g",[s("rect",{attrs:{fill:"none",height:"252",width:"252",y:"-1",x:"-1"}}),t._v(" "),s("g",{attrs:{display:"none",overflow:"visible",y:"0",x:"0",height:"100%",width:"100%"}},[s("rect",{attrs:{fill:"url(#gridpattern)","stroke-width":"0",y:"0",x:"0",height:"100%",width:"100%"}})])]),t._v(" "),s("g",[s("ellipse",{attrs:{ry:"100",rx:"100",cy:"125",cx:"125","stroke-width":"0",stroke:"#000",fill:"#36B728"}}),t._v(" "),s("text",{attrs:{"font-style":"normal","font-weight":"normal",stroke:"#000",transform:"matrix(11.809578687124604,0,0,14.153656210190517,-3607.25327877352,-3036.4358253455816) ","xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"10",y:"226.8288",x:"308.82268","stroke-width":"0",fill:"#ffffff"}},[t._v("</>")])])])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"imageLeft"},[s("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 250 250",xmlns:"https://www.w3.org/2000/svg"}},[s("g",[s("rect",{attrs:{fill:"none",height:"252",width:"252",y:"-1",x:"-1"}}),t._v(" "),s("g",{attrs:{display:"none",overflow:"visible",y:"0",x:"0",height:"100%",width:"100%"}},[s("rect",{attrs:{fill:"url(#gridpattern)","stroke-width":"0",y:"0",x:"0",height:"100%",width:"100%"}})])]),t._v(" "),s("g",[s("ellipse",{attrs:{ry:"100",rx:"100",cy:"125",cx:"125","stroke-width":"0",stroke:"#000",fill:"#36B728"}}),t._v(" "),s("path",{attrs:{stroke:"#000",d:"m125,105.28101c26.38689,-60.83699 129.77159,0 0,78.21899c-129.77159,-78.21899 -26.38689,-139.05598 0,-78.21899z","stroke-opacity":"null","stroke-width":"0",fill:"#ff0000"}})])])]),t._v(" "),t._m(2)]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"imageLeft"},[s("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 250 250",xmlns:"http://www.w3.org/2000/svg"}},[s("g",[s("rect",{attrs:{id:"svg_1",x:"-1",y:"-1",width:"252",height:"252",fill:"none"}}),t._v(" "),s("g",{attrs:{id:"svg_2",display:"none"}},[s("rect",{attrs:{id:"svg_3",width:"100%",height:"100%",x:"0",y:"0","stroke-width":"0",fill:"url(#gridpattern)"}})])]),t._v(" "),s("g",[s("ellipse",{attrs:{id:"svg_4",fill:"#36B728",stroke:"#000","stroke-width":"0",cx:"125",cy:"125",rx:"100",ry:"100"}}),t._v(" "),s("path",{attrs:{id:"svg_6",d:"m-426.5,1c62,14 186,182 186.5,182c-0.5,0 -11.5,-3 -11,-3c-0.5,0 -210.5,-250 -209.5,-247",opacity:"0.5","stroke-width":"1.5",stroke:"#000",fill:"#fff"}}),t._v(" "),s("path",{attrs:{stroke:"#000",id:"svg_7",d:"m52.5,91.61557l0,17.95615l26.63761,0l13.02039,40.48897l73.30646,0l24.03554,-61.56068l-113.96284,0l0,3.11486l-23.03716,0l0,0.00071zm60.86609,78.34364c0,6.37447 -4.84232,11.54079 -10.81435,11.54079s-10.81536,-5.16632 -10.81536,-11.54079s4.84253,-11.54135 10.81536,-11.54135s10.81435,5.16725 10.81435,11.54135zm50.08652,0c0,6.37447 -4.84227,11.54079 -10.8147,11.54079s-10.81519,-5.16632 -10.81519,-11.54079s4.84276,-11.54135 10.81519,-11.54135s10.8147,5.16725 10.8147,11.54135z","stroke-width":"0",fill:"#fff"}})]),t._v(" "),s("g",[s("rect",{attrs:{fill:"none",id:"canvas_background",height:"402",width:"582",y:"-1",x:"-1"}})])])]),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"imageLeft"},[s("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 250 250",xmlns:"http://www.w3.org/2000/svg"}},[s("g",[s("rect",{attrs:{fill:"none",height:"252",width:"252",y:"-1",x:"-1"}}),t._v(" "),s("g",{attrs:{display:"none",overflow:"visible",y:"0",x:"0",height:"100%",width:"100%"}},[s("rect",{attrs:{fill:"url(#gridpattern)","stroke-width":"0",y:"0",x:"0",height:"100%",width:"100%"}})])]),t._v(" "),s("g",[s("ellipse",{attrs:{fill:"#36B728",stroke:"#000","stroke-width":"0",cx:"125",cy:"125",rx:"100",ry:"100"}}),t._v(" "),s("path",{attrs:{d:"m125.00001,80.49999c-32.02999,0 -58.00001,15.92778 -58.00001,35.57705c0,11.23901 8.5253,21.25287 21.79868,27.77034c-1.88862,5.77822 -5.65766,12.17804 -12.94224,17.83842c0,0 17.00377,-1.03874 29.0138,-12.27929c0.69142,0.15651 1.4071,0.27432 2.10505,0.41884c-0.65593,-1.80641 -1.04209,-3.68428 -1.04209,-5.63815c0,-13.25698 15.99247,-23.63753 36.41787,-23.63753c14.67078,0 27.01534,5.3758 32.82639,13.30766c4.94691,-5.23577 7.82254,-11.30015 7.82254,-17.78482c0,-19.64476 -25.97002,-35.57254 -57.99999,-35.57254l0,0zm49.52962,63.69026c0,-10.89926 -14.40426,-19.74169 -32.18342,-19.74169c-17.76946,0 -32.18184,8.84243 -32.18184,19.74169c0,10.90511 14.41238,19.74313 32.18184,19.74313c3.93543,0 7.68357,-0.45459 11.16834,-1.24741c6.66252,6.24023 16.09732,6.81404 16.09732,6.81404c-4.0404,-3.1418 -6.12771,-6.69195 -7.1779,-9.90073c7.36052,-3.61265 12.09565,-9.16887 12.09565,-15.40902z","stroke-opacity":"null","stroke-width":"0",stroke:"#000",fill:"#ffffff"}})])])]),t._v(" "),s("div",{staticClass:"textRight"},[s("h3",[t._v("Let's connect")]),t._v(" "),s("p",[t._v("\n          Click the buttons below if you want to be the first to receive updates or send me a message (AMA).\n        ")]),t._v(" "),s("button",{staticClass:"modalBtn",attrs:{id:"subscribeBtn"},on:{click:function(e){t.toggleModal("SUBSCIBE")}}},[t._v("Stay Connected")]),t._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showSubscribeModal?s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("div",{attrs:{id:"mc_embed_signup"}},[s("form",{staticClass:"validate",attrs:{action:"//ditisanton.us15.list-manage.com/subscribe/post?u=4daa678e6fe357534ba238865&id=8aed1b2d49",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[s("div",{attrs:{id:"mc_embed_signup_scroll"}},[s("div",{staticClass:"indicates-required"},[s("span",{staticClass:"asterisk"},[t._v("*")]),t._v(" indicates required")]),t._v(" "),s("div",{staticClass:"mc-field-group"},[s("label",{attrs:{for:"mce-EMAIL"}},[t._v("Email Address "),s("span",{staticClass:"asterisk"},[t._v("*")])]),t._v(" "),s("input",{staticClass:"required email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL"}})]),t._v(" "),s("div",{staticClass:"mc-field-group"},[s("label",{attrs:{for:"mce-FNAME"}},[t._v("First Name ")]),t._v(" "),s("input",{attrs:{type:"text",value:"",name:"FNAME",id:"mce-FNAME"}})]),t._v(" "),s("div",{staticClass:"clear",attrs:{id:"mce-responses"}},[s("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),t._v(" "),s("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),t._v(" "),s("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[s("input",{attrs:{type:"text",name:"b_4daa678e6fe357534ba238865_8aed1b2d49",tabindex:"-1",value:""}})]),t._v(" "),s("div",{staticClass:"clear"},[s("button",[t._v("Subscribe")]),t._v(" "),s("button",{staticClass:"closeButton",on:{click:function(e){e.preventDefault(),t.closeModal("SUBSCIBE")}}},[t._v("Close")])])])])])])]):t._e()]),t._v(" "),s("button",{staticClass:"modalBtn",on:{click:function(e){t.toggleModal("MESSAGE_ME")}}},[t._v("Message Me")]),t._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showMessageMeModal?s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("h3",[t._v("Send me a message")]),t._v(" "),s("hr"),t._v(" "),s("form",[s("div",[s("label",[t._v("Subject")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailSubject,expression:"emailSubject"}],attrs:{type:"text",placeholder:"Subject..."},domProps:{value:t.emailSubject},on:{input:function(e){e.target.composing||(t.emailSubject=e.target.value)}}})]),t._v(" "),s("div",[s("label",[t._v("Message")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.emailText,expression:"emailText"}],attrs:{placeholder:"Your message..."},domProps:{value:t.emailText},on:{input:function(e){e.target.composing||(t.emailText=e.target.value)}}})])]),t._v(" "),s("div",[s("button",{on:{click:t.sendEmail}},[t._v("Send message")]),t._v(" "),s("button",{staticClass:"closeButton",on:{click:function(e){t.closeModal("MESSAGE_ME")}}},[t._v("Close")])])])]):t._e()])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-header"},[s("img",{staticClass:"imgRound imgBig",attrs:{src:"/assets/LogoGreen.png",alt:"Anton de Regt"}}),t._v(" "),s("h1",[t._v("Anton de Regt"),s("br"),s("small",[t._v("I am a Web/App developer based in Amsterdam")])]),t._v(" "),s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"textRight"},[s("h3",[t._v("Current projects")]),t._v(" "),s("p",[t._v("\n          I'm working on freeCodeCamp's backend certificate. This certificate requires you to build projects, the current project I'm working on is the book trading app.\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"textRight"},[s("h3",[t._v("Things I've made")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/antonderegt/mevn-github-auth",target:"_blank",rel:"noopener"}},[t._v("MEVN Boilerplate")]),t._v(",\n          "),s("a",{attrs:{href:"https://github.com/antonderegt/fcc",target:"_blank",rel:"noopener"}},[t._v("FreeCodeCamp challenges")]),t._v(",\n          "),s("a",{attrs:{href:"https://github.com/antonderegt/nac",target:"_blank",rel:"noopener"}},[t._v("Program Guide App")]),t._v(",\n          "),s("a",{attrs:{href:"https://antonderegt.github.io/roxean-bot-landing-page/",target:"_blank",rel:"noopener"}},[t._v("Slack Bot")]),t._v(".\n          You can find more on "),s("a",{attrs:{href:"https://github.com/antonderegt/",target:"_blank",rel:"noopener"}},[t._v("GitHub")]),t._v(".\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"textRight"},[s("h3",[t._v("What I can build for you")]),t._v(" "),s("p",[t._v("\n            I love to build apps and it would be awesome if we could build some of the following together:\n            "),s("b",[s("ul",[s("li",[t._v("Website")]),t._v(" "),s("li",[t._v("Web app")]),t._v(" "),s("li",[t._v("Android app")]),t._v(" "),s("li",[t._v("iOS app")])])]),t._v("\n            My main focus is on user experience, in my opinion that's what is most important in the long run.\n          ")])])}]}},78:function(t,e,s){var i=s(63);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(22)("1e34044d",i,!0)}});
//# sourceMappingURL=3.build.js.map