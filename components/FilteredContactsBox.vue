<template>
  <div class="filteredcontactsbox">
    <!-- <nuxt-link :to="`/results/${contact.id}`"></nuxt-link> -->
    <FullContactCard />
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped="true">
.filteredcontactsbox {
  margin-top: 3rem;
  margin-left: 5rem;
  width: 100rem;
  min-width: 50rem;
  height: 30rem;
  border: solid 3px #180f50;
  color: $dark-blue;
}
</style>
