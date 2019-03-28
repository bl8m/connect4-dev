webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o=s("NYxO"),a=s("M4fF"),i=s.n(a),l=s("Dd8w"),c=s.n(l),r=s("mvHQ"),d=s.n(r),u=s("/ocq"),m={name:"PageHome",data:function(){return{}},mounted:function(){},computed:c()({},Object(o.b)({is_connected:function(e){return e.is_connected}}))},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-home d-flex justify-content-center align-items-center"},[t("div",{staticClass:"text-center"},[t("h1",[this._v("Connect4")]),this._v(" "),this.is_connected?t("div",{staticClass:"badge badge-success"},[this._v("Connected")]):t("div",{staticClass:"badge badge-danger"},[this._v("Disconnected")])])])},staticRenderFns:[]},f=s("VU/8")(m,g,!1,null,null,null).exports,v={name:"PageColor",mounted:function(){this.$store.commit("setFeedback",{c:"feedback",p:{type:"color_set",message:"Color is set: "+this.message.p.color}})},data:function(){return{}},computed:c()({background_color:function(){return this.message.p.color}},Object(o.b)({message:function(e){return e.message}}))},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"app-page",style:"background-color: "+this.background_color})},staticRenderFns:[]},h=s("VU/8")(v,p,!1,null,null,null).exports,b={name:"PageImage",mounted:function(){console.log("Showing "+this.message.p.image),void 0!=this.message.p&&this.$store.commit("setFeedback",{type:"image_set",message:"Image set: "+this.message.p.image})},data:function(){return{}},computed:c()({background_image:function(){var e="./media/"+this.message.p.image;return console.log("Setting image "+e),e}},Object(o.b)({message:function(e){return e.message}}))},j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-image"},[t("img",{attrs:{src:this.background_image,alt:""}})])},staticRenderFns:[]},C=s("VU/8")(b,j,!1,null,null,null).exports,y={name:"PageVideo",created:function(){},mounted:function(){this.local_dir=cordova.file.dataDirectory+"connect4",this.setVideo()},data:function(){return{video_notification:!1}},computed:c()({video_action:function(){return"setVideo"==this.message.c?"load":"playVideo"==this.message.c?"play":"stopVideo"==this.message.c?"stop":null}},Object(o.b)({message:function(e){return e.message}})),watch:{video_action:function(e){if("load"==e)this.setVideo();else if("play"==e){var t=document.getElementById("video");this.is_playing=!0,t.play()}else if("stop"==e){t=document.getElementById("video");this.is_playing=!1,t.pause()}}},methods:{setVideo:function(){var e=this;e.message.p.video;window.resolveLocalFileSystemURL(this.local_dir,function(t){t.getFile(e.message.p.video,{create:!1,exclusive:!1},function(t){var s=document.getElementById("video");if(s.addEventListener("canplaythrough canplay loadedmetadata",function(){e.video_notification=!0,console.log("Ready to Play"),e.$store.commit("setFeedback",{type:"video_ready",message:"Video is ready (event)"})},!1),s.src=cordova.file.dataDirectory+t.fullPath,console.log("SRC: "+s.src),1==e.message.p.loop?element.setAttribute("loop",!0):element.removeAttribute("loop"),1==e.message.p.fakePreload){s.addEventListener("play",e.handlePlay);var n=s.play();null!==n&&n.catch(function(e){console.log(e.message)}),e.$store.commit("setFeedback",{type:"video_ready",message:"Video is ready (fake preload)"})}},function(e){console.log(e)})},function(e){console.log(e)})},handlePlay:function(){console.log("handlePlay");var e=document.getElementById("video");e.pause(),e.removeEventListener("play",this.handlePlay)}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-video d-flex align-items-center"},[t("video",{staticClass:"w-100",attrs:{src:"",id:"video",preload:"auto",mute:"",controls:"false"}}),this._v(" "),this.is_playing?this._e():t("div",{staticClass:"overlay"})])},staticRenderFns:[]};var k=s("VU/8")(y,w,!1,function(e){s("k1Ly")},"data-v-682f026f",null).exports,E={name:"PageText",data:function(){return{}},mounted:function(){this.$store.commit("setFeedback",{c:"feedback",p:{type:"text_set",message:"Text set: "+this.message.p.text}})},computed:c()({text_content:function(){return void 0!=this.message?this.message.p.text:""},textStyle:function(){var e="";return void 0!=this.message&&(void 0!=this.message.p.fontSize&&(e+="font-size: "+this.message.p.fontSize+"px; "),void 0!=this.message.p.color&&(e+="color: "+this.message.p.color+"; ")),e},bodyStyle:function(){var e="";return void 0!=this.message&&void 0!=this.message.p.backgroundColor&&(e+="background-color: "+this.message.p.backgroundColor+"; "),e},font_size:function(){return void 0!=this.message&&void 0!=this.message.p.font_size?this.message.p.font_size:64}},Object(o.b)({message:function(e){return e.message}}))},F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-page page-text d-flex justify-content-center align-items-center",style:this.bodyStyle},[t("div",{style:this.textStyle,domProps:{innerHTML:this._s(this.text_content)}})])},staticRenderFns:[]},x=s("VU/8")(E,F,!1,null,null,null).exports,L=s("mtWM"),P=s.n(L),S=s("PJh5"),O=s.n(S),z=(s("FKXc"),{name:"PageFiles",mounted:function(){var e=this;O.a.locale("it"),console.log("FILESYSTEM"),console.log(cordova.file),this.local_dir=cordova.file.applicationStorageDirectory+"connect4",console.log(this.local_dir),window.addEventListener("filePluginIsReady",function(){console.log("File plugin is ready")},!1),window.resolveLocalFileSystemURL(cordova.file.applicationStorageDirectory,function(e){console.log("Creating folder connect4"),e.getDirectory("connect4",{create:!0},function(e){console.log("File: "+e.name+", "+e.fullPath)})}),this.loadLocalFiles(),document.addEventListener("DOWNLOADER_downloadSuccess",function(e){e.data}),document.addEventListener("DOWNLOADER_getFileError",function(t){console.log("DOWNLOADER_getFileError"),e.notify(t.data,"danger")}),document.addEventListener("DOWNLOADER_downloadError",function(t){console.log("DOWNLOADER_downloadError"),e.notify(t.data,"danger")}),document.addEventListener("DOWNLOADER_error",function(t){console.log("DOWNLOADER_error"),e.notify(t.data,"danger")}),console.log("Downloader Init: "+this.local_dir),downloader.init({folder:this.local_dir,fileSystem:cordova.file.applicationStorageDirectory}),document.addEventListener("DOWNLOADER_downloadSuccess",function(t){var s=t.data,n="";for(var o in s){var a=s[o].name;console.log("cerco"+a),n+=a;var i=_.find(e.remote_files,{filename:a});void 0!=i?(i.downloaded=!0,i.is_downloading=!1):console.log(a+" non trovato")}e.loadLocalFiles(),e.notify("File scaricati correttamente: "+n,"success")})},data:function(){return{current_tab:"local",media_url:"http://forza4.bl8m.it/server/file_index.php",local_files:[],remote_files:[],log:[]}},computed:c()({},Object(o.b)({})),methods:{notify:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",s={date:O()().format("hh:mm:ss"),message:e,type:t};this.log.unshift(s)},loadLocalFiles:function(){var e=this;e.local_files=[],console.log("loadLocalFiles from "+e.local_dir),window.resolveLocalFileSystemURL(e.local_dir,function(t){console.log("File locali"),t.createReader().readEntries(function(t){for(var s in console.log(t),t){var n=t[s];n.isFile&&"nomedia"!=n.name&&(e.local_files.push(n),0)}},function(t){e.notify(t,"danger")})},function(t){e.notify(t,"warning")})},getRemoteList:function(){var e=this;P.a.get(this.media_url,{crossdomain:!0}).then(function(t){e.remote_files=t.data}).catch(function(e){console.log(e)})},existsLocal:function(e){return void 0!=_.find(this.local_files,{name:e})},downloadFile:function(e){var t=_.find(self.remote_files,{filename:e.name});void 0!=t&&(t.is_downloading=!0),downloader.get(e.url)},downloadAll:function(){console.log("Downloading all files ");var e=this.remote_files.map(function(e){return{url:e.url}});downloader.getMultipleFiles(e)},deleteFile:function(e){var t=this;confirm("Procedere con la cancellazione di "+e+"?")&&window.resolveLocalFileSystemURL(this.local_dir,function(s){s.getFile(e,{create:!1},function(s){s.remove(function(){t.notify("File cancellato correttamente: "+e,"success"),t.loadLocalFiles()},function(e){t.notify(e,"danger")},function(){t.notify("Il file non esiste","warning")})})})}}}),D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-page"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item"},[s("a",{class:"nav-link"+("local"==e.current_tab?" disabled":""),attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.current_tab="local"}}},[e._v("File locali")])]),e._v(" "),s("li",{staticClass:"nav-item"},[s("a",{class:"nav-link"+("remote"==e.current_tab?" disabled":""),attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.current_tab="remote"}}},[e._v("Scarica")])])]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-8"},["remote"==e.current_tab?s("div",{staticClass:"remote_files"},[s("h4",[e._v("File remoti")]),e._v(" "),s("div",{staticClass:"row mb-2"},[s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.media_url,expression:"media_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.media_url},on:{input:function(t){t.target.composing||(e.media_url=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"col-sm-4"},[s("button",{staticClass:"btn btn-primary",on:{click:e.getRemoteList}},[e._v("Carica elenco media")])])]),e._v(" "),s("table",{staticClass:"table table-sm table-hover"},[s("tbody",e._l(e.remote_files,function(t){return s("tr",[s("td",[s("strong",[e._v(e._s(t.filename))])]),e._v(" "),s("td",[s("span",{staticClass:"badge"},[e._v(e._s(t.size)+" bytes")])]),e._v(" "),s("td",[s("small",[e._v(e._s(t.url))])]),e._v(" "),s("td",[e.existsLocal(t.filename)?s("span",{staticClass:"text-success"},[e._v("In locale")]):e._e()]),e._v(" "),s("td",[t.downloaded?s("button",{staticClass:"btn btn-success btn-sm",attrs:{disabled:""}},[e._v("Scaricato")]):s("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:t.is_downloading},on:{click:function(s){return e.downloadFile(t)}}},[t.is_downloading?s("i",{staticClass:"fa fa-spin fa-circle-notch"}):e._e(),e._v("\n\t\t\t\t\t\t\t\t\tScarica\n\t\t\t\t\t\t\t\t\t")])])])}),0)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"text-right"},[e._v("Files disponibili: "),s("strong",[e._v(e._s(e.remote_files.length))]),e._v(" - "),s("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.downloadAll(t)}}},[e._v("Scarica tutti")])])]):e._e(),e._v(" "),"local"==e.current_tab?s("div",{staticClass:"remote_files"},[s("h4",[e._v("File locali")]),e._v(" "),s("table",{staticClass:"table table-sm table-hover"},[s("tbody",e._l(e.local_files,function(t){return s("tr",[s("td",[s("strong",[e._v(e._s(t.name))])]),e._v(" "),s("td",[s("small",[e._v(e._s(t.fullPath))])]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(s){return e.deleteFile(t.name)}}},[e._v("Cancella")])])])}),0)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"text-right"},[e._v("Files trovati: "),s("strong",[e._v(e._s(e.local_files.length))]),e._v(" - "),s("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.loadLocalFiles(t)}}},[e._v("Aggiorna")])])]):e._e()]),e._v(" "),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"card card-log"},[e._m(0),e._v(" "),s("div",{staticClass:"card-body"},e._l(e.log,function(t){return s("div",{class:"alert alert-sm alert-"+t.type},[s("span",[e._v(e._s(t.date))]),e._v(" "),s("strong",[e._v(e._s(t.message))])])}),0)])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("strong",[this._v("Log")])])}]},R=s("VU/8")(z,D,!1,null,null,null).exports;n.a.use(u.a);var N=new u.a({routes:[{path:"/:client_id?",name:"PageHome",component:f},{path:"/color",name:"PageColor",component:h},{path:"/image",name:"PageImage",component:C},{path:"/video",name:"PageVideo",component:k},{path:"/text",name:"PageText",component:x},{path:"/media",name:"PageFiles",component:R}]}),A={name:"App",router:N,data:function(){return{connection:null,toolbar_visible:!1,toolbar_command:"",tmp_config:{},current_page:"",has_native_storage:null}},created:function(){},mounted:function(){this.auto_timer=null,this.has_native_storage="undefined"!=typeof NativeStorage,this.loadConfig()},methods:{initConnection:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];console.log("Opening connection to "+this.config.endpoint),this.connection=null,this.connection=new WebSocket("ws://"+this.config.endpoint),1==t&&(this.connection.onopen=function(){e.current_page="PageHome",N.push({name:"PageHome"}),e.$store.commit("setIsConnected",!0)},this.connection.onclose=function(){e.current_page="PageHome",N.push({name:"PageHome"}),e.$store.commit("setIsConnected",!1)},this.connection.onmessage=function(t){e.toolbar_command=Date.now().toString()+" > "+t.data;var s=JSON.parse(t.data);switch(e.$store.commit("setMessage",s),s.c){case"setColor":e.current_page="PageColor",N.push({name:e.current_page});break;case"setImage":e.current_page="PageImage",N.push({name:e.current_page});break;case"setVideo":e.current_page="PageVideo",N.push({name:e.current_page});break;case"setText":e.current_page="PageText",N.push({name:e.current_page})}})},closeConnection:function(){console.log("Closing connection"),this.connection=null,this.is_connected=!1},toggleToolbar:function(){console.log("toggleToolbar"),this.toolbar_visible=!this.toolbar_visible},toggleConfig:function(){this.tmp_config=i.a.clone(this.config,!0),$("#modal_config").modal()},loadConfig:function(){console.log("loadConfig from "+(this.has_native_storage?"NATIVE STORAGE":"LOCAL STORAGE"));var e={};if(this.has_native_storage)"NATIVE STORAGE",NativeStorage.getItem("connect4_config",function(t){e.id=t.id,e.endpoint=t.endpoint});else{"LOCAL STORAGE";var t=window.localStorage.getItem("connect4_config");e=JSON.parse(t)}void 0!=e&&void 0!=e.id&&void 0!=e.endpoint||(console.log("loadConfig: configurazione salvata NON TROVATA"),e={endpoint:"192.168.1.6:9999",id:"Tablet1",autoreconnect_interval:5}),void 0!=this.$route.params.client_id&&(console.log("ID impostato da url: "+this.$route.params.client_id),e.id=this.$route.params.client_id),this.$store.commit("setConfig",e)},saveConfig:function(){var e=i.a.clone(this.tmp_config,!0);if(this.$store.commit("setConfig",e),this.has_native_storage)console.log("saveConfig: salvo la configurazione in NATIVE STORAGE"),NativeStorage.setItem("connect4_config",e);else{console.log("saveConfig: salvo la configurazione in LOCAL STORAGE");var t=d()(e);window.localStorage.setItem("connect4_config",t)}$("#modal_config").modal("hide")}},computed:c()({toolbar_class:function(){return this.toolbar_visible?"expanded":""}},Object(o.b)({is_connected:function(e){return e.is_connected},config:function(e){return e.config},feedback:function(e){return e.feedback}}),{endpoint:function(){return this.config.endpoint},id:function(){return this.config.id}}),watch:{endpoint:function(e){this.is_connected&&this.closeConnection(),this.initConnection()},is_connected:function(e){0==e?(N.push({name:"PageHome"}),console.log("Timer ENABLED"),this.auto_timer=setInterval(this.initConnection,1e3*this.config.autoreconnect_interval)):(console.log("Timer DISABLED"),clearInterval(this.auto_timer))},feedback:function(e){var t={c:"feedback",i:this.id,p:e};this.connection.send(d()(t))}}},I={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),e._v(" "),s("div",{class:"row toolbar  no-gutters "+e.toolbar_class},[e.toolbar_visible?s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"toolbar-log"},[s("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.config.id))]),e._v(" "),s("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.current_page))]),e._v(" "),s("span",{class:e.is_connected?"badge badge-success":"badge badge-danger"},[e._v(e._s(e.is_connected?"Connected":"Disconnected"))]),e._v(" "),s("span",{class:e.has_native_storage?"badge badge-success":"badge badge-warning"},[e._v(e._s(e.has_native_storage?"Native Storage":"Local Storage"))])]),e._v(" "),s("div",{staticClass:"toolbar-log"},[s("pre",{staticClass:"d-inline",domProps:{innerHTML:e._s(e.toolbar_command)}})])]):e._e(),e._v(" "),s("div",{staticClass:"col-sm-6 text-right"},[e.toolbar_visible?s("span",[s("router-link",{staticClass:"toolbar-btn",attrs:{to:{name:"PageFiles"}}},[s("i",{staticClass:"fa fa-file-video"})]),e._v(" "),s("a",{staticClass:"toolbar-btn",attrs:{href:"#"},on:{click:function(t){return e.toggleConfig()}}},[s("i",{staticClass:"fa fa-cog"})])],1):e._e(),e._v(" "),e.toolbar_visible?s("a",{staticClass:"toolbar-btn btn-minus",attrs:{href:"#"},on:{click:function(t){return e.toggleToolbar()}}},[s("i",{staticClass:"fa fa-minus"})]):s("a",{staticClass:"toolbar-btn btn-plus",attrs:{href:"#"},on:{click:function(t){return e.toggleToolbar()}}},[s("i",{staticClass:"fa fa-plus"})])])]),e._v(" "),s("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"modal_config"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row mb-2"},[e._m(1),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tmp_config.id,expression:"tmp_config.id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.tmp_config.id},on:{input:function(t){t.target.composing||e.$set(e.tmp_config,"id",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"row mb-2"},[e._m(2),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tmp_config.endpoint,expression:"tmp_config.endpoint"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.tmp_config.endpoint},on:{input:function(t){t.target.composing||e.$set(e.tmp_config,"endpoint",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"row mb-2"},[e._m(3),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tmp_config.autoreconnect_interval,expression:"tmp_config.autoreconnect_interval"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.tmp_config.autoreconnect_interval},on:{input:function(t){t.target.composing||e.$set(e.tmp_config,"autoreconnect_interval",t.target.value)}}})])]),e._v(" "),e.is_connected?e._e():s("div",{staticClass:"row mb-2"},[s("div",{staticClass:"col-sm-12"},[s("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.initConnection(!1)}}},[e._v("Connetti")])])])]),e._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.saveConfig}},[e._v("Salva")]),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Chiudi")])])])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("Configurazione")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("label",[this._v("Id dispositivo")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("label",[this._v("Websocket Endpoint")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("label",[this._v("Intervallo tra i tentativi di riconnessione (secondi)")])])}]},V=s("VU/8")(A,I,!1,null,null,null).exports,T=(s("lwAK"),s("K3J8"),s("h5AK"),s("C/JF")),H=s("chEw"),U=s("p2fn"),W=s("08EX"),q=s("1bU/"),M=s("s5Fk");window.$=window.jQuery=s("7t+N"),T.b.add(H.faPlus),T.b.add(U.faMinus),T.b.add(W.faCog),T.b.add(q.faFileVideo),T.b.add(M.faCircleNotch),T.a.watch(),n.a.use(o.a),n.a.config.productionTip=!1,new n.a({el:"#app",store:new o.a.Store({state:{is_connected:null,config:{id:null,endpoint:null,autoreconnect_interval:null},message:{},feedback:{},local_dir:null},mutations:{setIsConnected:function(e,t){e.is_connected=t},setConfig:function(e,t){e.config=t},setMessage:function(e,t){e.message=t},setFeedback:function(e,t){e.feedback=t},setLocalDir:function(e,t){e.local_dir=t}},getters:{getCommand:function(e){return e.message.c},getParams:function(e){return e.message.p}}}),components:{App:V},template:"<App/>"})},h5AK:function(e,t){},k1Ly:function(e,t){},lwAK:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(e){return s(a(e))}function a(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.0c9bef45865b0992c339.js.map