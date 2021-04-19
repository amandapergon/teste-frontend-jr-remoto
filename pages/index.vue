<template>
  <div class="leads">
    <Logo />
    <!-- <Logo dark-background /> -->
    <SearchContacts @searchKey="updateResults" />
    <div>
      <ContactsCards />
    </div>
<!--     <div v-else>
      <SearchResults :searchResult="childInput" />
    </div>   -->  
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchContacts from '~/components/SearchContacts.vue'
import ContactsCards from '~/components/ContactsCards.vue'
/* import SearchResults from '~/components/SearchResults.vue' */

export default {
  components: {
    Logo,
    SearchContacts,
    ContactsCards,
/*     SearchResults */
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
