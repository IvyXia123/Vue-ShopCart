<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  html,body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
  }
  #app{
    width:100%;
    height:100%;
    box-sizing:border-box;
    overflow:hidden;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
