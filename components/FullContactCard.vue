<template>
    <div>
        <h2>
            <p>

            </p>
            <p>

            </p>
        </h2>

    </div>
</template>

<script>
export default {  
    computed: {
        contact() {
            return this.$store.getters.getContactById(this.$route.params.id)
        }
    },
    mounted() {
        this.$store.dispatch()
    }    
}
</script>

<style>

</style>