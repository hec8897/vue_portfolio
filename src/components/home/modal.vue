<template>
    <transition name="fade" v-if='!show'>
    <div class='modal' >
        <div class='modal_box'>
            <p @click="closeBtn">닫기</p>
            {{portfolioData.title}}

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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    div.modal{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #222, $alpha: .5);
        z-index: 999;
        top: 0;
        div.modal_box{
            width: 60%;
            height: 600px;
            padding: 50px;
            box-sizing: border-box;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    
</style>