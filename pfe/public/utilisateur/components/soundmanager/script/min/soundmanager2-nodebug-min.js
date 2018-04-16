/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
!function(t,e){"use strict";function n(n,i){function o(t){return u.preferFlash&&Rt&&!u.ignoreFlash&&u.flash[t]!==e&&u.flash[t]}function a(t){return function(e){var n=this._s,i;return i=n&&n._a?t.call(this,e):null}}this.setupOptions={url:n||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1e3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"},this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100},this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null},this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null},this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}},this.movieID="sm2-container",this.id=i||"sm2movie",this.debugID="soundmanager-debug",this.debugURLParam=/([#?&])debug=1/i,this.versionNumber="V2.97a.20150601",this.version=null,this.movieURL=null,this.altURL=null,this.swfLoaded=!1,this.enabled=!1,this.oMC=null,this.sounds={},this.soundIDs=[],this.muted=!1,this.didFlashBlock=!1,this.filePattern=null,this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i},this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1},this.sandbox={},this.html5={usingFlash:null},this.flash={},this.html5Only=!1,this.ignoreFlash=!1;var s,u=this,r=null,l=null,d="soundManager",f=d+": ",h="HTML5::",c,p=navigator.userAgent,m=t.location.href.toString(),_=document,y,g,v,O,M=[],w=!0,b,L=!1,T=!1,P=!1,S=!1,D=!1,H,I=0,A,F,E,C,k,x,N,R,U,B,q,V,j,Q,W,G,X,K,J,Y,Z,z,tt=["log","info","warn","error"],et=8,nt,it,ot,at=null,st=null,ut,rt,lt,dt,ft,ht,ct,pt,mt,_t=!1,yt=!1,gt,vt,Ot,Mt=0,wt=null,bt,Lt=[],Tt,Pt=null,St,Dt,Ht,It,At,Ft,Et,Ct,kt=Array.prototype.slice,xt=!1,Nt,Rt,Ut,Bt,qt,Vt,jt,Qt,Wt=0,$t,Gt=1e3,Xt=p.match(/(ipad|iphone|ipod)/i),Kt=p.match(/android/i),Jt=p.match(/msie/i),Yt=p.match(/webkit/i),Zt=p.match(/safari/i)&&!p.match(/chrome/i),zt=p.match(/opera/i),te=p.match(/(mobile|pre\/|xoom)/i)||Xt||Kt,ee=!m.match(/usehtml5audio/i)&&!m.match(/sm2\-ignorebadua/i)&&Zt&&!p.match(/silk/i)&&p.match(/OS X 10_6_([3-7])/i),ne=t.console!==e&&console.log!==e,ie=_.hasFocus!==e?_.hasFocus():null,oe=Zt&&(_.hasFocus===e||!_.hasFocus()),ae=!oe,se=/(mp3|mp4|mpa|m4a|m4b)/i,ue="about:blank",re="data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==",le=_.location?_.location.protocol.match(/http/i):null,de=le?"":"http://",fe=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,he=["mpeg4","aac","flv","mov","mp4","m4v","f4v","m4a","m4b","mp4v","3gp","3g2"],ce=new RegExp("\\.("+he.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.useAltURL=!le,dt={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"},this.hasHTML5=function(){try{return Audio!==e&&(zt&&opera!==e&&opera.version()<10?new Audio(null):new Audio).canPlayType!==e}catch(t){return!1}}(),this.setup=function(t){var n=!u.url;return t!==e&&P&&Pt&&u.ok()&&(t.flashVersion!==e||t.url!==e||t.html5Test!==e),E(t),xt||(te?u.setupOptions.ignoreMobileRestrictions&&!u.setupOptions.forceUseGlobalHTML5Audio||(Lt.push(j.globalHTML5),xt=!0):u.setupOptions.forceUseGlobalHTML5Audio&&(Lt.push(j.globalHTML5),xt=!0)),!$t&&te&&(u.setupOptions.ignoreMobileRestrictions?Lt.push(j.ignoreMobile):(u.setupOptions.useHTML5Audio=!0,u.setupOptions.preferFlash=!1,Xt?u.ignoreFlash=!0:(Kt&&!p.match(/android\s2\.3/i)||!Kt)&&(xt=!0))),t&&(n&&X&&t.url!==e&&u.beginDelayedInit(),X||t.url===e||"complete"!==_.readyState||setTimeout(W,1)),$t=!0,u},this.ok=function(){return Pt?P&&!S:u.useHTML5Audio&&u.hasHTML5},this.supported=this.ok,this.getMovie=function(e){return c(e)||_[e]||t[e]},this.createSound=function(t,n){function i(){return r=ht(r),u.sounds[r.id]=new s(r),u.soundIDs.push(r.id),u.sounds[r.id]}var o,a,r,d=null;if(!P||!u.ok())return!1;if(n!==e&&(t={id:t,url:n}),r=F(t),r.url=bt(r.url),r.id===e&&(r.id=u.setupOptions.idPrefix+Wt++),mt(r.id,!0))return u.sounds[r.id];if(Dt(r))d=i(),d._setup_html5(r);else{if(u.html5Only)return i();if(u.html5.usingFlash&&r.url&&r.url.match(/data\:/i))return i();O>8&&null===r.isMovieStar&&(r.isMovieStar=!!(r.serverURL||(r.type?r.type.match(fe):!1)||r.url&&r.url.match(ce))),r=ct(r,o),d=i(),8===O?l._createSound(r.id,r.loops||1,r.usePolicyFile):(l._createSound(r.id,r.url,r.usePeakData,r.useWaveformData,r.useEQData,r.isMovieStar,r.isMovieStar?r.bufferTime:!1,r.loops||1,r.serverURL,r.duration||null,r.autoPlay,!0,r.autoLoad,r.usePolicyFile),r.serverURL||(d.connected=!0,r.onconnect&&r.onconnect.apply(d))),r.serverURL||!r.autoLoad&&!r.autoPlay||d.load(r)}return!r.serverURL&&r.autoPlay&&d.play(),d},this.destroySound=function(t,e){if(!mt(t))return!1;var n=u.sounds[t],i;for(n.stop(),n._iO={},n.unload(),i=0;i<u.soundIDs.length;i++)if(u.soundIDs[i]===t){u.soundIDs.splice(i,1);break}return e||n.destruct(!0),n=null,delete u.sounds[t],!0},this.load=function(t,e){return mt(t)?u.sounds[t].load(e):!1},this.unload=function(t){return mt(t)?u.sounds[t].unload():!1},this.onPosition=function(t,e,n,i){return mt(t)?u.sounds[t].onposition(e,n,i):!1},this.onposition=this.onPosition,this.clearOnPosition=function(t,e,n){return mt(t)?u.sounds[t].clearOnPosition(e,n):!1},this.play=function(t,e){var n=null,i=e&&!(e instanceof Object);if(!P||!u.ok())return!1;if(mt(t,i))i&&(e={url:e});else{if(!i)return!1;i&&(e={url:e}),e&&e.url&&(e.id=t,n=u.createSound(e).play())}return null===n&&(n=u.sounds[t].play(e)),n},this.start=this.play,this.setPosition=function(t,e){return mt(t)?u.sounds[t].setPosition(e):!1},this.stop=function(t){return mt(t)?u.sounds[t].stop():!1},this.stopAll=function(){var t;for(t in u.sounds)u.sounds.hasOwnProperty(t)&&u.sounds[t].stop()},this.pause=function(t){return mt(t)?u.sounds[t].pause():!1},this.pauseAll=function(){var t;for(t=u.soundIDs.length-1;t>=0;t--)u.sounds[u.soundIDs[t]].pause()},this.resume=function(t){return mt(t)?u.sounds[t].resume():!1},this.resumeAll=function(){var t;for(t=u.soundIDs.length-1;t>=0;t--)u.sounds[u.soundIDs[t]].resume()},this.togglePause=function(t){return mt(t)?u.sounds[t].togglePause():!1},this.setPan=function(t,e){return mt(t)?u.sounds[t].setPan(e):!1},this.setVolume=function(t,n){var i,o;{if(t===e||isNaN(t)||n!==e)return mt(t)?u.sounds[t].setVolume(n):!1;for(i=0,o=u.soundIDs.length;o>i;i++)u.sounds[u.soundIDs[i]].setVolume(t)}},this.mute=function(t){var e=0;if(t instanceof String&&(t=null),t)return mt(t)?u.sounds[t].mute():!1;for(e=u.soundIDs.length-1;e>=0;e--)u.sounds[u.soundIDs[e]].mute();return u.muted=!0,!0},this.muteAll=function(){u.mute()},this.unmute=function(t){var e;if(t instanceof String&&(t=null),t)return mt(t)?u.sounds[t].unmute():!1;for(e=u.soundIDs.length-1;e>=0;e--)u.sounds[u.soundIDs[e]].unmute();return u.muted=!1,!0},this.unmuteAll=function(){u.unmute()},this.toggleMute=function(t){return mt(t)?u.sounds[t].toggleMute():!1},this.getMemoryUse=function(){var t=0;return l&&8!==O&&(t=parseInt(l._getMemoryUse(),10)),t},this.disable=function(n){var i;if(n===e&&(n=!1),S)return!1;for(S=!0,i=u.soundIDs.length-1;i>=0;i--)nt(u.sounds[u.soundIDs[i]]);return A(n),Ct.remove(t,"load",N),!0},this.canPlayMIME=function(t){var e;return u.hasHTML5&&(e=Ht({type:t})),!e&&Pt&&(e=t&&u.ok()?!!((O>8?t.match(fe):null)||t.match(u.mimePattern)):null),e},this.canPlayURL=function(t){var e;return u.hasHTML5&&(e=Ht({url:t})),!e&&Pt&&(e=t&&u.ok()?!!t.match(u.filePattern):null),e},this.canPlayLink=function(t){return t.type!==e&&t.type&&u.canPlayMIME(t.type)?!0:u.canPlayURL(t.href)},this.getSoundById=function(t,e){if(!t)return null;var n=u.sounds[t];return n},this.onready=function(e,n){var i="onready",o=!1;if("function"!=typeof e)throw ut("needFunction",i);return n||(n=t),k(i,e,n),x(),o=!0,o},this.ontimeout=function(e,n){var i="ontimeout",o=!1;if("function"!=typeof e)throw ut("needFunction",i);return n||(n=t),k(i,e,n),x({type:i}),o=!0,o},this._writeDebug=function(t,e){return!0},this._wD=this._writeDebug,this._debug=function(){},this.reboot=function(e,n){var i,o,a;for(i=u.soundIDs.length-1;i>=0;i--)u.sounds[u.soundIDs[i]].destruct();if(l)try{Jt&&(st=l.innerHTML),at=l.parentNode.removeChild(l)}catch(s){}if(st=at=Pt=l=null,u.enabled=X=P=_t=yt=L=T=S=xt=u.swfLoaded=!1,u.soundIDs=[],u.sounds={},Wt=0,$t=!1,e)M=[];else for(i in M)if(M.hasOwnProperty(i))for(o=0,a=M[i].length;a>o;o++)M[i][o].fired=!1;return u.html5={usingFlash:null},u.flash={},u.html5Only=!1,u.ignoreFlash=!1,t.setTimeout(function(){n||u.beginDelayedInit()},20),u},this.reset=function(){return u.reboot(!0,!0)},this.getMoviePercent=function(){return l&&"PercentLoaded"in l?l.PercentLoaded():null},this.beginDelayedInit=function(){D=!0,W(),setTimeout(function(){return yt?!1:(J(),Q(),yt=!0,!0)},20),R()},this.destruct=function(){u.disable(!0)},s=function(t){var n=this,i,o,a,s,d,f,h=!1,c=[],p=0,m,_,y=null,g,v;g={duration:null,time:null},this.id=t.id,this.sID=this.id,this.url=t.url,this.options=F(t),this.instanceOptions=this.options,this._iO=this.instanceOptions,this.pan=this.options.pan,this.volume=this.options.volume,this.isHTML5=!1,this._a=null,v=!this.url,this.id3={},this._debug=function(){},this.load=function(t){var i=null,o;if(t!==e?n._iO=F(t,n.options):(t=n.options,n._iO=t,y&&y!==n.url&&(n._iO.url=n.url,n.url=null)),n._iO.url||(n._iO.url=n.url),n._iO.url=bt(n._iO.url),n.instanceOptions=n._iO,o=n._iO,!o.url&&!n.url)return n;if(o.url===n.url&&0!==n.readyState&&2!==n.readyState)return 3===n.readyState&&o.onload&&Qt(n,function(){o.onload.apply(n,[!!n.duration])}),n;if(n.loaded=!1,n.readyState=1,n.playState=0,n.id3={},Dt(o))i=n._setup_html5(o),i._called_load||(n._html5_canplay=!1,n.url!==o.url&&(n._a.src=o.url,n.setPosition(0)),n._a.autobuffer="auto",n._a.preload="auto",n._a._called_load=!0);else{if(u.html5Only)return n;if(n._iO.url&&n._iO.url.match(/data\:/i))return n;try{n.isHTML5=!1,n._iO=ct(ht(o)),n._iO.autoPlay&&(n._iO.position||n._iO.from)&&(n._iO.autoPlay=!1),o=n._iO,8===O?l._load(n.id,o.url,o.stream,o.autoPlay,o.usePolicyFile):l._load(n.id,o.url,!!o.stream,!!o.autoPlay,o.loops||1,!!o.autoLoad,o.usePolicyFile)}catch(a){Y({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}return n.url=o.url,n},this.unload=function(){return 0!==n.readyState&&(n.isHTML5?(s(),n._a&&(n._a.pause(),y=At(n._a))):8===O?l._unload(n.id,ue):l._unload(n.id),i()),n},this.destruct=function(t){n.isHTML5?(s(),n._a&&(n._a.pause(),At(n._a),xt||a(),n._a._s=null,n._a=null)):(n._iO.onfailure=null,l._destroySound(n.id)),t||u.destroySound(n.id,!0)},this.play=function(t,i){var o,a,s,r,c,p,m,y=!0,g=null;if(i=i===e?!0:i,t||(t={}),n.url&&(n._iO.url=n.url),n._iO=F(n._iO,n.options),n._iO=F(t,n._iO),n._iO.url=bt(n._iO.url),n.instanceOptions=n._iO,!n.isHTML5&&n._iO.serverURL&&!n.connected)return n.getAutoPlay()||n.setAutoPlay(!0),n;if(Dt(n._iO)&&(n._setup_html5(n._iO),d()),1!==n.playState||n.paused||(a=n._iO.multiShot,a||(n.isHTML5&&n.setPosition(n._iO.position),g=n)),null!==g)return g;if(t.url&&t.url!==n.url&&(n.readyState||n.isHTML5||8!==O||!v?n.load(n._iO):v=!1),n.loaded||(0===n.readyState?(n.isHTML5||u.html5Only?n.isHTML5?n.load(n._iO):g=n:(n._iO.autoPlay=!0,n.load(n._iO)),n.instanceOptions=n._iO):2===n.readyState&&(g=n)),null!==g)return g;if(!n.isHTML5&&9===O&&n.position>0&&n.position===n.duration&&(t.position=0),n.paused&&n.position>=0&&(!n._iO.serverURL||n.position>0))n.resume();else{if(n._iO=F(t,n._iO),(!n.isHTML5&&null!==n._iO.position&&n._iO.position>0||null!==n._iO.from&&n._iO.from>0||null!==n._iO.to)&&0===n.instanceCount&&0===n.playState&&!n._iO.serverURL){if(r=function(){n._iO=F(t,n._iO),n.play(n._iO)},n.isHTML5&&!n._html5_canplay?(n.load({_oncanplay:r}),g=!1):n.isHTML5||n.loaded||n.readyState&&2===n.readyState||(n.load({onload:r}),g=!1),null!==g)return g;n._iO=_()}(!n.instanceCount||n._iO.multiShotEvents||n.isHTML5&&n._iO.multiShot&&!xt||!n.isHTML5&&O>8&&!n.getAutoPlay())&&n.instanceCount++,n._iO.onposition&&0===n.playState&&f(n),n.playState=1,n.paused=!1,n.position=n._iO.position===e||isNaN(n._iO.position)?0:n._iO.position,n.isHTML5||(n._iO=ct(ht(n._iO))),n._iO.onplay&&i&&(n._iO.onplay.apply(n),h=!0),n.setVolume(n._iO.volume,!0),n.setPan(n._iO.pan,!0),n.isHTML5?n.instanceCount<2?(d(),s=n._setup_html5(),n.setPosition(n._iO.position),s.play()):(c=new Audio(n._iO.url),p=function(){Ct.remove(c,"ended",p),n._onfinish(n),At(c),c=null},m=function(){Ct.remove(c,"canplay",m);try{c.currentTime=n._iO.position/Gt}catch(t){}c.play()},Ct.add(c,"ended",p),n._iO.volume!==e&&(c.volume=Math.max(0,Math.min(1,n._iO.volume/100))),n.muted&&(c.muted=!0),n._iO.position?Ct.add(c,"canplay",m):c.play()):(y=l._start(n.id,n._iO.loops||1,9===O?n.position:n.position/Gt,n._iO.multiShot||!1),9!==O||y||n._iO.onplayerror&&n._iO.onplayerror.apply(n))}return n},this.start=this.play,this.stop=function(t){var e=n._iO,i;return 1===n.playState&&(n._onbufferchange(0),n._resetOnPosition(0),n.paused=!1,n.isHTML5||(n.playState=0),m(),e.to&&n.clearOnPosition(e.to),n.isHTML5?n._a&&(i=n.position,n.setPosition(0),n.position=i,n._a.pause(),n.playState=0,n._onTimer(),s()):(l._stop(n.id,t),e.serverURL&&n.unload()),n.instanceCount=0,n._iO={},e.onstop&&e.onstop.apply(n)),n},this.setAutoPlay=function(t){n._iO.autoPlay=t,n.isHTML5||(l._setAutoPlay(n.id,t),t&&(n.instanceCount||1!==n.readyState||n.instanceCount++))},this.getAutoPlay=function(){return n._iO.autoPlay},this.setPosition=function(t){t===e&&(t=0);var i,o,a=n.isHTML5?Math.max(t,0):Math.min(n.duration||n._iO.duration,Math.max(t,0));if(n.position=a,o=n.position/Gt,n._resetOnPosition(n.position),n._iO.position=a,n.isHTML5){if(n._a){if(n._html5_canplay){if(n._a.currentTime!==o)try{n._a.currentTime=o,(0===n.playState||n.paused)&&n._a.pause()}catch(s){}}else if(o)return n;n.paused&&n._onTimer(!0)}}else i=9===O?n.position:o,n.readyState&&2!==n.readyState&&l._setPosition(n.id,i,n.paused||!n.playState,n._iO.multiShot);return n},this.pause=function(t){return n.paused||0===n.playState&&1!==n.readyState?n:(n.paused=!0,n.isHTML5?(n._setup_html5().pause(),s()):(t||t===e)&&l._pause(n.id,n._iO.multiShot),n._iO.onpause&&n._iO.onpause.apply(n),n)},this.resume=function(){var t=n._iO;return n.paused?(n.paused=!1,n.playState=1,n.isHTML5?(n._setup_html5().play(),d()):(t.isMovieStar&&!t.serverURL&&n.setPosition(n.position),l._pause(n.id,t.multiShot)),!h&&t.onplay?(t.onplay.apply(n),h=!0):t.onresume&&t.onresume.apply(n),n):n},this.togglePause=function(){return 0===n.playState?(n.play({position:9!==O||n.isHTML5?n.position/Gt:n.position}),n):(n.paused?n.resume():n.pause(),n)},this.setPan=function(t,i){return t===e&&(t=0),i===e&&(i=!1),n.isHTML5||l._setPan(n.id,t),n._iO.pan=t,i||(n.pan=t,n.options.pan=t),n},this.setVolume=function(t,i){return t===e&&(t=100),i===e&&(i=!1),n.isHTML5?n._a&&(u.muted&&!n.muted&&(n.muted=!0,n._a.muted=!0),n._a.volume=Math.max(0,Math.min(1,t/100))):l._setVolume(n.id,u.muted&&!n.muted||n.muted?0:t),n._iO.volume=t,i||(n.volume=t,n.options.volume=t),n},this.mute=function(){return n.muted=!0,n.isHTML5?n._a&&(n._a.muted=!0):l._setVolume(n.id,0),n},this.unmute=function(){n.muted=!1;var t=n._iO.volume!==e;return n.isHTML5?n._a&&(n._a.muted=!1):l._setVolume(n.id,t?n._iO.volume:n.options.volume),n},this.toggleMute=function(){return n.muted?n.unmute():n.mute()},this.onPosition=function(t,i,o){return c.push({position:parseInt(t,10),method:i,scope:o!==e?o:n,fired:!1}),n},this.onposition=this.onPosition,this.clearOnPosition=function(t,e){var n;if(t=parseInt(t,10),isNaN(t))return!1;for(n=0;n<c.length;n++)t===c[n].position&&(e&&e!==c[n].method||(c[n].fired&&p--,c.splice(n,1)))},this._processOnPosition=function(){var t,e,i=c.length;if(!i||!n.playState||p>=i)return!1;for(t=i-1;t>=0;t--)e=c[t],!e.fired&&n.position>=e.position&&(e.fired=!0,p++,e.method.apply(e.scope,[e.position]),i=c.length);return!0},this._resetOnPosition=function(t){var e,n,i=c.length;if(!i)return!1;for(e=i-1;e>=0;e--)n=c[e],n.fired&&t<=n.position&&(n.fired=!1,p--);return!0},_=function(){var t=n._iO,e=t.from,i=t.to,o,a;return a=function(){n.clearOnPosition(i,a),n.stop()},o=function(){null===i||isNaN(i)||n.onPosition(i,a)},null===e||isNaN(e)||(t.position=e,t.multiShot=!1,o()),t},f=function(){var t,e=n._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&n.onPosition(parseInt(t,10),e[t])},m=function(){var t,e=n._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&n.clearOnPosition(parseInt(t,10))},d=function(){n.isHTML5&&gt(n)},s=function(){n.isHTML5&&vt(n)},i=function(t){t||(c=[],p=0),h=!1,n._hasTimer=null,n._a=null,n._html5_canplay=!1,n.bytesLoaded=null,n.bytesTotal=null,n.duration=n._iO&&n._iO.duration?n._iO.duration:null,n.durationEstimate=null,n.buffered=[],n.eqData=[],n.eqData.left=[],n.eqData.right=[],n.failures=0,n.isBuffering=!1,n.instanceOptions={},n.instanceCount=0,n.loaded=!1,n.metadata={},n.readyState=0,n.muted=!1,n.paused=!1,n.peakData={left:0,right:0},n.waveformData={left:[],right:[]},n.playState=0,n.position=null,n.id3={}},i(),this._onTimer=function(t){var e,i=!1,o,a={};return n._hasTimer||t?(n._a&&(t||(n.playState>0||1===n.readyState)&&!n.paused)&&(e=n._get_html5_duration(),e!==g.duration&&(g.duration=e,n.duration=e,i=!0),n.durationEstimate=n.duration,o=n._a.currentTime*Gt||0,o!==g.time&&(g.time=o,i=!0),(i||t)&&n._whileplaying(o,a,a,a,a)),i):void 0},this._get_html5_duration=function(){var t=n._iO,e=n._a&&n._a.duration?n._a.duration*Gt:t&&t.duration?t.duration:null,i=e&&!isNaN(e)&&e!==1/0?e:null;return i},this._apply_loop=function(t,e){t.loop=e>1?"loop":""},this._setup_html5=function(t){var e=F(n._iO,t),a=xt?r:n._a,s=decodeURI(e.url),u;if(xt?s===decodeURI(Nt)&&(u=!0):s===decodeURI(y)&&(u=!0),a){if(a._s)if(xt)a._s&&a._s.playState&&!u&&a._s.stop();else if(!xt&&s===decodeURI(y))return n._apply_loop(a,e.loops),a;u||(y&&i(!1),a.src=e.url,n.url=e.url,y=e.url,Nt=e.url,a._called_load=!1)}else e.autoLoad||e.autoPlay?(n._a=new Audio(e.url),n._a.load()):n._a=zt&&opera.version()<10?new Audio(null):new Audio,a=n._a,a._called_load=!1,xt&&(r=a);return n.isHTML5=!0,n._a=a,a._s=n,o(),n._apply_loop(a,e.loops),e.autoLoad||e.autoPlay?n.load():(a.autobuffer=!1,a.preload="auto"),a},o=function(){function t(t,e,i){return n._a?n._a.addEventListener(t,e,i||!1):null}if(n._a._added_events)return!1;var e;n._a._added_events=!0;for(e in qt)qt.hasOwnProperty(e)&&t(e,qt[e]);return!0},a=function(){function t(t,e,i){return n._a?n._a.removeEventListener(t,e,i||!1):null}var e;n._a._added_events=!1;for(e in qt)qt.hasOwnProperty(e)&&t(e,qt[e])},this._onload=function(t){var e,i=!!t||!n.isHTML5&&8===O&&n.duration;return n.loaded=i,n.readyState=i?3:2,n._onbufferchange(0),n._iO.onload&&Qt(n,function(){n._iO.onload.apply(n,[i])}),!0},this._onbufferchange=function(t){return 0===n.playState?!1:t&&n.isBuffering||!t&&!n.isBuffering?!1:(n.isBuffering=1===t,n._iO.onbufferchange&&n._iO.onbufferchange.apply(n,[t]),!0)},this._onsuspend=function(){return n._iO.onsuspend&&n._iO.onsuspend.apply(n),!0},this._onfailure=function(t,e,i){n.failures++,n._iO.onfailure&&1===n.failures&&n._iO.onfailure(t,e,i)},this._onwarning=function(t,e,i){n._iO.onwarning&&n._iO.onwarning(t,e,i)},this._onfinish=function(){var t=n._iO.onfinish;n._onbufferchange(0),n._resetOnPosition(0),n.instanceCount&&(n.instanceCount--,n.instanceCount||(m(),n.playState=0,n.paused=!1,n.instanceCount=0,n.instanceOptions={},n._iO={},s(),n.isHTML5&&(n.position=0)),n.instanceCount&&!n._iO.multiShotEvents||t&&Qt(n,function(){t.apply(n)}))},this._whileloading=function(t,e,i,o){var a=n._iO;n.bytesLoaded=t,n.bytesTotal=e,n.duration=Math.floor(i),n.bufferLength=o,n.isHTML5||a.isMovieStar?n.durationEstimate=n.duration:a.duration?n.durationEstimate=n.duration>a.duration?n.duration:a.duration:n.durationEstimate=parseInt(n.bytesTotal/n.bytesLoaded*n.duration,10),n.isHTML5||(n.buffered=[{start:0,end:n.duration}]),(3!==n.readyState||n.isHTML5)&&a.whileloading&&a.whileloading.apply(n)},this._whileplaying=function(t,i,o,a,s){var u=n._iO,r;return isNaN(t)||null===t?!1:(n.position=Math.max(0,t),n._processOnPosition(),!n.isHTML5&&O>8&&(u.usePeakData&&i!==e&&i&&(n.peakData={left:i.leftPeak,right:i.rightPeak}),u.useWaveformData&&o!==e&&o&&(n.waveformData={left:o.split(","),right:a.split(",")}),u.useEQData&&s!==e&&s&&s.leftEQ&&(r=s.leftEQ.split(","),n.eqData=r,n.eqData.left=r,s.rightEQ!==e&&s.rightEQ&&(n.eqData.right=s.rightEQ.split(",")))),1===n.playState&&(n.isHTML5||8!==O||n.position||!n.isBuffering||n._onbufferchange(0),u.whileplaying&&u.whileplaying.apply(n)),!0)},this._oncaptiondata=function(t){n.captiondata=t,n._iO.oncaptiondata&&n._iO.oncaptiondata.apply(n,[t])},this._onmetadata=function(t,e){var i={},o,a;for(o=0,a=t.length;a>o;o++)i[t[o]]=e[o];n.metadata=i,n._iO.onmetadata&&n._iO.onmetadata.call(n,n.metadata)},this._onid3=function(t,e){var i=[],o,a;for(o=0,a=t.length;a>o;o++)i[t[o]]=e[o];n.id3=F(n.id3,i),n._iO.onid3&&n._iO.onid3.apply(n)},this._onconnect=function(t){t=1===t,n.connected=t,t&&(n.failures=0,mt(n.id)&&(n.getAutoPlay()?n.play(e,n.getAutoPlay()):n._iO.autoLoad&&n.load()),n._iO.onconnect&&n._iO.onconnect.apply(n,[t]))},this._ondataerror=function(t){n.playState>0&&n._iO.ondataerror&&n._iO.ondataerror.apply(n)}},K=function(){return _.body||_.getElementsByTagName("div")[0]},c=function(t){return _.getElementById(t)},F=function(t,n){var i=t||{},o,a;o=n===e?u.defaultOptions:n;for(a in o)o.hasOwnProperty(a)&&i[a]===e&&("object"!=typeof o[a]||null===o[a]?i[a]=o[a]:i[a]=F(i[a],o[a]));return i},Qt=function(e,n){e.isHTML5||8!==O?n():t.setTimeout(n,0)},C={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1},E=function(t,n){var i,o=!0,a=n!==e,s=u.setupOptions,r=C;for(i in t)if(t.hasOwnProperty(i))if("object"!=typeof t[i]||null===t[i]||t[i]instanceof Array||t[i]instanceof RegExp)a&&r[n]!==e?u[n][i]=t[i]:s[i]!==e?(u.setupOptions[i]=t[i],u[i]=t[i]):r[i]===e?o=!1:u[i]instanceof Function?u[i].apply(u,t[i]instanceof Array?t[i]:[t[i]]):u[i]=t[i];else{if(r[i]!==e)return E(t[i],i);o=!1}return o},Ct=function(){function e(t){var e=kt.call(t),n=e.length;return a?(e[1]="on"+e[1],n>3&&e.pop()):3===n&&e.push(!1),e}function n(t,e){var n=t.shift(),i=[s[e]];a?n[i](t[0],t[1]):n[i].apply(n,t)}function i(){n(e(arguments),"add")}function o(){n(e(arguments),"remove")}var a=t.attachEvent,s={add:a?"attachEvent":"addEventListener",remove:a?"detachEvent":"removeEventListener"};return{add:i,remove:o}}(),qt={abort:a(function(){}),canplay:a(function(){var t=this._s,n;if(t._html5_canplay)return!0;if(t._html5_canplay=!0,t._onbufferchange(0),n=t._iO.position===e||isNaN(t._iO.position)?null:t._iO.position/Gt,this.currentTime!==n)try{this.currentTime=n}catch(i){}t._iO._oncanplay&&t._iO._oncanplay()}),canplaythrough:a(function(){var t=this._s;t.loaded||(t._onbufferchange(0),t._whileloading(t.bytesLoaded,t.bytesTotal,t._get_html5_duration()),t._onload(!0))}),durationchange:a(function(){var t=this._s,e;e=t._get_html5_duration(),isNaN(e)||e===t.duration||(t.durationEstimate=t.duration=e)}),ended:a(function(){var t=this._s;t._onfinish()}),error:a(function(){this._s._onload(!1)}),loadeddata:a(function(){var t=this._s;t._loaded||Zt||(t.duration=t._get_html5_duration())}),loadedmetadata:a(function(){}),loadstart:a(function(){this._s._onbufferchange(1)}),play:a(function(){this._s._onbufferchange(0)}),playing:a(function(){this._s._onbufferchange(0)}),progress:a(function(t){var e=this._s,n,i,o,a=0,s="progress"===t.type,u=t.target.buffered,r=t.loaded||0,l=t.total||1;if(e.buffered=[],u&&u.length){for(n=0,i=u.length;i>n;n++)e.buffered.push({start:u.start(n)*Gt,end:u.end(n)*Gt});a=(u.end(0)-u.start(0))*Gt,r=Math.min(1,a/(t.target.duration*Gt))}isNaN(r)||(e._whileloading(r,l,e._get_html5_duration()),r&&l&&r===l&&qt.canplaythrough.call(this,t))}),ratechange:a(function(){}),suspend:a(function(t){var e=this._s;qt.progress.call(this,t),e._onsuspend()}),stalled:a(function(){}),timeupdate:a(function(){this._s._onTimer()}),waiting:a(function(){var t=this._s;t._onbufferchange(1)})},Dt=function(t){var e;return e=t&&(t.type||t.url||t.serverURL)?t.serverURL||t.type&&o(t.type)?!1:t.type?Ht({type:t.type}):Ht({url:t.url})||u.html5Only||t.url.match(/data\:/i):!1},At=function(t){var n;return t&&(n=Zt?ue:u.html5.canPlayType("audio/wav")?re:ue,t.src=n,t._called_unload!==e&&(t._called_load=!1)),xt&&(Nt=null),n},Ht=function(t){if(!u.useHTML5Audio||!u.hasHTML5)return!1;var n=t.url||null,i=t.type||null,a=u.audioFormats,s,r,l,d;if(i&&u.html5[i]!==e)return u.html5[i]&&!o(i);if(!It){It=[];for(d in a)a.hasOwnProperty(d)&&(It.push(d),a[d].related&&(It=It.concat(a[d].related)));It=new RegExp("\\.("+It.join("|")+")(\\?.*)?$","i")}return l=n?n.toLowerCase().match(It):null,l&&l.length?l=l[1]:i?(r=i.indexOf(";"),l=(-1!==r?i.substr(0,r):i).substr(6)):s=!1,l&&u.html5[l]!==e?s=u.html5[l]&&!o(l):(i="audio/"+l,console.log("Checking sm2"*typeof u),console.log("Checking sm2.html5"*typeof u.html5),s=u.html5.canPlayType({type:i}),u.html5[l]=s,s=s&&u.html5[i]&&!o(i)),s},Et=function(){function t(t){var e,i,o=!1,a=!1;if(!n||"function"!=typeof n.canPlayType)return o;if(t instanceof Array){for(r=0,i=t.length;i>r;r++)(u.html5[t[r]]||n.canPlayType(t[r]).match(u.html5Test))&&(a=!0,u.html5[t[r]]=!0,u.flash[t[r]]=!!t[r].match(se));o=a}else e=n&&"function"==typeof n.canPlayType?n.canPlayType(t):!1,o=!(!e||!e.match(u.html5Test));return o}if(!u.useHTML5Audio||!u.hasHTML5)return u.html5.usingFlash=!0,Pt=!0,!1;var n=Audio!==e?zt&&opera.version()<10?new Audio(null):new Audio:null,i,o,a={},s,r;s=u.audioFormats;for(i in s)if(s.hasOwnProperty(i)&&(o="audio/"+i,a[i]=t(s[i].type),a[o]=a[i],i.match(se)?(u.flash[i]=!0,u.flash[o]=!0):(u.flash[i]=!1,u.flash[o]=!1),s[i]&&s[i].related))for(r=s[i].related.length-1;r>=0;r--)a["audio/"+s[i].related[r]]=a[i],u.html5[s[i].related[r]]=a[i],u.flash[s[i].related[r]]=a[i];return a.canPlayType=n?t:null,u.html5=F(u.html5,a),u.html5.usingFlash=St(),Pt=u.html5.usingFlash,!0},j={},ut=function(){},ht=function(t){return 8===O&&t.loops>1&&t.stream&&(t.stream=!1),t},ct=function(t,e){return t&&!t.usePolicyFile&&(t.onid3||t.usePeakData||t.useWaveformData||t.useEQData)&&(t.usePolicyFile=!0),t},pt=function(t){},y=function(){return!1},nt=function(t){var e;for(e in t)t.hasOwnProperty(e)&&"function"==typeof t[e]&&(t[e]=y);e=null},it=function(t){t===e&&(t=!1),(S||t)&&u.disable(t)},ot=function(t){var e=null,n;if(t)if(t.match(/\.swf(\?.*)?$/i)){if(e=t.substr(t.toLowerCase().lastIndexOf(".swf?")+4))return t}else t.lastIndexOf("/")!==t.length-1&&(t+="/");return n=(t&&-1!==t.lastIndexOf("/")?t.substr(0,t.lastIndexOf("/")+1):"./")+u.movieURL,u.noSWFCache&&(n+="?ts="+(new Date).getTime()),n},q=function(){O=parseInt(u.flashVersion,10),8!==O&&9!==O&&(u.flashVersion=O=et);var t=u.debugMode||u.debugFlash?"_debug.swf":".swf";u.useHTML5Audio&&!u.html5Only&&u.audioFormats.mp4.required&&9>O&&(u.flashVersion=O=9),u.version=u.versionNumber+(u.html5Only?" (HTML5-only mode)":9===O?" (AS3/Flash 9)":" (AS2/Flash 8)"),O>8?(u.defaultOptions=F(u.defaultOptions,u.flash9Options),u.features.buffering=!0,u.defaultOptions=F(u.defaultOptions,u.movieStarOptions),u.filePatterns.flash9=new RegExp("\\.(mp3|"+he.join("|")+")(\\?.*)?$","i"),u.features.movieStar=!0):u.features.movieStar=!1,u.filePattern=u.filePatterns[8!==O?"flash9":"flash8"],u.movieURL=(8===O?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",t),u.features.peakData=u.features.waveformData=u.features.eqData=O>8},Z=function(t,e){return l?void l._setPolling(t,e):!1},z=function(){},mt=this.getSoundById,lt=function(){var t=[];return u.debugMode&&t.push(dt.sm2Debug),u.debugFlash&&t.push(dt.flashDebug),u.useHighPerformance&&t.push(dt.highPerf),t.join(" ")},rt=function(){var t=ut("fbHandler"),e=u.getMoviePercent(),n=dt,i={type:"FLASHBLOCK"};return u.html5Only?!1:void(u.ok()?u.oMC&&(u.oMC.className=[lt(),n.swfDefault,n.swfLoaded+(u.didFlashBlock?" "+n.swfUnblocked:"")].join(" ")):(Pt&&(u.oMC.className=lt()+" "+n.swfDefault+" "+(null===e?n.swfTimedout:n.swfError)),u.didFlashBlock=!0,x({type:"ontimeout",ignoreInit:!0,error:i}),Y(i)))},k=function(t,n,i){M[t]===e&&(M[t]=[]),M[t].push({method:n,scope:i||null,fired:!1})},x=function(t){if(t||(t={type:u.ok()?"onready":"ontimeout"}),!P&&t&&!t.ignoreInit)return!1;if("ontimeout"===t.type&&(u.ok()||S&&!t.ignoreInit))return!1;var e={success:t&&t.ignoreInit?u.ok():!S},n=t&&t.type?M[t.type]||[]:[],i=[],o,a,s=[e],r=Pt&&!u.ok();for(t.error&&(s[0].error=t.error),o=0,a=n.length;a>o;o++)n[o].fired!==!0&&i.push(n[o]);if(i.length)for(o=0,a=i.length;a>o;o++)i[o].scope?i[o].method.apply(i[o].scope,s):i[o].method.apply(this,s),r||(i[o].fired=!0);return!0},N=function(){t.setTimeout(function(){u.useFlashBlock&&rt(),x(),"function"==typeof u.onload&&u.onload.apply(t),u.waitForWindowLoad&&Ct.add(t,"load",N)},1)},Ut=function(){if(Rt!==e)return Rt;var n=!1,i=navigator,o=i.plugins,a,s,u,r=t.ActiveXObject;if(o&&o.length)s="application/x-shockwave-flash",u=i.mimeTypes,u&&u[s]&&u[s].enabledPlugin&&u[s].enabledPlugin.description&&(n=!0);else if(r!==e&&!p.match(/MSAppHost/i)){try{a=new r("ShockwaveFlash.ShockwaveFlash")}catch(l){a=null}n=!!a,a=null}return Rt=n,n},St=function(){var t,e,n=u.audioFormats,i=Xt&&!!p.match(/os (1|2|3_0|3_1)\s/i);if(i?(u.hasHTML5=!1,u.html5Only=!0,u.oMC&&(u.oMC.style.display="none")):u.useHTML5Audio&&(u.html5&&u.html5.canPlayType||(u.hasHTML5=!1)),u.useHTML5Audio&&u.hasHTML5){Tt=!0;for(e in n)n.hasOwnProperty(e)&&n[e].required&&(u.html5.canPlayType(n[e].type)?u.preferFlash&&(u.flash[e]||u.flash[n[e].type])&&(t=!0):(Tt=!1,t=!0))}return u.ignoreFlash&&(t=!1,Tt=!0),u.html5Only=u.hasHTML5&&u.useHTML5Audio&&!t,!u.html5Only},bt=function(t){var e,n,i=0,o;if(t instanceof Array){for(e=0,n=t.length;n>e;e++)if(t[e]instanceof Object){if(u.canPlayMIME(t[e].type)){i=e;break}}else if(u.canPlayURL(t[e])){i=e;break}t[i].url&&(t[i]=t[i].url),o=t[i]}else o=t;return o},gt=function(t){t._hasTimer||(t._hasTimer=!0,!te&&u.html5PollingInterval&&(null===wt&&0===Mt&&(wt=setInterval(Ot,u.html5PollingInterval)),Mt++))},vt=function(t){t._hasTimer&&(t._hasTimer=!1,!te&&u.html5PollingInterval&&Mt--)},Ot=function(){var t;if(null!==wt&&!Mt)return clearInterval(wt),wt=null,!1;for(t=u.soundIDs.length-1;t>=0;t--)u.sounds[u.soundIDs[t]].isHTML5&&u.sounds[u.soundIDs[t]]._hasTimer&&u.sounds[u.soundIDs[t]]._onTimer()},Y=function(n){n=n!==e?n:{},"function"==typeof u.onerror&&u.onerror.apply(t,[{type:n.type!==e?n.type:null}]),n.fatal!==e&&n.fatal&&u.disable()},Bt=function(){if(!ee||!Ut())return!1;var t=u.audioFormats,e,n;for(n in t)if(t.hasOwnProperty(n)&&("mp3"===n||"mp4"===n)&&(u.html5[n]=!1,t[n]&&t[n].related))for(e=t[n].related.length-1;e>=0;e--)u.html5[t[n].related[e]]=!1},this._setSandboxType=function(t){},this._externalInterfaceOK=function(t){if(u.swfLoaded)return!1;var e;u.swfLoaded=!0,oe=!1,ee&&Bt(),setTimeout(v,Jt?100:1)},J=function(t,n){function i(){}function o(t,e){return'<param name="'+t+'" value="'+e+'" />'}if(L&&T)return!1;if(u.html5Only)return q(),i(),u.oMC=c(u.movieID),v(),L=!0,T=!0,!1;var a=n||u.url,s=u.altURL||a,r="JS/Flash audio component (SoundManager 2)",l=K(),d=lt(),f=null,h=_.getElementsByTagName("html")[0],m,y,g,O,M,w,b,P;if(f=h&&h.dir&&h.dir.match(/rtl/i),
t=t===e?u.id:t,q(),u.url=ot(le?a:s),n=u.url,u.wmode=!u.wmode&&u.useHighPerformance?"transparent":u.wmode,null!==u.wmode&&(p.match(/msie 8/i)||!Jt&&!u.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(Lt.push(j.spcWmode),u.wmode=null),m={name:t,id:t,src:n,quality:"high",allowScriptAccess:u.allowScriptAccess,bgcolor:u.bgColor,pluginspage:de+"www.macromedia.com/go/getflashplayer",title:r,type:"application/x-shockwave-flash",wmode:u.wmode,hasPriority:"true"},u.debugFlash&&(m.FlashVars="debug=1"),u.wmode||delete m.wmode,Jt)y=_.createElement("div"),O=['<object id="'+t+'" data="'+n+'" type="'+m.type+'" title="'+m.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',o("movie",n),o("AllowScriptAccess",u.allowScriptAccess),o("quality",m.quality),u.wmode?o("wmode",u.wmode):"",o("bgcolor",u.bgColor),o("hasPriority","true"),u.debugFlash?o("FlashVars",m.FlashVars):"","</object>"].join("");else{y=_.createElement("embed");for(g in m)m.hasOwnProperty(g)&&y.setAttribute(g,m[g])}if(z(),d=lt(),l=K())if(u.oMC=c(u.movieID)||_.createElement("div"),u.oMC.id)P=u.oMC.className,u.oMC.className=(P?P+" ":dt.swfDefault)+(d?" "+d:""),u.oMC.appendChild(y),Jt&&(M=u.oMC.appendChild(_.createElement("div")),M.className=dt.swfBox,M.innerHTML=O),T=!0;else{if(u.oMC.id=u.movieID,u.oMC.className=dt.swfDefault+" "+d,w=null,M=null,u.useFlashBlock||(u.useHighPerformance?w={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(w={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},f&&(w.left=Math.abs(parseInt(w.left,10))+"px"))),Yt&&(u.oMC.style.zIndex=1e4),!u.debugFlash)for(b in w)w.hasOwnProperty(b)&&(u.oMC.style[b]=w[b]);try{Jt||u.oMC.appendChild(y),l.appendChild(u.oMC),Jt&&(M=u.oMC.appendChild(_.createElement("div")),M.className=dt.swfBox,M.innerHTML=O),T=!0}catch(S){throw new Error(ut("domError")+" \n"+S.toString())}}return L=!0,i(),!0},Q=function(){return u.html5Only?(J(),!1):l?!1:u.url?(l=u.getMovie(u.id),l||(at?(Jt?u.oMC.innerHTML=st:u.oMC.appendChild(at),at=null,L=!0):J(u.id,u.url),l=u.getMovie(u.id)),"function"==typeof u.oninitmovie&&setTimeout(u.oninitmovie,1),!0):!1},R=function(){setTimeout(U,1e3)},B=function(){t.setTimeout(function(){u.setup({preferFlash:!1}).reboot(),u.didFlashBlock=!0,u.beginDelayedInit()},1)},U=function(){var e,n=!1;return u.url?_t?!1:(_t=!0,Ct.remove(t,"load",R),Rt&&oe&&!ie?!1:(P||(e=u.getMoviePercent(),e>0&&100>e&&(n=!0)),void setTimeout(function(){return e=u.getMoviePercent(),n?(_t=!1,t.setTimeout(R,1),!1):void(!P&&ae&&(null===e?u.useFlashBlock||0===u.flashLoadTimeout?u.useFlashBlock&&rt():!u.useFlashBlock&&Tt?B():x({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0===u.flashLoadTimeout||(!u.useFlashBlock&&Tt?B():it(!0))))},u.flashLoadTimeout))):!1},V=function(){function e(){Ct.remove(t,"focus",V)}return ie||!oe?(e(),!0):(ae=!0,ie=!0,_t=!1,R(),e(),!0)},jt=function(){},Vt=function(){},A=function(e){if(P)return!1;if(u.html5Only)return P=!0,N(),!0;var n=u.useFlashBlock&&u.flashLoadTimeout&&!u.getMoviePercent(),i=!0,o;return n||(P=!0),o={type:!Rt&&Pt?"NO_FLASH":"INIT_TIMEOUT"},(S||e)&&(u.useFlashBlock&&u.oMC&&(u.oMC.className=lt()+" "+(null===u.getMoviePercent()?dt.swfTimedout:dt.swfError)),x({type:"ontimeout",error:o,ignoreInit:!0}),Y(o),i=!1),S||(u.waitForWindowLoad&&!D?Ct.add(t,"load",N):N()),i},g=function(){var t,n=u.setupOptions;for(t in n)n.hasOwnProperty(t)&&(u[t]===e?u[t]=n[t]:u[t]!==n[t]&&(u.setupOptions[t]=u[t]))},v=function(){function e(){Ct.remove(t,"load",u.beginDelayedInit)}if(P)return!1;if(u.html5Only)return P||(e(),u.enabled=!0,A()),!0;Q();try{l._externalInterfaceTest(!1),Z(!0,u.flashPollingInterval||(u.useHighPerformance?10:50)),u.debugMode||l._disableDebug(),u.enabled=!0,u.html5Only||Ct.add(t,"unload",y)}catch(n){return Y({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),it(!0),A(),!1}return A(),e(),!0},W=function(){return X?!1:(X=!0,g(),z(),!Rt&&u.hasHTML5&&u.setup({useHTML5Audio:!0,preferFlash:!1}),Et(),!Rt&&Pt&&(Lt.push(j.needFlash),u.setup({flashLoadTimeout:1})),_.removeEventListener&&_.removeEventListener("DOMContentLoaded",W,!1),Q(),!0)},Ft=function(){return"complete"===_.readyState&&(W(),_.detachEvent("onreadystatechange",Ft)),!0},G=function(){D=!0,W(),Ct.remove(t,"load",G)},Ut(),Ct.add(t,"focus",V),Ct.add(t,"load",R),Ct.add(t,"load",G),_.addEventListener?_.addEventListener("DOMContentLoaded",W,!1):_.attachEvent?_.attachEvent("onreadystatechange",Ft):Y({type:"NO_DOM2_EVENTS",fatal:!0})}if(!t||!t.document)throw new Error("SoundManager requires a browser with window and document objects.");var i=null;t.SM2_DEFER!==e&&SM2_DEFER||(i=new n),"object"==typeof module&&module&&"object"==typeof module.exports?(module.exports.SoundManager=n,module.exports.soundManager=i):"function"==typeof define&&define.amd&&define(function(){function e(e){if(!t.soundManager&&e instanceof Function){var i=e(n);i instanceof n&&(t.soundManager=i)}return t.soundManager}return{constructor:n,getInstance:e}}),t.SoundManager=n,t.soundManager=i}(window);