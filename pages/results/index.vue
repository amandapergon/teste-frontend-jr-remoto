 <template>
    <div>
        <Logo />
        <h1>This is the results page</h1>
        <p>Aqui aparecerão os cards dos contatos que passaram na filtragem</p>
        <FilteredContactsBox />
        <nuxt-link to="/"><aside>Nova busca</aside></nuxt-link>

    </div>
</template>

/* Pensar num componente que será renderizado caso a busca não retorne resultados */

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