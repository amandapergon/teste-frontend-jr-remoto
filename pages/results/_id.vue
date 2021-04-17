<template>
    <div>
        <h1>I have more information about your client</h1>
        {{ contact }}
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