<template>
    <div class='skill'>
        <div class="wrap">
            <h2 class='tit'>SKILL</h2>
            <ul>
                <li>
                    <div class='label'>
                        <img src='img/html.png'>
                    </div>
                    <div class='desc'>
                        <p>SEO 관련 코딩 경험</p>
                        <p>구글,네이버 웹 마스터 도구 활용 경험</p>
                    </div>
                </li>
                  <li>
                    <div class='label'>
                        <img src='img/css.png'>
                    </div>
                    <div class='desc'>
                        <p>홈페이지, 랜딩페이지 퍼블리싱 경험</p>
                        <p>반응형 웹 퍼블리싱 경험</p>
                        <p>keyframe 활용 에니메이션 제작 가능</p>
                        <p>css preprocessor (LESS,SASS) 활용</p>
                    </div>
                </li>

                <li>
                    <div class='label'>
                        <img src='img/js.png'>
                    </div>
                    <div class='desc'>
                        <p>es6 문법 활용 개발</p>
                        <p>node.js npm 패키지 활용</p>
                        <p>jquery 활용</p>
                    </div>
                </li>

                    <li>
                    <div class='label'>
                        <img src='img/vue.png'>
                    </div>
                    <div class='desc'>
                        <p>vue.js 활용한 SPA 개발 경험</p>
                        <p>vue-cli, vue inline(webpack 모듈) 모두 활용</p>
                        <p>vue-router, vuex, axios 모듈 활용</p>
                    </div>
                </li>
                     <li>
                    <div class='label'>
                        <img src='img/php.png'>
                    </div>
                    <div class='desc'>
                        <p>로그인 세션관리, CRUD 게시판 제작가능</p>
                        <p>ajax 데이터 처리를 위한 json API</p>
                        <p>mysql 연동 , 데이터 처리</p>
                    </div>
                </li>
                       <li>
                    <div class='label'>
                        <img src='img/github.png'>
                    </div>
                    <div class='desc'>
                        <p><a href="https://github.com/hec8897">개인 github 방문</a></p>
                        <p>프로젝트 버전관리 경험</p>
                        <p>소스 트리 GUI 사용</p>
                    </div>
                </li>
                       <li>
                    <div class='label'>
                        <img src='img/docs.png'>
                    </div>
                    <div class='desc'>
                        <p>ITQ 마스터 (MS 워드,엑셀, 파워포인트)</p>
                        <p>컴퓨터 활용 능력 1급</p>
                    </div>
                </li>
                       <li>
                    <div class='label'>
                        <img src='img/photoshop.png'>
                    </div>
                    <div class='desc'>
                        <p>간단한 이미지 편집 작업</p>
                        <p>디자인 간단 수정 가능</p>
                    </div>
                </li>
            </ul>            

        </div>
    </div>
</template>

<style lang="scss">
div.skill{
    // background: #d0d0d0;
    background-image: linear-gradient(to bottom, #fdf4b3, lighten(#ffd400,10%));
    padding: 50px 0px;
    box-sizing: border-box;
    ul{
        width: 100%;
            text-align: center;
        li{
            width: 20%;
            list-style-type: none;
            display: inline-block;
            text-align: center;
            margin: 10px;
            vertical-align: top;
            padding: 0px 20px;
            margin-bottom: 20px;
            @media (max-width: 1024px) {
                width: 31%;
                margin: 20px 0px;


            }

            @media (max-width: 767px) {
                width: 40%;
                margin: 10px 0px;
                padding: 0px 10px;
            }


            div.label{
                margin-bottom: 30px;
            }
            div.desc{
                p{
                    margin: 10px 0px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    @media (max-width: 767px) {
                        font-size: 0.875rem;
                    }

                }
            }
        }
    }
}
    
</style>