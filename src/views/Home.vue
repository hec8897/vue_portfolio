<template>
  <div class="home">
    <mainSection1 />
    <mainlnb />
    <Modal />
    <transition name="fadeup">
      <mainlist cate='참여한 프로젝트' v-bind:dataList="AlllistData" v-if="show>0"/>
    </transition>

    <transition name="fadeup">
    <mainlist cate='퍼블리싱' v-bind:dataList="List2"  v-if="show>0"/>
    </transition>

    <transition name="fadeup">
    <mainlist cate='개발' v-bind:dataList="List3" v-if="show>0"/>
    </transition>

    <transition name="fadeup">
      <banner  v-if="show>3"/>
    </transition>



  </div>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/home/modal'
import mainSection1 from '@/components/home/header-section'
import mainlnb from '@/components/home/lnb'
import mainlist from '@/components/home/list-section1'
import banner from '@/components/home/banner'

export default {
  name: 'Home',
  components: {
    mainSection1,
    mainlnb,
    mainlist,
    banner,
    Modal
  },
  data(){
    return{
      AlllistData:"",
      List2:"",
      List3:"",
      show:0,
    }
  },
    beforeCreate() {
        axios.get('data/data.json')
        .then((result)=>{
          this.AlllistData = result.data;
          this.List2 = this.AlllistData.filter(function(element){
          return element.pub == true;
          });

          this.List3 = this.AlllistData.filter(function(element){
          return element.dev == true;
          });

        })
    },
  

    mounted(){

       document.addEventListener('scroll', () => {
            this.bottomScroll()
        })
        this.show +=2
    },
    methods:{
      bottomScroll(){
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let bottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0)

            if (bottom <= 300) {
              this.show +=0.5;
            }
      }
    }

}
</script>

<style lang="scss">
    .fadeup-enter-active, .fadeup-leave-active {
        animation: upAni .6s ease-in-out;
    }
    @keyframes upAni {
      0%{
        transform: translateY(15px);
        opacity: 0;
      }
      100%{
        opacity: 1;
        transform: translateY(0px);
      }
    }
  
</style>