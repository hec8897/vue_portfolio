<template>
    <transition name="fade" v-if='!show'>
    <div class='modal' >
        <div class='modal_box'>

            <div class='left_modal' 
            v-bind:style="{'background-image': `url(${portfolioData.mainImg})`}">
            </div>
            <div class='right_modal'>
                <h2>{{portfolioData.title}}<a v-bind:href="portfolioData.siteUrl" target="blank">사이트 방문하기</a></h2>
                <h3>{{portfolioData.subTit}}</h3>
            </div>
            <p class='btn' @click="closeBtn">닫기</p>

        </div>
    </div>
    </transition>
</template>

<script>
import { EventBus } from '../../EventBus'

export default {
    props:['datalist'],
    data(){
        return{
            show:true,
            portfolioData:""
        }
    },
    created(){
            EventBus.$on('DataModal',(Data)=>{
                this.portfolioData = Data;
                this.show = false
            })

    },
    methods:{
        closeBtn(){
            this.show = true
        }
    }
}
</script>

<style lang="scss">
    .fade-enter-active {
        animation: ModalRender .1s ease-in;
    }
    .fade-leave-active{
        animation: ModalRenderOut .1s ease-out;
    }
 
    div.modal{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #222, $alpha: .5);
        z-index: 999;
        top: 0;
        div.modal_box{
            width: 70%;
            height: 700px;
            box-sizing: border-box;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            div.left_modal{
                width: 50%;
                height: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top;
                float: left;
               
            }
            div.right_modal{
                width: 50%;
                height: 100%;
                float: right;
                 padding: 40px;
                box-sizing: border-box;
                h2{
                    font-size: 1.25rem;
                    a{
                        font-size: 0.75rem;
                        color: #666;
                        margin-left: 10px;
                    }
                }
                h3{
                    margin: 10px 0px;
                    font-weight: normal;
                }
            }
            p.btn{
                width: 180px;
                height: 40px;
                background: #d0d0d0;
                position: absolute;
                left: 50%;
                bottom: 5%;
                transform: translateX(-50%);
            }
        }
    }

    @keyframes ModalRender{
        0%{
            opacity: 0;
            transform: translateY(-10px);
        }

        100%{
            opacity: 1.0;
            transform: translateY(0px);
        }
    }
    @keyframes ModalRenderOut{
           0%{
            opacity: 1;
            transform: translateY(0px);
        }

        100%{
            opacity: 1.0;
            transform: translateY(10px);
        }
    }

    
</style>