<template>
  <div class="leads">
    <Logo />
    <!-- <Logo dark-background /> -->
    <SearchBox />
    <FilteredLeadsBox />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBox from '~/components/SearchBox.vue'
import FilteredLeadsBox from '~/components/FilteredLeadsBox.vue'

export default {
  components: {
    Logo,
    SearchBox,
    FilteredLeadsBox
  }
}
</script>

<style lang="scss" scoped="true"></style>
