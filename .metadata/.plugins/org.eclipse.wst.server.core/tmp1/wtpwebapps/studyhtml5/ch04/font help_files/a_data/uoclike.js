(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(d,b,f){var g=jQuery;var k,c;try{k=top.location.href.indexOf("console-debug=1")>-1}catch(i){k=false}try{c=top.location.href.indexOf("console-layer=1")>-1}catch(i){c=false}var h={position:"fixed",bottom:"0","z-index":"9999",color:"white","background-color":"black",opacity:".3",height:"50%",overflow:"auto"};var j;var a=function(l){this.name=l;if(!j&&c){j=g("<div/>").css(h);j.click(function(){if(j.data("small")){j.height("50%").data("small","")}else{j.height("30px").data("small","1")}});g(document.body).prepend(j)}};a.prototype={log:function(){try{if(c){j.html(Array.prototype.slice.call(arguments).join(",")+"<br/>"+j.html())
}if(typeof console!="undefined"&&k){console.log.apply(console,["%c["+this.name+"]","background:blue;color:white;"].concat(Array.prototype.slice.call(arguments)))}}catch(l){}},error:function(){try{if(c){j.html(Array.prototype.slice.call(arguments).join(",")+"<br/>"+j.html())}if(typeof console!="undefined"&&k){console.log.apply(console,["%c["+this.name+"]","background:red;color:white;"].concat(Array.prototype.slice.call(arguments)))}}catch(l){}}};a.log=function(){try{if(c){j.html(Array.prototype.slice.call(arguments).join(",")+"<br/>"+j.html())}if(typeof console!="undefined"&&k){console.log.apply(console,["%c["+this.name+"]","background:blue;color:white;"].concat(Array.prototype.slice.call(arguments)))}}catch(l){}};a.error=function(){try{if(c){j.html(j.html()+"<br>"+Array.prototype.slice.call(arguments).join(","))}if(typeof console!="undefined"&&k){console.log.apply(console,["%c["+this.name+"]","background:red;color:white;"].concat(Array.prototype.slice.call(arguments)))}}catch(l){}};window.Console=a;
b.exports=a},{}],2:[function(h,f,j){var l=jQuery;var d=h("./getApiUrl");var a=h("./privateEventHandlers");var k="uoclikecallback";h("./jquery.oneAppear.js");var b=h("./Console");var m=new b("UOCLike-Controller");var g=h("./config");var i=function(n,c){this.options=l.extend({},c);this.element=n;this.$el=l(n);this.isLogin=false;this.isLiked=false;this.likeCount=0;this.fakeLikeCount=0;this.realLikeCount=0;this.displayLikeCount=0;this.statusCode="200";this.statusMessage="정상입니다.";this.actionRunnings=[];this.actionCount=0;this.tid="";this.initialize()};i.prototype={initialize:function(){var c=this;c.trigger("beforeWidgetLoad");c.parseUOCData();var n=true;l.each(g.uocRequiredFields,function(o,p){if(c[p]){return true}m.error(p+"값을 넣어주세요.");n=false});if(n){c.trigger("completeSetBasicData");c.fetchWidgetInfo()}},parseUOCData:function(){var c=this;l.each(g.uocFields,function(n,o){if(c.options[o]){c[o]=c.options[o]}else{if(c.$el.data("uoc-"+o.toLowerCase())){c[o]=c.$el.data("uoc-"+o.toLowerCase())}}});
c.mobileUrl=c.mobileUrl||c.mUrl||"";if(!c.mobileUrl&&!c.pcUrl){c.pcUrl=top.location.href||location.href}},getUrl:function(n){var c=this;return d[n](c)},trigger:function(o){var c=this;var n=Array.prototype.slice.call(arguments);n.shift();n.unshift(c);if(a[o]){a[o].apply(c.$el,n)}if(c.options[o]){c.options[o].apply(c.$el,n)}},addEvent:function(){var c=this;if(c.$el.find(".uoc-button").size()==0){c.$el.on("click",l.proxy(c.clickEventListener,c))}else{c.$el.find(".uoc-button").on("click",l.proxy(c.clickEventListener,c))}if(c.options.useOperationText){c.$el.oneAppear({force_process:true});c.$el.one("appear",function(){c.trigger("firstAppear")});m.log("oneAppear이벤트 바인딩.")}},clickEventListener:function(c){c.preventDefault();this.likeActionToggle()},likeActionToggle:function(){var c=this;var n=0;if(c.isLiked){c.unlike()}else{c.like()}},isActionRunning:function(c){var n=this;if(c){return n.actionRunnings.indexOf(c)>-1}else{return n.actionRunnings.length>0}},addActionRunning:function(c){var n=this;
if(n.actionRunnings.indexOf(c)==-1){n.actionRunnings.push(c)}},removeActionRunning:function(c){var n=this;var o=n.actionRunnings.indexOf(c);if(o>-1){n.actionRunnings.splice(o,1)}},parseResponse:function(n){var c=this;var o=n.data;if(o.hubCategories){if(c.hc&&o.hubCategories.length>0){c.hc+=","+o.hubCategories.join(",")}else{c.hc=o.hubCategories.join(",")}}if(n.data&&n.data.login){c.isLogin=n.data.login}if(n.token){c.token=n.token}c.isLiked=o.availableCancelLike||(!o.availableCancelLike&&!o.availableDoLike);c.setRealLikeCount(o.likeCount)},parseDisplayLikeCount:function(q){var n=this,p=n.options.buttonType||"",r=n.options.maxCount;n.likeCount=q;var o=(p=="heart")?10000:100000;var c=10;if(r){if(r!=-1&&r<q){q=r+"+"}}else{if(q>=o){q=(Math.round((q/10000)*c)/c)+"만"}}n.displayLikeCount=q},setRealLikeCount:function(n){var c=this;if(n<0){m.error("real 공감카운트가 이상합니다."+n);n=0}c.realLikeCount=n;if(c.options.useRealLikeCount){c.parseDisplayLikeCount(n)}},setFakeLikeCount:function(n){var c=this;if(n<0){m.error("fake 공감카운트가 이상합니다."+n);
n=0}c.fakeLikeCount=n;if(!c.options.useRealLikeCount){c.parseDisplayLikeCount(n)}},fakeLike:function(){var c=this;c.setFakeLikeCount(c.fakeLikeCount+1);if(!c.options.useRealLikeCount){c.isLiked=true}},fakeUnlike:function(){var c=this;c.setFakeLikeCount(c.fakeLikeCount-1);if(!c.options.useRealLikeCount){c.isLiked=false}},fetchWidgetInfoCount:0,fetchWidgetInfo:function(){var c=this;c.addActionRunning("info");var n=l.ajax(c.getUrl("info"),{type:"GET",cache:true,dataType:"jsonp",beforeSend:function(){c.trigger("beforeGetLikeCount")}}).always(function(){c.removeActionRunning("info");c.trigger("completeWidgetLoad");c.trigger("completeGetLikeCount");c.addEvent()}).fail(function(o){c.trigger("errorGetLikeCount",o)}).done(function(o){if(o.status==200&&!o.error){var p=o.data.likeCount;if(p<0){p=0;m.error("초기 공감카운트가 마이너스값입니다. - "+p)}c.welcomeMessage=o.data.welcomeMessage;c.setFakeLikeCount(p);c.parseDisplayLikeCount(p);c.parseResponse(o);c.trigger("successGetLikeCount",o)}else{c.trigger("errorGetLikeCount",o)
}});n.then(function(){if(c.fetchWidgetInfoTid){clearTimeout(c.fetchWidgetInfoTid)}if(!c.token&&c.fetchWidgetInfoCount<5){c.fetchWidgetInfoTid=setTimeout(function(){c.fetchWidgetInfo()},500);c.fetchWidgetInfoCount++}m.log("fetchWidgetInfo - "+c.fetchWidgetInfoCount+", token - "+c.token)});return n},like:function(){var c=this;if(c.isActionRunning()){c.trigger("otherRunningInLike",c.actionRunnings);return false}if(!c.token){c.trigger("errorInvalidTokenLike");return}c.addActionRunning("like");return l.ajax(c.getUrl("like"),{type:"GET",cache:true,dataType:"json",beforeSend:function(){c.fakeLike();c.trigger("beforeLike")}}).always(function(){c.removeActionRunning("like");c.trigger("completeLike")}).fail(function(n){c.fakeUnlike();c.trigger("errorLike",n)}).done(function(n){if(n.status==200&&!n.error){c.parseResponse(n);c.trigger("successLike",n)}else{c.fakeUnlike();c.trigger("errorLike",n)}})},unlike:function(){var c=this;if(c.isActionRunning()){c.trigger("otherRunningInUnlike",c.actionRunnings);
return false}if(!c.token){c.trigger("errorInvalidTokenUnlike");return}c.addActionRunning("unlike");return l.ajax(c.getUrl("unlike"),{type:"GET",cache:true,dataType:"json",beforeSend:function(){c.fakeUnlike();c.trigger("beforeUnlike")}}).always(function(){c.removeActionRunning("unlike");c.trigger("completeUnlike")}).fail(function(n){c.fakeLike();c.trigger("errorUnlike",n)}).done(function(n){if(n.status==200&&!n.error){c.parseResponse(n);c.trigger("successUnlike",n)}else{c.fakeLike();c.trigger("errorUnlike",n)}})},unbind:function(){var c=this;c.trigger("unbind");c.$el.off("click",c.clickEventListener);c.$el.find(".uoc-button").off("click",c.clickEventListener);l.oneAppearUnbind()}};f.exports=i},{"./Console":1,"./config":3,"./getApiUrl":5,"./jquery.oneAppear.js":10,"./privateEventHandlers":11}],3:[function(c,d,a){var b={widgetSelectors:[],isListType:false,uocRequiredFields:"svc,uid".split(","),uocFields:"svc,uid,sc,hc,created,author,title,description,image,fetchUrl,pcUrl,mobileUrl,mUrl,appUrl,w,updateServiceCategory".split(",")};
d.exports=b},{}],4:[function(b,c,a){b("./indexOf.js");b("./jQuery.UOCLike");b("./jQuery.UOCLikeCount")},{"./indexOf.js":6,"./jQuery.UOCLike":7,"./jQuery.UOCLikeCount":8}],5:[function(j,a,v){var g=jQuery;var h=j("./Console");var r=new h("UOCLike-api");var u=j("./config");var k=j("./simpleTemplate");var f="http://like.daum.net",n="http://like.dev.daum.net",i="/item/${svc}/${uid}.json?callback=?&",d="/item/${svc}/${uid}/like.json?callback=?&token=${token}&",t="/item/${svc}/${uid}/cancel.json?callback=?&token=${token}",s="/items/${svc}.json?callback=?&uids=${uids}";var q=function(c){return b(c)+k(i,c,true)+p(c)};var l=function(c){return b(c)+k(d,c,true)+p(c)};var o=function(c){return b(c)+k(t,c,true)};var m=function(c){return b(c)+k(s,c,true)};var p=function(c){var w=[];g(u.uocFields).each(function(x,y){if(["svc","uid","mUrl"].indexOf(y)>-1){return true}if(c[y]){w.push(y+"="+encodeURIComponent(c[y]))}});if(c.options.updateServiceCategory){w.push("scr=1")}return w.join("&")};var b=function(c){if(c.options.host){return c.options.host
}if(location.href.indexOf("dev.daum.net")>-1||location.href.indexOf("dev.daumcorp.com")>-1){return n}else{return f}};a.exports={info:q,like:l,unlike:o,items:m,getHost:b}},{"./Console":1,"./config":3,"./simpleTemplate":12}],6:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(d,f){if(this===undefined||this===null){throw new TypeError('"this" is null or not defined')}var g=this.length>>>0;f=+f||0;if(Math.abs(f)===Infinity){f=0}if(f<0){f+=g;if(f<0){f=0}}for(;f<g;f++){if(this[f]===d){return f}}return -1}}},{}],7:[function(b,c,a){(function(h){var f=b("./config");var g=b("./Controller");var d=b("./Console");var j=new d("UOCLike");var i=["unbind","like","unlike"];var k="uoclikewidget";var l=false;var m=function(){h("head").append(h('<link rel="stylesheet" type="text/css" href="http://m1.daumcdn.net/svc/original/U03/cssjs/uoclike/common/uoclike.min-20150408-2.css">'))};h.fn.UOCLike=function(o){var n=this;if(typeof o!="string"){o=h.extend({},h.fn.UOCLike.defaults,o);if(o.hideBestButton===false){o.hideBestButton=(typeof o.showMyButton!="undefined"&&o.showMyButton===false)?true:false
}}var p=Array.prototype.slice(arguments).shift();if((typeof o!="string"&&n.length>1)||o.isListType){f.isListType=true;j.log("리스트형 공감 버튼입니다.")}return n.each(function(q){var s=h(this),r=s.data(k);if(r&&typeof o==="string"){if(i.indexOf(o)==-1){j.error(i.join(",")+"만 지원합니다.");return true}r[o].apply(r,p);if(o=="unbind"){delete r;s.removeData(k)}}else{if(!l&&o.importCss){l=true;m()}if(r){r.unbind.apply(r);delete r;s.removeData(k)}s.data(k,new g(this,o))}})};h.fn.UOCLike.defaults={buttonType:"mobile",host:"",hideBestButton:false,useOperationText:true,importCss:true,showLayer:true,template:"",maxCount:"",useRealLikeCount:false,useSpeedMode:false,useAnimation:true,useMinidaumTracker:true,usePageTracker:false,updateServiceCategory:false,useSystemFont:false,isListType:false,beforeGetLikeCount:function(n){j.log("beforeGetLikeCount")},completeGetLikeCount:function(n){j.log("completeGetLikeCount")},successGetLikeCount:function(o,n){j.log("successGetLikeCount")},errorGetLikeCount:function(n){j.log("errorGetLikeCount")
},beforeLike:function(n){j.log("beforeLike")},completeLike:function(n){j.log("completeLike")},successLike:function(o,n){j.log("successLike")},errorLike:function(n){j.log("errorLike")},beforeUnlike:function(n){j.log("beforeUnlike")},completeUnlike:function(n){j.log("completeUnlike")},successUnlike:function(n){j.log("successUnlike")},errorUnlike:function(n){j.log("errorUnlike")},beforeWidgetLoad:function(n){j.log("beforeWidgetLoad")},completeWidgetLoad:function(n){j.log("completeWidgetLoad")}}}(jQuery))},{"./Console":1,"./Controller":2,"./config":3}],8:[function(b,c,a){(function(h){var d=b("./Console");var i=new d("UOCLikeCount");var f=b("./getApiUrl");var g="uoclikecount";h.fn.UOCLikeCount=function(k){var j=this;this.options=h.extend({},h.fn.UOCLikeCount.defaults,k);var n=[],l="";j.each(function(){l=h(this).data("uoc-uid");if(!l){return true}n.push(l);h(this).addClass(g+l)});this.svc=j.data("uoc-svc");this.uids=n.join(",");var m=f.items(this);j.promise=h.ajax(m,{type:"GET",cache:true,dataType:"json",beforeSend:function(){i.log("beforeUOCLikeCount")
}}).always(function(){i.log("completeUOCLikeCount")}).fail(function(o){k.errorGetCount(o);i.error("errorUOCLikeCount")}).done(function(o){if(o&&!o.error){var p=o.data;h.each(p,function(q,r){count=r.likeCount||0;h("."+g+r.uniqueId).html(count)});j.options.successGetCount(o);i.log("successUOCLikeCount")}else{j.options.errorGetCount(o);i.error("errorUOCLikeCount")}});return j};h.fn.UOCLikeCount.defaults={successGetCount:function(j){},errorGetCount:function(){},host:""}}(jQuery))},{"./Console":1,"./getApiUrl":5}],9:[function(b,c,a){var d=jQuery;jQuery.fn.center=function(k){var j=this.outerHeight();var g=this.outerWidth();var i=Math.max(0,((d(window).height()-j)/2)+d(window).scrollTop())+"px";var f=Math.max(0,((d(window).width()-g)/2)+d(window).scrollLeft())+"px";this.css({positoin:"absolute",top:i,left:f});return this}},{}],10:[function(b,c,a){(function(h){var l=[];var i=false;var j=false;var g={interval:250,force_process:false};var f=h(window);var k;function d(){j=false;if(l.length==0){return
}var o=l.slice();for(var n=0,p;p=o[n];n++){if(h(p).is(":appeared")){h(p).trigger("appear",h(p));l.splice(l.indexOf(p),1)}}}function m(n){if(j){return}j=true;setTimeout(d,n)}h.expr[":"]["appeared"]=function(p){var o=h(p);if(!o.is(":visible")){return false}var t=f.scrollLeft();var n=f.scrollTop();var s=o.offset();var r=s.left;var q=s.top;if(q+o.height()>=n&&q-(o.data("appear-top-offset")||0)<=n+f.height()&&r+o.width()>=t&&r-(o.data("appear-left-offset")||0)<=t+f.width()){return true}else{return false}};h.fn.extend({oneAppear:function(o){var p=h.extend({},g,o||{});var n=this.selector||this;if(!i){h(window).scroll(m).resize(m);i=true}if(p.force_process){setTimeout(d,p.interval)}l=l.concat(Array.prototype.slice.call(n));return h(n)}});h.extend({force_appear:function(){if(i){d();return true}return false},oneAppearUnbind:function(){h(window).off("scroll",m).off("resize",m)}})})(jQuery)},{}],11:[function(h,f,i){var j=jQuery;var b=h("./Console");var l=new b("UOCLike-privateEventHandlers");var d=h("./uocTiara");
var g=h("./config");var k=h("./viewActions");var a={beforeGetLikeCount:function(c){l.log("beforeGetLikeCount")},completeGetLikeCount:function(c){l.log("completeGetLikeCount")},successGetLikeCount:function(m,c){l.log("successGetLikeCount");k.updateWidget(m)},errorGetLikeCount:function(m,c){l.error("errorGetLikeCount");k.error(m,"errorGetLikeCount",c)},beforeLike:function(c){l.log("beforeLike");if(!c.options.useRealLikeCount&&c.options.useSpeedMode){k.like(c)}},completeLike:function(c){l.log("completeLike")},successLike:function(c){l.log("successLike");if(!c.options.useSpeedMode){k.like(c)}d.touch(c,"like")},errorLike:function(m,c){l.error("errorLike");k.refresh(m);k.error(m,"errorLike",c)},errorInvalidTokenLike:function(c){l.error("errorInvalidTokenUnlike");k.error(c,"errorLike")},beforeUnlike:function(c){l.log("beforeUnlike");if(!c.options.useRealLikeCount&&c.options.useSpeedMode){k.unlike(c)}},completeUnlike:function(c){l.log("completeUnlike")},successUnlike:function(c){l.log("successUnlike");
if(!c.options.useSpeedMode){k.unlike(c)}d.touch(c,"unlike")},errorUnlike:function(m,c){l.error("errorUnlike");k.refresh(m);k.error(m,"errorUnlike",c)},errorInvalidTokenUnlike:function(c){l.error("errorInvalidTokenUnlike");k.error(c,"errorUnlike")},beforeWidgetLoad:function(c){l.log("beforeWidgetLoad")},completeSetBasicData:function(c){if(!g.isListType){d.setFootstep(c)}},completeWidgetLoad:function(c){l.log("completeWidgetLoad");k.insertButtonHtml(c)},otherRunningInLike:function(m,c){l.log("otherRunningInLike",c)},otherRunningInUnlike:function(m,c){l.log("otherRunningInUnlike",c)},firstAppear:function(c){l.log("firstAppear")}};f.exports=a},{"./Console":1,"./config":3,"./uocTiara":15,"./viewActions":16}],12:[function(b,c,a){c.exports=function(g,f,d){return g.replace(/\${(.+?)}/g,function(h,i){var k=f||"";var j=k[i]||"";return d?encodeURIComponent(j):j})}},{}],13:[function(b,d,a){var c={mobile:'<div class="empathy empathy_g" id="empathy_mobile">				<div class="inner_empathy uoc-icon">					<a href="#none" class="btn_empathy uoc-button">						<span class="img_g ico_heart1"></span><span class="txt_empathy uoc-text" style="display:inline-block">공감</span><span class="num_empathy uoc-count" style="display:inline-block"></span>						<span class="access_text screen_out">공감하기</span>					</a>					<a class="link_myempathy uoc-best-button" href="http://like.daum.net/best/daily" target="_top">베스트공감<span class="img_g ico_arr"></span></a>				</div>			</div>',heart:'<div class="empathy empathy_float" id="empathy_float">					<a href="#none" class="img_g btn_empathy uoc-button uoc-icon">						<span class="txt_empathy uoc-text">공감</span>						<span class="num_empathy uoc-count"></span>						<span class="access_text screen_out">공감하기</span>					</a>				</div>			</div>',pc:'<div class="empathy empathy_pc" id="empathy_pc">				<div class="inner_empathy uoc-icon">					<a href="#none" class="img_empathy btn_empathy uoc-button">						<span class="img_empathy ico_heart"></span><span class="txt_empathy uoc-text" style="display:inline-block">공감</span><span class="num_empathy uoc-count" style="display:inline-block"></span>						<span class="access_text screen_out">공감하기</span>					</a>					<a href="http://like.daum.net/best/daily" target="_top" class="img_empathy link_empathy uoc-best-button">베스트공감 &gt;</a>				</div>			</div>',layer:'<div class="empathy empathy_g" id="empathy_layer"><div class="layer_empathy uoc-layer">					<span class="img_g ico_heart2 uoc-layer-icon"></span>					<strong class="txt_layer uoc-layer-text">공감 UP</strong>				</div></div>'};
d.exports=c},{}],14:[function(f,c,i){var j=jQuery;var k;function a(){if(!k){k=j('<div class="uoc-toast empathy_toast" />')}if(!k.is(":visible")){k.css({top:"-999px",left:"-999px"});j(document.body).append(k)}k.hide();return k}function h(r,o){var q=r.$el.find(".uoc-button");q=q.size()>0?q:r.$el;if(q.is(":visible")){var s=q.offset();var p=Math.max(0,((q.outerHeight()-o.outerHeight())/2)+s.top)+"px";var n=Math.max(0,((q.outerWidth()-o.outerWidth())/2)+s.left)+"px";if(p+o.outerHeight()>j(document.body).height()||n+o.outerWidth()>j(document.body).width()){o.center()}else{o.css({left:n,top:p})}}else{o.center()}}var g;function m(p,o){var n=a();n.html(o);h(p,n);n.fadeIn();clearTimeout(g);g=setTimeout(function(){b(n)},3000);d(n)}function b(n){n.fadeOut(function(){n.remove()})}var l=true;function d(n){if(!l){return}l=false;j(top.window||window).scroll(function(){b(n)});j(document).on("touchmove",function(){b(n)})}c.exports={toast:m}},{}],15:[function(g,f,i){var j=jQuery;var a=g("./Console");var o=new a("UOCLike-tiara");
var q=g("./simpleTemplate");var n=false;var m="http://click.tiara.daum.net/queen/touch?te1=t_like&svcdomain=likebtn.daum.net&like_ex=";var d='{"action":"${action}", "serviceId":"${svc}", "uniqueId":"${uid}", "serviceCategories":"${sc}", "hubCategories":"${hc}"}';var p='{"serviceId":"${svc}", "uniqueId":"${uid}", "serviceCategories":"${sc}"}';var h,k=0;var l=function(c){if(h){clearTimeout(h)}k++;if(k>50){o.error("타아라 footsetp을 남기 못하는 상황입니다.");return}if(typeof __pageTracker!="undefined"&&typeof __pageTracker.__addParam!="undefined"){__pageTracker.__addParam("like_ex",c);o.log("__pageTracker 추가 -",c);return}h=setTimeout(function(){l(c)},100);o.log("tracker 생성중 - "+k)};var b={setFootstep:function(r){var c=q(p,r);o.log(c);_tiq="undefined"!==typeof _tiq?_tiq:[];_tiq.push(["__addParam","like_ex",c]);if(!r.options.useMinidaumTracker||r.options.usePageTracker){l(c)}},touch:function(v,u){var s=j.extend({},{action:u},v);var t=q(d,s);var r=m+encodeURIComponent(t);o.log(t);var c=new Image();c.src=r}};
f.exports=b},{"./Console":1,"./simpleTemplate":12}],16:[function(f,b,h){var i=jQuery;var a=f("./Console");var o=new a("UOCLike-viewActions");var p=f("./templates");var d=f("./config");f("./jquery.center");var k=f("./getApiUrl");var q=f("./toast");var j=null,g,m;var l={insertButtonHtml:function(r){var c="";if(r.options.template){c=r.options.template}else{if(r.options.buttonType&&p[r.options.buttonType]){c=p[r.options.buttonType]}}if(c!=""){r.$el.html(c)}if(r.options.buttonType=="pc"&&(r.options.useSystemFont||["blog"].indexOf(r.svc)>-1)){r.$el.find(".uoc-my-button").removeClass("img_empathy link_empathy");r.$el.find(".uoc-my-button").addClass("system_font")}if(l.isShowLayer(r)&&!j){j=i(p.layer);i(document.body).append(j)}if(r.options.hideBestButton){i(".uoc-best-button",r.$el).hide()}},isShowLayer:function(c){return c.options.showLayer&&c.options.buttonType!="pc"},like:function(c){l.updateWidget(c);if(l.isShowLayer(c)){l.showLayer("on","공감 UP")}},unlike:function(c){l.updateWidget(c);if(l.isShowLayer(c)){l.showLayer("off","공감 취소")
}},message:function(r,c){l.updateWidget(r);if(l.isShowLayer(r)){l.showLayer("off",c)}},refresh:function(c){l.hideLayer();l.updateWidget(c)},updateWidget:function(r){var c=r.options.useAnimation?"empathy_up":"empathy_up_without_ani";if(r.likeCount==0){r.$el.find(".uoc-text").removeClass("screen_out");r.$el.find(".uoc-count").hide();r.$el.find(".uoc-like-count").html(r.displayLikeCount)}else{r.$el.find(".uoc-text").addClass("screen_out");r.$el.find(".uoc-count").show().html(r.displayLikeCount);r.$el.find(".uoc-like-count").html(r.displayLikeCount)}clearTimeout(r.iconAnitid);if(r.isLiked){r.$el.find(".uoc-icon").addClass(c);if(r.options.useAnimation){r.iconAnitid=setTimeout(function(){r.$el.find(".uoc-icon").addClass("empathy_up_remove_ani")},1000)}r.$el.find(".access_text").html("공감 취소하기")}else{r.$el.find(".uoc-icon").removeClass(c+" empathy_up_remove_ani");r.$el.find(".access_text").html("공감하기")}if(r.$el.find(".uoc-like-count").size()==0&&r.$el.find(".uoc-count").size()==0){r.$el.html(r.displayLikeCount)
}},hideLayer:function(){if(j){j.hide()}},showLayer:function(t,c){if(!j){return}j.show();var s=j.find(".uoc-layer-icon");var r=j.find(".layer_empathy");r.center();if(t=="on"){s.addClass("ico_heart2");s.removeClass("ico_heart3")}else{s.removeClass("ico_heart2");s.addClass("ico_heart3")}j.find(".uoc-layer-text").html(c);r.removeClass("layer_on");clearTimeout(g);g=setTimeout(function(){r.addClass("layer_on");clearTimeout(m);m=setTimeout(function(){r.removeClass("layer_on")},2000)},0)},error:function(u,r,c){if(r=="errorLike"||r=="errorUnlike"){if(c&&c.error){var t=c.error["code-description"]||c.error.message;var s=c.error.code;if(s==302||s==303){if(confirm("로그인 상태가 변경되었습니다. 새로고침 하시겠습니까?")){top.location.reload()}}else{if(t){if(n(u)){alert(t)}else{q.toast(u,t)}}}o.error(t+"-"+s)}else{alert("현재 공감서비스를 이용 할 수 없습니다. 잠시 후 다시 시도해주세요.")}}else{o.error("공감 데이터 로드시 에러가 발생하였습니다.")}}};function n(c){return !c.options.importCss||(c.svc=="blog"&&c.options.buttonType=="pc")}b.exports=l},{"./Console":1,"./config":3,"./getApiUrl":5,"./jquery.center":9,"./templates":13,"./toast":14}]},{},[4]);