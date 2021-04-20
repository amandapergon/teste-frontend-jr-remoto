<template>
  <div class="leads">
    <Logo />
    <!-- <Logo dark-background /> -->
    <SearchContacts @inputData="updateResults" />
    <div>
      <SearchResults :searchResult="childInput" />
    </div>    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchContacts from '~/components/SearchContacts.vue'
import SearchResults from '~/components/SearchResults.vue' 

export default {
  components: {
    Logo,
    SearchContacts,
    SearchResults
  },
  data: function () {
    return {
      childInput: ''
    }
  },
  methods: {
    updateResults(variable) {
      this.childInput = variable;
    }
  }
}

</script>

<style lang="scss" scoped="true"></style>
