<template>
<div class="card">
    <div class="container">
    <p>{{ contacts[2].name }}</p> 
  </div>
</div>
</template>

<script>
  import {
    mapActions,
    mapState
  } from "vuex";

  export default {
    name: 'FullContactCard',
    methods: {
      ...mapActions(["fetchContacts"])
    },
    computed: {
        ...mapState([
            'contacts'
        ])
    },
    created() {
      this.fetchContacts()
    }
  }
</script>



<style>
.container {
  padding: 2px 16px;
  border: 2px solid red;
}
</style>