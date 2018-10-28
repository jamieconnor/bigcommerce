<template>
  <div class="tui">

  </div>
</template>

<script>
export default {
  name: 'Tui',
  mounted() {
    const audio = new Audio();
    audio.src = 'tui.mp3';
    audio.play();
  }
}
</script>

<style scoped>

</style>
