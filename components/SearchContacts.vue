<template>
  <div class="big-container">
    <div class="search-container">
      <h1>Encontre futuros clientes:</h1>
      <div class="smaller-search-container">
        <input placeholder="Digite um nome de cliente ou categoria de negócio" v-model="searchKey" class="searchBox" autofocus />
      </div>
    </div>
    <div v-if="filteredArray !== null" class="cards-container">
      <ContactsCards :filteredArray="filteredArray"/>
    </div>
    <div v-else class="not-found">
      <h1>Contato não encontrado.</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ContactsCards from '~/components/ContactsCards.vue'

  export default {
    name: 'SearchContacts',
    data() {
      return {
        searchKey: ''
      }
    },
    methods: {
      submit: function() {
        this.$emit('inputData', this.searchKey);
        this.searchKey = ''
      },
      ...mapActions(['getContacts'])
    },
    mounted() {
      this.getContacts()
    },
    computed: {
      ...mapState([
          'contacts'
      ]),
      filteredArray: function() {
      return this.contacts.filter(cur => {
        return cur.name.toLowerCase().match(this.searchKey.toLowerCase()) !== null || cur.company.bs.toLowerCase().match(this.searchKey.toLowerCase()) !== null;
      })
      }
    }
  }
</script>

<style lang="scss" scoped="true">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
}
.search-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: inherit;
  color: $dark-blue;
  letter-spacing: 0.2rem;
}
.smaller-search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
}
.searchBox {
  margin-top: 1rem;
  padding: 0.25rem;
  text-align: center;;
  width: 30rem;
  min-width: 5rem;
  height: 3rem;
  border: $border-color 1px solid;
}
.cards-container {
  margin-top: 2rem;
}
.not-found {
  color: $dark-blue;
  font-size: 2.0rem;
  letter-spacing: 0.2rem;
  text-align: center;
  margin-top: 12rem;
}
</style>
