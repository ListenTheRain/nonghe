<template>
  <div id="app">
    <Header></Header>
    <!--<div class="pull-right" id="top">-->
      <!--<button type="button" class="btn btn-default btn-lg" style="font-size: 40px;border-radius: 20px">-->
        <!--<span class="glyphicon glyphicon-arrow-up"></span>-->
      <!--</button>-->
    <!--</div>-->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footer: require('@/components/pages/footer').default,
    Header: require('@/components/pages/header').default
  }
}
// };
// $(function(){
//   $("#top").click(function() {
//     $("html,body").animate({scrollTop:0}, 500);
//   });
// })
</script>

<style>
#app {
  font-family: 'Microsoft YaHei';
}
  .top{
    /*width: 100px;*/
    /*height: 100px;*/
    /*border-radius: 50px;*/
    z-index: 999999;
    /*margin-top: 50vh;*/
    /*margin-bottom: 50vh;*/
    position: fixed;
    margin-left: 195vh;
    margin-top: 50vh;
  }
</style>
