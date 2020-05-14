<template>
    <div class='banner'>
        <div class="wrap">
            <h2>성장하는 개발자 김다운<br>javascript, html, css, php, mysql</h2>
            <div class="btn btn_contact">
                이력 보기
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    div.banner{
        padding: 50px 0px;
        box-sizing: border-box;
        position: relative;
        div.wrap{
            padding: 60px 20px;
            box-sizing: border-box;
            background-image: url('../../assets/banner1.png');
            background-size: cover;
            background-position: center;
               @media (max-width: 767px) {
                text-align: center;
                
            }
        }
        h2{
            display: inline;
            font-size: 1.25rem;
            color: #fff;
            line-height: 1.5rem;
               @media (max-width: 767px) {
                    font-size: 1.125rem;

               }

         
        }
        div.btn{
            cursor: pointer;
            padding: 20px 50px;
            border-radius: 5px;
            background: #fff;
            font-size: 0.875rem;
            display: inline;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);

            display: none;
        }
    }
    
</style>