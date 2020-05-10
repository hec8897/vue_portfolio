<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from './components/common/header'
export default {
  components:{
    Header
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
