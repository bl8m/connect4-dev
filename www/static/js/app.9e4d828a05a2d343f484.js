webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s=n("NYxO"),a=n("M4fF"),i=n.n(a),l=n("Dd8w"),c=n.n(l),r=n("mvHQ"),d=n.n(r),u=n("/ocq"),m={name:"PageHome",data:function(){return{}},mounted:function(){},computed:c()({},Object(s.b)({is_connected:function(t){return t.is_connected}}))},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page page-home d-flex justify-content-center align-items-center"},[e("div",{staticClass:"text-center"},[e("h1",[this._v("Connect4")]),this._v(" "),this.is_connected?e("div",{staticClass:"badge badge-success"},[this._v("Connected")]):e("div",{staticClass:"badge badge-danger"},[this._v("Disconnected")])])])},staticRenderFns:[]},f=n("VU/8")(m,g,!1,null,null,null).exports,v={name:"PageColor",mounted:function(){},data:function(){return{}},computed:c()({background_color:function(){return this.message.p.color}},Object(s.b)({message:function(t){return t.message}}))},p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"app-page",style:"background-color: "+this.background_color})},staticRenderFns:[]},h=n("VU/8")(v,p,!1,null,null,null).exports,b={name:"PageImage",mounted:function(){this.local_dir=cordova.file.dataDirectory+"connect4",this.setImage()},data:function(){return{}},computed:c()({},Object(s.b)({message:function(t){return t.message}})),methods:{setImage:function(){var t=this;t.message.p.image;window.resolveLocalFileSystemURL(this.local_dir,function(e){console.log("local_dir "+t.local_dir),console.log("IMG SRC "+t.message.p.image),e.getFile(t.message.p.image,{create:!1,exclusive:!1},function(t){var e=document.getElementById("image");e.src=cordova.file.dataDirectory+t.fullPath,console.log("SRC: "+e.src)},function(t){console.log(t)})},function(t){console.log(t)})}}},j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page page-image"},[e("img",{attrs:{src:"",alt:"",id:"image"}})])}]},C=n("VU/8")(b,j,!1,null,null,null).exports,y={name:"PageVideo",created:function(){},mounted:function(){this.local_dir=cordova.file.dataDirectory+"connect4",this.setVideo()},data:function(){return{video_notification:!1,is_playing:!1}},computed:c()({video_action:function(){return"setVideo"==this.message.c?"load":"playVideo"==this.message.c?"play":"stopVideo"==this.message.c?"stop":null}},Object(s.b)({message:function(t){return t.message}})),watch:{video_action:function(t){if("load"==t)this.is_playing=!1,this.setVideo();else if("play"==t){var e=document.getElementById("video");this.is_playing=!0,e.play()}else if("stop"==t){e=document.getElementById("video");this.is_playing=!1,e.pause()}}},methods:{setVideo:function(){var t=this;t.message.p.video;window.resolveLocalFileSystemURL(this.local_dir,function(e){e.getFile(t.message.p.video,{create:!1,exclusive:!1},function(e){var n=document.getElementById("video");if(n.addEventListener("canplaythrough canplay loadedmetadata",function(){t.video_notification=!0,console.log("Ready to Play"),t.$store.commit("setFeedback",{type:"video_ready",message:"Video is ready (event)"})},!1),n.src=cordova.file.dataDirectory+e.fullPath,console.log("SRC: "+n.src),1==t.message.p.loop?n.setAttribute("loop",!0):n.removeAttribute("loop"),1==t.message.p.fakePreload){n.addEventListener("play",t.handlePlay);var o=n.play();null!==o&&o.catch(function(t){console.log(t.message)})}},function(t){console.log(t)})},function(t){console.log(t)})},handlePlay:function(){console.log("handlePlay");var t=document.getElementById("video");t.pause(),t.removeEventListener("play",this.handlePlay)}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page page-video d-flex align-items-center"},[e("video",{staticClass:"w-100",attrs:{src:"",id:"video",preload:"auto",mute:"",playsinline:""}}),this._v(" "),this.is_playing?this._e():e("div",{staticClass:"overlay"})])},staticRenderFns:[]};var E=n("VU/8")(y,w,!1,function(t){n("WVAM")},"data-v-238842b3",null).exports,k={name:"PageText",data:function(){return{}},mounted:function(){},computed:c()({text_content:function(){return void 0!=this.message?this.message.p.text:""},textStyle:function(){var t="";return void 0!=this.message&&(void 0!=this.message.p.fontSize&&(t+="font-size: "+this.message.p.fontSize+"px; "),void 0!=this.message.p.color&&(t+="color: "+this.message.p.color+"; ")),t},bodyStyle:function(){var t="";return void 0!=this.message&&void 0!=this.message.p.backgroundColor&&(t+="background-color: "+this.message.p.backgroundColor+"; "),t},font_size:function(){return void 0!=this.message&&void 0!=this.message.p.font_size?this.message.p.font_size:64}},Object(s.b)({message:function(t){return t.message}}))},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page page-text d-flex justify-content-center align-items-center",style:this.bodyStyle},[e("div",{style:this.textStyle,domProps:{innerHTML:this._s(this.text_content)}})])},staticRenderFns:[]},x=n("VU/8")(k,F,!1,null,null,null).exports,L=n("mtWM"),P=n.n(L),S=n("PJh5"),O=n.n(S),z=(n("FKXc"),{name:"PageFiles",mounted:function(){var t=this;t.media_url=t.config.remote_download_url,O.a.locale("it"),console.log("FILESYSTEM"),console.log(cordova.file),t.local_dir=cordova.file.dataDirectory+"connect4",console.log(t.local_dir),window.addEventListener("filePluginIsReady",function(){console.log("File plugin is ready")},!1),window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(t){console.log("Creating folder connect4"),t.getDirectory("connect4",{create:!0},function(t){console.log("File: "+t.name+", "+t.fullPath)})}),t.loadLocalFiles(),document.addEventListener("DOWNLOADER_downloadSuccess",function(t){t.data}),document.addEventListener("DOWNLOADER_getFileError",function(e){console.log("DOWNLOADER_getFileError"),t.notify(e.data,"danger")}),document.addEventListener("DOWNLOADER_downloadError",function(e){console.log("DOWNLOADER_downloadError"),t.notify(e.data,"danger")}),document.addEventListener("DOWNLOADER_error",function(e){console.log("DOWNLOADER_error"),t.notify(e.data,"danger")}),console.log("Downloader Init: "+t.local_dir),downloader.init({folder:"connect4",fileSystem:cordova.file.dataDirectory}),document.addEventListener("DOWNLOADER_downloadSuccess",function(e){var n=e.data,o="";for(var s in n){var a=n[s].name;console.log("cerco"+a),o+=a;var i=_.find(t.remote_files,{filename:a});void 0!=i?(i.downloaded=!0,i.is_downloading=!1):(t.notify("Impossibile aggiornare lo stato di "+a,"warning"),console.log(a+" non trovato"))}t.loadLocalFiles(),t.notify("File scaricati correttamente: "+o,"success")})},data:function(){return{current_tab:"local",media_url:"",local_files:[],remote_files:[],log:[]}},computed:c()({},Object(s.b)({config:function(t){return t.config}})),methods:{notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n={date:O()().format("hh:mm:ss"),message:t,type:e};this.log.unshift(n)},loadLocalFiles:function(){var t=this;t.local_files=[],console.log("loadLocalFiles from "+t.local_dir),window.resolveLocalFileSystemURL(t.local_dir,function(e){console.log("File locali"),e.createReader().readEntries(function(e){for(var n in console.log(e),e){var o=e[n];o.isFile&&"nomedia"!=o.name&&".nomedia"!=o.name&&(t.local_files.push(o),0)}},function(e){t.notify(e,"danger")})},function(e){t.notify(e,"warning")})},getRemoteList:function(){var t=this;P.a.get(t.media_url,{crossdomain:!0}).then(function(e){t.remote_files=e.data.map(function(t){return t.is_downloading=!1,t.downloaded=!1,t})}).catch(function(t){console.log(t)})},existsLocal:function(t){return void 0!=_.find(this.local_files,{name:t})},downloadFile:function(t){_.findIndex(this.remote_files,{filename:t.name});t.is_downloading=!0,downloader.get(t.url)},downloadAll:function(){console.log("Downloading all files ");var t=this.remote_files.map(function(t){return{url:t.url}});downloader.getMultipleFiles(t)},deleteFile:function(t){var e=this;confirm("Procedere con la cancellazione di "+t+"?")&&window.resolveLocalFileSystemURL(this.local_dir,function(n){n.getFile(t,{create:!1},function(n){n.remove(function(){e.notify("File cancellato correttamente: "+t,"success"),e.loadLocalFiles()},function(t){e.notify(t,"danger")},function(){e.notify("Il file non esiste","warning")})})})}}}),D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page padded"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item"},[n("a",{class:"nav-link"+("local"==t.current_tab?" disabled":""),attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.current_tab="local"}}},[t._v("File locali")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{class:"nav-link"+("remote"==t.current_tab?" disabled":""),attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.current_tab="remote"}}},[t._v("Scarica")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-8"},["remote"==t.current_tab?n("div",{staticClass:"remote_files"},[n("h4",[t._v("File remoti")]),t._v(" "),n("div",{staticClass:"row mb-2"},[n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.media_url,expression:"media_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.media_url},on:{input:function(e){e.target.composing||(t.media_url=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("button",{staticClass:"btn btn-primary",on:{click:t.getRemoteList}},[t._v("Carica elenco media")])])]),t._v(" "),n("table",{staticClass:"table table-sm table-hover"},[n("tbody",t._l(t.remote_files,function(e){return n("tr",[n("td",[n("strong",[t._v(t._s(e.filename))])]),t._v(" "),n("td",[n("span",{staticClass:"badge"},[t._v(t._s(e.size)+" bytes")])]),t._v(" "),n("td",[n("small",[t._v(t._s(e.url))])]),t._v(" "),n("td",{staticClass:"text-center"},[e.is_downloading?n("span",[n("i",{staticClass:"fa fa-spin fa-circle-notch"})]):t._e(),t._v(" "),t.existsLocal(e.filename)?n("span",{staticClass:"text-success"},[t._v("In locale")]):t._e()]),t._v(" "),n("td",{},[e.downloaded?n("button",{staticClass:"btn btn-success btn-sm",attrs:{disabled:""}},[t._v("Scaricato")]):n("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:e.is_downloading},on:{click:function(n){return t.downloadFile(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\tScarica\n\t\t\t\t\t\t\t\t\t")])])])}),0)]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"text-right"},[t._v("Files disponibili: "),n("strong",[t._v(t._s(t.remote_files.length))]),t._v(" - "),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.downloadAll(e)}}},[t._v("Scarica tutti")])])]):t._e(),t._v(" "),"local"==t.current_tab?n("div",{staticClass:"remote_files"},[n("h4",[t._v("File locali")]),t._v(" "),n("table",{staticClass:"table table-sm table-hover"},[n("tbody",t._l(t.local_files,function(e){return n("tr",[n("td",[n("strong",[t._v(t._s(e.name))])]),t._v(" "),n("td",[n("small",[t._v(t._s(e.fullPath))])]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(n){return t.deleteFile(e.name)}}},[t._v("Cancella")])])])}),0)]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"text-right"},[t._v("Files trovati: "),n("strong",[t._v(t._s(t.local_files.length))]),t._v(" - "),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.loadLocalFiles(e)}}},[t._v("Aggiorna")])])]):t._e()]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"card card-log"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body"},t._l(t.log,function(e){return n("div",{class:"alert alert-sm alert-"+e.type},[n("span",[t._v(t._s(e.date))]),t._v(" "),n("strong",[t._v(t._s(e.message))])])}),0)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("strong",[this._v("Log")])])}]},R=n("VU/8")(z,D,!1,null,null,null).exports;o.a.use(u.a);var I=new u.a({routes:[{path:"/:client_id?",name:"PageHome",component:f},{path:"/color",name:"PageColor",component:h},{path:"/image",name:"PageImage",component:C},{path:"/video",name:"PageVideo",component:E},{path:"/text",name:"PageText",component:x},{path:"/media",name:"PageFiles",component:R}]}),N={name:"App",router:I,data:function(){return{connection:null,toolbar_visible:!1,toolbar_command:"",tmp_config:{},current_page:"",has_native_storage:null,is_connecting:!1}},created:function(){},mounted:function(){this.auto_timer=null,this.has_native_storage="undefined"!=typeof NativeStorage,this.loadConfig()},methods:{initConnection:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];1!=this.is_connecting&&(this.is_connecting=!0,console.log("Opening connection to "+this.config.endpoint),this.connection&&(this.connection.onopen=null,this.connection.onclose=null,this.connection.onmessage=null),this.connection=null,this.connection=new WebSocket("ws://"+this.config.endpoint),1==e&&(this.connection.onopen=function(){t.is_connecting=!1,t.current_page="PageHome",I.push({name:"PageHome"}),t.$store.commit("setIsConnected",!0),t.$store.commit("setFeedback",{c:"feedback",p:{}})},this.connection.onclose=function(){t.is_connecting=!1,t.closeConnection(),t.current_page="PageHome",I.push({name:"PageHome"}),t.$store.commit("setIsConnected",!1)},this.connection.onmessage=function(e){t.toolbar_command=Date.now().toString()+" > "+e.data;var n=JSON.parse(e.data);switch(t.$store.commit("setMessage",n),n.c){case"setColor":t.current_page="PageColor",I.push({name:t.current_page});break;case"setImage":t.current_page="PageImage",I.push({name:t.current_page});break;case"setVideo":t.current_page="PageVideo",I.push({name:t.current_page});break;case"setText":t.current_page="PageText",I.push({name:t.current_page})}},this.connection.onerror=function(e){t.is_connecting=!1}))},closeConnection:function(){console.log("Closing connection"),this.connection&&(this.connection.close(),this.connection.onopen=null,this.connection.onclose=null,this.connection.onmessage=null),this.connection=null,this.is_connected=!1},toggleToolbar:function(){console.log("toggleToolbar"),this.toolbar_visible=!this.toolbar_visible},toggleConfig:function(){this.tmp_config=i.a.clone(this.config,!0),$("#modal_config").modal()},loadConfig:function(){console.log("loadConfig from "+(this.has_native_storage?"NATIVE STORAGE":"LOCAL STORAGE"));var t={};if(this.has_native_storage)"NATIVE STORAGE",NativeStorage.getItem("connect4_config",function(e){t.id=e.id,t.endpoint=e.endpoint,t.remote_download_url=e.remote_download_url});else{"LOCAL STORAGE";var e=window.localStorage.getItem("connect4_config");t=JSON.parse(e)}void 0!=t&&void 0!=t.id&&void 0!=t.endpoint||(console.log("loadConfig: configurazione salvata NON TROVATA"),t={endpoint:"192.168.1.6:9999",id:"Tablet1",autoreconnect_interval:5,remote_download_url:"http://forza4.bl8m.it/server/file_index.php"}),void 0!=this.$route.params.client_id&&(console.log("ID impostato da url: "+this.$route.params.client_id),t.id=this.$route.params.client_id),this.$store.commit("setConfig",t)},saveConfig:function(){var t=i.a.clone(this.tmp_config,!0);if(this.$store.commit("setConfig",t),this.has_native_storage)console.log("saveConfig: salvo la configurazione in NATIVE STORAGE"),NativeStorage.setItem("connect4_config",t);else{console.log("saveConfig: salvo la configurazione in LOCAL STORAGE");var e=d()(t);window.localStorage.setItem("connect4_config",e)}$("#modal_config").modal("hide")}},computed:c()({toolbar_class:function(){return this.toolbar_visible?"expanded":""}},Object(s.b)({is_connected:function(t){return t.is_connected},config:function(t){return t.config},feedback:function(t){return t.feedback}}),{endpoint:function(){return this.config.endpoint},id:function(){return this.config.id}}),watch:{endpoint:function(t){this.is_connected&&this.closeConnection(),this.initConnection()},is_connected:function(t){0==t?(this.closeConnection(),console.log("Timer ENABLED"),this.auto_timer=setInterval(this.initConnection,1e3*this.config.autoreconnect_interval)):(console.log("Timer DISABLED"),clearInterval(this.auto_timer))},feedback:function(t){var e={c:"feedback",i:this.id,p:t.p};this.connection.send(d()(e))}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("div",{class:"row toolbar  no-gutters "+t.toolbar_class},[t.toolbar_visible?n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"toolbar-log"},[n("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.config.id))]),t._v(" "),n("span",{staticClass:"badge badge-secondary"},[t._v(t._s(t.current_page))]),t._v(" "),n("span",{class:t.is_connected?"badge badge-success":"badge badge-danger"},[t._v(t._s(t.is_connected?"Connected":"Disconnected"))]),t._v(" "),n("span",{class:t.has_native_storage?"badge badge-success":"badge badge-warning"},[t._v(t._s(t.has_native_storage?"Native Storage":"Local Storage"))])]),t._v(" "),n("div",{staticClass:"toolbar-log"},[n("pre",{staticClass:"d-inline",domProps:{innerHTML:t._s(t.toolbar_command)}})])]):t._e(),t._v(" "),n("div",{staticClass:"col-sm-6 text-right"},[t.toolbar_visible?n("span",[n("router-link",{staticClass:"toolbar-btn",attrs:{to:{name:"PageHome"}}},[n("i",{staticClass:"fa fa-home"})]),t._v(" "),n("router-link",{staticClass:"toolbar-btn",attrs:{to:{name:"PageFiles"}}},[n("i",{staticClass:"fa fa-file-video"})]),t._v(" "),n("a",{staticClass:"toolbar-btn",attrs:{href:"#"},on:{click:function(e){return t.toggleConfig()}}},[n("i",{staticClass:"fa fa-cog"})])],1):t._e(),t._v(" "),t.toolbar_visible?n("a",{staticClass:"toolbar-btn btn-minus",attrs:{href:"#"},on:{click:function(e){return t.toggleToolbar()}}},[n("i",{staticClass:"fa fa-minus"})]):n("a",{staticClass:"toolbar-btn btn-plus",attrs:{href:"#"},on:{click:function(e){return t.toggleToolbar()}}},[n("i",{staticClass:"fa fa-plus"})])])]),t._v(" "),n("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"modal_config"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row mb-2"},[t._m(1),t._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tmp_config.id,expression:"tmp_config.id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tmp_config.id},on:{input:function(e){e.target.composing||t.$set(t.tmp_config,"id",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row mb-2"},[t._m(2),t._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tmp_config.endpoint,expression:"tmp_config.endpoint"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tmp_config.endpoint},on:{input:function(e){e.target.composing||t.$set(t.tmp_config,"endpoint",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row mb-2"},[t._m(3),t._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tmp_config.remote_download_url,expression:"tmp_config.remote_download_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tmp_config.remote_download_url},on:{input:function(e){e.target.composing||t.$set(t.tmp_config,"remote_download_url",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row mb-2"},[t._m(4),t._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tmp_config.autoreconnect_interval,expression:"tmp_config.autoreconnect_interval"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.tmp_config.autoreconnect_interval},on:{input:function(e){e.target.composing||t.$set(t.tmp_config,"autoreconnect_interval",e.target.value)}}})])]),t._v(" "),t.is_connected?t._e():n("div",{staticClass:"row mb-2"},[n("div",{staticClass:"col-sm-12"},[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.initConnection(!1)}}},[t._v("Connetti")])])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveConfig}},[t._v("Salva")]),t._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Chiudi")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("Configurazione")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("label",[this._v("Id dispositivo")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("label",[this._v("Websocket Endpoint")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("label",[this._v("Url lista file scaricabili")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("label",[this._v("Intervallo tra i tentativi di riconnessione (secondi)")])])}]},V=n("VU/8")(N,A,!1,null,null,null).exports,T=(n("lwAK"),n("K3J8"),n("h5AK"),n("C/JF")),U=n("chEw"),H=n("p2fn"),W=n("08EX"),q=n("1bU/"),M=n("s5Fk"),B=n("qqB4");window.$=window.jQuery=n("7t+N"),T.b.add(U.faPlus),T.b.add(H.faMinus),T.b.add(W.faCog),T.b.add(q.faFileVideo),T.b.add(M.faCircleNotch),T.b.add(B.faHome),T.a.watch(),o.a.use(s.a),o.a.config.productionTip=!1,new o.a({el:"#app",store:new s.a.Store({state:{is_connected:!1,config:{id:null,endpoint:null,autoreconnect_interval:null},message:{},feedback:{},local_dir:null},mutations:{setIsConnected:function(t,e){t.is_connected=e},setConfig:function(t,e){t.config=e},setMessage:function(t,e){t.message=e},setFeedback:function(t,e){t.feedback=e},setLocalDir:function(t,e){t.local_dir=e}},getters:{getCommand:function(t){return t.message.c},getParams:function(t){return t.message.p}}}),components:{App:V},template:"<App/>"})},WVAM:function(t,e){},h5AK:function(t,e){},lwAK:function(t,e){},uslO:function(t,e,n){var o={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function s(t){return n(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.9e4d828a05a2d343f484.js.map