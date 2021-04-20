<template>
  <div>
    <div class="all-cards">
      <div class="cards-container">
        <div v-for="contact in filteredArray" :key="contact.id" class="card">
          <div class="username">
            <h1>@{{ contact.username }}</h1>
          </div>
          <div class="info-container">
            <div class="profile-image">
              <img src="~/assets/avatar.jpg" :alt="contact.name" class="pic">
            </div>
            <div class="infos">
              <h2>{{ contact.name }}</h2>
              <a href="#" class="email">{{ contact.email }}</a>
              <p>{{ contact.phone }}</p>
              <h4 class="company-name">{{ contact.company.name }}</h4>
              <h4 class="company-category">({{ contact.company.bs }})</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="searching">
      </h1>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ContactsCards",
    props: {
  	filteredArray: {
      type: Array,
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
  font-size: 1.6rem;
  padding: 10px 0;
  color: $grey;
  text-align: center;
  letter-spacing: 0.2rem;
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
  font-weight: bolder;
  letter-spacing: 0.05rem;
}
.infos a {
  display: block;
  font-size: 1.2rem;
}
.infos p {
  font-size: 1.2rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;
}
.company-name {
  color: $light-blue;
  font-size: 1.4rem;
  font-weight: bolder;
  letter-spacing: 0.2rem;
  margin-top: 0.4rem;
}
.company-category {
  font-size: 1.1rem;
  font-weight: lighter;
  letter-spacing: 0.2;
  margin-top: 0.4rem;
  color: $light-blue;
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
.searching {
  color: $dark-blue;
  font-size: 2.0rem;
  letter-spacing: 0.2rem;
}

</style>