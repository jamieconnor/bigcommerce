<template>
  <div class="about">
    <div class="about">This site was made by <a href="https://jamieconnor.com" target="_blank">Jamie Connor</a> using <a href="https://vuejs.org" target="_blank">VueJS</a>, unit tests done using <a href="https://www.cypress.io/" target="_blank">Cypress</a>.</div>
    <Tui></Tui>
  </div>

</template>
<script>
  import Tui from '../components/Tui';

  export default {
    name: 'About',
    components : {
      Tui
    }
  }
</script>
<style scoped>
  .about {
    text-align: center;
    font-size: 18px;
  }
</style>