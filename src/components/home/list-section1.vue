<template>
    <div class='wrap main-list main-list1'>
        <h2>{{cate}}</h2>
        <carousel 
                :per-page-custom=[[960,5],[768,4],[480,3],[360,2]]
                paginationColor="#d0d0d0" 
                paginationActiveColor="#ffd400">
                <slide v-for="(list,index) in lists" :key="index" @slideclick="ItemClick(list)">
                    <item v-bind:item='list' />
                </slide>
        </carousel>
    </div>
</template>
<script>
import { EventBus } from '../../EventBus'
import { Carousel, Slide } from 'vue-carousel';
import item from './slide-item';

export default {
    props:['cate','dataList','show'],
    data(){
        return{
            lists:""
            }
        },
      components: {
        Carousel,
        Slide,
        item
    },
    mounted() {
        this.lists = ['0','0','0','0','0','0']
        setTimeout(() => {
            this.lists = this.dataList
        }, 100);
        
    },
    methods:{
             ItemClick(Data){
                EventBus.$emit('DataModal',Data)
            }
    }
}
</script>
<style lang="scss">

div.main-list{
    margin-top: 20px;
    h2{
        font-size: 1.25rem;
        margin: 20px 0px;
        @media (max-width: 767px) {
            font-size: 1.125rem;
            
        }
    }
 
}
    
</style>