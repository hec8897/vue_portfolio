<template>
    <div class='main-section1'>
        <div class="wrap">
            <p>매일매일 성장하는</p>
            <h1>웹 프론트엔드 개발자 김다운</h1>
         
                <vue-typed-js :strings="['웹사이트 개발, 웹 퍼블리싱']" :typeSpeed='50' v-if='show'>
                     <div class='input_box'>
                         <span class=' typing'></span>
                    </div>
                </vue-typed-js>

        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            show:true
        }
    }
}
</script>
<style lang="scss">
@import '../../define.scss';
div.main-section1{
    top: 0;
    width: 100%;
    height: 450px;
    background-image: linear-gradient(to bottom, #fdf4b3, lighten(#ffd400,10%));
    z-index: -1;
    box-sizing: border-box;
    div.wrap{
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;

        p{
            margin: 15px 0px;
        }
        h1{
            font-size: 2rem;
            font-weight: normal;
        }
        div.input_box{
            cursor: pointer;
            width: 550px;
            height: 50px;
            margin: 20px 0px;
            padding: 0px 10px;
            line-height: 50px;
            background-color: #fff;
            background-image: url(../../assets/ic_search.png);
            background-size: 25px;
            background-repeat: no-repeat;
            background-position: 98% 50%;
            box-sizing: border-box;
            text-align: left;
            border-radius: 5px;;
            color: #666;
        }
    }

}
    
</style>