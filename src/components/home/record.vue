<template>
    <div class='record'>
        <h2 class='tit'>ABOUT</h2>
        <div class='wrap'>
            <div class='con1 con'>
            <div class='content photo'></div>
            <div class='content info'>
                <h3>김다운</h3>
                <h2>KIM DA WOON</h2>
                <div class='line'></div>
                <p>1993.04.08</p>
                <ul>
                    <li><b>2012.02</b> 명덕고등학교 졸업 </li>
                    <li><b>2019.02</b> 대림대학교 모바일인터넷과 졸업</li>
                    <li><b>2019.03</b> BMCOMPANY 입사 마케팅팀 웹개발자</li>
                    <li><b>2020.03</b> 대림대학교 학사과정 입학(야간)</li>
                    <li><b>2020.04</b> BMCOMPANY 퇴사</li>

                </ul>

          
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
div.record{
        padding: 50px 0px;
    box-sizing: border-box;
    div.con{
            text-align: center;

        div.content{
            vertical-align: top;
        }
        div.photo{
            display: inline-block;
            width: 270px;
            height: 350px;
            background-image: url('../../assets/profile.jpg');
            background-size: cover;
            background-position:center;
            margin-right: 30px;
            @media (max-width: 767px) {
                margin-right: 0px;
                margin-bottom: 30px;
                
            }
        }
        div.info{
            width: 50%;
            display: inline-block;
            @media (max-width: 767px) {
                width: 80%;
            }

            h3{
                font-size: 1.25rem;
            }
            h2{
                font-size: 1.5rem;
                margin: 10px 0px;
            }
            div.line{
                width: 20px;
                height: 2px;
                margin: 20px auto;
                background: #222;
            }
            p{
                width: 100%;
            }
            ul{
                margin-top: 40px;
                @media (max-width: 767px) {
                    text-align: left;
                }

                li{
                    list-style-type: none;
                    margin-bottom: 10px;
                    @media (max-width: 767px) {
                        font-size: 0.875rem;
                }
                    
                   b{
                       margin-right: 5px;
                   }
                }
            }
        }
    }
}
    
</style>