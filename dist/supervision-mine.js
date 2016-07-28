!function(e){function t(s){if(r[s])return r[s].exports;var a=r[s]={exports:{},id:s,loaded:!1};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}for(var a=r(4),o=s(a),n=r(3),i=r(9),c=new Vue({el:"#filterSection",data:{userLoginInfo:{},filterOptions:{areaCode:[],sourceCode:[],responsiblesn:""},dateFilter:[{title:"全部",status:!0},{title:"上周",status:!0},{title:"本周",status:!0},{title:"下周",status:!0},{title:"时段",status:!0}],dateOptions:{show:!1,type:"date",value:"2016-6-21",begin:"2016-6-20",end:"2016-12-25",x:0,y:0,range:!0},area:[],source:[],stateList:[{label:"正常",value:!0,feature:"label-success",margin:"50%"},{label:"一周内过期",value:!0,feature:"label-warning",margin:""},{label:"已过期",value:!0,feature:"label-danger",margin:""},{label:"已完成",value:!1,feature:"label-default",margin:""}]},methods:{changeTime:function(e){e.stopPropagation();var t=e.currentTarget,r=$(t),s=t.getAttribute("data-mark");if(!r.hasClass("btn-success")||"custom"==s){switch($("#datePicker").find(".btn").removeClass("btn-success"),r.addClass("btn-success"),s){case"all":delete this.filterOptions.searchBeginDate,delete this.filterOptions.searchEndDate;break;case"lastweek":this.filterOptions.searchBeginDate=moment().day(-6).format("YYYY-MM-DD"),this.filterOptions.searchEndDate=moment().day(0).format("YYYY-MM-DD");break;case"thisweek":this.filterOptions.searchBeginDate=moment().weekday(1).format("YYYY-MM-DD"),this.filterOptions.searchEndDate=moment().day(7).format("YYYY-MM-DD");break;case"nextweek":this.filterOptions.searchBeginDate=moment().day(8).format("YYYY-MM-DD"),this.filterOptions.searchEndDate=moment().day(14).format("YYYY-MM-DD");break;case"custom":var a=$("#startDate").val().split("/"),o=$("#endDate").val().split("/");this.filterOptions.searchBeginDate=a[2]+"-"+a[0]+"-"+a[1],this.filterOptions.searchEndDate=o[2]+"-"+o[0]+"-"+o[1]}d.fetchTransactions(n.supervisionRequest.searchUrl)}},changeArea:function(e,t){var r=this[t];if(0==e){if("1"==r[0].status)return;r[0].status="1";for(var s=1,a=r.length;a>s;s++)r[s].status="0";this.filterOptions[t+"Code"]=[]}else{var o=this.filterOptions[t+"Code"];if(r[0].status="0","1"==r[e].status){r[e].status="0";for(var i in o)o[i]==r[e].diccode&&o.splice(i,1)}else r[e].status="1",o.push(r[e].diccode);this.filterOptions[t+"Code"]=o}this[t]=r,d.fetchTransactions(n.supervisionRequest.searchUrl)}},created:function(){console.log($);var e=this,t={supAreaUrl:n.supervisionRequest.supAreaUrl,supSourceUrl:n.supervisionRequest.supSourceUrl};for(var r in t)$.ajax({type:"get",dataType:"json",url:t[r],success:function(t,r,s){for(var a in t)t[a].status="0";var o=s.key,n=[{status:"1",dicname:"全部"}];"supAreaUrl"==o?e.area=n.concat(t):e.source=n.concat(t)},error:function(e,t,r){console.log(r.key),console.log(e)}}).key=r},ready:function(){$("#startDate").daterangepicker({singleDatePicker:!0,showDropdowns:!0},function(e,t,r){}),$("#endDate").daterangepicker({singleDatePicker:!0,showDropdowns:!0})}}),u=new Array(8),l=0;8>l;l++)u[l]="sorting";var d=new Vue({el:"#result-section",data:{ths:[{key:"code",val:"督办编号"},{key:"name",val:"督办事项名称"},{key:"accountablename",val:"责任领导(A)"},{key:"responsiblename",val:"责任人(R)"},{key:"estimatedcompletetiontime",val:"计划完成时间"},{key:"urgency",val:"紧急程度"},{key:"importance",val:"重要程度"},{key:"rate",val:"最新进展"}],keyItems:{sorting:u,total:[],show:[],current:1},otherItems:{sorting:u,total:[],show:[],current:1},doneItems:{sorting:u,total:[],show:[],current:1},pageSize:3,levelBackground:["gray","#A1C636","#5CB85C","#F0AD4E","#D9534F"]},created:function(){this.userLoginInfo={userid:"20120014",username:(0,i.getCookie)("username")},console.log("userinfo",this.userLoginInfo),n.supervisionRequest.searchUrl+="?page=0&size=100",this.fetchTransactions(n.supervisionRequest.searchUrl)},methods:{changePage:function(e,t,r,s){var a=this[s+"Items"];a.current=e,this.changeHandler(e,s,a)},sortColumn:function(e,t){function r(e,t){return/^\d/.test(e)^/^\D/.test(t)?e>t?1:e==t?0:-1:e>t?-1:e==t?0:1}var s=this,a=this[t+"Items"],o=a.sorting[e];"sorting_asc"==o?!function(){var o=u.concat();o[e]="sorting_desc",a.sorting=o;var n=s.ths[e].key;a.total.sort(function(e,t){return r(t[n],e[n])}),s.changeHandler(a.current,t,a)}():!function(){var o=u.concat();o[e]="sorting_asc",a.sorting=o;var n=s.ths[e].key;a.total.sort(function(e,t){return r(e[n],t[n])}),s.changeHandler(a.current,t,a)}()},changeHandler:function(e,t,r){var s=this.pageSize;r.show=r.total.slice((e-1)*s,s*e)},fetchTransactions:function(e){var t={};for(var r in c.filterOptions)t[r]=c.filterOptions[r];0==t.areaCode.length?delete t.areaCode:t.areaCode=t.areaCode.join(","),t.source=t.sourceCode,delete t.sourceCode,0==t.source.length?delete t.source:t.source=t.source.join(",");var s=this;t.accountableSN=this.userLoginInfo.userid,t.responsibleSN=this.userLoginInfo.userid,t=(0,o["default"])(t),$.ajax({type:"POST",dataType:"json",data:t,contentType:"application/json",url:e,success:function(e,t,r){for(var a=[],o=[],n=[],i=0,c=e.length;c>i;i++){var l=e[i];if(l.latestTrace?(l.rate=l.latestTrace.rate,l.latestDesc=l.latestTrace.description):(l.rate=0,l.latestDesc=""),l.rate<25?l.rateState="progress-bar-danger":l.rate<75?l.rateState="progress-bar-warning":l.rateState="progress-bar-success",1==l.status)a.push(l);else{var d=new moment,p=new moment(l.estimatedcompletetiontime),f=p.diff(d,"days");f>6&&l.urgency<4&&l.importance<4?n.push(l):o.push(l)}}var g={doneList:a,keyList:o,otherList:n},h=u.concat(),v=s.pageSize,m=["key","other","done"];for(var y in m){var k=m[y];s[k+"Items"]={total:g[k+"List"],show:g[k+"List"].slice(0,v),sorting:h,current:1};var b=Number(s.pageSize)||10,D=Number(s[k+"Items"].total.length);$("#"+k+"-pagination").extendPagination({totalCount:D,limit:b,name:k,callback:function(e,t,r,a){s.changePage(e,t,r,a)}})}},error:function(e,t,r){console.log(e)}})},newfunc:function(){}}})},,,function(e,t){"use strict";var r="http://172.16.51.137",s=r+":8000/api/v1.0/cache/find/type/source-code",a=r+":8010/api/contact/getOrglist?apikey=e71982d5401b488da4acef8827c41845",o=r+":8000/api/v1.0/cache/find/type/area-code",n=r+":8010/api/contact/getorgbyou?apikey=e71982d5401b488da4acef8827c41845&ou=",i=r+":8000/api/v1.0/supervision/search",c=r+":8000/api/v1.0/supervision/findchildren/",u=r+"/api/v1.0/supervision/add",l=r+":8010/api/contact/getchlistbyou?apikey=e71982d5401b488da4acef8827c41845&ou=",d=r+":8010/api/contact/searchuser?apikey=e71982d5401b488da4acef8827c41845",p=r+":8000/api/v1.0/supervision/postpone/",f={supervisionRequest:{supSourceUrl:s,orgUrl:a,supAreaUrl:o,deptUrl:n,searchUrl:i,supDetailUrl:c,supAddUrl:u,searchuserUrl:d,deptListUrl:l,postphoneUrl:p}};e.exports=f},function(e,t,r){e.exports={"default":r(5),__esModule:!0}},function(e,t,r){var s=r(6),a=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},function(e,t){var r=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},,,function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;var r=document.cookie.indexOf(";",t);return-1==r&&(r=document.cookie.length),unescape(document.cookie.substring(t,r))}}return""}function o(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(t);return null!=r?unescape(r[2]):null}function n(){$.blockUI({message:"数据获取中，请稍候... ...",css:{border:"none",padding:"15px",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px",opacity:.5,color:"#fff"}})}function i(e,t){var r=function(e,r,s){console.log("result",e),t.list=e,t.successNext&&t.successNext()},s=function(e,t,r){console.log("error",e)},a={type:"get",url:e.URL+e.QueryString,success:r,error:s};"post"==e.METHOD&&(a={type:"post",url:e.URL+e.QueryString,data:e.PLAYLOAD,contentType:e.CONTENT_TYPE,success:r,error:s}),$.ajax(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAjaxService=t.loadingCover=t.getQueryString=t.getCookie=t.add_supervision=t.fetch_sourceFromServer=t.fetch_areaFromServer=t.fetch_deptsFromServer=t.fetch_serviceByHttpProtocol=void 0;var c=r(4),u=s(c),l=r(3),d=function(e,t,r,s,a){"post"==t&&(r=(0,u["default"])(r)),$.ajax({url:e,type:t,data:r,contentType:"application/json",success:function(e,t,r){console.log("success"),s(e,t,r)},error:function(e,t,r){console.log("error"),a(e,t,r)}})},p=function(e,t){var r=l.supervisionRequest.deptUrl+e;d(r,"get",{},t,function(e,t,r){console.log(e)})},f=function(e){var t=l.supervisionRequest.supSourceUrl;d(t,"get",{},e,function(e,t,r){console.log(e)})},g=function(e){var t=l.supervisionRequest.supAreaUrl;d(t,"get",{},e,function(e,t,r){console.log(e)})},h=function(e,t){var r=l.supervisionRequest.supAddUrl;d(r,"post",e,t,function(e,t,r){console.log(e)})};t.fetch_serviceByHttpProtocol=d,t.fetch_deptsFromServer=p,t.fetch_areaFromServer=g,t.fetch_sourceFromServer=f,t.add_supervision=h,t.getCookie=a,t.getQueryString=o,t.loadingCover=n,t.fetchAjaxService=i}]);