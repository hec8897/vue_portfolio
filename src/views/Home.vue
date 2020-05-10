<template>
  <div class="home">
    <mainSection1 />
    <mainlnb />
    <mainlist1 cate='참여한 프로젝트'/>
    <mainlist1 cate='퍼블리싱'/>
    <mainlist1 cate='vue.js'/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainSection1 from '@/components/home/header-section'
import mainlnb from '@/components/home/lnb'
import mainlist1 from '@/components/home/list-section1'
import axios from 'axios'



export default {
  name: 'Home',
  components: {
    mainSection1,
    mainlnb,
    mainlist1
  },
    created(){
        axios.get('data/data.json')
        .then((result)=>{
            console.log(result)
        })
    }

}
</script>
