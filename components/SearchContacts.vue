<template>
  <div class="big-container">
    <div class="search-container">
      <h1>Encontre futuros clientes:</h1>
      <div class="smaller-search-container">
        <input v-model="searchKey" placeholder="Digite um nome de cliente ou categoria de negócio" class="searchBox" />
      </div>
    </div>
    <div v-if="filteredArray !== null" class="cards-container">
      <ContactsCards v-bind:filteredArray="filteredArray"/>
    </div>
    <div v-else class="not-found">
      <h1>Contato não encontrado.</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

  export default {
    name: 'SearchContacts',
    data() {
      return {
        searchKey: ''
      }
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
    },
    mounted() {
      this.getContacts()
    },
    methods: {
      submit: function() {
        this.$emit('inputData', this.searchKey);
        this.searchKey = ''
      },
      ...mapActions(['getContacts'])
    }
  }
</script>

<style lang="scss" scoped="true">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.search-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: inherit;
  color: $dark-blue;
  letter-spacing: 0.2rem;
  box-sizing: border-box;
}
.smaller-search-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}
.searchBox {
  text-align: center;
  width: 100%;
  min-width: 30rem;
  height: 3rem;
  border: $dark-blue 1px solid;
  color: $blue;
}
input:focus {
  border: $green 3px solid;
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
