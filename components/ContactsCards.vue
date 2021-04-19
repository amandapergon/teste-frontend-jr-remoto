<template>
  <div v-if="contacts.length > 0" class="all-cards">
    <div class="cards-container">
      <div v-for="contact in contacts" :key="contact.id" class="card">
        <div class="username">
          <h1>{{ contact.username }}</h1>
        </div>
        <div class="info-container">
          <div class="profile-image">
            <img src="~/assets/avatar.jpg" alt="Unknown User" class="pic">
          </div>
          <div class="infos">
            <h2>{{ contact.name }}</h2>
            <a href="#" class="email">{{ contact.email }}</a>
            <a href="#">{{ contact.phone }}</a>
            <h4 class="company-name">{{ contact.company.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="searching">
      Buscando contatos...
    </h1>
  </div>

</template>

<script>
  import {
    mapActions,
    mapState
  } from 'vuex';

  export default {
    name: 'FullContactCard',
    methods: {
      ...mapActions(['getContacts'])
    },
    mounted() {
      this.getContacts()
    },
    computed: {
      ...mapState([
          'contacts'
      ])
    }
  }
</script>

<style lang="scss" scoped="true">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.all-cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.card {
    width: 300px;
    margin: 50px 10px;
    border-radius: 20px;
    overflow: hidden;
}
.username {
  background-color: $dark-blue;
}
.username h1 {
  padding: 10px 0;
  color: $grey;
  text-align: center;
}
.info-container {
  display: flex;
  flex-direction: column;
}
.infos {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #ECF0F1;
}
.infos h2 {
  color:#180F50;
}
.infos a {
  display: block;
  font-size: 1.2rem;
}
.infos h4 {
  color: #0ebe9e;
  font-size: 1.4rem;
}
.profile-picture {
  width: 100%;
  border: 0;
}
.pic {
  width: 100%;
}
.email {
  padding: 10px 0;
}

</style>