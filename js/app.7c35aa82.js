(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var n={},a={app:0},i=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7aa8413c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=r(t);var o=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,s[1](o)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(s,n,function(e){return t[e]}.bind(null,n));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue_portfolio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0063":function(t,e,s){"use strict";var n=s("5544"),a=s("b83a"),i=(s("90f1"),s("2877")),r=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"0a62":function(t,e,s){"use strict";var n=s("60b8"),a=s.n(n);a.a},"13b0":function(t,e,s){"use strict";var n=s("614c"),a=s.n(n);a.a},"17e3":function(t,e,s){t.exports=s.p+"img/vue_dawoon_logo.b9ac5c96.png"},"21bb":function(t,e,s){"use strict";var n=s("2dad"),a=s.n(n);a.a},2429:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABGdBTUEAALGPC/xhBQAAB11JREFUeAHtnFtsFUUYgE8vVCytYImFqMTwQDVGUUttIVUEE0uK6INSFUwgEgKJxsuDiDFRifGBB42JvCCJb8YLlcSklQbjpSGECm293wLSFoPRYKwxLaW0p63ff9g5Ts919+yeU9rzbzJn/pn555+Zb2dnZ3d2TiikhxJQAkpACSgBJaAElIASUAJKQAkoASWgBJSAElACSkAJKIHsEyjwU0RTU1NRX1/fDQUFBVUTExPzcCV+7E1V3sLCwmHq3l9cXPzz0aNHT9GeiaDrkhHoXbt2Fba0tGyjQi9TwYVBV2qK7Z2kXS90dXV9GGQ9PIOur68vHx4efpdKrAuyIpeaLWDvKysre6K9vT0cRN2KvRiRoaKnp0fOdIOVbxz5fdzHVO50UVHRsJV2yYtjY2MVXJVLqegmnPiRg7htg4ODIm+/GOPv11OPXrZs2U6K222KBOyPgN167NixL03cdPWlE/X29j4P4JdoQ/ReQxubghhGXINetWpV2cDAwBkqMdeBebK8vLyaSyty2qcr4Nh605nuJa7Vij8J6OsB7usGWWgZTCkODQ3Vo2Agj9KTN840yAKgu7tbhsC3LRhLli9fXmeFMxJdg+aSqrZK2H/8+PEuKzyjxNmzZ++gQaOmUePj46uNnKnvBXSlKYR5Z5uRZ6J/5MiRf+jVHaZtgL7WyJn6rkFTQKkpBNCnjDyD/dOmbUAvN3KmvhfQdhnRy8qOnGHy+SDbkynoIOuQF7YUdI5Os4JW0DkikKNitEfnCLSnl0o5qlNWi6mrq7siHA4vZcp2eaqCeEAL48xD2YWampp7jD55R3h3/X1HR0e/iUvn5w3o2tra+Tx47AHyI0ApAGI6NiGAGp0a9LeagOQdGRkJAf/grFmztgH8d5OWzM+LoUPezAH5IIA2ACJKLxkUt/HYWwvwL1asWJHy6hB7edGjWW7bBJRaA5Ceegb5IO4PE+fWx848dO/G3ezkWQLsp5Gjr4+d+EleXoAGzh1Wqw+xcrLez5tHWcprbW19HbvPOHZt+1ZR/4t5MXTQ3EVOk2U16DE/kMUOoMc5WfKGr0/CHMb+xVCC33wBHWk6Q8avvG/2PFwk4BbiZIWxF33Dl0jHjssr0FzqA3bjA5Bd28uLMdoN0IaGhjn9/f0rORmX2fqsJPWyyPGtHZeJrKAdakA+BGRZrpt0sEoeYg5+H7DtdcRJOm4CeTV0pAIC5Kpk6czBlyRLcxuvPdohxarRBoDK11eThg6SeyoqKva5BZpMT0E7ZDo7Oz9DFJeVQ4eOrGCNN6qg45lkJUZBZwVrvFEFHc8kKzEKOitY440q6HgmWYlR0FnBGm9UQcczyUpMRg8srLt18R1xViqUDaM8Xndnw64Xm9qjvdDyoeulR/9ryuF9QD+9pNeEp4EfyIYfP+30AtpemRih0JWsVgz5KTxXefks4BM6Rq6KS1iO66GDt1vRDUFUeiFh2VSjh0sCrkGXlpZ2MmT0GLu8Utzp7NIyUeqnIOAatCxGYue5GFu7gX0Yt7qxsTH2PW6Man4HvYzRIbaBHQDqayB71sJ2J/LnZ8+eHWEsPMGwcsFKSytylZSTZ35aRXcKf6F2LlYV+9PqZhipPzfAHcCWGcgrOPvzqhIadFNsI9OFyZNOxUt6shPmah7t7HHfQ4Gy17C9srJye1tbm6eOk6yyrocO2wCwX+VmWE1vbCF+xuxn4Y8E5APIx3HX4TZzlW7HD+TwNHTYJbL08w3h++ndc4F+Oz3zalx055atm0KWT6keddL78N9zZE8eJ3wLZS+QTMh7kSd9HkDcBuLS2kTvSltPwmkzuVTIGLSxT++WYeRTE/bic5KaLP03sPWmFXYtYkfG4BedDPOws9fOzL3jATucTAbyO8Ddin8r/gncW8l0vcZnNHR4LSSRPh+EL6Ahdzlp8k1ccyI9N3HY2W/0gLTOzWe0Rt/2pdNwpVbzkfmixYsX34j8p53uR54y0HyYsh4oRVJ5QB2mkfaTp6c2MRv6gQy/OJnKeOnV6MmApUxdJvi3hjPNzc1jVrRvccpAA1luPJED+QMj+/DtXv1QIjtADHSuT72jfzeRqDw7bkpAc2lfQyUin1/R+DBPnQfsSmUiYyc69AAg4fBBfBXjudcbdqrq3JYq0U7zfTO0jbmVR0dHpcdF5uA0foy/qGgDgNvsCfWwI/HyI3bnUMZafHMCB5DlKOGEyJf5T0VCPn6o72ay3yImsDmYztSUgAbKw1bF5HL2R9kyZokyo4mApryvkSMzD+QngSR/dCJDjef7Avlla4Xs0BLQ5vjKCMl8+8kumU6g8c4/2ZgeFqjtGGPnSkpKrmLH1HkZqthnIjdMgRT0cYFZSjU30J9SGc75GA3oISo0Jweucs2aNZHHZ9meRg/eiPs7FYwM0mTI2JIOstjNeY/OoDGBZZG5O693H+Tyl7E17Za1FAWPYOM70j9iWvpbCj1NUgJKQAkoASWgBJSAElACSkAJKAEloASUgBJQAkpACSgBJZBTAv8Bn95SyLxeiksAAAAASUVORK5CYII="},"24df":function(t,e,s){t.exports=s.p+"img/communications.27c5c08d.png"},"2dad":function(t,e,s){},"2fd6":function(t,e,s){},"36ce":function(t,e,s){},5544:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"wrap"},[n("ul",[n("li",[n("img",{attrs:{src:s("6bf7")}}),n("span",[t._v("개인이력")])]),n("li",[n("img",{attrs:{src:s("615c")}}),n("span",[t._v("프로젝트")])]),n("li",[n("img",{attrs:{src:s("b55a")}}),n("span",[t._v("퍼블리싱")])]),n("li",[n("img",{attrs:{src:s("2429")}}),n("span",[t._v("개발")])]),n("li",[n("img",{attrs:{src:s("fc8a")}}),n("span",[t._v("Vue.js")])]),n("li",[n("img",{attrs:{src:s("f267")}}),n("span",[t._v("React")])])])])])}]},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("router-view"),s("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"head"},[n("div",{staticClass:"wrap"},[n("span",[t._v("프론트 엔드 개발자 김다운 포트폴리오 (vue 버전입니다.)")])])]),n("div",{staticClass:"gnb wrap"},[n("img",{attrs:{src:s("17e3")}}),n("ul",[n("li",{staticClass:"orange"},[t._v("참여한 프로젝트")]),n("li",[t._v("보유 기술")]),n("li",[t._v("Contact")])])])])}],c={name:"Header"},o=c,u=(s("13b0"),s("2877")),m=Object(u["a"])(o,r,l,!1,null,null,null),p=m.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("h2",[t._v("Contact")]),n("p",[t._v("웹 개발자 김다운")]),n("div",{staticClass:"foot wrap"},[n("ul",[n("li",[n("img",{attrs:{src:s("7530")}}),n("h3",[t._v("Phone")]),n("p",[t._v("010-2386-6487")])]),n("li",[n("img",{attrs:{src:s("24df")}}),n("h3",[t._v("Email")]),n("p",[t._v("hec8897@naver.com")])]),n("li",[n("img",{attrs:{src:s("b95c")}}),n("h3",[t._v("Address")]),n("p",[t._v("경기도 김포시 걸포1로 40 104동 903호")])])])])])}],f=(s("87d2"),{}),g=Object(u["a"])(f,A,d,!1,null,null,null),b=g.exports,h={components:{Header:p,Footer:b}},v=h,C=(s("5c0b"),Object(u["a"])(v,a,i,!1,null,null,null)),y=C.exports,j=(s("d3b7"),s("8c4f")),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("mainSection1"),s("mainlnb"),s("Modal"),s("transition",{attrs:{name:"fadeup"}},[t.show>0?s("mainlist",{attrs:{cate:"참여한 프로젝트",dataList:t.AlllistData}}):t._e()],1),s("transition",{attrs:{name:"fadeup"}},[t.show>0?s("mainlist",{attrs:{cate:"퍼블리싱",dataList:t.List2}}):t._e()],1),s("transition",{attrs:{name:"fadeup"}},[t.show>0?s("mainlist",{attrs:{cate:"개발",dataList:t.List3}}):t._e()],1),s("transition",{attrs:{name:"fadeup"}},[t.show>3?s("banner"):t._e()],1)],1)},B=[],w=(s("4de4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?t._e():s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"modal"},[s("div",{staticClass:"modal_box"},[s("div",{staticClass:"left_modal",style:{"background-image":"url("+t.portfolioData.mainImg+")"}}),s("div",{staticClass:"right_modal"},[s("img",{staticClass:"x_btn",attrs:{src:"img/x_btn.png"},on:{click:t.closeBtn}}),s("h2",{domProps:{innerHTML:t._s(t.portfolioData.title)}}),s("h3",{staticClass:"sub_tit",domProps:{innerHTML:t._s(t.portfolioData.subTit)}}),s("h4",[t._v("기술 스택")]),s("ul",t._l(t.stacks,(function(t,e){return s("li",{key:e},[s("img",{attrs:{src:"img/"+t+".png"}})])})),0),s("h4",[t._v("홈페이지 간단 설명")]),s("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.portfolioData.desc)}}),s("div",{staticClass:"btns"},[t.portfolioData.port?s("a",{staticClass:"port_btn btn",attrs:{href:"",target:"blank"}},[t._v("상세포트폴리오(pdf)")]):t._e(),s("a",{staticClass:"link_btn btn",attrs:{href:t.portfolioData.siteUrl,target:"blank"}},[t._v("사이트 방문하기")])])]),s("p",{staticClass:"btn close_btn",on:{click:t.closeBtn}},[t._v("닫기")])])])])}),H=[],P=new n["a"],x={props:["datalist"],data:function(){return{show:!0,portfolioData:"",stacks:""}},created:function(){var t=this;P.$on("DataModal",(function(e){t.portfolioData=e,t.stacks=e.stack,t.show=!1}))},methods:{closeBtn:function(){this.show=!0}}},E=x,L=(s("0a62"),Object(u["a"])(E,w,H,!1,null,null,null)),U=L.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-section1"},[s("div",{staticClass:"wrap"},[s("p",[t._v("매일매일 성장하는")]),s("h1",[t._v("웹 프론트엔드 개발자 김다운")]),t.show?s("vue-typed-js",{attrs:{strings:["웹사이트 개발, 웹 퍼블리싱"],typeSpeed:50}},[s("div",{staticClass:"input_box"},[s("span",{staticClass:" typing"})])]):t._e()],1)])},O=[],D={data:function(){return{show:!0}}},G=D,R=(s("9492"),Object(u["a"])(G,I,O,!1,null,null,null)),S=R.exports,Z=s("0063"),K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap main-list main-list1"},[s("h2",[t._v(t._s(t.cate))]),s("carousel",{attrs:{"per-page-custom":[[960,5],[768,4],[480,3],[360,2]],paginationColor:"#d0d0d0",paginationActiveColor:"#ffd400"}},t._l(t.lists,(function(e,n){return s("slide",{key:n,on:{slideclick:function(s){return t.ItemClick(e)}}},[s("item",{attrs:{item:e}})],1)})),1)],1)},T=[],M=s("40cf"),F=s.n(M),Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide_inner"},[s("div",{staticClass:"prev_img",style:{"background-image":"url("+this.item.thumnail+")"}},[s("div",{staticClass:"inner"},[s("h3",[t._v(t._s(t.item.title))])])])])},q=[],V={props:["item"]},W=V,J=(s("f8e7"),Object(u["a"])(W,Q,q,!1,null,null,null)),N=J.exports,Y={props:["cate","dataList","show"],data:function(){return{lists:""}},components:{Carousel:M["Carousel"],Slide:M["Slide"],item:N},mounted:function(){var t=this;this.lists=["0","0","0","0","0","0"],setTimeout((function(){t.lists=t.dataList}),100)},methods:{ItemClick:function(t){P.$emit("DataModal",t)}}},z=Y,X=(s("9e9b"),Object(u["a"])(z,K,T,!1,null,null,null)),_=X.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("div",{staticClass:"wrap"},[s("h2",[t._v("성장하는 개발자 김다운"),s("br"),t._v("javascript, html, css, php, mysql")]),s("div",{staticClass:"btn btn_contact"},[t._v(" 이력 보기 ")])])])}],et=(s("82e0"),{}),st=Object(u["a"])(et,$,tt,!1,null,null,null),nt=st.exports,at={name:"Home",components:{mainSection1:S,mainlnb:Z["default"],mainlist:_,banner:nt,Modal:U},data:function(){return{AlllistData:"",List2:"",List3:"",show:0}},created:function(){this.AlllistData=[{idx:0,title:"보험친구들",subTit:"당신의 삶을 더욱 든든하게 BM Company",desc:"BM Company 보험사 홈페이지 제작 단독 퍼블리싱, CSS 에니메이션 삽입, 단독 개발 참여 보험사 고객 관리 시스템 연결, 보험료 간편계산, 보험 간편비교 서비스 제공, 무료상담 신청(php) 포함",siteUrl:"http://bmcompany.kr/",thumnail:"img-0/thumnail.jpg",mainImg:"img-0/main.jpg",class:"public",navClass:"dev",pub:!0,dev:!0,port:"1",stack:["html","css","less","js","jquery","php"],makeby:{fn:"less,es6",Bn:"PHP mysql"}},{idx:5,title:"디비플레이스",subTit:"보험 상담 영업&middot;홍보 컨텐츠 제공",siteUrl:"http://dbplace.kr/",desc:"보험 상담사 영업,홍보 컨텐츠 제공 Vue.js, webpack 활용 제작 카테고리별 등록 활용 분리 (카드뉴스,문자메세지,랜딩페이지) 비회원, 유료회원, 무료회원 제공 기능 차별화",thumnail:"img-5/thumnail.jpg",mainImg:"img-5/main.jpg",class:"public",pub:!0,dev:!0,port:"1",navClass:"vue",stack:["html","css","js","vue","php","webpack"],makeby:{fn:"scss,es6,vue.js",Bn:"PHP mysql"}},{idx:10,title:"유전자검사 랜딩페이지",subTit:"상위 1% 건강관리 비법",desc:"유전자검사 보험 영업 홍보 랜딩페이지 CSS 에니메이션 삽입 상담신청(PHP)",siteUrl:"http://dbplace.kr/default_lifecare/index.html",thumnail:"img-10/thumnail.jpg",mainImg:"img-10/main.jpg",class:"public",pub:!0,dev:!1,navClass:"pub",stack:["html","css","less","js","jquery","php"],makeby:{fn:"less,es6",Bn:"PHP mysql"}},{idx:11,title:"상담사 개인 랜딩페이지",subTit:"당신만을 위한 라이프 뉴케어",desc:"상담사 개인 랜딩페이지는 관리자페이지에서 신청가능 디자이너가 사진 편집 업로드 후 사용 승인 개별 상품메뉴 오픈 가능, 개인 문구 및 개인 이력 등록 가능 상담 문의는 관리자페이지로 연동",siteUrl:"http://dbplace.kr/bminsu/index.html?key=sample",thumnail:"img-11/thumnail.jpg",mainImg:"img-11/main.jpg",class:"public",pub:!0,dev:!0,navClass:"dev",stack:["html","css","less","js","jquery","php"],makeby:{fn:"less,es6",Bn:"PHP mysql"}},{idx:7,title:"재무 검사 랜딩페이지",subTit:"재무 심리 상태 검사 랜딩페이지",siteUrl:"http://dbplace.kr/lifeup/index.html",desc:"재무 심리 검사 페이스북 홍보 페이지 설문 컨텐츠 제공 설문결과 DB 저장 후 관리자페이지 출력",thumnail:"img-6/thumnail.jpg",mainImg:"img-6/main.jpg",class:"public",pub:!0,dev:!0,navClass:"pub",stack:["html","css","js","jquery","php"],makeby:{fn:"css,es6",Bn:"PHP mysql"}},{idx:9,title:"BM DB관리자페이지",subTit:"보험 상담 영업 DB관리 페이지",siteUrl:"http://dbplace.kr/bmadmin",thumnail:"img-9/thumnail.png",desc:"보험 상담 영업 DB관리 홈페이지,업체 소속 상담사 회원 가입 및 회원 권한 조정, 개별 상담사 별로 분배받은 DB 확인, 랜딩페이지 등에서 유입된 DB 확인, 유입 DB 상담사 별로 분배, DB 통계보기",mainImg:"img-9/main.jpg",class:"public",pub:!1,dev:!0,port:"1",navClass:"dev",stack:["html","css","less","js","php"],makeby:{fn:"less,es6",Bn:"PHP mysql"}},{idx:2,title:"투게더인스",subTit:"도전을 두려워 하지 않고 오직 고객만족을 위한 변화를 선도하는 투게더인스",siteUrl:"http://tinsu.co.kr/",desc:"투게더인스(보험사) 홈페이지 퍼블리싱 작업 진행 es6 활용 본문 비동기 웹 제작, CSS 에니메이션 작성",thumnail:"img-2/thumnail.jpg",mainImg:"img-2/main.jpg",class:"public",pub:!0,dev:!1,port:"1",navClass:"pub",stack:["html","css","js","jquery"],makeby:{fn:"css,es6",Bn:""}},{idx:1,title:"씨이오메이커",subTit:"유니크한 경험과 그 진정한 가치를 위해 끊임없이 도전하는 디지털 에이전시 CEOMAKER",siteUrl:"http://ceomaker.kr/test",desc:"<a href='http://ceomaker.kr' target='blank'>원래 사이트</a> Vue.js 변형 작업(중단) 단독 참여 (원 사이트 개발 참여), CSS 에니메이션 삽입 백엔드 연결 상담신청(php)",thumnail:"img-1/thumnail.jpg",mainImg:"img-1/main.jpg",class:"public",navClass:"dev",pub:!1,dev:!0,port:"1",stack:["html","css","sass","js","vue","php","webpack"],makeby:{fn:"css,es6",Bn:"PHP mysql"}},{idx:3,title:"율 디자인 인테리어",subTit:"삶이 풍요로워지는 당신의 미래를 위한 한 걸음 한 걸음 율 디자인 인테리어",siteUrl:"http://yuldesign.kr/",desc:"율 디자인 인테리어 (실내 인테리어 업체) 홈페이지, 관리자 페이지 작업 진행, Vue.js 리스트 바인딩, summernote 프레임워크 활용 게시판 연동 및 게시물 보기, 상담 신청 ",thumnail:"img-3/thumnail.jpg",mainImg:"img-3/main.jpg",class:"public",pub:!1,dev:!0,port:"1",navClass:"vue",stack:["html","css","js","vue","php"],makeby:{fn:"css,es6,vue.js",Bn:"PHP mysql"}},{idx:4,title:"금강이앤씨",subTit:"변화와 혁신으로 지속 성장하는 금강이앤씨",siteUrl:"http://kumkangenc.kr/",desc:"금강이앤씨 (부동산&middot;분양 업체) 홈페이지 퍼블리싱, 개발 단독 진행 현장 사진 등록, summernote 프레임워크 활용 게시판 연동 및 게시물 보기, 상담 신청, 상담사 회원 기능 (상담 정보 공유 기능)",thumnail:"img-4/thumnail.jpg",mainImg:"img-4/main.jpg",class:"public",pub:!0,dev:!0,port:"1",navClass:"vue",stack:["html","css","js","vue","php","webpack"],makeby:{fn:"css,es6,vue.js",Bn:"PHP mysql"}},{idx:6,title:"관리자페이지",subTit:"홈페이지 관리툴",siteUrl:"http://kumkangenc.kr/admin/",desc:"금강이앤씨, 씨이오메이커, 율디자인에 활용된 사이트 관리페이지 개별 주문제작 영역 있음 주요기능 회원관리, 사진게시판, summernote 게시판 작성 등",thumnail:"img-8/thumnail.jpg",mainImg:"img-8/main.jpg",class:"public",pub:!1,dev:!0,navClass:"dev",stack:["html","css","js","vue","php","webpack"],makeby:{fn:"css,es6,vue.js",Bn:"PHP mysql"}},{idx:8,title:"FX-ONE",subTit:"fx 마진 거래 지점 홍보 랜딩",siteUrl:"http://dhimc.co.kr/mt.html",desc:"fx 마진거래 지점별 홍보 랜딩페이지 URL로 지점별 접속 구분, CSS 에니메이션, 유튜브 iframe 삽입",thumnail:"img-7/thumnail.jpg",mainImg:"img-7/main.jpg",class:"public",pub:!0,dev:!1,navClass:"pub",stack:["html","css","js","jquery"]},{idx:12,title:"쇼핑몰 마케팅 교육 랜딩페이지",subTit:"쇼핑몰 창업자를 위한 홍보 마케팅 과정",siteUrl:"http://ceomaker.kr/shopping/",desc:"쇼핑몰 마케팅 교육 홍보 랜딩페이지, CSS 에니메이션, 상담신청(PHP)",thumnail:"img-12/thumnail.jpg",mainImg:"img-12/main.jpg",class:"public",pub:!0,dev:!1,navClass:"pub",stack:["html","css","js","jquery"]}],this.List2=this.AlllistData.filter((function(t){return 1==t.pub})),this.List3=this.AlllistData.filter((function(t){return 1==t.dev}))},mounted:function(){var t=this;document.addEventListener("scroll",(function(){t.bottomScroll()})),this.show+=2},methods:{bottomScroll:function(){var t=window.pageYOffset,e=window.innerHeight,s=document.body.offsetHeight,n=Math.max(s-(t+e),0);n<=300&&(this.show+=.5)}}},it=at,rt=(s("21bb"),Object(u["a"])(it,k,B,!1,null,null,null)),lt=rt.exports;n["a"].use(j["a"]);var ct=[{path:"/",name:"Home",component:lt},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],ot=new j["a"]({mode:"history",base:"/vue_portfolio/",routes:ct}),ut=ot,mt=s("2f62");n["a"].use(mt["a"]);var pt=new mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),At=s("a4c0"),dt=s("8206"),ft=s.n(dt),gt=s("4a1b"),bt=s.n(gt);n["a"].use(bt.a,ft.a),n["a"].use(F.a),n["a"].use(At["default"]),n["a"].config.productionTip=!1,new n["a"]({router:ut,store:pt,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},"60b8":function(t,e,s){},"614c":function(t,e,s){},"615c":function(t,e,s){t.exports=s.p+"img/lnb-project.e595ceb0.png"},"6bf7":function(t,e){t.exports="data:image/png;base64,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"},"6ecd":function(t,e){},"727c":function(t,e,s){},7530:function(t,e,s){t.exports=s.p+"img/touch-screen.32d7c957.png"},"82e0":function(t,e,s){"use strict";var n=s("2fd6"),a=s.n(n);a.a},"87d2":function(t,e,s){"use strict";var n=s("36ce"),a=s.n(n);a.a},"8f31":function(t,e,s){},"90f1":function(t,e,s){"use strict";var n=s("b2a6"),a=s.n(n);a.a},9492:function(t,e,s){"use strict";var n=s("8f31"),a=s.n(n);a.a},"9c0c":function(t,e,s){},"9e9b":function(t,e,s){"use strict";var n=s("a944"),a=s.n(n);a.a},a944:function(t,e,s){},b2a6:function(t,e,s){},b55a:function(t,e){t.exports="data:image/png;base64,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"},b83a:function(t,e,s){"use strict";var n=s("6ecd"),a=s.n(n);e["default"]=a.a},b95c:function(t,e,s){t.exports=s.p+"img/interface.d2df938c.png"},f267:function(t,e,s){t.exports=s.p+"img/lnb-react.b504856c.png"},f8e7:function(t,e,s){"use strict";var n=s("727c"),a=s.n(n);a.a},fc8a:function(t,e,s){t.exports=s.p+"img/lnb-vuejs.64bfa0e0.png"}});
//# sourceMappingURL=app.7c35aa82.js.map