<template>
<div class="card">
    <p>{{ contacts }}</p> 
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

<style>
</style>