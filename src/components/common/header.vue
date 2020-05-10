<template>
    <header>
        <div class="head">
            <div class="wrap">
            <span>프론트 엔드 개발자 김다운 포트폴리오 (vue 버전입니다.)</span>
       
            </div>
        </div>
        <div class="gnb wrap">
                <img src="../../assets/vue_dawoon_logo.png">
            <ul>
                <li class='orange'>참여한 프로젝트</li>
                <li>보유 기술</li>
                <li>Contact</li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    name:'Header'
}
</script>

<style lang="scss">
header{
    width: 100%;
    position: absolute;
}
div.head{

    text-align: left;
    padding: 10px 0px;
    border-bottom: 1px solid #d0d0d0;
    background-color: rgba(255,255,255,0);;
    span{
        font-size: 12px;
        color: #444;
        font-weight: normal;
    }
}
div.gnb{
    text-align: left;
    padding: 20px 0px;
    position: relative;
    img{
        width: 91px;
    }
    ul{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        li{
            display: inline;
            margin-left: 20px;
            font-size: 13px;;
            cursor: pointer;
            &.orange{
                color:#fb842d;
            }
            &:nth-last-child(1){
                background: #116ad4;
                padding: 8px 16px;
                width: 120px;
                border-radius: 5px;
                color: #fff;
                position: relative;
            }

        }
    }
}
    
</style>