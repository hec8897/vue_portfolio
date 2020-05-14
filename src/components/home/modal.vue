<template>
    <transition name="fade" v-if='!show'>
    <div class='modal' >
        <div class='modal_box'>
            <div class='left_modal' 
            v-bind:style="{'background-image': `url(${portfolioData.mainImg})`}">
            </div>
            <div class='right_modal'>
                <img src="img/x_btn.png" class='x_btn'  @click="closeBtn">
                <h2 v-html="portfolioData.title"></h2>
                <h3 class='sub_tit' v-html="portfolioData.subTit"></h3>

                <h4>기술 스택</h4>

                <ul>
                    <li v-for='(stack,index) in stacks' :key="index">
                        <img v-bind:src="'img/'+stack+'.png'"/>
                    </li>
                </ul>

                <h4>홈페이지 간단 설명</h4>
                <p class='desc' v-html="portfolioData.desc"></p>
                <div class='btns'>
                    <a href="" class='port_btn btn' target="blank" v-if="portfolioData.port">상세설명(PDF)</a>
                    <a v-bind:href="portfolioData.git" class='git_btn btn' target="blank" v-if="portfolioData.git">깃허브</a>
                    <a v-bind:href="portfolioData.siteUrl" class='link_btn btn' target="blank">사이트 방문하기</a>
                </div>

            </div>
            <p class='btn close_btn' @click="closeBtn">닫기</p>
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
            portfolioData:"",
            stacks:""
        }
    },
    created(){
            EventBus.$on('DataModal',(Data)=>{
                this.portfolioData = Data;
                this.stacks = Data.stack
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
    @import "../../define.scss";
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
            width: 65%;
            height: 700px;
            box-sizing: border-box;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            @media (max-width: 1200px) {
                width: 95%;
                height: 95vh;
            }
            div.left_modal{
                width: 50%;
                height: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top;
                float: left;
                @media (max-width: 1200px) {
                    width: 100%;
                    height: 35%;
                    float:inherit;
                }
            }
            div.right_modal{
                width: 50%;
                height: 100%;
                float: right;
                 padding: 40px;
                box-sizing: border-box;
                @media (max-width: 1200px) {
                    width: 100%;
                    height: 65%;
                    float:inherit;
                    padding: 20px;
                }
                img.x_btn{
                    width: 40px;
                    float: right;
                    display: block;
                    cursor: pointer;
                    @media (max-width: 1200px) {
                        position: absolute;
                        width: 35px;
                        top: 1%;
                        right: 1%;
                    }

                }
                h2{
                    font-size: 1.25rem;
                    @media (max-width: 1200px) {
                        font-size: 1rem;
                    }

                }
                h3{
                    margin: 10px 0px;
                    font-weight: normal;
                    letter-spacing: -1px;
                    @media (max-width: 1200px) {
                        font-size: 0.75rem;
                        margin: 5px 0px;
                        letter-spacing: 0px;

                    }

                }
                h4{
                    margin: {
                        top: 40px;
                        bottom: 15px;
                    }
                    a{
                        color: #666;
                    }
                    @media (max-width: 1200px) {
                          margin: {
                            top: 10px;
                            bottom:15px;
                        }
                    }

                }
                p.desc{
                    width: 80%;
                    letter-spacing: -0.5px;
                    word-break: keep-all;
                    line-height: 1.5rem;
                    margin-bottom: 30px;
                    @media (max-width: 1200px) {
                        width: 100%;
                        font-size: 0.75rem;
                        line-height: 1.125rem;
                        margin-bottom: 0px;

                    }

                    a{
                        color: #222;
                    }
                }
               
                ul{
                    li{
                        display: inline-block;
                        margin: {
                            right: 15px;
                            bottom: 10px;
                        }
                        img{
                            vertical-align: middle;
                            width: 60px;
                          
                        }
                          @media (max-width: 1200px) {
                                 margin: {
                                    right: 5px;
                                    bottom: 10px;
                                }
                              img{
                                  width: 35px;
                              }
                            }
                    }
                }
            }
            .btns{
                   @media (max-width: 1200px) {
                       width: 100%;
                       text-align: center;
                       position: absolute;
                       bottom: 10px;
                       left: 50%;
                       transform: translateX(-50%);
                }
            }
            .btn{
                cursor: pointer;
                width: 120px;
                height: 50px;
                background:#5981a3;
                text-align: center;
                line-height: 50px;
                border-radius: 5px;
                display: inline-block;
                color: white;
                text-decoration: none;
                font-size: .875rem;
                font-weight: 100;
                margin: {
                    top:20px;
                    right: 10px;
                }
                &:hover{
                    background:lighten(#5981a3,5%);
                }
                @media (max-width: 1200px) {
                    width: 43%;
                    font-size: 0.75rem;
                    margin: 5px;
                }

            }
            .git_btn{
                background:#24292e;
                color: #fff;
                 &:hover{
                background:lighten(#24292e,5%);
                }
            }
            .port_btn{
                background: $MainColor;
                color: #222;
                 &:hover{
                background:lighten($MainColor,5%);
                }
            }
            .close_btn{
                width: 170px;
                position: absolute;
                left: 50%;
                bottom: 5%;
                transform: translateX(-50%);
                background: #e21f30;
                &:hover{
                    background:lighten(#e21f30,5%);
                }
                @media (max-width: 1200px) {
                    display: none;
                }



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