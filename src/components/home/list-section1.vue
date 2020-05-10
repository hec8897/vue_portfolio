<template>
    <div class='wrap main-list main-list1'>
        <h2>{{cate}}</h2>
        <carousel :per-page="5" tag='div'>
                <slide v-for="(list,index) in lists" :key="index">
                    <item v-bind:item='list' />
                </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import item from './slide-item';

export default {
    props:['cate','code'],
    data(){
        return{
            lists:[
                    {
                        idx:0,
                        title:'보험친구들'
                    },
                    {
                        idx:1,
                        title:'씨이오메이커'
                    },
                      {
                        idx:2,
                        title:'율디자인'
                    },
                       {
                        idx:3,
                        title:'금강 이엔씨'
                    },
                       {
                        idx:4,
                        title:'fx-one'
                    },
                       {
                        idx:5,
                        title:'투게더인스'
                    },
                       {
                        idx:6,
                        title:'율디자인'
                    }
                ]
            }
        },
      components: {
        Carousel,
        Slide,
        item
    }
}
</script>
<style lang="scss">
div.main-list{
    margin-top: 20px;
    h2{
        font-size: 1.25rem;
        margin: 20px 0px;
    }
    div.VueCarousel{
        
    }
}
    
</style>