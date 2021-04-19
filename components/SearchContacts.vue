<template>
  <div class="big-container">
    <div class="search-container">
      <h1>Encontre futuros clientes:</h1>
      <div class="smaller-search-container">
        <input placeholder="Digite um nome de cliente ou categoria de negócio" v-model="searchKey" class="searchBox" autofocus />
        <button @click="submit" class="searchButton">Buscar</button>
      </div>
    </div>
    <div class="cards-container">
    </div>
  </div>
</template>

<script>
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
      }
    }
  }
</script>

<style lang="scss" scoped="true">
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
  width: 35rem;
  min-width: 5rem;
  height: 3rem;
  border: $border-color 1px solid;
}
.searchButton {
  background-color: $green;
  border: $dark-blue 1px solid;
  border-radius: 0.3rem;
  margin-top: 1rem;
  margin-left: 2rem;
  padding: 0.9rem;
  width: 10rem;
  color: $dark-blue;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
}
.cards-container {
  margin-top: 2rem;
}
</style>
