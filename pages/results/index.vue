 <template>
    <div>
        <h1>This is the results page</h1>
        <p>Aqui aparecerão os cards dos contatos que passaram na filtragem</p>
        <FilteredLeadsBox />
    </div>
</template>

<script>

import { mapState } from 'vuex'

    export default {
    computed: {
        ...mapState([
            
            /*maybe here filter the contacts */
        ])
    }        
    }
</script>

<style scoped>

</style>