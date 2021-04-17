<template>
  <div class="leads">
    <Logo />
    <!-- <Logo dark-background /> -->
    <SearchBox />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBox from '~/components/SearchBox.vue'

export default {
  components: {
    Logo,
    SearchBox
  }
}
</script>

<style lang="scss" scoped="true"></style>
