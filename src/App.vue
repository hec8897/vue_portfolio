<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Header from './components/common/header'
import Footer from './components/common/footer'

export default {
   
    components:{
      Header,
      Footer
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean');
@import './define.scss';
@include Reset;

html,body {
  @include FontDefine;
}

</style>
