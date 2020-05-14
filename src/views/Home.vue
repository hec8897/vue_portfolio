<template>
  <div class="home">
    <mainSection1 />
    <mainlnb />
    <Modal />
    <transition name="fadeup">
      <mainlist cate='참여한 프로젝트' v-bind:dataList="AlllistData" v-if="show>0"/>
    </transition>

    <transition name="fadeup">
    <mainlist cate='퍼블리싱' v-bind:dataList="List2"  v-if="show>0"/>
    </transition>

    <transition name="fadeup">
    <mainlist cate='개발' v-bind:dataList="List3" v-if="show>0"/>
    </transition>

    <transition name="fadeup">
      <banner  v-if="show>3"/>
    </transition>



  </div>
</template>

<script>
// import axios from 'axios'
import Modal from '@/components/home/modal'
import mainSection1 from '@/components/home/header-section'
import mainlnb from '@/components/home/lnb'
import mainlist from '@/components/home/list-section1'
import banner from '@/components/home/banner'

export default {
  name: 'Home',
  components: {
    mainSection1,
    mainlnb,
    mainlist,
    banner,
    Modal
  },
  data(){
    return{
      AlllistData:"",
      List2:"",
      List3:"",
      show:0,
    }
  },
    created() {
                this.AlllistData = [{
                                    "idx":13,
                                    "title":"Vue 포트폴리오",
                                    "subTit":"프론트 엔드 개발자 김다운",
                                    "siteUrl":"https://hec8897.github.io/vue_portfolio/",
                                    "git":"https://github.com/hec8897/vue_portfolio",
                                    "thumnail":"img-13/thumnail.jpg",
                                    "desc":"Vue-cli로 제작한 포트폴리오 SASS 활용",
                                    "mainImg":"img-13/main.jpg",
                                    "class":"public",
                                    "pub":false,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"dev",
                                    "stack":["html","css","sass","js","vue"],
                                    "makeby":{
                                        "fn":"less,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":0,
                                    "title":"보험친구들",
                                    "subTit":"당신의 삶을 더욱 든든하게 BM Company",
                                    "desc":"BM Company 보험사 홈페이지 제작 단독 퍼블리싱, CSS 에니메이션 삽입, 단독 개발 참여 보험사 고객 관리 시스템 연결, 보험료 간편계산, 보험 간편비교 서비스 제공, 무료상담 신청(php) 포함",
                                    "siteUrl":"http://bmcompany.kr/",
                                    "git":"https://github.com/hec8897/bm_main",
                                    "thumnail":"img-0/thumnail.jpg",
                                    "mainImg":"img-0/main.jpg",
                                    "class":"public",
                                    "navClass":"dev",
                                    "pub":true,
                                    "dev":true,
                                    "port":false,
                                    "stack":["html","css","less","js","jquery","php"],
                                    "makeby":{
                                        "fn":"less,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":5,
                                    "title":"디비플레이스",
                                    "subTit":"보험 상담 영업&middot;홍보 컨텐츠 제공",
                                    "siteUrl":"http://dbplace.kr/",
                                    "git":false,
                                    "desc":"보험 상담사 영업,홍보 컨텐츠 제공 Vue.js, webpack 활용 제작 카테고리별 등록 활용 분리 (카드뉴스,문자메세지,랜딩페이지) 비회원, 유료회원, 무료회원 제공 기능 차별화",
                                    "thumnail":"img-5/thumnail.jpg",
                                    "mainImg":"img-5/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"vue",
                                    "stack":["html","css","js","vue","php","webpack"],
                                    "makeby":{
                                        "fn":"scss,es6,vue.js",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                
                                {
                                    "idx":10,
                                    "title":"유전자검사 랜딩페이지",
                                    "subTit":"상위 1% 건강관리 비법",
                                    "desc":"유전자검사 보험 영업 홍보 랜딩페이지 CSS 에니메이션 삽입 상담신청(PHP)",
                                    "siteUrl":"http://dbplace.kr/default_lifecare/index.html",
                                    "git":"https://github.com/hec8897/randpage/tree/master/can",
                                    "thumnail":"img-10/thumnail.jpg",
                                    "mainImg":"img-10/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":false,
                                    "port":false,
                                    "navClass":"pub",
                                    "stack":["html","css","less","js","jquery","php"],
                                    "makeby":{
                                        "fn":"less,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":11,
                                    "title":"상담사 개인 랜딩페이지",
                                    "subTit":"당신만을 위한 라이프 뉴케어",
                                    "desc":"상담사 개인 랜딩페이지는 관리자페이지에서 신청가능 디자이너가 사진 편집 업로드 후 사용 승인 개별 상품메뉴 오픈 가능, 개인 문구 및 개인 이력 등록 가능 상담 문의는 관리자페이지로 연동",
                                    "siteUrl":"http://dbplace.kr/bminsu/index.html?key=sample",
                                    "git":"https://github.com/hec8897/randpage/tree/master/public_rending_ver2",
                                    "thumnail":"img-11/thumnail.jpg",
                                    "mainImg":"img-11/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"dev",
                                    "stack":["html","css","less","js","jquery","php"],
                                    "makeby":{
                                        "fn":"less,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":7,
                                    "title":"재무 검사 랜딩페이지",
                                    "subTit":"재무 심리 상태 검사 랜딩페이지",
                                    "siteUrl":"http://dbplace.kr/lifeup/index.html",
                                    "git":"https://github.com/hec8897/randpage/tree/master/jemo1205",
                                    "desc":"재무 심리 검사 페이스북 홍보 페이지 설문 컨텐츠 제공 설문결과 DB 저장 후 관리자페이지 출력",
                                    "thumnail":"img-6/thumnail.jpg",
                                    "mainImg":"img-6/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"pub",
                                    "stack":["html","css","js","jquery","php"],
                                    "makeby":{
                                        "fn":"css,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":9,
                                    "title":"BM DB관리자페이지",
                                    "subTit":"보험 상담 영업 DB관리 페이지",
                                    "siteUrl":"http://dbplace.kr/bmadmin",
                                    "git":false,
                                    "thumnail":"img-9/thumnail.png",
                                    "desc":"보험 상담 영업 DB관리 홈페이지,업체 소속 상담사 회원 가입 및 회원 권한 조정, 개별 상담사 별로 분배받은 DB 확인, 랜딩페이지 등에서 유입된 DB 확인, 유입 DB 상담사 별로 분배, DB 통계보기",
                                    "mainImg":"img-9/main.jpg",
                                    "class":"public",
                                    "pub":false,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"dev",
                                    "stack":["html","css","less","js","php"],
                                    "makeby":{
                                        "fn":"less,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":2,
                                    "title":"투게더인스",
                                    "subTit":"도전을 두려워 하지 않고 오직 고객만족을 위한 변화를 선도하는 투게더인스",
                                    "siteUrl":"http://tinsu.co.kr/",
                                    "git":"https://github.com/hec8897/randpage/tree/master/together",
                                    "desc":"투게더인스(보험사) 홈페이지 퍼블리싱 작업 진행 es6 활용 본문 비동기 웹 제작, CSS 에니메이션 작성",
                                    "thumnail":"img-2/thumnail.jpg",
                                    "mainImg":"img-2/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":false,
                                    "port":false,
                                    "navClass":"pub",
                                    "stack":["html","css","js","jquery"],
                                    "makeby":{
                                        "fn":"css,es6",
                                        "Bn":""
                                    }
                                },
                                {
                                    "idx":1,
                                    "title":"씨이오메이커",
                                    "subTit":"유니크한 경험과 그 진정한 가치를 위해 끊임없이 도전하는 디지털 에이전시 CEOMAKER",
                                    "siteUrl":"http://ceomaker.kr/test",
                                    "git":"https://github.com/hec8897/projectceomaker/tree/master/vueceomaker",
                                    "desc":"<a href='http://ceomaker.kr' target='blank'>원래 사이트</a> Vue.js 변형 작업(중단) 단독 참여 (원 사이트 개발 참여), CSS 에니메이션 삽입 백엔드 연결 상담신청(php)",
                                    "thumnail":"img-1/thumnail.jpg",
                                    "mainImg":"img-1/main.jpg",
                                    "class":"public",
                                    "navClass":"dev",
                                    "pub":false,
                                    "dev":true,
                                    "port":false,
                                    "stack":["html","css","sass","js","vue","php","webpack"],
                                    "makeby":{
                                        "fn":"css,es6",
                                        "Bn":"PHP mysql"
                                    }
                                },


                                {
                                    "idx":3,
                                    "title":"율 디자인 인테리어",
                                    "subTit":"삶이 풍요로워지는 당신의 미래를 위한 한 걸음 한 걸음 율 디자인 인테리어",
                                    "siteUrl":"http://yuldesign.kr/",
                                    "git":"https://github.com/hec8897/yul_design",
                                    "desc":"율 디자인 인테리어 (실내 인테리어 업체) 홈페이지, 관리자 페이지 작업 진행, Vue.js 리스트 바인딩, summernote 프레임워크 활용 게시판 연동 및 게시물 보기, 상담 신청 ",
                                    "thumnail":"img-3/thumnail.jpg",
                                    "mainImg":"img-3/main.jpg",
                                    "class":"public",
                                    "pub":false,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"vue",
                                    "stack":["html","css","js","vue","php"],
                                    "makeby":{
                                        "fn":"css,es6,vue.js",
                                        "Bn":"PHP mysql"
                                    }
                                },
                                {
                                    "idx":4,
                                    "title":"금강이앤씨",
                                    "subTit":"변화와 혁신으로 지속 성장하는 금강이앤씨",
                                    "siteUrl":"http://kumkangenc.kr/",
                                    "git":"https://github.com/hec8897/keumkang",
                                    "desc":"금강이앤씨 (부동산&middot;분양 업체) 홈페이지 퍼블리싱, 개발 단독 진행 현장 사진 등록, summernote 프레임워크 활용 게시판 연동 및 게시물 보기, 상담 신청, 상담사 회원 기능 (상담 정보 공유 기능)" ,
                                    "thumnail":"img-4/thumnail.jpg",
                                    "mainImg":"img-4/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"vue",
                                    "stack":["html","css","js","vue","php","webpack"],
                                    "makeby":{
                                        "fn":"css,es6,vue.js",
                                        "Bn":"PHP mysql"
                                    }
                                },

                                {
                                    "idx":6,
                                    "title":"관리자페이지",
                                    "subTit":"홈페이지 관리툴",
                                    "siteUrl":"http://kumkangenc.kr/admin/",
                                    "git":"https://github.com/hec8897/keumkang/tree/master/admin",
                                    "desc":"금강이앤씨, 씨이오메이커, 율디자인에 활용된 사이트 관리페이지 개별 주문제작 영역 있음 주요기능 회원관리, 사진게시판, summernote 게시판 작성 등" ,
                                    "thumnail":"img-8/thumnail.jpg",
                                    "mainImg":"img-8/main.jpg",
                                    "class":"public",
                                    "pub":false,
                                    "dev":true,
                                    "port":false,
                                    "navClass":"dev",
                                    "stack":["html","css","js","vue","php","webpack"],
                                    "makeby":{
                                        "fn":"css,es6,vue.js",
                                        "Bn":"PHP mysql"
                                    }
                                },

                                {
                                    "idx":8,
                                    "title":"FX-ONE",
                                    "subTit":"fx 마진 거래 지점 홍보 랜딩",
                                    "siteUrl":"http://dhimc.co.kr/mt.html",
                                    "git":"https://github.com/hec8897/projectceomaker/tree/master/randpage/fx",
                                    "desc":"fx 마진거래 지점별 홍보 랜딩페이지 URL로 지점별 접속 구분, CSS 에니메이션, 유튜브 iframe 삽입",
                                    "thumnail":"img-7/thumnail.jpg",
                                    "mainImg":"img-7/main.jpg",
                                    "class":"public",
                                    "port":false,
                                    "pub":true,
                                    "dev":false,
                                    "navClass":"pub",
                                    "stack":["html","css","js","jquery"]
                                
                                },
                            

                                {
                                    "idx":12,
                                    "title":"쇼핑몰 마케팅 교육 랜딩페이지",
                                    "subTit":"쇼핑몰 창업자를 위한 홍보 마케팅 과정",
                                    "siteUrl":"http://ceomaker.kr/shopping/",
                                    "git":"https://github.com/hec8897/projectceomaker/tree/master/randpage/shopping",
                                    "desc":"쇼핑몰 마케팅 교육 홍보 랜딩페이지, CSS 에니메이션, 상담신청(PHP)",
                                    "thumnail":"img-12/thumnail.jpg",
                                    "mainImg":"img-12/main.jpg",
                                    "class":"public",
                                    "pub":true,
                                    "dev":false,
                                    "port":false,
                                    "navClass":"pub",
                                    "stack":["html","css","less","js","jquery"]
                                
                                }];
          this.List2 = this.AlllistData.filter(function(element){
          return element.pub == true;
          });

          this.List3 = this.AlllistData.filter(function(element){
          return element.dev == true;
          });
    },
  

    mounted(){

       document.addEventListener('scroll', () => {
            this.bottomScroll()
        })
        this.show +=2
    },
    methods:{
      bottomScroll(){
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let bottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0)

            if (bottom <= 300) {
              this.show +=0.5;
            }
      }
    }

}
</script>

<style lang="scss">
    .fadeup-enter-active, .fadeup-leave-active {
        animation: upAni .6s ease-in-out;
    }
    @keyframes upAni {
      0%{
        transform: translateY(15px);
        opacity: 0;
      }
      100%{
        opacity: 1;
        transform: translateY(0px);
      }
    }
  
</style>