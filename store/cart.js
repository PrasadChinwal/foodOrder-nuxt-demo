export const state = () => ({
    cartProducts: []
});

export const mutations = {
    pushProductToCart(state, product) {
        //Add product to Cart
        product.quantity = 1;
        state.cartProducts.push(product);
    },
    incrementItemQuantity(state, product) {
        product.quantity++;
    },
    decrementItemQuantity(state, product) {
        product.quantity--;
    },
    removeProductFromCart(state, product) {
        //Remove product from Cart
        const index = state.cartProducts.indexOf(product);
        state.cartProducts.splice(index, 1);
    },
    removeAllProductsFromCart(state) {
        state.cartProducts = [];
    },
};

export const actions = {
    addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
        const cartItem = state.cartProducts.find(item => item.id === product.id)
        if (!cartItem) {
            commit('pushProductToCart', product)
        } else {
            commit('incrementItemQuantity', cartItem)
        }
    },
}

export const getters = {
    cartTotal: (state, getters) => {
        console.log(state.cartProducts)
        return state.cartProducts.reduce((total, product) =>
            total + product.price * product.quantity, 0
        );
    },
}
