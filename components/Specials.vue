<template>
    <div class="px-2">
        <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-md font-semibold text-green-700 mr-2">Today's Special</span>
        <div class="flex flex-wrap justify-start items-center -mx-4">
            <div v-for="special in specials" :key="special.id" class="w-full md:w-1/3 px-2">
                <v-card :loading="loading" class="mx-auto my-3">
                    <v-img height="100"
                    :src="special.image"
                    ></v-img>

                    <v-card-title>
                        {{ special.text }}
                        <v-spacer></v-spacer>
                        <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">$ {{ special.price }}</span>
                    </v-card-title>

                    <v-card-text>
                        <div>{{ special.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="green lighten-2" text @click="addItemToCart(special)">
                            Add to Cart
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <v-snackbar v-model="snackbar" :timeout="2000">
            {{ snacktext }}
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            loading: false,
            selection: 1,
            snackbar: false,
            snacktext: '',
        }
    },
    props: {
        specials: {
            type: Array,
            required: true
        }
    },
    methods: {
        addItemToCart(special) {
            setTimeout(() => {
                this.$store.dispatch('cart/addProductToCart', special)
            }, 200);
            this.snackbar = true;
            this.snacktext = 'Item Added to cart successfully!';
        }
    },
}
</script>

<style>

</style>