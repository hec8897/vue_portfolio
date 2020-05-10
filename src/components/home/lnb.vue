<template>
    <nav>
        <div class="wrap">
            <ul>
                <li>
                    <img src='../../assets/lnb-icon.png'>
                    <span>개인이력</span>
                </li>
                <li>
                    <img src='../../assets/lnb-project.png'>
                    <span>프로젝트</span>
                </li>
                <li>
                    <img src='../../assets/html.png'>
                    <span>퍼블리싱</span>
                </li>
                <li>
                    <img src='../../assets/lnb-dev.png'>
                    <span>개발</span>
                </li>
                <li>
                    <img src='../../assets/lnb-vuejs.png'>
                    <span>Vue.js</span>
                </li>
                <li>
                    <img src='../../assets/lnb-react.png'>
                    <span>React</span>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
</script>

<style lang="scss">
nav{
    div.wrap{
        max-width: 1200px;
        height: 150px;
        background: #fff;
        margin-top: -70px;
        border-radius: 50px;;
        ul{
            padding: 10px 0px;
            text-align: center;
            li{
                width: calc(70%/6);
                display: inline-block;
                margin: 10px;
                cursor: pointer;
                transition: .1s ease-in;
                img{
                    max-width: 40px;
                    display: block;
                    margin: 5px auto;
                }
                span{
                    font-size: .875rem;
                }
                &:hover{
                    transform: translateY(-5px);
                }
            }
        }
    }
}
    
</style>