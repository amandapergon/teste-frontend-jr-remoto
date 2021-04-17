<template>
  <div class="container">
    <form @submit.prevent="submit">
      <h1 class="leads__title">Encontre futuros clientes:</h1>
      <br/>

      <input class="searchBox" placeholder="Digite um nome ou categoria de empresa" autofocus />
      <br/>

      <nuxt-link to="/results"><button class="searchButton">Buscar</button></nuxt-link>
    </form>
  </div>
</template>

/* this page sends the PAYLOAD to the store to get the filtered contacts.
maybe using getters?? 

Pressionar enter na caixa de busca tem quase a mesma função que o botão de busca. resolver isso
*/

<script>

export default {
  components: {
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      alert('Cheguei aqui!!')
    }
  }
}
</script>

<style lang="scss" scoped="true">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
}
.leads {
  &__title {
    text-align: center;
    margin: 1.4rem 0;
    padding: 1rem 0;
    font-family: 'Roboto', sans-serif;
    font-weight: inherit;
    color: $dark-blue;
    letter-spacing: 0.2rem;
}
}
.searchBox {
  text-align: center;;
  width: 40rem;
  min-width: 5rem;
  height: 3rem;
  border: $border-color 1px solid;
}
.searchButton {
  background-color: $dark-blue;
  border: $green 1px solid;
  border-radius: 0.3rem;
  margin-top: 1rem;
  margin-left: 15rem;
  padding: 0.8rem;
  width: 10rem;
  color: whitesmoke;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
}
</style>
