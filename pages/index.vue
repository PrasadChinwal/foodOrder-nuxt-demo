<template>
    <div>
        <specials :specials="specials"></specials>
        <beverages :beverages="beverages"></beverages>
    </div>
</template>

<script>
import specials from '../components/Specials.vue';
import beverages from '../components/Beverages.vue';
import { mapMutations } from 'vuex';

export default {
    components: { specials, beverages },
    data() {
        return {
        }
    },
    computed: {
        products() {
            return this.$store.state.products.products;
        },
        beverages() {
            return this.products.filter(item => item.tag === 'beverage');
        },
        specials() {
            return this.products.filter(item => item.tag === 'special');
        },
    },

}
</script>
