!function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=o(9),s=i(n),r=o(12),a=window.interfaceSettings.supervisionRequest.api,l=(new Date).getTime();new Vue({el:"#article",data:{previous:null,id:null,code:"",pid:null,pcode:null,name:"",source:"",area:"",status:1,importance:4,urgency:5,scope:"",estimatedcompletetiontime:"",actualcompletetiontime:null,accountablesn:"",accountablename:"",responsiblesn:"",responsiblename:" ",responsibledeptcode:null,responsibledeptname:null,comments:null,latestTrace:{},children:[],progressModalId:"progressModal"+l,modalId:"modal"+l,progressRate:4,currentModal:"close",updateItem:{},userLogin:{},traceHistory:[],alertMessage:"保存成功"},computed:{escapeName:function(){return escape(this.name)}},created:function(){window.userLogin||(window.userLogin={updateuserid:(0,r.getCookie)("userid"),updateusername:(0,r.getCookie)("username")}),this.userLogin=window.userLogin,this.userLogin={updateuserid:(0,r.getCookie)("userid"),updateusername:(0,r.getCookie)("username")},this.id=(0,r.getQueryString)("id"),this.fetchOriginSupervision(this.id),this.fetchTrace(),this.previous=(0,r.getQueryString)("previous")},methods:{alertModal:function(e){this.alertMessage=e,$("#alertModal").modal("show")},missrole:function(){this.currentModal="missrole",this.showModal()},fetchOriginSupervision:function(e){var t=this;$.ajax({type:"get",dataType:"json",url:(0,r.setSupervisionHeader)(a.supDetailUrl,null,e),success:function(o){for(var i=[],n=0,s=o.length;s>n;n++){var r=o[n];if(r.id==e){for(var a in r)t[a]=r[a];r.latestTrace&&(t.progressRate=r.latestTrace.rate?r.latestTrace.rate:0)}else i.push(r)}t.children=i},error:function(e){console.log(e)}})},fetchTrace:function(){var e=this;$.ajax({type:"get",url:(0,r.setSupervisionHeader)(a.traceHistory,null,this.id),success:function(t,o,i){console.log("result",(0,s["default"])(t)),e.traceHistory=t},error:function(e,t,o){console.log("error",e)}})},updateProgress:function(){this.updateItem.id=this.id,this.currentModal="updateProgress",this.showModal()},showModal:function(){$("#"+this.modalId).modal({backdrop:"static",keyboard:!1})},editOperation:function(e){return this.userLogin.updateuserid!=this.accountablesn?void this.alertModal("非发起人角色无此操作权限"):void(window.location.href="/pages/supervision/supervision-edit.html?id="+e+"&previous=detail")},postphone:function(e){return this.userLogin.updateuserid!=this.accountablesn?void this.alertModal("非发起人角色无此操作权限"):(this.currentModal="postphone",this.postphoneDate=e.estimatedcompletetiontime,this.updateItem={id:e.id,postphoneDate:e.estimatedcompletetiontime,comment:""},console.log("postphoneDate",this.postphoneDate),void this.showModal())},revoke:function(e){return this.userLogin.updateuserid!=this.accountablesn?void this.alertModal("非发起人角色无此操作权限"):(this.currentModal="revoke",this.updateItem={id:e.id,comment:""},void this.showModal())},close:function(e){return this.userLogin.updateuserid!=this.accountablesn?void this.alertModal("非发起人角色无此操作权限"):(this.currentModal="close",this.updateItem={id:e.id,comment:""},void this.showModal())},saveChanges:function(){var e=this.updateItem,t="",o="",i={updateuserid:this.userLogin.updateuserid,updateusername:this.userLogin.updateusername};switch(this.currentModal){case"updateProgress":i=$.extend({},i,{description:this.comments,rate:this.progressRate,supervisionid:this.updateItem.id}),t=(0,r.setSupervisionHeader)(a.traceUrl,null,this.id),o="put";break;case"postphone":t=(0,r.setSupervisionHeader)(a.postphoneUrl,{newDateStr:e.postphoneDate},e.id),o="put";break;case"revoke":t=(0,r.setSupervisionHeader)(a.revokeUrl,null,e.id),o="delete";break;case"close":t=(0,r.setSupervisionHeader)(a.closeUrl,null,e.id),o="delete"}"updateProgress"!=this.currentModal&&(i=$.extend({},i,{description:this.comments,rate:this.progressRate,supervisionid:this.updateItem.id})),$.ajax({type:o,contentType:"application/json",data:(0,s["default"])(i),url:t,success:function(e,t,o){var i=this,n=e.messagecode;200==n?!function(){i.alertModal("保存成功");var e=setTimeout(function(){clearTimeout(e),location.reload()},500)}():this.alertModal("保存失败")},error:function(e,t,o){console.log("error",e),this.alertModal("保存失败")}})}},components:{postphone:o(106),modalPop:o(42),progressBar:o(80)}})},2:function(e,t){var o=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},9:function(e,t,o){e.exports={"default":o(13),__esModule:!0}},10:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(i[s]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&i[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},11:function(e,t,o){function i(e,t){for(var o=0;o<e.length;o++){var i=e[o],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(l(i.parts[s],t))}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(l(i.parts[s],t));c[i.id]={id:i.id,refs:1,parts:r}}}}function n(e){for(var t=[],o={},i=0;i<e.length;i++){var n=e[i],s=n[0],r=n[1],a=n[2],l=n[3],d={css:r,media:a,sourceMap:l};o[s]?o[s].parts.push(d):t.push(o[s]={id:s,parts:[d]})}return t}function s(e,t){var o=h(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?o.insertBefore(t,i.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function l(e,t){var o,i,n;if(t.singleton){var s=m++;o=v||(v=a(t)),i=d.bind(null,o,s,!1),n=d.bind(null,o,s,!0)}else o=a(t),i=u.bind(null,o),n=function(){r(o)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}function d(e,t,o,i){var n=o?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var s=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function u(e,t){var o=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var c={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=n(e);return i(o,t),function(e){for(var s=[],r=0;r<o.length;r++){var a=o[r],l=c[a.id];l.refs--,s.push(l)}if(e){var d=n(e);i(d,t)}for(var r=0;r<s.length;r++){var l=s[r];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var b=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},12:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t,o,i,n,s){if(o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3);var a=r.toGMTString()}else var a="";var l=e+"="+escape(t);a&&(l+=";expires="+a),i&&(l+=";path="+escape(i)),n&&(l+=";domain="+escape(n)),s&&(l+=";secure="+s),document.cookie=l}function s(e){var t,o=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(o))?unescape(t[2]):null}function r(e){var t=new Date;t.setTime(t.getTime()-864e5),n(e,"",t)}function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null}function l(){$.blockUI({message:"数据获取中，请稍候... ...",css:{border:"none",padding:"15px",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px",opacity:.5,color:"#fff"}})}function d(e,t){var o=function(e,o,i){t.list=e,t.successNext&&t.successNext()},i=function(e,t,o){console.log("error",e)},n={type:"get",url:e.URL+e.QueryString,success:o,error:i};"post"==e.METHOD&&(n={type:"post",url:e.URL+e.QueryString,data:e.PLAYLOAD,contentType:e.CONTENT_TYPE,success:o,error:i}),$.ajax(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAjaxService=t.loadingCover=t.getQueryString=t.deleteCookie=t.getCookie=t.setCookie=t.add_supervision=t.fetch_sourceFromServer=t.fetch_areaFromServer=t.fetch_deptsFromServer=t.fetch_serviceByHttpProtocol=t.setSupervisionHeader=void 0;var u=o(9),c=i(u),p=window.interfaceSettings.supervisionRequest,f=function(e,t,o){return(o?e.replace("%id%",o):e)+"?"+(t?$.param($.extend({},p.header,t)):$.param(p.header))},h=function(e,t,o,i,n){"post"==t&&(o=(0,c["default"])(o)),$.ajax({url:e,type:t,data:o,contentType:"application/json",success:function(e,t,o){console.log("success"),i(e,t,o)},error:function(e,t,o){console.log("error"),n(e,t,o)}})},v=function(e,t){var o=f(p.api.deptUrl,null,e);h(o,"get",{},t,function(e,t,o){console.log(e)})},m=function(e){var t=f(p.api.supSourceUrl);h(t,"get",{},e,function(e,t,o){console.log(e)})},g=function(e){var t=f(p.api.supAreaUrl);h(t,"get",{},e,function(e,t,o){console.log(e)})},b=function(e,t){var o=f(p.api.supAddUrl);h(o,"post",e,t,function(e,t,o){console.log(e)})};t.setSupervisionHeader=f,t.fetch_serviceByHttpProtocol=h,t.fetch_deptsFromServer=v,t.fetch_areaFromServer=g,t.fetch_sourceFromServer=m,t.add_supervision=b,t.setCookie=n,t.getCookie=s,t.deleteCookie=r,t.getQueryString=a,t.loadingCover=l,t.fetchAjaxService=d},13:function(e,t,o){var i=o(2),n=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},42:function(e,t,o){var i,n;i=o(43),n=o(78),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},43:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return(new Date).getTime(),{}},props:["modalTitle","modal_id"]}},44:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o,i){this.btn=document.getElementById(e),this.bar=document.getElementById(t),this.title=document.getElementById(o),this.step=this.bar.getElementsByTagName("div")[0],this.init(i)};o.prototype={init:function(e){var t=this,o=document,i=window,n=Math;t.btn.ontouchdown=t.btn.onmousedown=function(s){var r=(s||i.event).clientX,a=this.offsetLeft,l=t.bar.offsetWidth-this.offsetWidth;o.ontouchmove=o.onmousemove=function(s){var d=(s||i.event).clientX,u=n.min(l,n.max(-2,a+(d-r)));t.btn.style.left=u+"px",t.ondrag(n.round(100*n.max(0,u/l)),u),i.getSelection?i.getSelection().removeAllRanges():o.selection.empty(),e.rate=n.round(100*n.max(0,u/l))},o.onmouseup=new Function("this.onmousemove=null")}},ondrag:function(e,t){this.step.style.width=Math.max(0,t)+"px",this.title.innerHTML=e+"%"}},t["default"]={data:function(){var e=(new Date).getTime();return{btn_id:"btn"+e,bar_id:"bar"+e,title_id:"title"+e}},props:["rate"],created:function(){},ready:function(){new o(this.btn_id,this.bar_id,this.title_id,this)},methods:{}}},77:function(e,t,o){t=e.exports=o(10)(),t.push([e.id,".scale_panel[_v-1214d038]{font-size:12px;color:#999;width:70%;position:absolute;line-height:18px;left:60px;top:0}.scale_panel .r[_v-1214d038]{float:right}.scale span[_v-1214d038]{width:8px;height:16px;position:absolute;top:-5px;cursor:pointer}.scale[_v-1214d038]{background-repeat:repeat-x;background-position:0 100%;background-color:#e4e4e4;border-left:1px solid #83bbd9;width:100%;height:3px;position:relative;font-size:0;border-radius:3px}.scale .bar[_v-1214d038]{background-repeat:repeat-x;background-color:#3be3ff;position:absolute;height:3px;width:0;left:0;bottom:0}",""])},78:function(e,t){e.exports='<div class="modal fade" :id=modal_id tabindex=-1 role=dialog aria-labelledby=myModalLabel> <div class=modal-dialog role=document> <div class=modal-content> <div class=modal-header> <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button> <h4 class=modal-title></h4> </div> <div class=modal-body> <slot name=body></slot> </div> <div class=modal-footer> <slot name=save></slot> <button type=button class="btn btn-default" data-dismiss=modal>关闭</button> </div> </div> </div> </div>'},79:function(e,t){e.exports='<div class=progress-container _v-1214d038=""> <span :id=title_id v-text="rate+\'%\'" _v-1214d038=""></span> <div class=scale_panel _v-1214d038=""> <span class=r _v-1214d038="">100</span>0 <div class=scale :id=bar_id _v-1214d038=""> <div class=bar :style="{width:rate+\'%\'}" _v-1214d038=""></div> <span :id=btn_id style="background: url(assets/images/progressdrag.gif) no-repeat" :style="{left:rate+\'%\'}" _v-1214d038=""></span> </div> </div> </div>'},80:function(e,t,o){var i,n;o(81),i=o(44),n=o(79),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},81:function(e,t,o){var i=o(77);"string"==typeof i&&(i=[[e.id,i,""]]),o(11)(i,{}),i.locals&&(e.exports=i.locals)},85:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){var e=(new Date).getTime();return{input_id:"dateInput"+e}},props:["estimatedcompletetiontime","comment"],created:function(){var e=this;this.$watch("estimatedcompletetiontime",function(t,o){$("#"+e.input_id).val(t)})},ready:function(){var e=this;$("#"+this.input_id).daterangepicker({singleDatePicker:!0,showDropdowns:!0,startDate:this.estimatedcompletetiontime},function(t,o,i){e.estimatedcompletetiontime=t.format("YYYY-MM-DD")})}}},92:function(e,t,o){t=e.exports=o(10)(),t.push([e.id,".comment[_v-2a88e1ae]{margin-top:1rem}",""])},99:function(e,t){e.exports='<div class=com-container _v-2a88e1ae=""> <form class=form-horizontal _v-2a88e1ae=""> <div class=form-group _v-2a88e1ae=""> <label class="col-sm-2 control-label" _v-2a88e1ae="">日期</label> <div class=col-sm-10 _v-2a88e1ae=""> <input type=text class=form-control :id=input_id _v-2a88e1ae=""> </div> </div> <div class=form-group _v-2a88e1ae=""> <label class="col-sm-2 control-label" _v-2a88e1ae="">延期原因</label> <div class=col-sm-10 _v-2a88e1ae=""> <textarea class="form-control comment" v-model=comment _v-2a88e1ae=""></textarea> </div> </div> </form> </div>'},106:function(e,t,o){var i,n;o(111),i=o(85),n=o(99),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},111:function(e,t,o){var i=o(92);"string"==typeof i&&(i=[[e.id,i,""]]),o(11)(i,{}),i.locals&&(e.exports=i.locals)}});