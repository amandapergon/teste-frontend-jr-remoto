<template>
  <div class="leads">
    <Logo />
    <!-- <Logo dark-background /> -->
    <SearchContacts />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchContacts from '~/components/SearchContacts.vue'

export default {
  components: {
    Logo,
    SearchContacts
  }
}
</script>

<style lang="scss" scoped="true"></style>
