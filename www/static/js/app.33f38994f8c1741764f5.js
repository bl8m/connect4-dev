webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),s=n("NYxO"),a=n("M4fF"),i=n.n(a),c=n("Dd8w"),r=n.n(c),l=n("mvHQ"),d=n.n(l),g=n("/ocq"),u={name:"PageHome",data:function(){return{}},mounted:function(){},computed:r()({},Object(s.b)({is_connected:function(e){return e.is_connected}}))},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-home d-flex justify-content-center align-items-center"},[t("div",{staticClass:"text-center"},[t("h1",[this._v("Connect4")]),this._v(" "),this.is_connected?t("div",{staticClass:"badge badge-success"},[this._v("Connected")]):t("div",{staticClass:"badge badge-danger"},[this._v("Disconnected")])])])},staticRenderFns:[]},p=n("VU/8")(u,m,!1,null,null,null).exports,f={name:"PageColor",mounted:function(){this.$store.commit("setFeedback",{c:"feedback",p:{type:"color_set",message:"Color is set: "+this.message.p.color}})},data:function(){return{}},computed:r()({background_color:function(){return this.message.p.color}},Object(s.b)({message:function(e){return e.message}}))},v={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"app-page",style:"background-color: "+this.background_color})},staticRenderFns:[]},_=n("VU/8")(f,v,!1,null,null,null).exports,h={name:"PageImage",mounted:function(){console.log("Showing "+this.message.p.image),void 0!=this.message.p&&this.$store.commit("setFeedback",{type:"image_set",message:"Image set: "+this.message.p.image})},data:function(){return{}},computed:r()({background_image:function(){var e="./media/"+this.message.p.image;return console.log("Setting image "+e),e}},Object(s.b)({message:function(e){return e.message}}))},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-image"},[t("img",{attrs:{src:this.background_image,alt:""}})])},staticRenderFns:[]},C=n("VU/8")(h,b,!1,null,null,null).exports,y={name:"PageVideo",created:function(){},mounted:function(){this.setVideo()},data:function(){return{video_notification:!1}},computed:r()({video_action:function(){return"setVideo"==this.message.c?"load":"playVideo"==this.message.c?"play":"stopVideo"==this.message.c?"stop":null}},Object(s.b)({message:function(e){return e.message}})),watch:{video_action:function(e){if("load"==e)this.setVideo();else if("play"==e){document.getElementById("video").play()}else if("stop"==e){document.getElementById("video").pause()}}},methods:{setVideo:function(){console.log("Setting video ./media/"+this.message.p.video);var e=this,t=document.getElementById("video");if(t.addEventListener("canplaythrough canplay loadedmetadata",function(){e.video_notification=!0,console.log("Ready to Play"),e.$store.commit("setFeedback",{type:"video_ready",message:"Video is ready (event)"})},!1),t.src="./media/"+this.message.p.video,1==this.message.p.fakePreload){t.addEventListener("play",this.handlePlay);var n=t.play();null!==n&&n.catch(function(e){console.log(e.message)}),e.$store.commit("setFeedback",{type:"video_ready",message:"Video is ready (fake preload)"})}},handlePlay:function(){console.log("handlePlay");var e=document.getElementById("video");e.pause(),e.removeEventListener("play",this.handlePlay)}}},k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-video d-flex align-items-center"},[t("video",{staticClass:"w-100",attrs:{src:"",id:"video",preload:"auto",mute:""}})])}]},w=n("VU/8")(y,k,!1,null,null,null).exports,x={name:"PageText",data:function(){return{}},mounted:function(){this.$store.commit("setFeedback",{c:"feedback",p:{type:"text_set",message:"Text set: "+this.message.p.text}})},computed:r()({text_content:function(){return void 0!=this.message?this.message.p.text:""},textStyle:function(){var e="";return void 0!=this.message&&(void 0!=this.message.p.fontSize&&(e+="font-size: "+this.message.p.fontSize+"px; "),void 0!=this.message.p.color&&(e+="color: "+this.message.p.color+"; ")),e},bodyStyle:function(){var e="";return void 0!=this.message&&void 0!=this.message.p.backgroundColor&&(e+="background-color: "+this.message.p.backgroundColor+"; "),e},font_size:function(){return void 0!=this.message&&void 0!=this.message.p.font_size?this.message.p.font_size:64}},Object(s.b)({message:function(e){return e.message}}))},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-text d-flex justify-content-center align-items-center",style:this.bodyStyle},[t("div",{style:this.textStyle,domProps:{innerHTML:this._s(this.text_content)}})])},staticRenderFns:[]},P=n("VU/8")(x,E,!1,null,null,null).exports;o.a.use(g.a);var S=new g.a({routes:[{path:"/:endpoint?",name:"PageHome",component:p},{path:"/color",name:"PageColor",component:_},{path:"/image",name:"PageImage",component:C},{path:"/video",name:"PageVideo",component:w},{path:"/text",name:"PageText",component:P}]}),T={name:"App",router:S,data:function(){return{connection:null,toolbar_visible:!1,toolbar_command:"",tmp_config:{},current_page:""}},mounted:function(){this.auto_timer=null,this.loadConfig()},methods:{initConnection:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];console.log("Opening connection to "+this.config.endpoint),this.connection=new WebSocket("ws://"+this.config.endpoint),1==t&&(this.connection.onopen=function(){e.current_page="PageHome",S.push({name:"PageHome"}),e.$store.commit("setIsConnected",!0)},this.connection.onclose=function(){e.current_page="PageHome",S.push({name:"PageHome"}),e.$store.commit("setIsConnected",!1)},this.connection.onmessage=function(t){e.toolbar_command=Date.now().toString()+" > "+t.data;var n=JSON.parse(t.data);switch(e.$store.commit("setMessage",n),n.c){case"setColor":e.current_page="PageColor",S.push({name:e.current_page});break;case"setImage":e.current_page="PageImage",S.push({name:e.current_page});break;case"setVideo":e.current_page="PageVideo",S.push({name:e.current_page});break;case"setText":e.current_page="PageText",S.push({name:e.current_page})}})},closeConnection:function(){console.log("Closing connection"),this.connection=null,this.is_connected=!1},toggleToolbar:function(){console.log("toggleToolbar"),this.toolbar_visible=!this.toolbar_visible},toggleConfig:function(){this.tmp_config=i.a.clone(this.config,!0),$("#modal_config").modal()},loadConfig:function(){console.log("loadConfig from "+(this.has_native_storage?"NATIVE STORAGE":"LOCAL STORAGE"));var e={};if(this.has_native_storage)"NATIVE STORAGE",NativeStorage.getItem("connect4_config",function(t){e.id=t.id,e.endpoint=t.endpoint}),console.log(e);else{"LOCAL STORAGE";var t=window.localStorage.getItem("connect4_config");e=JSON.parse(t)}void 0!=e&&void 0!=e.id&&void 0!=e.endpoint||(console.log("loadConfig: configurazione salvata NON TROVATA"),e={endpoint:"192.168.1.6:9999",id:"Tablet1"}),void 0!=this.$route.params.endpoint&&(e.endpoint=this.$route.params.endpoint),this.$store.commit("setConfig",e)},saveConfig:function(){var e=i.a.clone(this.tmp_config,!0);if(this.$store.commit("setConfig",e),this.has_native_storage)console.log("saveConfig: salvo la configurazione in NATIVE STORAGE"),NativeStorage.setItem("connect4_config",e);else{console.log("saveConfig: salvo la configurazione in LOCAL STORAGE");var t=d()(e);window.localStorage.setItem("connect4_config",t)}$("#modal_config").modal("hide")}},computed:r()({toolbar_class:function(){return this.toolbar_visible?"expanded":""}},Object(s.b)({is_connected:function(e){return e.is_connected},config:function(e){return e.config},feedback:function(e){return e.feedback}}),{endpoint:function(){return this.config.endpoint},id:function(){return this.config.id},has_native_storage:function(){return"undefined"!=typeof NativeStorage}}),watch:{endpoint:function(e){this.is_connected&&this.closeConnection(),this.initConnection()},is_connected:function(e){0==e?(S.push({name:"PageHome"}),console.log("Timer ENABLED"),this.auto_timer=setInterval(this.initConnection,15e3)):(console.log("Timer DISABLED"),clearInterval(this.auto_timer))},feedback:function(e){var t={c:"feedback",i:this.id,p:e};this.connection.send(d()(t))}}},A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("div",{class:"row toolbar  no-gutters "+e.toolbar_class},[e.toolbar_visible?n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"toolbar-log"},[n("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.config.id))]),e._v(" "),n("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.current_page))]),e._v(" "),n("span",{class:e.is_connected?"badge badge-success":"badge badge-danger"},[e._v(e._s(e.is_connected?"Connected":"Disconnected"))]),e._v(" "),n("span",{class:e.has_native_storage?"badge badge-success":"badge badge-warning"},[e._v(e._s(e.has_native_storage?"Native Storage":"Local Storage"))])]),e._v(" "),n("div",{staticClass:"toolbar-log"},[n("pre",{staticClass:"d-inline",domProps:{innerHTML:e._s(e.toolbar_command)}})])]):e._e(),e._v(" "),n("div",{staticClass:"col-sm-6 text-right"},[e.toolbar_visible?n("span",[n("a",{staticClass:"toolbar-btn",attrs:{href:"#"},on:{click:function(t){return e.toggleConfig()}}},[n("i",{staticClass:"fa fa-cog"})])]):e._e(),e._v(" "),e.toolbar_visible?n("a",{staticClass:"toolbar-btn btn-minus",attrs:{href:"#"},on:{click:function(t){return e.toggleToolbar()}}},[n("i",{staticClass:"fa fa-minus"})]):n("a",{staticClass:"toolbar-btn btn-plus",attrs:{href:"#"},on:{click:function(t){return e.toggleToolbar()}}},[n("i",{staticClass:"fa fa-plus"})])])]),e._v(" "),n("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"modal_config"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row mb-2"},[e._m(1),e._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tmp_config.id,expression:"tmp_config.id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.tmp_config.id},on:{input:function(t){t.target.composing||e.$set(e.tmp_config,"id",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"row mb-2"},[e._m(2),e._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tmp_config.endpoint,expression:"tmp_config.endpoint"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.tmp_config.endpoint},on:{input:function(t){t.target.composing||e.$set(e.tmp_config,"endpoint",t.target.value)}}})])]),e._v(" "),e.is_connected?e._e():n("div",{staticClass:"row mb-2"},[n("div",{staticClass:"col-sm-12"},[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.initConnection(!1)}}},[e._v("Connetti")])])])]),e._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.saveConfig}},[e._v("Salva")]),e._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Chiudi")])])])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("Configurazione")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("label",[this._v("Id dispositivo")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("label",[this._v("Websocket Endpoint")])])}]},I=n("VU/8")(T,A,!1,null,null,null).exports,O=(n("lwAK"),n("K3J8"),n("h5AK"),n("C/JF")),V=n("chEw"),N=n("p2fn"),F=n("08EX");window.$=window.jQuery=n("7t+N"),O.b.add(V.faPlus),O.b.add(N.faMinus),O.b.add(F.faCog),O.a.watch(),o.a.use(s.a),o.a.config.productionTip=!1,new o.a({el:"#app",store:new s.a.Store({state:{is_connected:!1,config:{id:null,endpoint:null},message:{},feedback:{}},mutations:{setIsConnected:function(e,t){e.is_connected=t},setConfig:function(e,t){e.config=t},setMessage:function(e,t){e.message=t},setFeedback:function(e,t){e.feedback=t}},getters:{getCommand:function(e){return e.message.c},getParams:function(e){return e.message.p}}}),components:{App:I},template:"<App/>"})},h5AK:function(e,t){},lwAK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.33f38994f8c1741764f5.js.map