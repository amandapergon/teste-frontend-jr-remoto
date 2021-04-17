<template>
  <div class="filteredleadsbox">
    <p></p>
  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>

<style lang="scss" scoped="true">
.filteredleadsbox {
  margin-top: 3rem;
  margin-left: 5rem;
  width: 100rem;
  min-width: 50rem;
  height: 30rem;
  border: solid 3px #180f50;
  color: $dark-blue;
}
</style>
