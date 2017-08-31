<template>
     <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <navbar></navbar>
        <div class="coltalb-content mdl-layout__content">
            <a name="top"></a>
            <div class="page-content">

                <div class="mdl-grid">
                </div>

            </div>
            
        </div>
        <footere></footere>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Filterbar from '@/components/Filterbar.vue'
import Footere from '@/components/Footer.vue'
import Dogcard from '@/components/DogCardDogs.vue'
export default {
    name: 'caini',
    layout: 'caini',
    components: {
        Navbar, Footere, Filterbar, Dogcard
    },
    computed: {
        dogs() {
            return this.$store.getters.getDogs
        },
        lang() {
            return this.$store.getters.getLang
        },
    },
}
</script>