<template>
    <div>
        <Logo />
        <h1>I have more information about your client</h1>
        <nuxt-link to="/results"><aside>Voltar</aside></nuxt-link>
    </div>
</template>

<script>
    export default {
        computed: {
            contact() {
                return this.$store.getters.getContactById(this.$route.params.id)
            }
        }
    }
</script>

<style scoped>

</style>